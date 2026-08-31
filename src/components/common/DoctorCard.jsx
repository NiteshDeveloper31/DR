import React from 'react';
import { Calendar, Award, MapPin } from 'lucide-react';

export default function DoctorCard({ doctor, onSelectDoctor, onViewProfile }) {
  return (
    <div className="bg-white rounded-2xl border border-[#DCECEF] overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col group">
      
      {/* Image & Availability Badge */}
      <div className="relative h-64 bg-gradient-to-br from-[#EAF6FA] to-[#D8EEF4] overflow-hidden">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = doctor.gender === 'female' 
              ? "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80" 
              : "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#087F8C]/30 shadow-sm flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#159A86] animate-pulse"></span>
          <span className="text-[11px] font-bold text-[#075E68]">{doctor.availabilityStatus}</span>
        </div>
        <div className="absolute bottom-3 left-3 bg-[#043F47]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg backdrop-blur-md">
          {doctor.experienceYears}+ Years Exp
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-1">
            {doctor.specialtyName}
          </div>
          <h3 className="text-lg font-bold text-[#123238] group-hover:text-[#075E68] transition-colors leading-snug">
            {doctor.name}
          </h3>
          <div className="text-xs text-[#587176] font-medium mt-1 line-clamp-1">
            {doctor.qualification}
          </div>
        </div>

        {/* Languages & Location */}
        <div className="bg-[#F8FBFC] p-3 rounded-xl space-y-1.5 text-xs text-[#587176] border border-[#DCECEF]">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#123238]">Languages:</span>
            <span>{doctor.languages.join(', ')}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-[#123238]">Location:</span>
            <span className="flex items-center space-x-1 text-[#075E68] font-bold">
              <MapPin className="w-3 h-3 text-[#087F8C]" />
              <span>Mumbai Central</span>
            </span>
          </div>
        </div>

        {/* Fee & Action Buttons */}
        <div className="pt-2 border-t border-[#DCECEF]">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-xs text-[#587176]">OPD Consultation Fee</span>
            <div className="text-lg font-extrabold text-[#075E68]">
              ₹{doctor.fee}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => onViewProfile(doctor.id)}
              className="py-2.5 px-3 rounded-xl border border-[#075E68] text-[#075E68] text-xs font-bold hover:bg-[#EAF6FA] transition-colors text-center"
            >
              View Profile
            </button>
            <button 
              onClick={() => onSelectDoctor(doctor)}
              className="py-2.5 px-3 rounded-xl bg-[#075E68] text-white text-xs font-bold hover:bg-[#043F47] transition-colors text-center flex items-center justify-center space-x-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#087F8C]" />
              <span>Book Slot</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
