import React from 'react';
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { treatmentsData } from '../../data/treatments';

export default function SpecialisedTreatments({ setActivePage }) {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2">
              Advanced Clinical Care
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              Specialised Treatment. Thoughtfully Delivered.
            </h2>
            <p className="text-sm sm:text-base text-[#33413B] mt-2 max-w-xl">
              Precision surgical and interventional procedures backed by multi-disciplinary care teams
            </p>
          </div>

          <button 
            onClick={() => {
              setActivePage('treatments');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 text-xs font-bold text-[#1A3C34] hover:text-[#087F8C] flex items-center space-x-1 transition-colors"
          >
            <span>View All Treatments &rarr;</span>
          </button>
        </div>

        {/* Treatment Cards Grid with Photorealistic Procedure Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {treatmentsData.slice(0, 6).map((treat) => (
            <div key={treat.id} className="bg-white rounded-3xl border border-[#E8E4DC] overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              
              <div>
                {/* Treatment Procedure Photograph */}
                <div className="relative h-48 bg-[#EAF6FA] overflow-hidden">
                  <img 
                    src={treat.image} 
                    alt={treat.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#1A3C34]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-wider">
                    {treat.specialtyName}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-[#1A3C34] group-hover:text-[#087F8C] transition-colors leading-snug">
                    {treat.name}
                  </h3>
                  <p className="text-xs text-[#587176] leading-relaxed line-clamp-3">
                    {treat.description}
                  </p>

                  <div className="bg-[#F8FBFC] p-3 rounded-2xl border border-[#DCECEF] space-y-1.5 text-[11px] text-[#587176] mt-3">
                    <div className="flex items-center space-x-1.5 font-semibold text-[#1A3C34]">
                      <Clock className="w-3.5 h-3.5 text-[#087F8C]" />
                      <span>Recovery: {treat.recoveryDays}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1A3C34]" />
                      <span>Lead Specialist: {treat.doctorName}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button 
                  onClick={() => {
                    setActivePage('treatments');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-xl bg-white border border-[#1A3C34] text-[#1A3C34] text-xs font-bold hover:bg-[#1A3C34] hover:text-white transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <span>Read Procedure Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
