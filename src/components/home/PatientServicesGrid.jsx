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
    <section className="py-20 bg-[#F8FBFC] border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2">
            Complete Healthcare Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
            Comprehensive Patient Services
          </h2>
          <p className="text-sm sm:text-base text-[#587176] mt-2">
            Integrated outpatient, inpatient, diagnostic, and emergency clinical services under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div 
                key={idx}
                onClick={() => {
                  setActivePage('patient-care');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl p-6 border border-[#DCECEF] shadow-card hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF6FA] text-[#075E68] flex items-center justify-center mb-4 group-hover:bg-[#075E68] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#123238] group-hover:text-[#075E68] transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#587176] leading-relaxed">{srv.desc}</p>
                </div>
                <div className="pt-4 border-t border-[#DCECEF] mt-4 flex items-center text-xs font-bold text-[#075E68] group-hover:text-[#087F8C]">
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
