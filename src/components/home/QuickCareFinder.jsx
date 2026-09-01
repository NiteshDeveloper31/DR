import React, { useState } from 'react';
import { UserCheck, Stethoscope, HeartPulse, ShieldAlert, Search, ArrowRight, Sparkles } from 'lucide-react';
import { doctorsData } from '../../data/doctors';

export default function QuickCareFinder({ setActivePage, setSelectedDoctorId }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = doctorsData.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.specialtyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-10 sm:py-12 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DC] shadow-card space-y-6">
          
          {/* Header + Integrated Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E4DC]">
            <div>
              <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#087F8C]" />
                <span>Interactive Care Navigation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
                How Can We Support Your Care Today?
              </h2>
            </div>

            {/* Compact Search Bar */}
            <div className="w-full md:w-96 relative">
              <div className="flex items-center space-x-2 bg-[#F8FBFC] px-3.5 py-2.5 rounded-2xl border border-[#DCECEF] focus-within:border-[#1A3C34] transition-colors">
                <Search className="w-4 h-4 text-[#1A3C34] flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Search doctor, condition, or treatment..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-xs font-semibold text-[#123238] placeholder-[#587176]"
                />
              </div>

              {/* Instant Search Results Dropdown */}
              {searchTerm.trim() !== '' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-[#DCECEF] shadow-2xl p-2 z-30 max-h-64 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <div className="text-xs text-[#587176] text-center py-3">No matching specialists found for "{searchTerm}"</div>
                  ) : (
                    filtered.slice(0, 4).map(doc => (
                      <div 
                        key={doc.id}
                        onClick={() => {
                          setSelectedDoctorId(doc.id);
                          setActivePage('doctor-profile');
                        }}
                        className="p-2 rounded-xl hover:bg-[#EAF6FA] cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div className="flex items-center space-x-2.5">
                          <img src={doc.image} alt={doc.name} className="w-8 h-8 rounded-full object-cover border border-[#087F8C]/30" />
                          <div>
                            <div className="text-xs font-bold text-[#123238]">{doc.name}</div>
                            <div className="text-[10px] text-[#087F8C]">{doc.specialtyName}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#587176]" />
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 4 Compact Action Pathways */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Find a Doctor */}
            <div 
              onClick={() => {
                setActivePage('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl bg-[#EAF6FA] border border-[#087F8C]/30 hover:border-[#1A3C34] hover:shadow-md transition-all cursor-pointer group flex items-start space-x-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1A3C34] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <UserCheck className="w-5 h-5 text-[#EAF6FA]" />
              </div>
              <div className="space-y-0.5">
                <div className="font-extrabold text-sm text-[#1A3C34] group-hover:text-[#087F8C] transition-colors">
                  Find a Doctor
                </div>
                <div className="text-xs text-[#587176] font-medium">
                  350+ Clinical Specialists
                </div>
              </div>
            </div>

            {/* 2. Explore Treatments */}
            <div 
              onClick={() => {
                setActivePage('treatments');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] hover:border-[#1A3C34] hover:shadow-md transition-all cursor-pointer group flex items-start space-x-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EAF6FA] text-[#087F8C] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-extrabold text-sm text-[#123238] group-hover:text-[#1A3C34] transition-colors">
                  Specialized Surgeries
                </div>
                <div className="text-xs text-[#587176] font-medium">
                  Robotic & Interventional Care
                </div>
              </div>
            </div>

            {/* 3. Health Checkups */}
            <div 
              onClick={() => {
                setActivePage('health-checkups');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] hover:border-[#1A3C34] hover:shadow-md transition-all cursor-pointer group flex items-start space-x-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EAF6FA] text-[#087F8C] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <div className="font-extrabold text-sm text-[#123238] group-hover:text-[#1A3C34] transition-colors">
                  Health Checkups
                </div>
                <div className="text-xs text-[#587176] font-medium">
                  Preventive Screening Packages
                </div>
              </div>
            </div>

            {/* 4. 24x7 Emergency Care */}
            <div 
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl bg-[#FEF3F2] border border-[#FCA5A5] hover:bg-[#FEE2E2] transition-all cursor-pointer group flex items-start space-x-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D92D20] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                <ShieldAlert className="w-5 h-5 animate-pulse" />
              </div>
              <div className="space-y-0.5">
                <div className="font-extrabold text-sm text-[#D92D20]">
                  Emergency 24x7
                </div>
                <div className="text-xs text-[#D92D20]/80 font-medium">
                  Ambulance & Cath Lab Unit
                </div>
              </div>
            </div>

          </div>

          {/* Quick Specialty Search Chips */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#587176]">
            <span className="font-bold text-[#1A3C34]">Popular Specialties:</span>
            <button onClick={() => { setSelectedDoctorId('dr-ananya-deshmukh'); setActivePage('doctors'); }} className="px-3 py-1 rounded-full bg-[#F8FBFC] border border-[#DCECEF] hover:border-[#1A3C34] text-[#1A3C34] font-semibold transition-colors">Cardiology</button>
            <button onClick={() => { setActivePage('specialties'); }} className="px-3 py-1 rounded-full bg-[#F8FBFC] border border-[#DCECEF] hover:border-[#1A3C34] text-[#1A3C34] font-semibold transition-colors">Orthopedics & Joint</button>
            <button onClick={() => { setActivePage('specialties'); }} className="px-3 py-1 rounded-full bg-[#F8FBFC] border border-[#DCECEF] hover:border-[#1A3C34] text-[#1A3C34] font-semibold transition-colors">Neurology</button>
            <button onClick={() => { setActivePage('specialties'); }} className="px-3 py-1 rounded-full bg-[#F8FBFC] border border-[#DCECEF] hover:border-[#1A3C34] text-[#1A3C34] font-semibold transition-colors">Robotic Surgery</button>
            <button onClick={() => { setActivePage('health-checkups'); }} className="px-3 py-1 rounded-full bg-[#F8FBFC] border border-[#DCECEF] hover:border-[#1A3C34] text-[#1A3C34] font-semibold transition-colors">Executive Health Checkup</button>
          </div>

        </div>

      </div>
    </section>
  );
}
