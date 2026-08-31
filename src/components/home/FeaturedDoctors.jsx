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
    <section className="py-20 bg-[#F8FBFC] border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <UserCheck className="w-4 h-4 text-[#087F8C]" />
              <span>Medical Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
              Expertise you can trust.
            </h2>
            <p className="text-sm sm:text-base text-[#587176] mt-2 max-w-xl">
              Experienced senior consultants from AIIMS, KEM, and Royal Colleges dedicated to precision diagnosis and empathetic care.
            </p>
          </div>

          <button 
            onClick={() => {
              setActivePage('doctors');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 py-3 px-5 rounded-xl bg-white border border-[#075E68] text-[#075E68] font-bold text-xs hover:bg-[#075E68] hover:text-white transition-all flex items-center space-x-2 self-start md:self-auto shadow-sm"
          >
            <span>View All 350+ Doctors</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
