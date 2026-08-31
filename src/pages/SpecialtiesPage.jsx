import React from 'react';
import { HeartPulse, ArrowRight, CheckCircle2 } from 'lucide-react';
import { specialtiesData } from '../data/specialties';

export default function SpecialtiesPage({ setActivePage }) {
  return (
    <div className="py-12 bg-[#F6F8F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10B981]/30 shadow-sm mb-3">
            <HeartPulse className="w-4 h-4 text-[#10B981]" />
            <span className="text-xs font-bold text-[#0A4D4E] uppercase">Clinical Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">
            Clinical Specialities & Departments
          </h1>
          <p className="text-sm text-[#536667] mt-2">
            Multi-disciplinary clinical care backed by 3T MRI, 24x7 Cath Labs, and Mako Robotic Surgery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialtiesData.map((spec) => (
            <div key={spec.id} className="bg-white rounded-3xl p-8 border border-[#EBF3F5] shadow-card hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#EBF3F5] text-[#0A4D4E] text-xs font-bold">
                    {spec.doctorsCount} Senior Doctors
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#102F30] group-hover:text-[#0A4D4E] transition-colors mb-1">
                  {spec.name}
                </h3>
                <div className="text-xs font-semibold text-[#059669] mb-3">{spec.tagline}</div>
                <p className="text-xs text-[#536667] leading-relaxed mb-6">{spec.description}</p>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#102F30] uppercase block mb-2">Conditions Treated</span>
                    <div className="flex flex-wrap gap-1.5">
                      {spec.conditions.slice(0, 4).map((cond, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-[#F6F8F7] border border-[#EBF3F5] text-[11px] text-[#536667]">
                          {cond}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#EBF3F5] mt-6 flex justify-end">
                <button 
                  onClick={() => {
                    setActivePage('doctors');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-2.5 px-4 rounded-xl bg-[#0A4D4E] text-white text-xs font-bold hover:bg-[#063233] flex items-center space-x-1"
                >
                  <span>Book Specialty Doctor</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
