import React, { useState } from 'react';
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
  Activity, 
  Sparkles,
  Zap,
  Check,
  Phone
} from 'lucide-react';
import { doctorsData } from '../data/doctors';

export default function DoctorProfilePage({ doctorId, setActivePage, setSelectedDoctorForBooking }) {
  const doctor = doctorsData.find(d => d.id === doctorId) || doctorsData[0];
  const [activeExpertiseTab, setActiveExpertiseTab] = useState(0);

  const handleBookSlot = () => {
    setSelectedDoctorForBooking(doctor);
    setActivePage('appointment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compute active consultation days
  const activeDays = (doctor.schedule || []).map(s => s.day.substring(0, 3).toUpperCase());
  const allDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="py-12 bg-[#F8FBFC] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Button */}
        <button 
          onClick={() => {
            setActivePage('doctors');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#075E68] hover:text-[#087F8C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Doctor Directory</span>
        </button>

        {/* 1. DOCTOR HERO HEADER CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCECEF] shadow-xl space-y-6">
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            
            {/* Photo */}
            <div className="relative flex-shrink-0">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl object-cover object-top border-2 border-[#087F8C]/30 shadow-lg"
                onError={(e) => {
                  e.target.src = doctor.gender === 'female' 
                    ? "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80" 
                    : "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute -bottom-2 right-2 bg-[#075E68] text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-md">
                Verified Specialist
              </div>
            </div>

            {/* Main Doctor Info */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF6FA] text-[#075E68] text-xs font-bold border border-[#DCECEF]">
                <span className="w-2 h-2 rounded-full bg-[#159A86] animate-pulse"></span>
                <span>{doctor.availabilityStatus} at Mumbai Central Campus</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123238]">
                {doctor.name}
              </h1>

              <div className="text-sm font-bold text-[#087F8C] flex items-center justify-center md:justify-start space-x-2">
                <span>{doctor.title || doctor.designation}</span>
              </div>

              {/* Rating & Experience Tag */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-[#FEF3F2] border border-[#FCA5A5]/60 text-[#D92D20] text-xs font-extrabold flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{doctor.experienceYears}+ Years Experience</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#EAF6FA] text-[#075E68] text-xs font-bold border border-[#DCECEF]">
                  {doctor.specialtyName}
                </span>
              </div>

              {/* Qualifications */}
              <p className="text-xs text-[#587176] font-medium leading-relaxed max-w-2xl">
                {doctor.qualification}
              </p>

              {/* Credibility Chips Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                <span className="px-2.5 py-1 rounded-lg bg-[#F8FBFC] border border-[#DCECEF] text-[11px] font-bold text-[#123238]">
                  🏆 12K+ Procedures
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F8FBFC] border border-[#DCECEF] text-[11px] font-bold text-[#D92D20]">
                  🚨 24x7 Emergency Ready
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F8FBFC] border border-[#DCECEF] text-[11px] font-bold text-[#075E68]">
                  🎓 KEM & AIIMS Alumni
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#F8FBFC] border border-[#DCECEF] text-[11px] font-bold text-[#087F8C]">
                  ⭐ Fellow FSCAI (USA)
                </span>
              </div>

            </div>

            {/* Right Fee & Booking Box */}
            <div className="bg-gradient-to-br from-[#EAF6FA] to-[#F8FBFC] rounded-2xl p-6 border border-[#DCECEF] text-center w-full md:w-64 space-y-3 flex-shrink-0 shadow-sm">
              <div className="text-xs text-[#587176]">OPD Consultation Fee</div>
              <div className="text-3xl font-black text-[#075E68]">₹{doctor.fee}</div>
              <button 
                onClick={handleBookSlot}
                className="w-full py-3.5 rounded-xl bg-[#075E68] text-white font-extrabold text-xs hover:bg-[#043F47] transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#087F8C]" />
                <span>Book OPD Slot</span>
              </button>
            </div>

          </div>

        </div>

        {/* 2. EXPERIENCE & CREDENTIALS STRIP */}
        <div className="bg-white rounded-3xl p-6 border border-[#DCECEF] shadow-card space-y-3">
          <div className="text-xs font-extrabold text-[#075E68] uppercase tracking-wider flex items-center space-x-1.5">
            <Award className="w-4 h-4 text-[#087F8C]" />
            <span>Academic Credentials & Clinical Pathway</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] flex flex-wrap items-center justify-around gap-3 text-xs font-bold text-[#123238] text-center">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#087F8C]"></span>
              <span>KEM / AIIMS Medical College</span>
            </div>
            <span className="text-[#587176] hidden sm:inline">&rarr;</span>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#075E68]"></span>
              <span>DM Cardiology / MS Ortho</span>
            </div>
            <span className="text-[#587176] hidden sm:inline">&rarr;</span>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#087F8C]"></span>
              <span>International Fellowship</span>
            </div>
            <span className="text-[#587176] hidden sm:inline">&rarr;</span>
            <div className="flex items-center space-x-2 text-[#075E68]">
              <span className="w-2 h-2 rounded-full bg-[#159A86]"></span>
              <span>Aarogya Prime Hospital</span>
            </div>
          </div>
        </div>

        {/* 3. CLINICAL EXPERTISE WITH INTERACTIVE ILLUSTRATION */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCECEF] shadow-card space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xs font-extrabold text-[#087F8C] uppercase tracking-wider">Clinical Specialization</div>
              <h2 className="text-2xl font-extrabold text-[#123238]">Specialized Expertise & Diagnostics</h2>
            </div>
            <Activity className="w-6 h-6 text-[#075E68]" />
          </div>

          {/* Interactive Expertise Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {doctor.expertise.slice(0, 3).map((exp, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveExpertiseTab(idx)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  activeExpertiseTab === idx 
                    ? 'bg-[#EAF6FA] border-[#075E68] shadow-md scale-102' 
                    : 'bg-[#F8FBFC] border-[#DCECEF] hover:border-[#075E68]'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-white text-[#075E68] flex items-center justify-center font-extrabold text-xs mb-3 shadow-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-extrabold text-sm text-[#123238] mb-1">{exp}</h3>
                <p className="text-xs text-[#587176] leading-relaxed">
                  Advanced clinical evaluation and treatment protocols supervised directly by {doctor.name}.
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Heart / Clinical Diagram Canvas Placeholder */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#075E68] to-[#043F47] text-white text-center space-y-3 relative overflow-hidden shadow-lg">
            <div className="text-xs font-bold text-[#EAF6FA] uppercase tracking-wider">Interactive Clinical Protocol Diagram</div>
            <div className="text-lg font-extrabold">Precision Interventional Pathway</div>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-2 text-xs font-bold">
              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20">Radial Access PCI</span>
              <span className="text-[#087F8C]">&rarr;</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20">FFR / IVUS Stenting</span>
              <span className="text-[#087F8C]">&rarr;</span>
              <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20">Zero-Complication Recovery</span>
            </div>
          </div>
        </div>

        {/* 4. PROCEDURE PORTFOLIO TAGS */}
        <div className="bg-white rounded-3xl p-6 border border-[#DCECEF] shadow-card space-y-4">
          <h3 className="text-base font-extrabold text-[#123238] flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#087F8C]" />
            <span>Procedure & Surgical Portfolio</span>
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {doctor.procedures.map((proc, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-xl bg-[#EAF6FA] border border-[#087F8C]/30 text-xs font-bold text-[#075E68] shadow-sm flex items-center space-x-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087F8C]" />
                <span>{proc}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 5. OPD AVAILABILITY SCHEDULE MATRIX */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-[#DCECEF] shadow-card space-y-5">
          <div>
            <div className="text-xs font-extrabold text-[#087F8C] uppercase tracking-wider flex items-center space-x-1.5 mb-1">
              <Clock className="w-4 h-4 text-[#075E68]" />
              <span>Weekly OPD Schedule</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#123238]">
              OPD Consultation Availability Matrix
            </h3>
          </div>

          {/* Matrix Table Grid (3 Columns on Mobile, 6 Columns on Desktop) */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 text-center">
            {allDays.map((day) => {
              const isAvailable = activeDays.includes(day);
              return (
                <div 
                  key={day} 
                  className={`p-3 sm:p-4 rounded-2xl border transition-all flex flex-col items-center justify-between ${
                    isAvailable 
                      ? 'bg-[#EAF6FA] border-[#075E68] text-[#075E68] shadow-sm' 
                      : 'bg-[#F8FBFC] border-[#DCECEF] text-[#587176]/50 opacity-60'
                  }`}
                >
                  <div className="text-xs font-extrabold uppercase">{day}</div>
                  <div className="mt-2">
                    {isAvailable ? (
                      <div className="w-6 h-6 rounded-full bg-[#075E68] text-white flex items-center justify-center shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    ) : (
                      <div className="text-xs text-[#587176] font-bold">—</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-xs text-[#587176] bg-[#F8FBFC] p-3.5 rounded-2xl border border-[#DCECEF] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span>OPD Location: <strong className="text-[#123238]">Block A, 2nd Floor, Room 204</strong></span>
            <button onClick={handleBookSlot} className="text-[#075E68] font-bold hover:underline">
              Select Specific Time Slot &rarr;
            </button>
          </div>
        </div>

        {/* 6. PATIENT CLINICAL JOURNEY FLOW */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCECEF] shadow-card space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <div className="text-xs font-extrabold text-[#087F8C] uppercase tracking-wider">Patient Care Protocol</div>
            <h3 className="text-2xl font-extrabold text-[#123238]">4-Stage Clinical Recovery Journey</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-1">
              <div className="text-xs font-black text-[#075E68]">01 EMERGENCY / OPD</div>
              <div className="text-[11px] text-[#587176]">Rapid Triaging & Evaluation</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-1">
              <div className="text-xs font-black text-[#075E68]">02 DIAGNOSIS</div>
              <div className="text-[11px] text-[#587176]">3T MRI & NABL Testing</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-1">
              <div className="text-xs font-black text-[#075E68]">03 TREATMENT</div>
              <div className="text-[11px] text-[#587176]">Targeted Surgery / Procedure</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-1">
              <div className="text-xs font-black text-[#075E68]">04 RECOVERY</div>
              <div className="text-[11px] text-[#587176]">Follow-up & Rehabilitation</div>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button 
              onClick={handleBookSlot}
              className="py-3.5 px-6 rounded-xl bg-[#075E68] text-white font-extrabold text-xs hover:bg-[#043F47] shadow-md flex items-center justify-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-[#087F8C]" />
              <span>Book Appointment with {doctor.name}</span>
            </button>

            <a 
              href="tel:1800221080"
              className="py-3.5 px-6 rounded-xl bg-[#FEF3F2] border border-[#FCA5A5] text-[#D92D20] font-bold text-xs flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-[#D92D20]" />
              <span>Call 24x7 Cardiac Helpline</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
