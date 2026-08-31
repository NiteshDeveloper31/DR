import React from 'react';
import { CalendarCheck, MapPin, UserCheck, Activity, Heart, Sparkles } from 'lucide-react';

export default function PatientJourneyTimeline() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Find the Right Specialist",
      desc: "Select specialty or doctor online, pick convenient date & time slot, and receive instant QR appointment voucher.",
      icon: CalendarCheck
    },
    {
      num: "02",
      title: "Consult",
      subtitle: "Understand Your Options",
      desc: "Detailed clinical evaluation with senior AIIMS/KEM consultants in private, comfortable consultation suites.",
      icon: UserCheck
    },
    {
      num: "03",
      title: "Diagnose",
      subtitle: "Coordinated Diagnostics",
      desc: "High-precision NABL pathology and 3T MRI diagnostic imaging with digital report delivery straight to your phone.",
      icon: Activity
    },
    {
      num: "04",
      title: "Treat",
      subtitle: "Targeted Medical/Surgical Care",
      desc: "Advanced daycare or inpatient medical/surgical procedure at NABH accredited facilities with 100% Cashless TPA.",
      icon: Heart
    },
    {
      num: "05",
      title: "Recover",
      subtitle: "Rehabilitation & Follow-up",
      desc: "Ongoing tele-consultation follow-up, dietary guidance, and physical rehabilitation tracking.",
      icon: Sparkles
    },
    {
      num: "06",
      title: "Prevent",
      subtitle: "Long-Term Wellness Planning",
      desc: "Annual health checkup tracking and personalized preventive health management to maintain long-term wellness.",
      icon: MapPin
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2">
            Integrated Patient Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
            Your Healthcare Journey
          </h2>
          <p className="text-sm sm:text-base text-[#587176] mt-2">
            Designed for complete transparency, minimal waiting, and empathetic guidance at every step
          </p>
        </div>

        {/* 6 Step Horizontal Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-[#EAF6FA] rounded-2xl p-6 border border-[#DCECEF] hover:border-[#075E68] transition-all flex flex-col justify-between relative group">
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#075E68]/30 group-hover:text-[#087F8C] transition-colors">{s.num}</span>
                    <div className="w-9 h-9 rounded-xl bg-white text-[#075E68] flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#123238] mb-0.5">{s.title}</h3>
                  <div className="text-xs font-semibold text-[#087F8C] mb-3">{s.subtitle}</div>
                  <p className="text-xs text-[#587176] leading-relaxed">{s.desc}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
