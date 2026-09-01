import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function DoctorCard({ doctor, onSelectDoctor, onViewProfile }) {
  return (
    <div className="bg-white rounded-3xl border border-[#E8E4DC]/70 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      
      {/* Doctor Photo & Availability Pill */}
      <div>
        <div className="relative h-64 bg-[#EAF6FA] overflow-hidden cursor-pointer" onClick={() => onViewProfile(doctor.id)}>
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
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/80 shadow-md flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#159A86] animate-pulse"></span>
            <span className="text-[11px] font-extrabold text-[#1A3C34]">{doctor.availabilityStatus}</span>
          </div>
          <div className="absolute bottom-3 left-3 bg-[#1A3C34]/90 text-white text-[10px] font-extrabold px-3 py-1 rounded-xl backdrop-blur-md uppercase tracking-wider">
            {doctor.experienceYears}+ Years Experience
          </div>
        </div>

        {/* Clean Essential Info */}
        <div className="p-6 space-y-2">
          <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">
            {doctor.specialtyName}
          </div>
          <h3 
            onClick={() => onViewProfile(doctor.id)}
            className="text-xl font-extrabold text-[#1A3C34] font-serif-editorial group-hover:text-[#087F8C] transition-colors leading-snug cursor-pointer"
          >
            {doctor.name}
          </h3>
          <p className="text-xs text-[#587176] font-medium line-clamp-1">
            {doctor.qualification}
          </p>
        </div>
      </div>

      {/* Primary Actions */}
      <div className="p-6 pt-0 border-t border-[#E8E4DC] mt-2 space-y-3">
        <div className="flex items-center justify-between text-xs text-[#587176] pt-3">
          <span>OPD Fee: <strong className="text-[#1A3C34] font-extrabold">₹{doctor.fee}</strong></span>
          <span className="text-[#087F8C] font-extrabold">Mumbai Central</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button 
            onClick={() => onViewProfile(doctor.id)}
            className="py-3 px-3 rounded-2xl border border-[#1A3C34] text-[#1A3C34] text-xs font-extrabold hover:bg-[#EAF6FA] transition-colors text-center shadow-sm"
          >
            View Profile
          </button>
          <button 
            onClick={() => onSelectDoctor(doctor)}
            className="py-3 px-3 rounded-2xl bg-[#1A3C34] text-white text-xs font-extrabold hover:bg-[#0F3B36] transition-colors text-center flex items-center justify-center space-x-1.5 shadow-md"
          >
            <Calendar className="w-3.5 h-3.5 text-[#087F8C]" />
            <span>Book Slot</span>
          </button>
        </div>
      </div>

    </div>
  );
}
