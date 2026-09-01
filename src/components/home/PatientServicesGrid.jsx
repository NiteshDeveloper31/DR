import React from 'react';
import { UserCheck, Building, Pill, Activity, Camera, Truck, Heart, Home, ArrowRight } from 'lucide-react';

export default function PatientServicesGrid({ setActivePage }) {
  const services = [
    { title: "Outpatient OPD Services", desc: "Zero-waiting digital OPD check-in across 14 clinical departments.", icon: UserCheck },
    { title: "IPD / Inpatient Admission", desc: "Private suites, Deluxe rooms, and Intensive Care Units with 24x7 nursing.", icon: Building },
    { title: "24x7 In-House Pharmacy", desc: "Fully stocked authentic medicines with doorstep delivery within 5km.", icon: Pill },
    { title: "NABL Pathology Diagnostics", desc: "Fully automated robotic lab analyzers for gold-standard blood reports.", icon: Activity },
    { title: "Radiology & 3T MRI", desc: "High-resolution 3-Tesla MRI, 128-Slice CT, 4D USG, and Digital Mammography.", icon: Camera },
    { title: "24x7 Ambulance & ICU on Wheels", desc: "GPS-tracked mobile cardiac ICU ambulances with trained paramedics.", icon: Truck },
    { title: "Physiotherapy & Rehab", desc: "Post-operative orthopedic and stroke physical rehabilitation clinic.", icon: Heart },
    { title: "Doorstep Home Care", desc: "Qualified home nursing, doctor home visits, and lab sample collection.", icon: Home }
  ];

  return (
    <section className="py-24 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2">
            Complete Healthcare Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
            Comprehensive Patient Services
          </h2>
          <p className="text-sm sm:text-base text-[#33413B] mt-2 leading-relaxed">
            Integrated outpatient, inpatient, diagnostic, and emergency clinical services under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                onClick={() => {
                  setActivePage('patient-care');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-3xl p-7 border border-[#E8E4DC]/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF6FA] text-[#1A3C34] flex items-center justify-center mb-5 group-hover:bg-[#1A3C34] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#1A3C34] font-serif-editorial group-hover:text-[#087F8C] transition-colors mb-2 leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#587176] leading-relaxed font-medium">{srv.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#E8E4DC] mt-5 flex items-center text-xs font-extrabold text-[#1A3C34] group-hover:text-[#087F8C]">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
