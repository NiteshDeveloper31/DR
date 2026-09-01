import React from 'react';
import { CalendarCheck, Stethoscope, Activity, HeartPulse, CheckCircle2 } from 'lucide-react';

export default function PatientJourneyTimeline() {
  const steps = [
    {
      num: "01",
      title: "Discover & Book",
      subtitle: "Instant OPD Confirmation",
      desc: "Select specialty or doctor online, pick your preferred date and time slot, and receive immediate SMS/WhatsApp appointment confirmation.",
      icon: CalendarCheck
    },
    {
      num: "02",
      title: "Consult & Diagnose",
      subtitle: "AIIMS & KEM Senior Faculty",
      desc: "In-depth clinical consultation with senior consultants followed by high-precision 3T MRI, 128-Slice CT, or NABL accredited pathology lab testing.",
      icon: Stethoscope
    },
    {
      num: "03",
      title: "Precision Care & TPA",
      subtitle: "100% Cashless Assistance",
      desc: "Targeted robotic surgical or interventional procedure in NABH accredited suites backed by 24x7 TPA desk for instant insurance approval.",
      icon: Activity
    },
    {
      num: "04",
      title: "Recovery & Follow-Up",
      subtitle: "Holistic Rehabilitation",
      desc: "Post-discharge rehabilitation tracking, dietary guidance, digital lab report access, and scheduled follow-up tele-consultations.",
      icon: HeartPulse
    }
  ];

  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2 flex items-center justify-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#087F8C]" />
            <span>Integrated Patient Care Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
            Your Seamless Healthcare Journey
          </h2>
          <p className="text-sm sm:text-base text-[#33413B] mt-2">
            Designed for complete clinical transparency, zero waiting anxiety, and compassionate guidance at every step
          </p>
        </div>

        {/* 4-Step Connected Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E4DC] shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black text-[#1A3C34]/20 group-hover:text-[#087F8C] transition-colors font-serif-editorial">
                      {s.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#EAF6FA] text-[#1A3C34] flex items-center justify-center group-hover:bg-[#1A3C34] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-[#1A3C34] mb-1 group-hover:text-[#087F8C] transition-colors">
                    {s.title}
                  </h3>
                  <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-3">
                    {s.subtitle}
                  </div>

                  {/* Body Copy */}
                  <p className="text-xs text-[#587176] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator Bar */}
                <div className="mt-6 pt-4 border-t border-[#DCECEF] flex items-center justify-between text-[11px] font-bold text-[#1A3C34]">
                  <span>Stage 0{idx + 1} of 04</span>
                  <span className="w-2 h-2 rounded-full bg-[#159A86]"></span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
