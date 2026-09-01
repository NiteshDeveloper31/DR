import React, { useState } from 'react';
import { Search, UserCheck, Filter } from 'lucide-react';
import { doctorsData } from '../data/doctors';
import { specialtiesData } from '../data/specialties';
import DoctorCard from '../components/common/DoctorCard';

export default function DoctorsPage({ setActivePage, setSelectedDoctorId, setSelectedDoctorForBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedGender, setSelectedGender] = useState('all');
  const [sortBy, setSortBy] = useState('experience');

  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialtyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialtyId === selectedSpecialty;
    const matchesGender = selectedGender === 'all' || doctor.gender === selectedGender;

    return matchesSearch && matchesSpecialty && matchesGender;
  }).sort((a, b) => {
    if (sortBy === 'experience') return b.experienceYears - a.experienceYears;
    if (sortBy === 'fee-low') return a.fee - b.fee;
    if (sortBy === 'fee-high') return b.fee - a.fee;
    return 0;
  });

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
    <div className="py-12 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E4DC] shadow-sm">
            <UserCheck className="w-4 h-4 text-[#087F8C]" />
            <span className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">
              Senior Clinical Directory
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
            Find a Medical Specialist
          </h1>
          <p className="text-sm sm:text-base text-[#33413B] leading-relaxed">
            350+ senior consultants available for OPD consultations at Aarogya Prime Hospital Mumbai Central.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E4DC]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-4">
          
          {/* Search Input */}
          <div className="flex items-center space-x-3 bg-[#F8FBFC] p-3.5 rounded-2xl border border-[#DCECEF]">
            <Search className="w-5 h-5 text-[#1A3C34]" />
            <input 
              type="text"
              placeholder="Search doctor name, medical condition, or clinical specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm font-semibold text-[#1A3C34] placeholder-[#587176]"
            />
          </div>

          {/* Dropdown Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-[10px] font-extrabold text-[#1A3C34] uppercase tracking-wider mb-1.5">Clinical Specialty</label>
              <select 
                value={selectedSpecialty} 
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full h-11 px-3.5 rounded-2xl border border-[#DCECEF] bg-[#F8FBFC] text-xs font-semibold text-[#1A3C34] outline-none focus:border-[#1A3C34]"
              >
                <option value="all">All Specialities (14)</option>
                {specialtiesData.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold text-[#1A3C34] uppercase tracking-wider mb-1.5">Gender Filter</label>
              <select 
                value={selectedGender} 
                onChange={(e) => setSelectedGender(e.target.value)}
                className="w-full h-11 px-3.5 rounded-2xl border border-[#DCECEF] bg-[#F8FBFC] text-xs font-semibold text-[#1A3C34] outline-none focus:border-[#1A3C34]"
              >
                <option value="all">All Doctors</option>
                <option value="male">Male Doctors</option>
                <option value="female">Female Doctors</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-extrabold text-[#1A3C34] uppercase tracking-wider mb-1.5">Sort Options</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-11 px-3.5 rounded-2xl border border-[#DCECEF] bg-[#F8FBFC] text-xs font-semibold text-[#1A3C34] outline-none focus:border-[#1A3C34]"
              >
                <option value="experience">Experience (Highest First)</option>
                <option value="fee-low">Consultation Fee (Low to High)</option>
                <option value="fee-high">Consultation Fee (High to Low)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Doctor Grid - Wider Gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDoctors.map(doctor => (
            <DoctorCard 
              key={doctor.id}
              doctor={doctor}
              onSelectDoctor={handleSelectDoctor}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
