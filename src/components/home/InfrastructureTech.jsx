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
    <section className="py-24 bg-[#1A3C34] text-white border-b border-[#0F3B36] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-[#38BDF8] text-[10px] font-extrabold uppercase tracking-[0.12em] mb-3 backdrop-blur-md border border-white/10">
            <Zap className="w-4 h-4 text-[#38BDF8]" />
            <span>Precision Supported by Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-serif-editorial tracking-tight">
            Precision Supported by Technology.
          </h2>
          <p className="text-sm sm:text-base text-[#D8EEF4] mt-2 leading-relaxed">
            Integrating world-class diagnostic imaging and robotic surgical systems for predictable clinical outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#38BDF8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="text-[10px] font-extrabold text-[#38BDF8] uppercase tracking-[0.12em] mb-1">{item.category}</div>
                  <h3 className="text-lg font-extrabold text-white mb-3 leading-snug">{item.title}</h3>
                  <p className="text-xs text-[#D8EEF4] leading-relaxed font-medium">{item.desc}</p>
                </div>
                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-[11px] text-[#D8EEF4]/70">
                  <span>Operational Status</span>
                  <span className="text-[#38BDF8] font-extrabold flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#159A86] animate-pulse"></span>
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
