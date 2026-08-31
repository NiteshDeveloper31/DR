import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function AccreditationsQuality() {
  return (
    <section className="py-20 bg-[#F8FBFC] border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2 flex items-center justify-center space-x-1">
            <Award className="w-4 h-4 text-[#087F8C]" />
            <span>Clinical Governance & Safety</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
            Accreditations & Quality Standards
          </h2>
          <p className="text-sm sm:text-base text-[#587176] mt-2">
            Adhering to strict national and international healthcare quality protocols
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hospitalData.accreditations.map((acc, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#DCECEF] shadow-card space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6FA] text-[#075E68] flex items-center justify-center font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#087F8C]" />
              </div>
              <h3 className="text-base font-bold text-[#123238]">{acc.title}</h3>
              <p className="text-xs text-[#587176] leading-relaxed">{acc.subtitle}</p>
              <div className="text-[10px] font-bold text-[#087F8C] pt-2 border-t border-[#DCECEF]">{acc.year}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
