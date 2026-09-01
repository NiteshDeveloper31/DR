import React from 'react';
import { ArrowRight, UserCheck } from 'lucide-react';
import { doctorsData } from '../../data/doctors';
import DoctorCard from '../common/DoctorCard';

export default function FeaturedDoctors({ setActivePage, setSelectedDoctorId, setSelectedDoctorForBooking }) {
  const featuredDoctors = doctorsData.filter(d => d.featured).slice(0, 4);

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctorForBooking(doctor);
    setActivePage('appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProfile = (id) => {
    setSelectedDoctorId(id);
    setActivePage('doctor-profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2 flex items-center space-x-1.5">
              <UserCheck className="w-4 h-4 text-[#087F8C]" />
              <span>Senior Clinical Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              Expertise You Can Trust.
            </h2>
            <p className="text-sm sm:text-base text-[#33413B] mt-2 max-w-xl">
              Experienced senior consultants from AIIMS, KEM, and Royal Colleges dedicated to precision diagnosis and empathetic care.
            </p>
          </div>

          <button 
            onClick={() => {
              setActivePage('doctors');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 py-3.5 px-6 rounded-2xl bg-white border border-[#1A3C34] text-[#1A3C34] font-extrabold text-xs hover:bg-[#1A3C34] hover:text-white transition-all flex items-center space-x-2 self-start md:self-auto shadow-sm"
          >
            <span>View All 350+ Doctors</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Doctor Cards Grid - Wider Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDoctors.map(doctor => (
            <DoctorCard 
              key={doctor.id}
              doctor={doctor}
              onSelectDoctor={handleSelectDoctor}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
