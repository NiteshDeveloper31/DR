import React from 'react';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { treatmentsData } from '../../data/treatments';

export default function SpecialisedTreatments({ setActivePage }) {
  return (
    <section className="py-20 bg-white border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2">
              Advanced Clinical Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
              Specialised treatment. Thoughtfully delivered.
            </h2>
            <p className="text-sm sm:text-base text-[#587176] mt-2 max-w-xl">
              Precision surgical and interventional procedures backed by multi-disciplinary care teams
            </p>
          </div>

          <button 
            onClick={() => {
              setActivePage('treatments');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 text-xs font-bold text-[#075E68] hover:text-[#087F8C] flex items-center space-x-1"
          >
            <span>View All Treatments &rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {treatmentsData.slice(0, 6).map((treat) => (
            <div key={treat.id} className="bg-[#F8FBFC] rounded-2xl border border-[#DCECEF] p-6 shadow-card hover:shadow-lg transition-all flex flex-col justify-between group">
              <div>
                <div className="text-[11px] font-bold text-[#087F8C] uppercase tracking-wider mb-2">
                  {treat.specialtyName}
                </div>
                <h3 className="text-lg font-bold text-[#123238] group-hover:text-[#075E68] transition-colors mb-2">
                  {treat.name}
                </h3>
                <p className="text-xs text-[#587176] leading-relaxed mb-4 line-clamp-3">
                  {treat.description}
                </p>

                <div className="bg-white p-3 rounded-xl border border-[#DCECEF] space-y-1.5 text-[11px] text-[#587176] mb-4">
                  <div className="flex items-center space-x-1.5 font-semibold text-[#123238]">
                    <Clock className="w-3.5 h-3.5 text-[#087F8C]" />
                    <span>Recovery: {treat.recoveryDays}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#075E68]" />
                    <span>Specialist: {treat.doctorName}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => {
                  setActivePage('treatments');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-white border border-[#075E68] text-[#075E68] text-xs font-bold hover:bg-[#075E68] hover:text-white transition-all text-center flex items-center justify-center space-x-1"
              >
                <span>Read Procedure Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
