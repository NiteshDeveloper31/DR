import React from 'react';
import { HeartPulse, ArrowRight, CheckCircle2 } from 'lucide-react';
import { specialtiesData } from '../data/specialties';

export default function SpecialtiesPage({ setActivePage }) {
  return (
    <div className="py-12 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E4DC] shadow-sm">
            <HeartPulse className="w-4 h-4 text-[#087F8C]" />
            <span className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">
              Institutional Clinical Programs
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
            Clinical Specialities & Departments
          </h1>
          <p className="text-sm sm:text-base text-[#33413B] leading-relaxed">
            Multi-disciplinary clinical care backed by 3T MRI, 24x7 Cath Labs, and Mako Robotic Surgery.
          </p>
        </div>

        {/* 2-Column Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialtiesData.map((spec) => (
            <div key={spec.id} className="bg-white rounded-3xl p-8 border border-[#E8E4DC]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#EAF6FA] border border-[#DCECEF] text-xs font-extrabold text-[#1A3C34]">
                    {spec.doctorsCount} Senior Doctors
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34] font-serif-editorial group-hover:text-[#087F8C] transition-colors mb-1">
                  {spec.name}
                </h2>
                <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-3">{spec.tagline}</div>
                <p className="text-xs sm:text-sm text-[#587176] leading-relaxed mb-6 font-medium">{spec.description}</p>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-extrabold text-[#1A3C34] uppercase tracking-wider block mb-2">Conditions Treated</span>
                    <div className="flex flex-wrap gap-2">
                      {spec.conditions.slice(0, 4).map((cond, i) => (
                        <span key={i} className="px-3 py-1 rounded-xl bg-[#F8FBFC] border border-[#DCECEF] text-xs text-[#1A3C34] font-semibold">
                          • {cond}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E8E4DC] mt-6 flex justify-end">
                <button 
                  onClick={() => {
                    setActivePage('doctors');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3 px-5 rounded-2xl bg-[#1A3C34] text-white text-xs font-extrabold hover:bg-[#0F3B36] transition-all flex items-center space-x-1.5 shadow-md"
                >
                  <span>Book Specialty Doctor</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#087F8C]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
