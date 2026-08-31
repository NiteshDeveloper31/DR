import React from 'react';
import { Cpu, ShieldCheck, Activity, Eye, Zap } from 'lucide-react';

export default function InfrastructureTech() {
  const techItems = [
    {
      title: "Mako Robotic Surgical System",
      category: "Robotic Joint Replacement",
      desc: "3D CT-based bone modeling allowing sub-millimeter accurate knee and hip implant positioning with quadriceps-sparing tissue preservation.",
      icon: Cpu
    },
    {
      title: "3T Digital MRI Suite",
      category: "High-Resolution Neuro Imaging",
      desc: "Ultra-high field 3-Tesla magnetic resonance scanner providing non-invasive diffusion tensor imaging (DTI) and cardiac MRI within minutes.",
      icon: Eye
    },
    {
      title: "Flat-Panel Cardiac Cath Lab",
      category: "24x7 Interventional Cardiology",
      desc: "Low-radiation high-definition DSA angiography suite for emergency primary angioplasty, intravascular ultrasound (IVUS), and FFR guidance.",
      icon: Activity
    },
    {
      title: "Zero-Infection Modular OTs",
      category: "Surgical Governance",
      desc: "18 HEPA laminar airflow operating suites maintaining ISO Class 5 air purity to eliminate post-surgical wound infection risks.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-[#075E68] text-white border-b border-[#043F47]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#EAF6FA] text-xs font-bold mb-3 backdrop-blur-md">
            <Zap className="w-4 h-4 text-[#087F8C]" />
            <span>Precision Supported by Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Precision supported by technology.
          </h2>
          <p className="text-sm sm:text-base text-[#D8EEF4] mt-2">
            Integrating world-class diagnostic imaging and robotic surgical systems for predictable clinical outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-[#043F47]/70 border border-[#087F8C]/30 rounded-3xl p-6 backdrop-blur-md hover:border-[#EAF6FA] transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#EAF6FA] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#087F8C]" />
                  </div>
                  <div className="text-[11px] font-bold text-[#EAF6FA] uppercase tracking-wider mb-1">{item.category}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-xs text-[#D8EEF4] leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-[11px] text-[#D8EEF4]/70">
                  <span>Operational Status</span>
                  <span className="text-[#EAF6FA] font-bold flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#159A86] animate-ping"></span>
                    <span>100% Active</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
