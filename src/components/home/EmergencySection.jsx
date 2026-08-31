import React from 'react';
import { ShieldAlert, Phone, MapPin, Activity, Clock, Truck } from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function EmergencySection({ setActivePage }) {
  return (
    <section className="py-16 bg-[#043F47] text-white border-b border-[#075E68]/40 relative overflow-hidden">
      
      {/* Background Pulse Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D92D20]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-[#075E68] to-[#043F47] rounded-3xl p-8 sm:p-12 border border-[#D92D20]/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FEF3F2] border border-[#FCA5A5] text-[#D92D20] text-xs font-bold">
                <ShieldAlert className="w-4 h-4 animate-bounce text-[#D92D20]" />
                <span>24x7 Emergency & Critical Trauma Response</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                When every minute matters.
              </h2>

              <p className="text-sm sm:text-base text-[#D8EEF4] leading-relaxed max-w-2xl">
                Our Level-1 Trauma Department and 24x7 Cath Lab provide immediate resuscitation for acute heart attacks, stroke thrombolysis, severe accidents, and critical emergencies.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs text-[#D8EEF4]">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-[#087F8C]" />
                  <span>Door-to-Balloon &lt; 45 Mins</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[#087F8C]" />
                  <span>GPS Mobile Cardiac ICU</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#087F8C]" />
                  <span>24x7 Intensivist On Duty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#087F8C]" />
                  <span>Gate 3 Direct Ramp</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <a 
                href={`tel:${hospitalData.emergency.phone}`}
                className="w-full py-4 px-6 rounded-2xl bg-[#D92D20] hover:bg-[#B42318] text-white font-extrabold text-base shadow-xl flex items-center justify-center space-x-3 transition-all hover:scale-102"
              >
                <Phone className="w-5 h-5 animate-pulse text-white" />
                <span>Call Emergency: 108</span>
              </a>

              <button 
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3.5 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 flex items-center justify-center space-x-2 transition-all"
              >
                <MapPin className="w-4 h-4 text-[#087F8C]" />
                <span>Emergency Ramp Directions</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
