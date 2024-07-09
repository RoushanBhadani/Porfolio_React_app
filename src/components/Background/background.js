import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const w = window.innerWidth;
    const h = window.innerHeight;
    const rate = 60;
    const arc = 100;
    const size = 7;
    const speed = 0.9;
    const colors = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
    let time = 0;
    const parts = [];
    const mouse = { x: 0, y: 0 };

    canvas.width = w;
    canvas.height = h;

    function create() {
      for (let i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.random() * w,
          y: Math.random() * h,
          toX: Math.random() * 2 - 1, // Adjusted for smoother motion
          toY: Math.random() * 2 - 1, // Adjusted for smoother motion
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        };
      }
    }

    function particles() {
      ctx.clearRect(0, 0, w, h);
      canvas.addEventListener('mousemove', MouseMove, false);
      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        const distanceFactor = DistanceBetween(mouse, parts[i]);
        const df = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * df, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        if (i % 2 === 0) ctx.stroke();
        else ctx.fill();

        li.x += li.toX * speed;
        li.y += li.toY * speed;

        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
      }
      requestAnimationFrame(particles);
    }

    function MouseMove(e) {
      mouse.x = e.layerX;
      mouse.y = e.layerY;
    }

    function DistanceBetween(p1, p2) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    create();
    particles();
  }, []);

  return <canvas ref={canvasRef} id="test" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'black' }} />;
};

export default ParticleBackground;
