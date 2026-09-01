import React from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Award, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  HeartPulse, 
  Star, 
  Check, 
  Phone,
  GraduationCap,
  Sparkles,
  Stethoscope
} from 'lucide-react';
import { doctorsData } from '../data/doctors';

export default function DoctorProfilePage({ doctorId, setActivePage, setSelectedDoctorForBooking }) {
  const doctor = doctorsData.find(d => d.id === doctorId) || doctorsData[0];

  const handleBookSlot = () => {
    setSelectedDoctorForBooking(doctor);
    setActivePage('appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeDays = (doctor.schedule || []).map(s => s.day.substring(0, 3).toUpperCase());
  const allDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="py-10 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Button Link */}
        <button 
          onClick={() => {
            setActivePage('doctors');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1A3C34] hover:text-[#087F8C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Doctor Directory</span>
        </button>

        {/* 1. DOCTOR HERO HEADER (Seamless Editorial Banner) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E4DC] shadow-card">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* Real Doctor Portrait Photo */}
            <div className="relative flex-shrink-0">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-44 h-44 sm:w-52 sm:h-52 rounded-3xl object-cover object-top border border-[#E8E4DC] shadow-md"
                onError={(e) => {
                  e.target.src = doctor.gender === 'female' 
                    ? "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80" 
                    : "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute -bottom-2.5 inset-x-4 bg-[#1A3C34] text-white text-[10px] font-bold py-1 rounded-full text-center shadow-sm">
                Verified Senior Specialist
              </div>
            </div>

            {/* Main Info */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF6FA] text-[#1A3C34] text-xs font-bold border border-[#DCECEF]">
                <span className="w-2 h-2 rounded-full bg-[#159A86] animate-pulse"></span>
                <span>{doctor.availabilityStatus} at Mumbai Central Campus</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
                {doctor.name}
              </h1>

              <div className="text-sm font-bold text-[#087F8C]">
                {doctor.title || doctor.designation}
              </div>

              <p className="text-xs sm:text-sm text-[#587176] font-medium leading-relaxed max-w-2xl">
                {doctor.qualification}
              </p>

              {/* Key Credibility Pills */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                <span className="px-3 py-1 rounded-xl bg-[#FEF3F2] border border-[#FCA5A5] text-[#D92D20] text-xs font-extrabold flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{doctor.experienceYears}+ Years Experience</span>
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#F8FBFC] border border-[#DCECEF] text-xs font-bold text-[#1A3C34]">
                  🏆 12K+ Procedures
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#F8FBFC] border border-[#DCECEF] text-xs font-bold text-[#087F8C]">
                  🎓 AIIMS & KEM Alumni
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#F8FBFC] border border-[#DCECEF] text-xs font-bold text-[#075E68]">
                  ⭐ Fellow FSCAI (USA)
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 2. STANDARD 2-COLUMN INSTITUTIONAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT MAIN EDITORIAL CONTENT (8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Biography & Clinical Approach */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DC] shadow-card space-y-4">
              <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider flex items-center space-x-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-[#087F8C]" />
                <span>Clinical Biography & Background</span>
              </div>
              <h2 className="text-xl font-bold text-[#1A3C34]">About {doctor.name}</h2>
              <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed">
                {doctor.bio}
              </p>
            </div>

            {/* Clinical Specialization & Procedures */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DC] shadow-card space-y-6">
              <div>
                <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-1">
                  Specialized Care
                </div>
                <h3 className="text-xl font-bold text-[#1A3C34]">Clinical Expertise & Conditions Treated</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#1A3C34]">
                {doctor.expertise.map((exp, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#087F8C] flex-shrink-0" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Credentials Pathway */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DC] shadow-card space-y-4">
              <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider flex items-center space-x-1.5">
                <GraduationCap className="w-4.5 h-4.5 text-[#087F8C]" />
                <span>Academic Qualifications & Pathway</span>
              </div>
              
              <div className="p-4 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] flex flex-wrap items-center justify-around gap-3 text-xs font-bold text-[#1A3C34] text-center">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#087F8C]"></span>
                  <span>AIIMS / KEM Medical College</span>
                </div>
                <span className="text-[#587176] hidden sm:inline">&rarr;</span>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#1A3C34]"></span>
                  <span>DM Cardiology / MS Ortho</span>
                </div>
                <span className="text-[#587176] hidden sm:inline">&rarr;</span>
                <div className="flex items-center space-x-2 text-[#075E68]">
                  <span className="w-2 h-2 rounded-full bg-[#159A86]"></span>
                  <span>Aarogya Prime Hospital</span>
                </div>
              </div>
            </div>

            {/* OPD Consultation Schedule Matrix */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DC] shadow-card space-y-5">
              <div>
                <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider flex items-center space-x-1.5 mb-1">
                  <Clock className="w-4 h-4 text-[#1A3C34]" />
                  <span>Weekly Consultation Schedule</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A3C34]">OPD Availability Matrix</h3>
              </div>

              {/* Responsive Day Matrix */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
                {allDays.map((day) => {
                  const isAvailable = activeDays.includes(day);
                  return (
                    <div 
                      key={day} 
                      className={`p-3 rounded-2xl border transition-all flex flex-col items-center justify-between ${
                        isAvailable 
                          ? 'bg-[#EAF6FA] border-[#087F8C] text-[#1A3C34]' 
                          : 'bg-[#F8FBFC] border-[#DCECEF] text-[#587176]/50 opacity-60'
                      }`}
                    >
                      <div className="text-xs font-extrabold">{day}</div>
                      <div className="mt-2">
                        {isAvailable ? (
                          <div className="w-5 h-5 rounded-full bg-[#1A3C34] text-white flex items-center justify-center text-xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="text-xs text-[#587176]">—</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-xs text-[#587176] bg-[#F8FBFC] p-3.5 rounded-2xl border border-[#DCECEF] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span>Location: <strong className="text-[#1A3C34]">OPD Block A, 2nd Floor, Room 204</strong></span>
                <button onClick={handleBookSlot} className="text-[#1A3C34] font-bold hover:underline">
                  Select Time Slot &rarr;
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT STICKY BOOKING SIDEBAR (4 Columns) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            
            {/* OPD Booking Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8E4DC] shadow-card space-y-5">
              <div className="space-y-1 text-center border-b border-[#E8E4DC] pb-4">
                <div className="text-xs font-bold text-[#587176]">OPD Consultation Fee</div>
                <div className="text-4xl font-extrabold text-[#1A3C34]">₹{doctor.fee}</div>
                <div className="text-[11px] text-[#087F8C] font-semibold">Includes initial 30-min evaluation</div>
              </div>

              <div className="space-y-3 text-xs text-[#587176]">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#087F8C] flex-shrink-0" />
                  <span>Mumbai Central Campus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#1A3C34] flex-shrink-0" />
                  <span>Next Available: <strong>{doctor.availabilityStatus}</strong></span>
                </div>
              </div>

              <button 
                onClick={handleBookSlot}
                className="w-full py-4 rounded-2xl bg-[#1A3C34] text-white font-extrabold text-xs hover:bg-[#0F3B36] shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#087F8C]" />
                <span>Book OPD Appointment</span>
              </button>

              <a 
                href="tel:1800221080"
                className="w-full py-3 rounded-2xl bg-[#FEF3F2] border border-[#FCA5A5] text-[#D92D20] font-bold text-xs flex items-center justify-center space-x-2 text-center"
              >
                <Phone className="w-4 h-4 text-[#D92D20]" />
                <span>Call 24x7 Helpline: 1800-221-080</span>
              </a>
            </div>

            {/* Accreditation Badge */}
            <div className="bg-[#EAF6FA] rounded-2xl p-4 border border-[#DCECEF] text-center space-y-1">
              <div className="text-xs font-extrabold text-[#1A3C34]">NABH & NABL Accredited Care</div>
              <div className="text-[11px] text-[#587176]">100% Cashless TPA Helpdesk Available</div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
