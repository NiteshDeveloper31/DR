import React, { useState } from 'react';
import { UserCheck, Stethoscope, HeartPulse, ShieldAlert, Search, ArrowRight } from 'lucide-react';
import { doctorsData } from '../../data/doctors';

export default function QuickCareFinder({ setActivePage, setSelectedDoctorId }) {
  const [activePathway, setActivePathway] = useState('doctor');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = doctorsData.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.specialtyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-16 bg-[#EAF6FA] border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2">
            Interactive Care Navigation
          </div>
          <h2 className="text-3xl font-extrabold text-[#123238]">
            How can we help you today?
          </h2>
          <p className="text-sm text-[#587176] mt-2">
            Select a pathway or search directly by doctor, medical condition, or treatment
          </p>
        </div>

        {/* 4 Pathway Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button 
            onClick={() => {
              setActivePathway('doctor');
              setActivePage('doctors');
            }}
            className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-36 ${
              activePathway === 'doctor' 
                ? 'bg-[#075E68] border-[#075E68] text-white shadow-lg scale-102' 
                : 'bg-white border-[#DCECEF] text-[#123238] hover:border-[#075E68]'
            }`}
          >
            <UserCheck className={`w-7 h-7 ${activePathway === 'doctor' ? 'text-[#087F8C]' : 'text-[#075E68]'}`} />
            <div>
              <div className="font-extrabold text-base">Find a Doctor</div>
              <div className={`text-xs mt-0.5 ${activePathway === 'doctor' ? 'text-[#D8EEF4]' : 'text-[#587176]'}`}>
                350+ Clinical Specialists
              </div>
            </div>
          </button>

          <button 
            onClick={() => {
              setActivePathway('treatment');
              setActivePage('treatments');
            }}
            className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-36 ${
              activePathway === 'treatment' 
                ? 'bg-[#075E68] border-[#075E68] text-white shadow-lg scale-102' 
                : 'bg-white border-[#DCECEF] text-[#123238] hover:border-[#075E68]'
            }`}
          >
            <Stethoscope className={`w-7 h-7 ${activePathway === 'treatment' ? 'text-[#087F8C]' : 'text-[#075E68]'}`} />
            <div>
              <div className="font-extrabold text-base">Explore Treatments</div>
              <div className={`text-xs mt-0.5 ${activePathway === 'treatment' ? 'text-[#D8EEF4]' : 'text-[#587176]'}`}>
                Specialized Surgeries & Care
              </div>
            </div>
          </button>

          <button 
            onClick={() => {
              setActivePathway('checkup');
              setActivePage('health-checkups');
            }}
            className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-36 ${
              activePathway === 'checkup' 
                ? 'bg-[#075E68] border-[#075E68] text-white shadow-lg scale-102' 
                : 'bg-white border-[#DCECEF] text-[#123238] hover:border-[#075E68]'
            }`}
          >
            <HeartPulse className={`w-7 h-7 ${activePathway === 'checkup' ? 'text-[#087F8C]' : 'text-[#075E68]'}`} />
            <div>
              <div className="font-extrabold text-base">Health Checkups</div>
              <div className={`text-xs mt-0.5 ${activePathway === 'checkup' ? 'text-[#D8EEF4]' : 'text-[#587176]'}`}>
                Preventive Health Screening
              </div>
            </div>
          </button>

          <button 
            onClick={() => {
              setActivePathway('emergency');
              setActivePage('contact');
            }}
            className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between h-36 ${
              activePathway === 'emergency' 
                ? 'bg-[#D92D20] border-[#D92D20] text-white shadow-lg scale-102' 
                : 'bg-[#FEF3F2] border-[#FCA5A5] text-[#D92D20] hover:bg-[#FEE2E2]'
            }`}
          >
            <ShieldAlert className="w-7 h-7 text-[#D92D20] animate-bounce" />
            <div>
              <div className="font-extrabold text-base">Emergency Care</div>
              <div className="text-xs text-[#D92D20]/80 mt-0.5">
                24x7 Ambulance & Trauma
              </div>
            </div>
          </button>
        </div>

        {/* Local Search Input */}
        <div className="max-w-3xl mx-auto bg-white p-3 rounded-2xl border border-[#DCECEF] shadow-sm">
          <div className="flex items-center space-x-3 bg-[#F8FBFC] p-3 rounded-xl border border-[#DCECEF]">
            <Search className="w-5 h-5 text-[#075E68]" />
            <input 
              type="text" 
              placeholder="Search by doctor name, specialty, or condition (e.g. Cardiologist, Knee Pain, Diabetes)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm font-semibold text-[#123238] placeholder-[#587176]"
            />
          </div>

          {/* Quick Result Preview */}
          {searchTerm.trim() !== '' && (
            <div className="mt-3 bg-white rounded-xl border border-[#DCECEF] p-3 space-y-2 max-h-60 overflow-y-auto">
              {filtered.length === 0 ? (
                <div className="text-xs text-[#587176] text-center py-2">No matching doctors found for "{searchTerm}"</div>
              ) : (
                filtered.slice(0, 4).map(doc => (
                  <div 
                    key={doc.id}
                    onClick={() => {
                      setSelectedDoctorId(doc.id);
                      setActivePage('doctor-profile');
                    }}
                    className="p-2.5 rounded-lg hover:bg-[#EAF6FA] cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <img src={doc.image} alt={doc.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="text-xs font-bold text-[#123238]">{doc.name}</div>
                        <div className="text-[11px] text-[#087F8C]">{doc.specialtyName} • ₹{doc.fee}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#587176]" />
                  </div>
                ))
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
