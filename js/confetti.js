// Luxury Canvas Confetti Particle System
export function launchLuxuryConfetti() {
  const canvas = document.createElement('canvas');
  canvas.id = 'confetti-canvas';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const colors = [
    '#f59e0b', '#fbbf24', '#d97706', // Golds
    '#10b981', '#34d399', '#059669', // Emeralds
    '#3b82f6', '#60a5fa', '#2563eb', // Sapphires
    '#ec4899', '#f43f5e', '#a855f7'  // Jewels
  ];

  const particles = [];
  const count = 150;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: width * (0.3 + Math.random() * 0.4),
      y: height * 0.5,
      vx: (Math.random() - 0.5) * 22,
      vy: (Math.random() - 0.9) * 20 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10,
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
      alpha: 1,
      decay: Math.random() * 0.008 + 0.006,
      gravity: 0.35
    });
  }

  let animationId;
  function update() {
    ctx.clearRect(0, 0, width, height);

    let activeCount = 0;
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.alpha > 0) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    if (activeCount > 0) {
      animationId = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationId);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    }
  }

  update();
}
