import React from 'react';
import { ShieldAlert, Calendar } from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function StickyEmergencyBar({ setActivePage }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#043F47]/95 backdrop-blur-md border-t border-[#075E68] p-3 md:hidden shadow-2xl flex items-center justify-between space-x-3">
      <a 
        href={`tel:${hospitalData.emergency.phone}`}
        className="flex-1 py-2.5 px-3 rounded-xl bg-[#FEF3F2] border border-[#FCA5A5] text-[#D92D20] text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 transition-transform"
      >
        <ShieldAlert className="w-4 h-4 animate-pulse text-[#D92D20]" />
        <span>Emergency 108</span>
      </a>

      <button 
        onClick={() => {
          setActivePage('appointment');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex-1 py-2.5 px-3 rounded-xl bg-[#087F8C] text-white text-xs font-extrabold flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition-transform"
      >
        <Calendar className="w-4 h-4 text-[#EAF6FA]" />
        <span>Book OPD</span>
      </button>
    </div>
  );
}
