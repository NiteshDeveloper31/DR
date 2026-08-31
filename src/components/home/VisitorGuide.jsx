import React from 'react';
import { Clock, ShieldCheck, FileText, UserCheck, ArrowRight } from 'lucide-react';

export default function VisitorGuide({ setActivePage }) {
  return (
    <section className="py-20 bg-white border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
              Practical Patient Assistance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
              Patient & Visitor Information Guide
            </h2>
            <p className="text-sm text-[#587176] leading-relaxed">
              We strive to make your hospital visit smooth, dignified, and stress-free. Review guidelines for OPD registration, visiting hours, attendant policies, and hospital admission.
            </p>

            <button 
              onClick={() => {
                setActivePage('patient-care');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3 px-5 rounded-xl bg-[#075E68] text-white text-xs font-bold hover:bg-[#043F47] transition-all flex items-center space-x-2 shadow-md"
            >
              <span>Explore Complete Visitor Policy</span>
              <ArrowRight className="w-4 h-4 text-[#087F8C]" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white text-[#075E68] flex items-center justify-center shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#123238]">Inpatient Visiting Hours</h3>
              <p className="text-xs text-[#587176]">General Wards: 04:00 PM - 07:00 PM daily. ICU/CCU: 11:00 AM - 12:00 PM & 05:00 PM - 06:00 PM.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white text-[#075E68] flex items-center justify-center shadow-sm">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#123238]">Attendant Policy</h3>
              <p className="text-xs text-[#587176]">One adult attendant pass issued per private room patient. 24x7 attendant lounge facilities available.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white text-[#075E68] flex items-center justify-center shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#123238]">Admission Documents</h3>
              <p className="text-xs text-[#587176]">Please carry Aadhaar / PAN card, Doctor's admission advice note, and valid TPA Health Insurance card.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-2">
              <div className="w-9 h-9 rounded-xl bg-white text-[#075E68] flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#087F8C]" />
              </div>
              <h3 className="font-bold text-base text-[#123238]">Patient Charter & Rights</h3>
              <p className="text-xs text-[#587176]">Guaranteed right to privacy, clinical second opinions, transparent itemized billing, and respectful treatment.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
