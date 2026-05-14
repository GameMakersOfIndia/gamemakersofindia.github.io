/* ============================================================
   GAME MAKERS OF INDIA — main.js
   Handles: pixel cursor, particle effects, stars, score ticker
   ============================================================ */

// ── PIXEL CURSOR ─────────────────────────────────────────────
const canvas = document.getElementById('cursorCanvas');
const ctx    = canvas.getContext('2d');

// Resize canvas to window
function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle pool
const particles = [];

// Current mouse position
let mx = -100, my = -100;
let clicking = false;

// The pixelated crosshair cursor (8×8 pixel art)
const CURSOR_SIZE = 16;
const CURSOR_PIXELS = [
  // Each entry: [col, row, color]
  // Crosshair shape
  [3,0,'#ffd700'],[4,0,'#ffd700'],
  [3,1,'#ffd700'],[4,1,'#ffd700'],
  [0,3,'#ffd700'],[1,3,'#ffd700'],
  [6,3,'#ffd700'],[7,3,'#ffd700'],
  [0,4,'#ffd700'],[1,4,'#ffd700'],
  [6,4,'#ffd700'],[7,4,'#ffd700'],
  [3,6,'#ffd700'],[4,6,'#ffd700'],
  [3,7,'#ffd700'],[4,7,'#ffd700'],
  // Center dot
  [3,3,'#ff1744'],[4,3,'#ff1744'],
  [3,4,'#ff1744'],[4,4,'#ff1744'],
];

// Draw pixel cursor
function drawCursor(x, y) {
  const scale = 2; // each "pixel" is 2×2 screen pixels
  for (const [col, row, color] of CURSOR_PIXELS) {
    ctx.fillStyle = color;
    ctx.fillRect(
      x - CURSOR_SIZE + col * scale,
      y - CURSOR_SIZE + row * scale,
      scale, scale
    );
  }
}

// ── PARTICLE CLASS ────────────────────────────────────────────
class Particle {
  constructor(x, y, burst = false) {
    this.x = x;
    this.y = y;
    // Random 8-directional velocity (pixel feel)
    const dirs = [-3,-2,-1,1,2,3];
    this.vx = dirs[Math.floor(Math.random() * dirs.length)];
    this.vy = dirs[Math.floor(Math.random() * dirs.length)] - (burst ? 2 : 0);
    this.life = burst ? 45 : 25;
    this.maxLife = this.life;
    this.size = burst ? 4 : 3;
    // Color palette: yellow, green, cyan, red
    const colors = ['#ffd700','#00e676','#00e5ff','#ff1744','#ffffff'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.gravity = 0.15;
  }
  update() {
    this.x += this.vx;
    this.vy += this.gravity;
    this.y += this.vy;
    this.life--;
  }
  draw(ctx) {
    const alpha = this.life / this.maxLife;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = this.color;
    // pixel-snapped position
    ctx.fillRect(
      Math.round(this.x),
      Math.round(this.y),
      this.size, this.size
    );
    ctx.globalAlpha = 1;
  }
}

// ── MOUSE TRAIL: spawn 1-2 particles per move ─────────────────
document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  // Occasional trail particle
  if (Math.random() < 0.5) {
    particles.push(new Particle(mx, my));
  }
});

// ── CLICK BURST ───────────────────────────────────────────────
document.addEventListener('mousedown', (e) => {
  clicking = true;
  // Burst 12 particles on click
  for (let i = 0; i < 12; i++) {
    particles.push(new Particle(e.clientX, e.clientY, true));
  }
  // Bump score
  bumpScore();
});
document.addEventListener('mouseup',  () => { clicking = false; });

// ── ANIMATION LOOP ────────────────────────────────────────────
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw(ctx);
    if (particles[i].life <= 0) particles.splice(i, 1);
  }

  // Draw cursor last (on top)
  drawCursor(mx, my);

  requestAnimationFrame(loop);
}
loop();

// ── SCORE TICKER ─────────────────────────────────────────────
let score = 0;
const scoreEl = document.getElementById('scoreVal');
// Continuously tick up score for fun
setInterval(() => {
  score += Math.floor(Math.random() * 3);
  if (scoreEl) scoreEl.textContent = String(score).padStart(5, '0');
}, 200);

function bumpScore() {
  score += 100;
  if (scoreEl) scoreEl.textContent = String(score).padStart(5, '0');
}

// ── PIXEL STARS GENERATOR ────────────────────────────────────
const starsContainer = document.getElementById('stars');
if (starsContainer) {
  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left   = Math.random() * 100 + '%';
    star.style.top    = Math.random() * 100 + '%';
    star.style.setProperty('--tw', (1 + Math.random() * 3).toFixed(1) + 's');
    star.style.setProperty('--td', (Math.random() * 3).toFixed(1) + 's');
    starsContainer.appendChild(star);
  }
}

// ── LEARN CARD HOVER SOUND VISUAL ────────────────────────────
// Flash a pixel burst when hovering learn cards
document.querySelectorAll('.learn-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    for (let i = 0; i < 6; i++) {
      particles.push(new Particle(cx + (Math.random()-0.5)*40, cy, true));
    }
  });
});

// ── SCROLL-IN ANIMATION (Intersection Observer) ───────────────
// Adds 'visible' class when elements enter viewport
const observeEls = document.querySelectorAll('.learn-card, .stat-card, .platform-card, .intro-text');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Particle burst at card center on reveal
      const rect = entry.target.getBoundingClientRect();
      const cx = rect.left + rect.width  / 2;
      const cy = rect.top  + rect.height / 2;
      for (let i = 0; i < 4; i++) {
        particles.push(new Particle(cx, cy, true));
      }
    }
  });
}, { threshold: 0.15 });

observeEls.forEach(el => observer.observe(el));

// CSS for visible state (injected dynamically)
const style = document.createElement('style');
style.textContent = `
  .learn-card, .stat-card, .platform-card, .intro-text {
    opacity: 0;
    transform: translate(0, 12px);
    transition: opacity 0.3s steps(3), transform 0.3s steps(3), border-color 0.15s, box-shadow 0.15s;
  }
  .learn-card.visible, .stat-card.visible, .platform-card.visible, .intro-text.visible {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
document.head.appendChild(style);
