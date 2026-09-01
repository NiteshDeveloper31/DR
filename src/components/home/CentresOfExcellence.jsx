import React from 'react';
import { HeartPulse, Brain, Bone, Activity, ArrowRight } from 'lucide-react';

export default function CentresOfExcellence({ setActivePage }) {
  const institutes = [
    {
      title: "Heart & Vascular Institute",
      subtitle: "24x7 Emergency Cath Lab & Cardiac Surgery",
      desc: "Specialized unit dedicated to door-to-balloon primary PCI, complex coronary angioplasty, TAVI valve replacement, and open heart CABG surgeries.",
      icon: HeartPulse,
      beds: "50 Beds",
      leadDoctor: "Dr. Ananya Deshmukh"
    },
    {
      title: "Neurosciences Centre",
      subtitle: "Hyperacute Stroke & Micro-Neurosurgery",
      desc: "Comprehensive brain, spine, and stroke care featuring a dedicated Neuro-ICU, 3T MRI, video EEG monitoring, and minimally invasive spine surgery.",
      icon: Brain,
      beds: "40 Beds",
      leadDoctor: "Dr. Priya Nair"
    },
    {
      title: "Bone & Joint Centre",
      subtitle: "Robotic Knee & Hip Reconstruction",
      desc: "State-of-the-art orthopaedic surgical suite equipped with Mako Robotic Arm, keyhole arthroscopic ligament repair, and complex trauma care.",
      icon: Bone,
      beds: "45 Beds",
      leadDoctor: "Dr. Vikramaditya Reddy"
    },
    {
      title: "Digestive Health Centre",
      subtitle: "GI Surgery & HPB Liver Care",
      desc: "Advanced therapeutic endoscopy, ERCP, laparoscopic gastrointestinal surgery, liver disease management, and bariatric surgical care.",
      icon: Activity,
      beds: "35 Beds",
      leadDoctor: "Dr. Suresh Iyer"
    }
  ];

  return (
    <section className="py-24 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2">
            Institutional Clinical Programs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
            Centres of Excellence
          </h2>
          <p className="text-sm sm:text-base text-[#33413B] mt-2">
            Dedicated institute-level clinical centers offering specialized multi-specialty team care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {institutes.map((inst, idx) => {
            const Icon = inst.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-[#E8E4DC]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF6FA] text-[#1A3C34] flex items-center justify-center group-hover:bg-[#1A3C34] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-[#EAF6FA] border border-[#DCECEF] text-xs font-extrabold text-[#1A3C34]">
                      {inst.beds}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#1A3C34] font-serif-editorial mb-1 group-hover:text-[#087F8C] transition-colors">
                    {inst.title}
                  </h3>
                  <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-3">{inst.subtitle}</div>
                  <p className="text-sm text-[#587176] leading-relaxed mb-6 font-medium">{inst.desc}</p>
                </div>

                <div className="pt-4 border-t border-[#E8E4DC] flex items-center justify-between">
                  <div className="text-xs text-[#587176]">
                    Lead Clinician: <span className="font-extrabold text-[#1A3C34]">{inst.leadDoctor}</span>
                  </div>
                  <button 
                    onClick={() => {
                      setActivePage('specialties');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-extrabold text-[#1A3C34] hover:text-[#087F8C] flex items-center space-x-1 transition-colors"
                  >
                    <span>View Program</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
