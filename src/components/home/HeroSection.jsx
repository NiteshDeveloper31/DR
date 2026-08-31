import React, { useEffect, useRef } from 'react';
import { Calendar, Search, ArrowRight, Activity, ShieldCheck, HeartPulse } from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function HeroSection({ setActivePage, openSearchModal }) {
  const canvasRef = useRef(null);

  // Subtle Atmospheric Medical & Anatomical Heart Hologram Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const heartX = w * 0.82;
      const heartY = h * 0.42;

      // 1. Subtle Radial Pulse Aura (Ice Blue & Deep Teal Glow)
      const aura = ctx.createRadialGradient(heartX, heartY, 5, heartX, heartY, 140);
      aura.addColorStop(0, 'rgba(8, 127, 140, 0.25)');
      aura.addColorStop(0.5, 'rgba(7, 94, 104, 0.08)');
      aura.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.arc(heartX, heartY, 140, 0, Math.PI * 2);
      ctx.fill();

      // 2. Translucent Wireframe Anatomical Cardiac Pulse Graphic
      const pulseScale = 1 + Math.sin(time * 3) * 0.06;
      ctx.save();
      ctx.translate(heartX, heartY);
      ctx.scale(pulseScale, pulseScale);
      
      // Outer Cardiac Ring
      ctx.strokeStyle = 'rgba(8, 127, 140, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 45, 0, Math.PI * 2);
      ctx.stroke();

      // Inner Pulse Ring
      ctx.strokeStyle = 'rgba(216, 238, 244, 0.6)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(0, 0, 32, time, time + Math.PI * 1.5);
      ctx.stroke();
      ctx.setLineDash([]);

      // Subtle Cardiac Heart Vector Outline
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 2;
      ctx.moveTo(0, 12);
      ctx.bezierCurveTo(-22, -8, -22, -28, 0, -20);
      ctx.bezierCurveTo(22, -28, 22, -8, 0, 12);
      ctx.stroke();

      // Connecting Node Dots
      const nodes = [
        { x: -28, y: -15 }, { x: 28, y: -15 }, { x: 0, y: 25 }, { x: 0, y: -35 }
      ];
      nodes.forEach((n, idx) => {
        const nx = n.x + Math.cos(time + idx) * 3;
        const ny = n.y + Math.sin(time + idx) * 3;
        ctx.fillStyle = '#087F8C';
        ctx.beginPath();
        ctx.arc(nx, ny, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(8, 127, 140, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(nx, ny);
        ctx.stroke();
      });

      ctx.restore();

      // 3. Continuous ECG Waveform Line at Base
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(8, 127, 140, 0.7)';
      const ecgYBase = h - 65;
      const ecgWidth = w * 0.9;
      const startX = (w - ecgWidth) / 2;

      for (let x = 0; x < ecgWidth; x += 2) {
        const px = startX + x;
        const period = 180;
        const pos = (x + time * 140) % period;
        let py = ecgYBase;
        
        if (pos > 50 && pos < 60) py -= 8;
        else if (pos > 65 && pos < 70) py += 6;
        else if (pos > 70 && pos < 88) py -= 50; // Cardiac spike
        else if (pos > 88 && pos < 100) py += 18;
        else if (pos > 115 && pos < 130) py -= 10;

        if (x === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#EAF6FA] via-[#F8FBFC] to-[#FFFFFF] pt-12 pb-20 overflow-hidden border-b border-[#DCECEF]">
      
      {/* Background Medical Grid Lines */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#087F8C0D_1px,transparent_1px),linear-gradient(to_bottom,#087F8C0D_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#087F8C]/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#087F8C] animate-pulse"></span>
              <span className="text-xs font-bold text-[#075E68] tracking-wider uppercase">
                AAROGYA PRIME HOSPITAL • MUMBAI CENTRAL
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#123238] tracking-tight leading-[1.08]">
              Advanced Care.<br />
              <span className="text-[#075E68]">Closer to You.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#587176] leading-relaxed max-w-2xl">
              Comprehensive multispeciality healthcare delivered by experienced clinicians, advanced technology and a team committed to every patient's wellbeing.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => {
                  setActivePage('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-3.5 px-6 rounded-xl bg-[#075E68] text-white font-bold text-sm hover:bg-[#043F47] shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
              >
                <Calendar className="w-4 h-4 text-[#087F8C]" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#EAF6FA] group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => {
                  setActivePage('doctors');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-3.5 px-6 rounded-xl bg-white border border-[#075E68] text-[#075E68] font-bold text-sm hover:bg-[#EAF6FA] transition-all flex items-center justify-center space-x-2"
              >
                <span>Find a Doctor</span>
              </button>
            </div>

            {/* Secondary Link */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-[#587176]">
              <span>Need specialized clinical programs?</span>
              <button 
                onClick={() => setActivePage('specialties')}
                className="text-[#075E68] underline hover:text-[#087F8C] transition-colors font-bold whitespace-nowrap"
              >
                Explore Clinical Specialities &rarr;
              </button>
            </div>

          </div>

          {/* Right Visual Stage: "THE HOSPITAL AS THE HERO" (Architectural Photorealistic Hero Visual) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[460px] rounded-3xl bg-white border border-[#DCECEF] shadow-2xl overflow-hidden p-5 flex flex-col justify-between group">
              
              {/* Photorealistic Hospital Architectural Photograph */}
              <img 
                src="/images/hospital_hero_architecture.jpg" 
                alt="Aarogya Prime Hospital Flagship Campus Architecture" 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700" 
              />
              
              {/* Soft Gradient Overlay for UI Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#043F47]/90 via-[#043F47]/20 to-black/30"></div>

              {/* Canvas Overlay for Subtle Medical & Holographic Cardiac Waveform */}
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

              {/* UI Overlay Area: Top-Left & Top-Right Badges (STRICT SINGLE HORIZONTAL LINE) */}
              <div className="relative z-20 flex flex-row justify-between items-start gap-1 sm:gap-4">
                
                {/* Top-Left UI Overlay */}
                <div className="bg-white/95 backdrop-blur-md p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-[#DCECEF] shadow-lg max-w-[155px] xs:max-w-[180px] sm:max-w-[240px] flex-shrink-0">
                  <div className="text-[7.5px] sm:text-[10px] font-bold text-[#587176] uppercase tracking-wider leading-none mb-0.5">NABH ACCREDITED HOSPITAL</div>
                  <div className="text-[11px] sm:text-sm font-extrabold text-[#075E68] tracking-tight leading-tight">{hospitalData.name}</div>
                  <div className="text-[9px] sm:text-xs font-semibold text-[#087F8C] mt-0.5">Mumbai Central</div>
                </div>

                {/* Top-Right UI Overlay */}
                <div className="bg-[#FEF3F2] border border-[#FCA5A5] px-2 py-1.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-md flex items-center space-x-1 sm:space-x-1.5 flex-shrink-0">
                  <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-[#D92D20] animate-bounce flex-shrink-0" />
                  <span className="text-[9px] sm:text-xs font-bold text-[#D92D20] whitespace-nowrap">24x7 Cath Lab Ready</span>
                </div>

              </div>

              {/* UI Overlay Area: Bottom Search Bar (Ctrl + K) */}
              <button 
                onClick={openSearchModal}
                className="relative z-20 w-full p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCECEF] text-left text-xs text-[#587176] flex items-center justify-between transition-all shadow-xl group/btn hover:border-[#075E68]"
              >
                <div className="flex items-center space-x-3">
                  <Search className="w-4 h-4 text-[#075E68]" />
                  <span className="font-bold text-[#123238] text-xs sm:text-sm">Search Doctor, Condition or Treatment...</span>
                </div>
                <span className="text-[10px] font-bold text-[#075E68] bg-[#EAF6FA] px-2.5 py-1 rounded-lg border border-[#DCECEF]">
                  Ctrl + K
                </span>
              </button>

            </div>
          </div>

        </div>

        {/* Institutional Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-[#DCECEF] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-[#DCECEF] shadow-card">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#075E68]">300</div>
            <div className="text-xs font-bold text-[#587176] uppercase tracking-wider mt-1">Inpatient Hospital Beds</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#DCECEF] shadow-card">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#075E68]">350+</div>
            <div className="text-xs font-bold text-[#587176] uppercase tracking-wider mt-1">Clinical Specialists</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#DCECEF] shadow-card">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#075E68]">24x7</div>
            <div className="text-xs font-bold text-[#587176] uppercase tracking-wider mt-1">Emergency Care Unit</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#DCECEF] shadow-card">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#075E68]">15+</div>
            <div className="text-xs font-bold text-[#587176] uppercase tracking-wider mt-1">Years of Care Excellence</div>
          </div>
        </div>

      </div>
    </section>
  );
}
