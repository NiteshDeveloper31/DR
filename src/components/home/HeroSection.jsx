import React from 'react';
import { Calendar, Search, ArrowRight, Activity } from 'lucide-react';

export default function HeroSection({ setActivePage, openSearchModal }) {
  return (
    <section className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] bg-[#0A1419] overflow-hidden border-b border-[#075E68]/40 flex flex-col justify-between">
      
      {/* FULL BLEED HERO BANNER BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 bg-[#0A1419]">
        <img 
          src="/images/hero_banner_consultation.jpg" 
          alt="Aarogya Prime Hospital Senior Doctor Patient Consultation" 
          className="w-full h-full object-cover object-[80%_center] sm:object-right opacity-100 brightness-[1.05] contrast-[1.04]"
        />
        
        {/* Mobile Gradient (Soft Translucent Overlay to reveal Doctor & Patient clearly) */}
        <div 
          className="absolute inset-0 pointer-events-none sm:hidden"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,20,25,0.60) 0%, rgba(10,20,25,0.30) 40%, rgba(10,20,25,0.65) 100%)'
          }}
        />

        {/* Desktop Gradient (Left-to-Right Fading Overlay) */}
        <div 
          className="absolute inset-0 pointer-events-none hidden sm:block"
          style={{
            background: 'linear-gradient(to right, rgba(10,20,25,0.90) 0%, rgba(10,20,25,0.75) 35%, rgba(10,20,25,0.20) 60%, transparent 100%)'
          }}
        />
      </div>

      {/* Main Banner Overlay Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-12 sm:pb-16 relative z-20 w-full flex-1 flex flex-col justify-center">
        
        {/* Top Badges Strip - Responsive Layout */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-white/80 shadow-md max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#087F8C] animate-pulse flex-shrink-0"></span>
            <span className="text-[10px] sm:text-xs font-extrabold text-[#1A3C34] tracking-wider uppercase truncate">
              AAROGYA PRIME HOSPITAL • MUMBAI CENTRAL
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <div className="bg-white px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl border border-white/80 shadow-md text-[10px] sm:text-xs font-bold text-[#1A3C34] hidden sm:block">
              🏆 NABH & NABL Accredited Hospital
            </div>
            <div className="bg-[#FEF3F2] border border-[#FCA5A5] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl shadow-md flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5 text-[#D92D20] animate-bounce flex-shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold text-[#D92D20]">24x7 Cath Lab Ready</span>
            </div>
          </div>
        </div>

        {/* Hero Editorial Copy */}
        <div className="max-w-2xl space-y-4 sm:space-y-6 text-left">
          
          {/* Main Headline - Responsive Scaling */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-white font-serif-editorial tracking-tight leading-[1.1] drop-shadow-md">
            Advanced Care.<br />
            <span className="text-[#38BDF8]">Closer to You.</span>
          </h1>

          {/* Subheading Body Text */}
          <p className="text-xs sm:text-xl text-[#EAF6FA] font-medium leading-relaxed max-w-xl drop-shadow-sm">
            Comprehensive multispeciality tertiary healthcare delivered by 350+ senior clinicians, advanced robotic technology, and a dedicated patient care team.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-2.5 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => {
                setActivePage('appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3.5 sm:py-4 px-6 sm:px-7 rounded-2xl bg-[#087F8C] text-white font-extrabold text-xs sm:text-sm hover:bg-[#075E68] shadow-xl transition-all flex items-center justify-center space-x-2.5 group border border-white/20"
            >
              <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#EAF6FA]" />
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 text-[#EAF6FA] group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => {
                setActivePage('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3.5 sm:py-4 px-6 sm:px-7 rounded-2xl bg-white/95 backdrop-blur-md border border-white text-[#1A3C34] font-extrabold text-xs sm:text-sm hover:bg-white transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Find a Specialist Doctor</span>
            </button>
          </div>

          {/* Search Bar Overlay */}
          <div className="pt-2 sm:pt-3 max-w-xl">
            <button 
              onClick={openSearchModal}
              className="w-full p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white text-left text-xs text-[#587176] flex items-center justify-between shadow-xl hover:border-[#38BDF8] transition-all group/btn"
            >
              <div className="flex items-center space-x-2.5 sm:space-x-3">
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#075E68] flex-shrink-0" />
                <span className="font-bold text-[#123238] text-xs sm:text-sm truncate">Search Doctor, Condition or Treatment...</span>
              </div>
              <span className="text-[10px] font-bold text-[#075E68] bg-[#EAF6FA] px-2.5 py-1 rounded-lg border border-[#DCECEF] hidden sm:inline-block flex-shrink-0">
                Ctrl + K
              </span>
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Institutional Stats Strip Overlay */}
      <div className="relative z-20 bg-[#043F47]/95 backdrop-blur-md border-t border-[#075E68]/40 py-3 sm:py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="flex items-center justify-center space-x-1.5 sm:space-x-2">
            <span className="text-lg sm:text-2xl font-black text-[#38BDF8]">300</span>
            <span className="text-[11px] sm:text-xs font-bold text-[#D8EEF4]">Inpatient Beds</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5 sm:space-x-2">
            <span className="text-lg sm:text-2xl font-black text-[#38BDF8]">350+</span>
            <span className="text-[11px] sm:text-xs font-bold text-[#D8EEF4]">Senior Doctors</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5 sm:space-x-2">
            <span className="text-lg sm:text-2xl font-black text-[#38BDF8]">24x7</span>
            <span className="text-[11px] sm:text-xs font-bold text-[#FCA5A5]">Emergency Unit</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5 sm:space-x-2">
            <span className="text-lg sm:text-2xl font-black text-[#38BDF8]">15+</span>
            <span className="text-[11px] sm:text-xs font-bold text-[#D8EEF4]">Years Excellence</span>
          </div>
        </div>
      </div>

    </section>
  );
}
