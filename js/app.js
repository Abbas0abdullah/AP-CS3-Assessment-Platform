// Main Quiz Application Logic
import { ALL_QUESTIONS, LECTURES_META, TOTAL_QUESTIONS_COUNT } from './questions-data.js';
import { sound } from './sound.js';
import { launchLuxuryConfetti } from './confetti.js';

class QuizApp {
  constructor() {
    // State
    this.selectedLectures = new Set(LECTURES_META.map(l => l.id));
    this.questionCount = 20;
    this.randomizeQuestions = true;
    this.randomizeOptions = true;
    this.mode = 'exam'; // 'exam' or 'practice'
    this.timerEnabled = true;
    this.timePerQuestionSec = 60; // 60s per question by default
    this.timeRemaining = 0;
    this.timerInterval = null;

    // Active Quiz Session
    this.activeQuestions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { qId: selectedOptionKey }
    this.flagged = new Set();
    this.startTime = null;
    this.endTime = null;
    this.mistakesPool = [];

    // Question Bank State
    this.bankSearchQuery = "";
    this.bankSelectedLec = "all";

    // Bookmarks & History
    this.bookmarks = new Set(JSON.parse(localStorage.getItem('ap_bookmarks') || '[]'));
    this.history = JSON.parse(localStorage.getItem('ap_history') || '[]');

    this.init();
  }

  init() {
    this.bindGlobalEvents();
    this.renderLecturesSelector();
    this.updatePoolCount();
    this.updateStatsBar();
    this.bindSetupControls();
    this.bindKeyboardShortcuts();
  }

  // --- UI SWITCHING ---
  switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // --- STATS BAR ---
  updateStatsBar() {
    const totalQEl = document.getElementById('stat-total-q');
    if (totalQEl) totalQEl.textContent = TOTAL_QUESTIONS_COUNT;

    const testsCountEl = document.getElementById('stat-completed-tests');
    if (testsCountEl) testsCountEl.textContent = this.history.length;

    const bestScoreEl = document.getElementById('stat-best-score');
    if (bestScoreEl) {
      if (this.history.length === 0) {
        bestScoreEl.textContent = "—";
      } else {
        const maxScore = Math.max(...this.history.map(h => h.percentage));
        bestScoreEl.textContent = `${maxScore.toFixed(0)}%`;
      }
    }
  }

  // --- SETUP CONTROLS ---
  renderLecturesSelector() {
    const grid = document.getElementById('lectures-grid');
    if (!grid) return;
    grid.innerHTML = '';

    LECTURES_META.forEach(lec => {
      const isSelected = this.selectedLectures.has(lec.id);
      const card = document.createElement('div');
      card.className = `lecture-card ${isSelected ? 'selected' : ''}`;
      card.dataset.lecId = lec.id;
      card.innerHTML = `
        <div>
          <div class="lecture-top">
            <span class="lecture-code" style="color:${lec.badgeColor}">${lec.code}</span>
            <div class="lecture-check">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <div class="lecture-title">${lec.titleAr}</div>
          <div class="lecture-desc">${lec.description}</div>
        </div>
        <div>
          <div class="lecture-tags">
            ${lec.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
          </div>
          <div style="margin-top: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size:0.75rem; color:var(--text-muted)">بنك الأسئلة</span>
            <span class="lecture-count">${lec.count} سؤال</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        sound.playClick();
        if (this.selectedLectures.has(lec.id)) {
          if (this.selectedLectures.size > 1) {
            this.selectedLectures.delete(lec.id);
            card.classList.remove('selected');
          }
        } else {
          this.selectedLectures.add(lec.id);
          card.classList.add('selected');
        }
        this.updatePoolCount();
      });

      grid.appendChild(card);
    });
  }

  updatePoolCount() {
    const available = ALL_QUESTIONS.filter(q => this.selectedLectures.has(q.lectureId));
    const poolSize = available.length;

    const availableCountEl = document.getElementById('pool-available-count');
    if (availableCountEl) availableCountEl.textContent = poolSize;

    const slider = document.getElementById('question-slider');
    const sliderBadge = document.getElementById('slider-val');

    if (slider) {
      slider.max = poolSize;
      if (this.questionCount > poolSize) {
        this.questionCount = poolSize;
      }
      slider.value = this.questionCount;
    }

    if (sliderBadge) {
      sliderBadge.textContent = this.questionCount;
    }

    // Update preset chips active states
    document.querySelectorAll('.count-chip').forEach(chip => {
      const val = chip.dataset.count;
      if (val === 'all' && this.questionCount === poolSize) {
        chip.classList.add('active');
      } else if (parseInt(val) === this.questionCount) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    const summaryCountEl = document.getElementById('summary-q-count');
    if (summaryCountEl) summaryCountEl.textContent = this.questionCount;
  }

  bindSetupControls() {
    // Quick select all / clear
    const selectAllBtn = document.getElementById('btn-select-all-lec');
    if (selectAllBtn) {
      selectAllBtn.addEventListener('click', () => {
        sound.playClick();
        LECTURES_META.forEach(l => this.selectedLectures.add(l.id));
        document.querySelectorAll('.lecture-card').forEach(c => c.classList.add('selected'));
        this.updatePoolCount();
      });
    }

    const selectSingleBtn = document.getElementById('btn-select-only-latest');
    if (selectSingleBtn) {
      selectSingleBtn.addEventListener('click', () => {
        sound.playClick();
        this.selectedLectures.clear();
        this.selectedLectures.add(5);
        document.querySelectorAll('.lecture-card').forEach(c => {
          c.classList.toggle('selected', c.dataset.lecId === "5");
        });
        this.updatePoolCount();
      });
    }

    // Count Preset Chips
    document.querySelectorAll('.count-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        sound.playClick();
        const val = chip.dataset.count;
        const available = ALL_QUESTIONS.filter(q => this.selectedLectures.has(q.lectureId)).length;
        if (val === 'all') {
          this.questionCount = available;
        } else {
          this.questionCount = Math.min(parseInt(val, 10), available);
        }
        this.updatePoolCount();
      });
    });

    // Slider
    const slider = document.getElementById('question-slider');
    if (slider) {
      slider.addEventListener('input', (e) => {
        this.questionCount = parseInt(e.target.value, 10);
        const sliderBadge = document.getElementById('slider-val');
        if (sliderBadge) sliderBadge.textContent = this.questionCount;
        const summaryCountEl = document.getElementById('summary-q-count');
        if (summaryCountEl) summaryCountEl.textContent = this.questionCount;

        // remove chip active highlights
        document.querySelectorAll('.count-chip').forEach(c => c.classList.remove('active'));
      });
    }

    // Mode Selector
    document.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        sound.playClick();
        document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.mode = card.dataset.mode;
      });
    });

    // Toggles
    const randQToggle = document.getElementById('toggle-rand-q');
    if (randQToggle) {
      randQToggle.addEventListener('change', (e) => {
        this.randomizeQuestions = e.target.checked;
        sound.playClick();
      });
    }

    const randOptToggle = document.getElementById('toggle-rand-opt');
    if (randOptToggle) {
      randOptToggle.addEventListener('change', (e) => {
        this.randomizeOptions = e.target.checked;
        sound.playClick();
      });
    }

    const timerToggle = document.getElementById('toggle-timer');
    if (timerToggle) {
      timerToggle.addEventListener('change', (e) => {
        this.timerEnabled = e.target.checked;
        sound.playClick();
      });
    }

    // Launch Quiz Button
    const startBtn = document.getElementById('btn-start-quiz');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        this.startQuiz();
      });
    }
  }

  // --- QUIZ EXECUTION ---
  startQuiz(customQuestions = null) {
    sound.playClick();

    if (customQuestions) {
      this.activeQuestions = customQuestions;
    } else {
      // 1. Filter by selected lectures
      let pool = ALL_QUESTIONS.filter(q => this.selectedLectures.has(q.lectureId));
      if (pool.length === 0) pool = [...ALL_QUESTIONS];

      // 2. Randomize questions if enabled
      if (this.randomizeQuestions) {
        pool = this.shuffleArray([...pool]);
      }

      // 3. Slice to desired count
      const count = Math.min(this.questionCount, pool.length);
      this.activeQuestions = pool.slice(0, count);
    }

    // 4. Prepare each question with optionally randomized options
    this.activeQuestions = this.activeQuestions.map((q, idx) => {
      let optionKeys = ['A', 'B', 'C', 'D'];
      let optionsMap = { ...q.options };
      let correctOptionKey = q.answer;

      if (this.randomizeOptions) {
        const optionPairs = optionKeys.map(k => ({ key: k, text: optionsMap[k] }));
        const shuffledPairs = this.shuffleArray(optionPairs);

        const newOptions = {};
        let newCorrectKey = 'A';
        const letters = ['A', 'B', 'C', 'D'];

        shuffledPairs.forEach((pair, i) => {
          const letter = letters[i];
          newOptions[letter] = pair.text;
          if (pair.key === correctOptionKey) {
            newCorrectKey = letter;
          }
        });

        return {
          ...q,
          index: idx,
          displayOptions: newOptions,
          displayAnswer: newCorrectKey
        };
      } else {
        return {
          ...q,
          index: idx,
          displayOptions: optionsMap,
          displayAnswer: correctOptionKey
        };
      }
    });

    // Reset Session State
    this.currentIndex = 0;
    this.userAnswers = {};
    this.flagged.clear();
    this.startTime = Date.now();
    this.endTime = null;

    // Setup Timer
    this.setupTimer();

    // Render Quiz UI
    this.renderPalette();
    this.renderCurrentQuestion();
    this.switchView('quiz-view');
  }

  setupTimer() {
    clearInterval(this.timerInterval);
    const timerBox = document.getElementById('quiz-timer');
    if (!this.timerEnabled) {
      if (timerBox) timerBox.style.display = 'none';
      return;
    }

    if (timerBox) timerBox.style.display = 'flex';
    // 60 seconds per question or minimum 120s
    this.timeRemaining = Math.max(120, this.activeQuestions.length * this.timePerQuestionSec);
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      this.updateTimerDisplay();

      if (this.timeRemaining <= 0) {
        clearInterval(this.timerInterval);
        sound.playWrong();
        alert('انتهى وقت الاختبار المحدد! سيتم تسليم إجاباتك الآن تلقائياً.');
        this.submitQuiz();
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timerText = document.getElementById('timer-text');
    const timerBox = document.getElementById('quiz-timer');
    if (!timerText) return;

    const mins = Math.floor(this.timeRemaining / 60);
    const secs = this.timeRemaining % 60;
    timerText.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (timerBox) {
      if (this.timeRemaining < 60) {
        timerBox.classList.add('warning');
      } else {
        timerBox.classList.remove('warning');
      }
    }
  }

  renderCurrentQuestion() {
    const q = this.activeQuestions[this.currentIndex];
    if (!q) return;

    // Progress Bar & Counter
    const counterEl = document.getElementById('quiz-q-counter');
    if (counterEl) {
      counterEl.textContent = `سؤال ${this.currentIndex + 1} من ${this.activeQuestions.length}`;
    }

    const progressPercent = ((this.currentIndex + 1) / this.activeQuestions.length) * 100;
    const progressFill = document.getElementById('quiz-progress-fill');
    if (progressFill) progressFill.style.width = `${progressPercent}%`;

    // Metadata Badges
    const lecBadge = document.getElementById('q-lec-badge');
    if (lecBadge) {
      const lecMeta = LECTURES_META.find(l => l.id === q.lectureId);
      lecBadge.textContent = lecMeta ? lecMeta.code : `Lec ${q.lectureId}`;
    }

    const topicBadge = document.getElementById('q-topic-badge');
    if (topicBadge) topicBadge.textContent = q.topic;

    // Flag Button
    const flagBtn = document.getElementById('btn-flag-q');
    if (flagBtn) {
      flagBtn.classList.toggle('flagged', this.flagged.has(q.id));
    }

    // Question Text
    const qTextEl = document.getElementById('q-text');
    if (qTextEl) {
      qTextEl.textContent = `Q${this.currentIndex + 1}. ${q.question}`;
    }

    // Render Options
    const optionsContainer = document.getElementById('q-options-container');
    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    const selectedAnswer = this.userAnswers[q.id];
    const isAnswered = selectedAnswer !== undefined;

    ['A', 'B', 'C', 'D'].forEach(key => {
      const optText = q.displayOptions[key];
      if (!optText) return;

      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.key = key;

      // Practice Mode Feedback
      if (this.mode === 'practice' && isAnswered) {
        btn.classList.add('disabled');
        if (key === q.displayAnswer) {
          btn.classList.add('correct');
        } else if (key === selectedAnswer) {
          btn.classList.add('wrong');
        }
      } else {
        if (selectedAnswer === key) {
          btn.classList.add('selected');
        }
      }

      btn.innerHTML = `
        <span class="option-key">${key}</span>
        <span class="option-text">${optText}</span>
      `;

      btn.addEventListener('click', () => {
        if (this.mode === 'practice' && isAnswered) return;
        this.selectOption(key);
      });

      optionsContainer.appendChild(btn);
    });

    // Practice Mode Explanation Card
    const explanationContainer = document.getElementById('q-explanation-container');
    if (explanationContainer) {
      if (this.mode === 'practice' && isAnswered) {
        const isCorrect = selectedAnswer === q.displayAnswer;
        explanationContainer.style.display = 'block';
        explanationContainer.innerHTML = `
          <div class="explanation-box">
            <span class="explanation-icon">${isCorrect ? '✅' : '💡'}</span>
            <div class="explanation-body">
              <h5>${isCorrect ? 'إجابة صحيحة وممتازة!' : `الإجابة الصحيحة هي: (${q.displayAnswer})`}</h5>
              <p>${q.explanation}</p>
            </div>
          </div>
        `;
      } else {
        explanationContainer.style.display = 'none';
        explanationContainer.innerHTML = '';
      }
    }

    // Update Navigation Buttons
    const prevBtn = document.getElementById('btn-prev-q');
    if (prevBtn) {
      prevBtn.disabled = this.currentIndex === 0;
    }

    const nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) {
      if (this.currentIndex === this.activeQuestions.length - 1) {
        nextBtn.innerHTML = `
          <span>تسليم الاختبار</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        nextBtn.className = 'btn btn-primary';
      } else {
        nextBtn.innerHTML = `
          <span>التالي</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        `;
        nextBtn.className = 'btn btn-secondary';
      }
    }

    this.updatePaletteActive();
  }

  selectOption(optKey) {
    const q = this.activeQuestions[this.currentIndex];
    this.userAnswers[q.id] = optKey;

    if (this.mode === 'practice') {
      const isCorrect = optKey === q.displayAnswer;
      if (isCorrect) {
        sound.playCorrect();
      } else {
        sound.playWrong();
      }
    } else {
      sound.playClick();
    }

    this.renderCurrentQuestion();
    this.updatePaletteActive();
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      sound.playClick();
      this.currentIndex--;
      this.renderCurrentQuestion();
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.activeQuestions.length - 1) {
      sound.playClick();
      this.currentIndex++;
      this.renderCurrentQuestion();
    } else {
      // Last question - check if ready to submit
      this.promptSubmit();
    }
  }

  toggleFlagCurrent() {
    sound.playClick();
    const q = this.activeQuestions[this.currentIndex];
    if (this.flagged.has(q.id)) {
      this.flagged.delete(q.id);
    } else {
      this.flagged.add(q.id);
    }
    const flagBtn = document.getElementById('btn-flag-q');
    if (flagBtn) {
      flagBtn.classList.toggle('flagged', this.flagged.has(q.id));
    }
    this.updatePaletteActive();
  }

  // --- PALETTE DRAWER ---
  renderPalette() {
    const grid = document.getElementById('palette-grid');
    if (!grid) return;
    grid.innerHTML = '';

    this.activeQuestions.forEach((q, i) => {
      const chip = document.createElement('button');
      chip.className = 'palette-chip';
      chip.id = `palette-chip-${i}`;
      chip.textContent = i + 1;

      chip.addEventListener('click', () => {
        sound.playClick();
        this.currentIndex = i;
        this.renderCurrentQuestion();
        this.closePalette();
      });

      grid.appendChild(chip);
    });

    this.updatePaletteActive();
  }

  updatePaletteActive() {
    this.activeQuestions.forEach((q, i) => {
      const chip = document.getElementById(`palette-chip-${i}`);
      if (!chip) return;

      chip.className = 'palette-chip';
      if (i === this.currentIndex) chip.classList.add('current');
      if (this.userAnswers[q.id] !== undefined) chip.classList.add('answered');
      if (this.flagged.has(q.id)) chip.classList.add('flagged');
    });
  }

  openPalette() {
    sound.playClick();
    const drawer = document.getElementById('palette-drawer');
    const backdrop = document.getElementById('palette-backdrop');
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
  }

  closePalette() {
    const drawer = document.getElementById('palette-drawer');
    const backdrop = document.getElementById('palette-backdrop');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
  }

  // --- SUBMISSION & RESULTS ---
  promptSubmit() {
    sound.playClick();
    const answeredCount = Object.keys(this.userAnswers).length;
    const totalCount = this.activeQuestions.length;
    const unanswered = totalCount - answeredCount;

    if (unanswered > 0) {
      const modal = document.getElementById('confirm-modal');
      const text = document.getElementById('modal-unanswered-text');
      if (text) {
        text.textContent = `لديك ${unanswered} سؤالاً لم تقم بالإجابة عليها بعد. هل ترغب بالتسليم الآن؟`;
      }
      if (modal) modal.classList.add('open');
    } else {
      this.submitQuiz();
    }
  }

  closeConfirmModal() {
    const modal = document.getElementById('confirm-modal');
    if (modal) modal.classList.remove('open');
  }

  submitQuiz() {
    clearInterval(this.timerInterval);
    this.closeConfirmModal();
    this.endTime = Date.now();

    const durationSec = Math.round((this.endTime - this.startTime) / 1000);
    const totalQuestions = this.activeQuestions.length;

    let correctCount = 0;
    let wrongCount = 0;
    let unansweredCount = 0;
    this.mistakesPool = [];

    // Analyze per lecture
    const lectureStats = {};
    LECTURES_META.forEach(l => {
      lectureStats[l.id] = { total: 0, correct: 0 };
    });

    this.activeQuestions.forEach(q => {
      const userAns = this.userAnswers[q.id];
      const isCorrect = userAns === q.displayAnswer;
      lectureStats[q.lectureId].total++;

      if (userAns === undefined) {
        unansweredCount++;
        this.mistakesPool.push(q);
      } else if (isCorrect) {
        correctCount++;
        lectureStats[q.lectureId].correct++;
      } else {
        wrongCount++;
        this.mistakesPool.push(q);
      }
    });

    const percentage = Number(((correctCount / totalQuestions) * 100).toFixed(1));

    // Save History
    const resultRecord = {
      date: new Date().toISOString(),
      score: correctCount,
      total: totalQuestions,
      percentage: percentage,
      duration: durationSec,
      mode: this.mode
    };
    this.history.unshift(resultRecord);
    localStorage.setItem('ap_history', JSON.stringify(this.history.slice(0, 30)));
    this.updateStatsBar();

    // Sound and celebration
    sound.playComplete();
    if (percentage >= 80) {
      launchLuxuryConfetti();
    }

    // Render Results View
    this.renderResults({
      total: totalQuestions,
      correct: correctCount,
      wrong: wrongCount,
      unanswered: unansweredCount,
      percentage: percentage,
      duration: durationSec,
      lectureStats: lectureStats
    });

    this.switchView('results-view');
  }

  renderResults(stats) {
    // 1. Percentage counter & circle gauge
    const percentEl = document.getElementById('res-percent');
    if (percentEl) {
      this.animateNumber(percentEl, 0, stats.percentage, 1400, '%');
    }

    // SVG Gauge: circumference = 2 * PI * r = 2 * PI * 85 = 534.07
    const circle = document.getElementById('res-gauge-fill');
    if (circle) {
      const circumference = 534.07;
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;
      const offset = circumference - (stats.percentage / 100) * circumference;
      setTimeout(() => {
        circle.style.strokeDashoffset = `${offset}`;
      }, 100);
    }

    // 2. Score Badge & Motivational Title
    const badgeEl = document.getElementById('res-tier-badge');
    const titleEl = document.getElementById('res-title');
    const subtitleEl = document.getElementById('res-subtitle');

    let tierBadge = { text: "عبقري الكود والأنماط 🏆", class: "gold" };
    let msgTitle = "أداء استثنائي ومستوى باهر!";
    let msgSubtitle = "أظهرت استيعاباً كاملاً لمفاهيم البرمجة المتقدمة وأنماط التصميم والمعمارية النظيفة.";

    if (stats.percentage >= 90) {
      tierBadge = { text: "درجة الامتياز الفائق 🏆", class: "gold" };
      msgTitle = "أداء استثنائي ومستوى باهر!";
      msgSubtitle = "أظهرت استيعاباً متقناً لمفاهيم البرمجة المتقدمة ومبادئ SOLID وأنماط التصميم والمعمارية النظيفة.";
    } else if (stats.percentage >= 80) {
      tierBadge = { text: "مستوى متقدم ومتميز ⭐", class: "emerald" };
      msgTitle = "ممتاز جداً! نتيجة مشرّفة";
      msgSubtitle = "لديك أساس هندسي صلب في الأنماط والمعماريات، ويمكنك مراجعة بعض التفاصيل الطفيفة للوصول للعلامة الكاملة.";
    } else if (stats.percentage >= 65) {
      tierBadge = { text: "مستوى جيد جداً 👍", class: "blue" };
      msgTitle = "عمل جيد ومحاولة موفقة!";
      msgSubtitle = "استيعاب جيد للمفاهيم الأساسية، ننصح بمراجعة الأخطاء وتثبيت الفروقات بين الأنماط المعمارية.";
    } else {
      tierBadge = { text: "بحاجة لتعزيز ومراجعة 📚", class: "rose" };
      msgTitle = "فرصة رائعة للتعلم والتحسين!";
      msgSubtitle = "لا تقلق! يمكنك الضغط على 'إعادة محاولة الأخطاء' أدناه للتركيز على الأسئلة التي واجهت فيها صعوبة وحفظها.";
    }

    if (badgeEl) {
      badgeEl.className = `result-tier-badge ${tierBadge.class}`;
      badgeEl.textContent = tierBadge.text;
    }
    if (titleEl) titleEl.textContent = msgTitle;
    if (subtitleEl) subtitleEl.textContent = msgSubtitle;

    // 3. Quick metrics boxes
    const correctEl = document.getElementById('res-correct-count');
    if (correctEl) correctEl.textContent = `${stats.correct} / ${stats.total}`;

    const wrongEl = document.getElementById('res-wrong-count');
    if (wrongEl) wrongEl.textContent = stats.wrong;

    const unansEl = document.getElementById('res-unanswered-count');
    if (unansEl) unansEl.textContent = stats.unanswered;

    const timeEl = document.getElementById('res-time-spent');
    if (timeEl) {
      const mins = Math.floor(stats.duration / 60);
      const secs = stats.duration % 60;
      timeEl.textContent = `${mins}د ${secs}ث`;
    }

    // 4. Mistakes button visibility
    const retryMistakesBtn = document.getElementById('btn-retry-mistakes');
    if (retryMistakesBtn) {
      retryMistakesBtn.style.display = this.mistakesPool.length > 0 ? 'inline-flex' : 'none';
      const countBadge = document.getElementById('mistakes-count-badge');
      if (countBadge) countBadge.textContent = this.mistakesPool.length;
    }

    // 5. Lecture breakdown
    this.renderLectureBreakdown(stats.lectureStats);

    // 6. Review list
    this.renderReviewList('all');
  }

  renderLectureBreakdown(lectureStats) {
    const list = document.getElementById('res-breakdown-list');
    if (!list) return;
    list.innerHTML = '';

    LECTURES_META.forEach(lec => {
      const st = lectureStats[lec.id];
      if (!st || st.total === 0) return;

      const pct = Math.round((st.correct / st.total) * 100);
      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = `
        <div class="breakdown-info">
          <span>${lec.code}: ${lec.titleAr}</span>
          <span style="font-family: var(--font-latin);">${st.correct}/${st.total} (${pct}%)</span>
        </div>
        <div class="breakdown-bar-track">
          <div class="breakdown-bar-fill" style="width: ${pct}%; background: ${lec.badgeColor};"></div>
        </div>
      `;
      list.appendChild(row);
    });
  }

  renderReviewList(filterType = 'all') {
    const container = document.getElementById('res-review-container');
    if (!container) return;
    container.innerHTML = '';

    // Filter pills active update
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.filter === filterType);
    });

    let list = this.activeQuestions.map(q => {
      const userAns = this.userAnswers[q.id];
      const isCorrect = userAns === q.displayAnswer;
      const isUnanswered = userAns === undefined;
      return { q, userAns, isCorrect, isUnanswered };
    });

    if (filterType === 'wrong') {
      list = list.filter(item => !item.isCorrect);
    } else if (filterType === 'correct') {
      list = list.filter(item => item.isCorrect);
    } else if (filterType === 'flagged') {
      list = list.filter(item => this.flagged.has(item.q.id));
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
          لا توجد أسئلة تطابق هذا الفلتر.
        </div>
      `;
      return;
    }

    list.forEach(item => {
      const { q, userAns, isCorrect, isUnanswered } = item;
      const card = document.createElement('div');
      card.className = `review-card ${isUnanswered ? 'unanswered' : isCorrect ? 'correct' : 'wrong'}`;

      let badgeHtml = '';
      if (isUnanswered) {
        badgeHtml = `<span class="review-status-badge unanswered">لم تتم الإجابة</span>`;
      } else if (isCorrect) {
        badgeHtml = `<span class="review-status-badge correct">إجابة صحيحة ✓</span>`;
      } else {
        badgeHtml = `<span class="review-status-badge wrong">إجابة خاطئة ✗</span>`;
      }

      card.innerHTML = `
        <div class="review-top">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="meta-badge lec">${q.lectureTitle}</span>
            <span class="meta-badge">${q.topic}</span>
          </div>
          ${badgeHtml}
        </div>
        <div class="review-qtext">Q${q.index + 1}. ${q.question}</div>
        <div class="review-options">
          ${['A', 'B', 'C', 'D'].map(key => {
            const optVal = q.displayOptions[key];
            if (!optVal) return '';

            let cls = '';
            let mark = '';
            if (key === q.displayAnswer) {
              cls = 'correct-ans';
              mark = ' ✓ (الإجابة النموذجية)';
            }
            if (key === userAns && !isCorrect) {
              cls = 'user-wrong';
              mark = ' ✗ (إجابتك)';
            }

            return `
              <div class="review-opt ${cls}">
                <strong>${key})</strong> ${optVal} ${mark}
              </div>
            `;
          }).join('')}
        </div>
        <div class="explanation-box" style="margin-top:0.8rem;">
          <span class="explanation-icon">💡</span>
          <div class="explanation-body">
            <h5>التفسير العلمي:</h5>
            <p>${q.explanation}</p>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  retryMistakes() {
    if (this.mistakesPool.length === 0) return;
    sound.playClick();
    this.startQuiz(this.mistakesPool);
  }

  // --- QUESTION BANK EXPLORER ---
  initQuestionBank() {
    this.renderBankFilters();
    this.filterQuestionBank();
    this.switchView('bank-view');
  }

  renderBankFilters() {
    const container = document.getElementById('bank-lec-filters');
    if (!container) return;
    container.innerHTML = `
      <button class="filter-pill ${this.bankSelectedLec === 'all' ? 'active' : ''}" data-lec="all">الكل (${TOTAL_QUESTIONS_COUNT})</button>
      ${LECTURES_META.map(l => `
        <button class="filter-pill ${this.bankSelectedLec === String(l.id) ? 'active' : ''}" data-lec="${l.id}">${l.code} (${l.count})</button>
      `).join('')}
    `;

    container.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        this.bankSelectedLec = btn.dataset.lec;
        container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        this.filterQuestionBank();
      });
    });

    const searchInput = document.getElementById('bank-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.bankSearchQuery = e.target.value.trim().toLowerCase();
        this.filterQuestionBank();
      });
    }
  }

  filterQuestionBank() {
    const container = document.getElementById('bank-cards-container');
    const countEl = document.getElementById('bank-results-counter');
    if (!container) return;

    let filtered = ALL_QUESTIONS;

    if (this.bankSelectedLec !== 'all') {
      const lecId = parseInt(this.bankSelectedLec, 10);
      filtered = filtered.filter(q => q.lectureId === lecId);
    }

    if (this.bankSearchQuery) {
      const q = this.bankSearchQuery;
      filtered = filtered.filter(item => {
        return item.question.toLowerCase().includes(q) ||
               item.topic.toLowerCase().includes(q) ||
               item.explanation.toLowerCase().includes(q) ||
               Object.values(item.options).some(o => o.toLowerCase().includes(q));
      });
    }

    if (countEl) {
      countEl.textContent = `عرض ${filtered.length} سؤال من أصل ${TOTAL_QUESTIONS_COUNT}`;
    }

    container.innerHTML = '';

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding: 3rem; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg);">
          لا توجد نتائج مطابقة لبحثك. جرب كلمة بحث أخرى مثل (SOLID, Singleton, EF Core, Proxy).
        </div>
      `;
      return;
    }

    // Render in chunks of 50 to avoid DOM lag
    const displayList = filtered.slice(0, 100);

    displayList.forEach(q => {
      const card = document.createElement('div');
      card.className = 'review-card correct';
      card.style.marginBottom = '1.25rem';
      card.innerHTML = `
        <div class="review-top">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="meta-badge lec">Lec ${q.lectureId}</span>
            <span class="meta-badge">${q.topic}</span>
          </div>
          <span class="review-status-badge correct">الإجابة: (${q.answer})</span>
        </div>
        <div class="review-qtext">Q${q.qNum}. ${q.question}</div>
        <div class="review-options">
          ${['A', 'B', 'C', 'D'].map(k => `
            <div class="review-opt ${k === q.answer ? 'correct-ans' : ''}">
              <strong>${k})</strong> ${q.options[k]} ${k === q.answer ? ' ✓' : ''}
            </div>
          `).join('')}
        </div>
        <div class="explanation-box" style="margin-top:0.75rem;">
          <span class="explanation-icon">💡</span>
          <div class="explanation-body">
            <h5>التوضيح:</h5>
            <p>${q.explanation}</p>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    if (filtered.length > 100) {
      const moreNote = document.createElement('div');
      moreNote.style.textAlign = 'center';
      moreNote.style.color = 'var(--text-muted)';
      moreNote.style.padding = '1rem';
      moreNote.textContent = `... بالإضافة إلى ${filtered.length - 100} أسئلة أخرى تطابق البحث (حدد البحث لرؤيتها بالكامل).`;
      container.appendChild(moreNote);
    }
  }

  // --- GLOBAL EVENTS & KEYBOARD ---
  bindGlobalEvents() {
    // Sound Toggle
    const soundBtn = document.getElementById('btn-toggle-sound');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const enabled = sound.toggle();
        soundBtn.innerHTML = enabled
          ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`
          : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        sound.playClick();
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('ap_theme', nextTheme);
        themeBtn.innerHTML = nextTheme === 'light'
          ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
          : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      });
    }

    // Navigation brand click -> return setup
    document.querySelectorAll('.btn-home').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        clearInterval(this.timerInterval);
        this.switchView('setup-view');
      });
    });

    // Question Bank Nav Link
    const navBankBtn = document.getElementById('nav-btn-bank');
    if (navBankBtn) {
      navBankBtn.addEventListener('click', () => {
        sound.playClick();
        this.initQuestionBank();
      });
    }

    // Quiz Controls
    const prevBtn = document.getElementById('btn-prev-q');
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevQuestion());

    const nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());

    const flagBtn = document.getElementById('btn-flag-q');
    if (flagBtn) flagBtn.addEventListener('click', () => this.toggleFlagCurrent());

    const paletteBtn = document.getElementById('btn-open-palette');
    if (paletteBtn) paletteBtn.addEventListener('click', () => this.openPalette());

    const closePaletteBtn = document.getElementById('btn-close-palette');
    if (closePaletteBtn) closePaletteBtn.addEventListener('click', () => this.closePalette());

    const backdrop = document.getElementById('palette-backdrop');
    if (backdrop) backdrop.addEventListener('click', () => this.closePalette());

    const submitDirectBtn = document.getElementById('btn-submit-direct');
    if (submitDirectBtn) submitDirectBtn.addEventListener('click', () => this.promptSubmit());

    // Modal Confirmation Actions
    const modalCancel = document.getElementById('btn-modal-cancel');
    if (modalCancel) modalCancel.addEventListener('click', () => this.closeConfirmModal());

    const modalConfirm = document.getElementById('btn-modal-confirm');
    if (modalConfirm) modalConfirm.addEventListener('click', () => this.submitQuiz());

    // Results Actions
    const retryMistakesBtn = document.getElementById('btn-retry-mistakes');
    if (retryMistakesBtn) retryMistakesBtn.addEventListener('click', () => this.retryMistakes());

    const newQuizBtn = document.getElementById('btn-new-quiz');
    if (newQuizBtn) newQuizBtn.addEventListener('click', () => {
      sound.playClick();
      this.switchView('setup-view');
    });

    const printBtn = document.getElementById('btn-print-results');
    if (printBtn) printBtn.addEventListener('click', () => window.print());

    // Review Filter Pills
    document.querySelectorAll('.filter-pill[data-filter]').forEach(pill => {
      pill.addEventListener('click', () => {
        sound.playClick();
        this.renderReviewList(pill.dataset.filter);
      });
    });
  }

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      const activeView = document.querySelector('.view.active');
      if (!activeView || activeView.id !== 'quiz-view') return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        this.selectOption(key);
      } else if (['1', '2', '3', '4'].includes(key)) {
        const map = { '1': 'A', '2': 'B', '3': 'C', '4': 'D' };
        this.selectOption(map[key]);
      } else if (e.key === 'ArrowLeft') {
        this.prevQuestion();
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        this.nextQuestion();
      } else if (key === 'F') {
        this.toggleFlagCurrent();
      }
    });
  }

  // --- UTILS ---
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  animateNumber(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // cubic ease out
      const current = start + (end - start) * ease;
      element.textContent = `${current.toFixed(1)}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = `${end.toFixed(1)}${suffix}`;
      }
    };
    requestAnimationFrame(update);
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new QuizApp();
});
