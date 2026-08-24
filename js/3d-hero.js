/* ==========================================================================
   AAROGYA ONE - Large Prominent 3D Healthcare Core Visual Engine
   Enlarged Translucent 3D Healthcare Orb + Spaced 3D Orbiting Badges
   Mouse Depth Parallax, Scroll Scaling & Choreographed Entrance Sequence
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hero-3d-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let time = 0;

  // Mouse Parallax Targets
  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;
  let hoveredSpecialtyIndex = -1;

  // Scroll Parallax Offset
  let scrollYOffset = 0;

  function resize() {
    const parent = canvas.parentElement;
    width = canvas.width = parent.clientWidth;
    height = canvas.height = parent.clientHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('scroll', () => {
    scrollYOffset = window.scrollY;
  });

  // Track Mouse Movement for 3D Depth Tilt
  document.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      targetMouseX = (e.clientX - rect.left - width / 2) * 0.0006;
      targetMouseY = (e.clientY - rect.top - height / 2) * 0.0006;

      checkSpecialtyHover(e.clientX - rect.left, e.clientY - rect.top);
    } else {
      targetMouseX = 0;
      targetMouseY = 0;
      hoveredSpecialtyIndex = -1;
    }
  });

  // Orbiting Specialty Nodes Base Data (Wide spacious orbital layout)
  const specialties = [
    { label: 'Cardiology', icon: '❤️', angle: 0, speed: 0.007, baseRadius: 280, yOffset: -40 },
    { label: 'Neurology', icon: '🧠', angle: (Math.PI * 2) / 5, speed: 0.007, baseRadius: 295, yOffset: 30 },
    { label: 'Orthopedics', icon: '🦴', angle: (Math.PI * 4) / 5, speed: 0.007, baseRadius: 270, yOffset: -50 },
    { label: 'Dermatology', icon: '✨', angle: (Math.PI * 6) / 5, speed: 0.007, baseRadius: 290, yOffset: 45 },
    { label: 'Pediatrics', icon: '👶', angle: (Math.PI * 8) / 5, speed: 0.007, baseRadius: 265, yOffset: 0 }
  ];

  const projectedSpecialties = [];

  function checkSpecialtyHover(mx, my) {
    hoveredSpecialtyIndex = -1;
    for (let i = 0; i < projectedSpecialties.length; i++) {
      const p = projectedSpecialties[i];
      const dx = mx - p.x;
      const dy = my - p.y;
      if (Math.sqrt(dx * dx + dy * dy) < 55) {
        hoveredSpecialtyIndex = i;
        break;
      }
    }
  }

  // Floating Medical Particles
  const particles = [];
  const numParticles = 65;
  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: (Math.random() - 0.5) * 450,
      y: (Math.random() - 0.5) * 450,
      z: (Math.random() - 0.5) * 450,
      size: Math.random() * 2.5 + 1.2,
      speed: Math.random() * 0.005 + 0.002
    });
  }

  function rotate3D(p, rx, ry) {
    let cos = Math.cos(ry), sin = Math.sin(ry);
    let x1 = p.x * cos + p.z * sin;
    let z1 = p.z * cos - p.x * sin;

    cos = Math.cos(rx); sin = Math.sin(rx);
    let y1 = p.y * cos - z1 * sin;
    let z2 = z1 * cos + p.y * sin;

    return { x: x1, y: y1, z: z2 };
  }

  // ECG Cardiac Spike
  function getEcgY(x, t) {
    const period = 220;
    const pos = (x + t * 160) % period;
    if (pos > 70 && pos < 80) return -15;
    if (pos > 85 && pos < 90) return 12;
    if (pos > 90 && pos < 110) return -85; // Sharp cardiac spike
    if (pos > 110 && pos < 125) return 35;
    if (pos > 140 && pos < 165) return -20;
    return 0;
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    mouseX += (targetMouseX - mouseX) * 0.08;
    mouseY += (targetMouseY - mouseY) * 0.08;

    time += 0.015;

    const isMobile = width < 768;

    const scrollFactor = Math.max(0.65, 1 - scrollYOffset * 0.0008);
    const scrollYShift = scrollYOffset * 0.15;

    const centerX = width / 2;
    const centerY = height / 2 - scrollYShift;
    
    // ENLARGED ORB RADIUS (0.42 desktop, 0.38 mobile)
    const orbRadius = Math.min(width, height) * (isMobile ? 0.38 : 0.42) * scrollFactor;

    ctx.save();

    // 1. Radial Background Aura
    const auraGrad = ctx.createRadialGradient(centerX, centerY, 15, centerX, centerY, orbRadius * 2.3);
    auraGrad.addColorStop(0, 'rgba(16, 185, 129, 0.28)');
    auraGrad.addColorStop(0.5, 'rgba(10, 77, 78, 0.12)');
    auraGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = auraGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, orbRadius * 2.3, 0, Math.PI * 2);
    ctx.fill();

    // 2. Concentric Orbital 3D Rings
    for (let r = 1; r <= 3; r++) {
      const ringRadius = orbRadius * (1.15 + r * 0.26);
      const ringAngleY = mouseX * 2 + time * (0.25 / r);

      ctx.beginPath();
      ctx.ellipse(
        centerX,
        centerY,
        ringRadius,
        ringRadius * (isMobile ? 0.42 : 0.45),
        ringAngleY,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = r === 1 ? 'rgba(16, 185, 129, 0.45)' : 'rgba(10, 77, 78, 0.18)';
      ctx.lineWidth = r === 1 ? 2.5 : 1.5;
      if (r === 2) ctx.setLineDash([10, 14]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 3. Main Central Translucent 3D Orb Core (Bold & Large)
    const orbGrad = ctx.createRadialGradient(
      centerX - orbRadius * 0.35 + mouseX * 40,
      centerY - orbRadius * 0.35 + mouseY * 40,
      orbRadius * 0.1,
      centerX,
      centerY,
      orbRadius
    );
    orbGrad.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
    orbGrad.addColorStop(0.35, 'rgba(235, 243, 245, 0.92)');
    orbGrad.addColorStop(0.7, 'rgba(16, 185, 129, 0.32)');
    orbGrad.addColorStop(1, 'rgba(10, 77, 78, 0.78)');

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, orbRadius, 0, Math.PI * 2);
    ctx.fillStyle = orbGrad;
    ctx.shadowColor = '#10B981';
    ctx.shadowBlur = 35;
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.lineWidth = 3.5;
    ctx.stroke();
    ctx.restore();

    // 4. Inner 3D Heart & Pulse Motif (Enlarged)
    ctx.save();
    ctx.translate(centerX, centerY);
    const heartScale = (orbRadius / 150) * (1 + Math.sin(time * 3) * 0.05);
    ctx.scale(heartScale, heartScale);
    ctx.rotate(mouseX * 0.5);

    ctx.beginPath();
    ctx.moveTo(0, -15);
    ctx.bezierCurveTo(-50, -60, -95, 15, 0, 85);
    ctx.bezierCurveTo(95, 15, 50, -60, 0, -15);
    ctx.fillStyle = 'rgba(16, 185, 129, 0.4)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#10B981';
    ctx.shadowBlur = 18;
    ctx.stroke();
    ctx.restore();

    // 5. Glowing Cardiac ECG Line
    const ecgYBase = centerY + orbRadius * 0.05;
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.95)';

    const ecgWidth = orbRadius * 2.5;
    const ecgStartX = centerX - ecgWidth / 2;

    for (let x = 0; x < ecgWidth; x += 3) {
      const px = ecgStartX + x;
      const py = ecgYBase + getEcgY(x, time);
      if (x === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // 6. Floating Particles
    const focalLength = 380;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += Math.sin(time + i) * 0.3;

      const rotated = rotate3D(p, mouseY, mouseX + time * p.speed);
      const scale = focalLength / (focalLength + rotated.z + 200);
      const px = rotated.x * scale + centerX;
      const py = rotated.y * scale + centerY;

      const alpha = Math.max(0.1, (rotated.z + 200) / 400);
      ctx.fillStyle = `rgba(16, 185, 129, ${alpha * 0.85})`;
      ctx.beginPath();
      ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
      ctx.fill();
    }

    // 7. Spacious Orbiting Specialty Badges (Enlarged text & clear spacing)
    projectedSpecialties.length = 0;
    const orbitalScale = isMobile ? 0.58 : 1.0;

    specialties.forEach((spec, index) => {
      const currentSpeed = (hoveredSpecialtyIndex === index) ? spec.speed * 0.15 : spec.speed;
      spec.angle += currentSpeed;

      const orbitalX = Math.cos(spec.angle) * spec.baseRadius * scrollFactor * orbitalScale;
      const orbitalZ = Math.sin(spec.angle) * spec.baseRadius * scrollFactor * orbitalScale;
      const orbitalY = (spec.yOffset * orbitalScale) + Math.sin(time * 2 + index) * 8;

      const p3d = rotate3D({ x: orbitalX, y: orbitalY, z: orbitalZ }, mouseY, mouseX);
      const scale = focalLength / (focalLength + p3d.z + 150);
      const px = p3d.x * scale + centerX;
      const py = p3d.y * scale + centerY;

      projectedSpecialties.push({ x: px, y: py, index });

      const isHovered = (hoveredSpecialtyIndex === index);

      ctx.save();
      ctx.translate(px, py);

      if (isHovered) {
        ctx.scale(1.15, 1.15);
      }

      ctx.fillStyle = isHovered ? 'rgba(10, 77, 78, 0.98)' : 'rgba(255, 255, 255, 0.96)';
      ctx.strokeStyle = isHovered ? '#10B981' : 'rgba(16, 185, 129, 0.45)';
      ctx.lineWidth = isHovered ? 2.5 : 1.5;
      ctx.shadowColor = isHovered ? '#10B981' : 'rgba(10, 77, 78, 0.15)';
      ctx.shadowBlur = isHovered ? 20 : 10;

      const labelText = `${spec.icon} ${spec.label}`;
      const fontSize = Math.max(12, (isMobile ? 13 : 14.5) * scale);
      ctx.font = `700 ${fontSize}px 'Plus Jakarta Sans', sans-serif`;
      const textWidth = ctx.measureText(labelText).width;
      const padX = (isMobile ? 12 : 16) * scale;
      const padY = (isMobile ? 7 : 9) * scale;
      const badgeW = textWidth + padX * 2;
      const badgeH = (isMobile ? 24 : 28) * scale + padY;

      ctx.beginPath();
      ctx.roundRect(-badgeW / 2, -badgeH / 2, badgeW, badgeH, 999);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = isHovered ? '#FFFFFF' : '#0A4D4E';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(labelText, 0, 1);

      ctx.restore();
    });

    ctx.restore();
    requestAnimationFrame(render);
  }

  render();
});
