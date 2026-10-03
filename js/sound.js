// Web Audio API Procedural Sound Synthesizer (Zero External Dependencies)
class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    // Check localStorage
    const saved = localStorage.getItem('ap_quiz_sound');
    if (saved !== null) {
      this.enabled = saved === 'true';
    }
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('ap_quiz_sound', String(this.enabled));
    if (this.enabled) {
      this.playClick();
    }
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.12, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.22);
      });
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.exponentialRampToValueAtTime(146.83, now + 0.18); // D3
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playComplete() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Majestic triumphant chord cadence
      const chords = [
        { freqs: [523.25, 659.25, 783.99], time: 0, dur: 0.2 },      // C major
        { freqs: [587.33, 739.99, 880.00], time: 0.22, dur: 0.2 },   // D major
        { freqs: [659.25, 830.61, 987.77], time: 0.44, dur: 0.2 },   // E major
        { freqs: [783.99, 987.77, 1174.66, 1567.98], time: 0.68, dur: 0.55 } // High G major chord
      ];

      chords.forEach(c => {
        c.freqs.forEach(f => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + c.time);
          gain.gain.setValueAtTime(0.08, now + c.time);
          gain.gain.exponentialRampToValueAtTime(0.001, now + c.time + c.dur);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + c.time);
          osc.stop(now + c.time + c.dur);
        });
      });
    } catch (e) {
      console.warn("Audio error", e);
    }
  }
}

export const sound = new SoundManager();
