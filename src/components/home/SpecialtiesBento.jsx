import React from 'react';
import { ArrowRight, HeartPulse, Brain, Bone, ShieldAlert } from 'lucide-react';
import { specialtiesData } from '../../data/specialties';

export default function SpecialtiesBento({ setActivePage }) {
  const cardiac = specialtiesData.find(s => s.id === 'cardiac-sciences');
  const neuro = specialtiesData.find(s => s.id === 'neurosciences');
  const ortho = specialtiesData.find(s => s.id === 'orthopaedics');
  const oncology = specialtiesData.find(s => s.id === 'oncology');

  return (
    <section className="py-20 bg-white border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2">
            Multi-Disciplinary Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
            Clinical Specialities
          </h2>
          <p className="text-sm sm:text-base text-[#587176] mt-2">
            14 specialized departments equipped with 3T MRI, 24x7 Cath Labs, and Robotic OTs
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Featured Bento Item: Cardiac Sciences (Deep Teal #043F47) */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#075E68] to-[#043F47] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-10 -translate-y-10">
              <HeartPulse className="w-80 h-80 text-[#087F8C]" />
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#EAF6FA] text-xs font-bold mb-4 backdrop-blur-md">
                <HeartPulse className="w-4 h-4 text-[#087F8C]" />
                <span>Featured Centre of Excellence</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {cardiac?.name}
              </h3>
              <p className="text-sm text-[#D8EEF4] leading-relaxed max-w-lg mb-6">
                {cardiac?.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 text-xs text-[#EAF6FA] mb-6">
                <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md">✓ 24x7 Emergency Cath Lab</div>
                <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md">✓ TAVI & Valve Replacement</div>
                <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md">✓ Radial Angioplasty</div>
                <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md">✓ Open Heart CABG Surgery</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/15">
              <span className="text-xs font-bold text-[#EAF6FA]">14 Senior Cardiologists</span>
              <button 
                onClick={() => {
                  setActivePage('specialties');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-2.5 px-4 rounded-xl bg-[#087F8C] text-white text-xs font-extrabold hover:bg-white hover:text-[#043F47] transition-colors flex items-center space-x-1.5 shadow-md"
              >
                <span>Explore Department</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Neurosciences Card (Ice Blue Surface #EAF6FA) */}
          <div className="bg-[#EAF6FA] rounded-3xl p-6 border border-[#DCECEF] shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#075E68] flex items-center justify-center mb-4 shadow-sm">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#123238] mb-2">{neuro?.name}</h3>
              <p className="text-xs text-[#587176] leading-relaxed mb-4">{neuro?.description}</p>
            </div>
            <button 
              onClick={() => setActivePage('specialties')}
              className="text-xs font-bold text-[#075E68] hover:text-[#087F8C] flex items-center space-x-1"
            >
              <span>Explore Neurosciences</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Orthopaedics Card (Ice Blue Surface #EAF6FA) */}
          <div className="bg-[#EAF6FA] rounded-3xl p-6 border border-[#DCECEF] shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white text-[#075E68] flex items-center justify-center mb-4 shadow-sm">
                <Bone className="w-6 h-6 text-[#087F8C]" />
              </div>
              <h3 className="text-xl font-bold text-[#123238] mb-2">{ortho?.name}</h3>
              <p className="text-xs text-[#587176] leading-relaxed mb-4">{ortho?.description}</p>
            </div>
            <button 
              onClick={() => setActivePage('specialties')}
              className="text-xs font-bold text-[#075E68] hover:text-[#087F8C] flex items-center space-x-1"
            >
              <span>Explore Joint Care</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Oncology Card (White Canvas) */}
          <div className="md:col-span-2 bg-[#F8FBFC] rounded-3xl p-6 border border-[#DCECEF] shadow-card hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#075E68] text-white flex items-center justify-center shadow-sm">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#123238]">{oncology?.name}</h3>
              </div>
              <p className="text-xs text-[#587176] leading-relaxed mb-4 max-w-xl">{oncology?.description}</p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-bold text-[#087F8C]">Immunotherapy & Daycare Chemotherapy</span>
              <button 
                onClick={() => setActivePage('specialties')}
                className="text-xs font-bold text-[#075E68] hover:text-[#087F8C] flex items-center space-x-1"
              >
                <span>Learn More &rarr;</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
