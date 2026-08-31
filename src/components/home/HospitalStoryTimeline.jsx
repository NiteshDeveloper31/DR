import React from 'react';
import { Building } from 'lucide-react';

export default function HospitalStoryTimeline() {
  const milestones = [
    { year: "2011", title: "Hospital Established in Mumbai Central", desc: "Founded by senior AIIMS cardiologists as a 100-bed cardiac specialty hospital." },
    { year: "2015", title: "Expansion to 300-Bed Tertiary Care", desc: "Launched Neurosciences, Robotic Orthopaedics, and 18 Zero-Infection Modular OTs." },
    { year: "2019", title: "Digital Patient Services & 3T MRI", desc: "Introduced digital OPD check-in, NABL pathology automation, and 3T MRI diagnostic suite." },
    { year: "2023", title: "NABH Gold Standard & Robotic Surgery", desc: "Received NABH accreditation gold status and launched Mako Robotic Joint Reconstruction." },
    { year: "2026", title: "15 Years of Patient Care Excellence", desc: "Serving 45,000+ patients annually with 350+ senior specialists and 100% Cashless TPA." }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2 flex items-center justify-center space-x-1">
            <Building className="w-4 h-4 text-[#087F8C]" />
            <span>Institutional Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
            15 Years of Medical Excellence
          </h2>
          <p className="text-sm sm:text-base text-[#587176] mt-2">
            Established in 2011 with a single mission: to bring world-class precision medicine to Mumbai
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 border-l-2 border-dashed border-[#087F8C] space-y-10">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#087F8C] ring-4 ring-[#EAF6FA] group-hover:scale-125 transition-transform" />
              <div className="bg-[#F8FBFC] p-6 rounded-2xl border border-[#DCECEF] hover:border-[#075E68] transition-colors">
                <div className="text-xs font-black text-[#087F8C] uppercase tracking-widest">{m.year} • Milestone</div>
                <h3 className="text-lg font-bold text-[#123238] mt-1 mb-2">{m.title}</h3>
                <p className="text-xs text-[#587176] leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
