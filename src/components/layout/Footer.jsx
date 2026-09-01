import React from 'react';
import { HeartPulse, Phone, MapPin, Mail, ShieldAlert, ArrowRight } from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function Footer({ setActivePage }) {
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#043F47] text-[#D8EEF4] pt-16 pb-12 border-t border-[#075E68]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Emergency Block */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-12 border-b border-[#075E68]/50">
          
          {/* Brand Col */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-serif-editorial">
                AAROGYA <span className="text-[#087F8C]">PRIME</span>
              </div>
            </div>
            <p className="text-xs text-[#D8EEF4]/80 leading-relaxed">
              {hospitalData.tagline} Established in 2011, Aarogya Prime Hospital is a premier 300-bed multispeciality tertiary care hospital serving Mumbai Central and South Mumbai.
            </p>
            <div className="p-4 rounded-2xl bg-[#075E68] border border-[#087F8C]/40 space-y-2">
              <div className="text-xs font-bold text-[#EAF6FA] uppercase tracking-wider flex items-center space-x-1.5">
                <ShieldAlert className="w-4 h-4 text-[#D92D20]" />
                <span>24x7 Cardiac & Trauma Helpline</span>
              </div>
              <div className="text-xl font-extrabold text-white">{hospitalData.emergency.phone}</div>
              <div className="text-[11px] text-[#D8EEF4]/80">Emergency Ramp: {hospitalData.location.emergencyEntrance}</div>
            </div>
          </div>

          {/* Patient Care Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#087F8C] pl-2.5">
              Patient Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8EEF4]/80">
              <li><button onClick={() => navigateTo('appointment')} className="hover:text-[#EAF6FA] transition-colors">Book OPD Appointment</button></li>
              <li><button onClick={() => navigateTo('doctors')} className="hover:text-[#EAF6FA] transition-colors">Find a Specialist Doctor</button></li>
              <li><button onClick={() => navigateTo('patient-care')} className="hover:text-[#EAF6FA] transition-colors">Inpatient Admission Guide</button></li>
              <li><button onClick={() => navigateTo('patient-care')} className="hover:text-[#EAF6FA] transition-colors">Discharge Process</button></li>
              <li><button onClick={() => navigateTo('patient-care')} className="hover:text-[#EAF6FA] transition-colors">Cashless TPA Insurance Support</button></li>
              <li><button onClick={() => navigateTo('patient-reports')} className="hover:text-white transition-colors font-semibold text-white">View Pathology & Lab Reports</button></li>
              <li><button onClick={() => navigateTo('patient-care')} className="hover:text-[#EAF6FA] transition-colors">Visitor Information & Hours</button></li>
            </ul>
          </div>

          {/* Clinical Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#087F8C] pl-2.5">
              Centres of Excellence
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8EEF4]/80">
              <li><button onClick={() => navigateTo('specialties')} className="hover:text-[#EAF6FA] transition-colors">Cardiac Sciences & Cath Lab</button></li>
              <li><button onClick={() => navigateTo('specialties')} className="hover:text-[#EAF6FA] transition-colors">Neurosciences & Stroke Unit</button></li>
              <li><button onClick={() => navigateTo('specialties')} className="hover:text-[#EAF6FA] transition-colors">Orthopaedics & Robotic Knee Surgery</button></li>
              <li><button onClick={() => navigateTo('specialties')} className="hover:text-[#EAF6FA] transition-colors">Oncology & Immunotherapy</button></li>
              <li><button onClick={() => navigateTo('specialties')} className="hover:text-[#EAF6FA] transition-colors">Gastroenterology & GI Surgery</button></li>
              <li><button onClick={() => navigateTo('specialties')} className="hover:text-[#EAF6FA] transition-colors">Nephrology & 24x7 Dialysis</button></li>
              <li><button onClick={() => navigateTo('specialties')} className="hover:text-[#EAF6FA] transition-colors">Obstetrics & Birthing Suite</button></li>
            </ul>
          </div>

          {/* Hospital Address & Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#087F8C] pl-2.5">
              Hospital Location
            </h4>
            <div className="space-y-3 text-xs text-[#D8EEF4]/80">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#087F8C] flex-shrink-0 mt-0.5" />
                <span>{hospitalData.location.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#087F8C] flex-shrink-0" />
                <span>OPD: {hospitalData.contacts.opdAppointments}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#087F8C] flex-shrink-0" />
                <span>{hospitalData.contacts.email}</span>
              </div>
              <div className="pt-2">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="w-full py-2 px-3 rounded-xl bg-[#075E68] hover:bg-[#087F8C] text-white font-bold transition-all text-center flex items-center justify-center space-x-1"
                >
                  <span>Get Driving Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Accreditations */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#D8EEF4]/60 space-y-4 md:space-y-0">
          <div>
            &copy; 2026 {hospitalData.name}. All rights reserved. Registered under Maharashtra Nursing Homes Act.
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => navigateTo('faq')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => navigateTo('faq')} className="hover:text-white transition-colors">Patient Rights & Responsibilities</button>
            <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">NABH Compliance</button>
            <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Site Map</button>
          </div>
        </div>

        {/* Legal Medical Disclaimer Notice */}
        <div className="mt-6 pt-4 border-t border-[#075E68]/40 text-[11px] text-[#D8EEF4]/60 text-center leading-relaxed">
          <strong className="text-[#D8EEF4]">Medical Disclaimer:</strong> The information provided on this website is for patient education and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider for any medical concern. In case of a medical emergency, call 108 or proceed immediately to the nearest hospital emergency room.
        </div>

      </div>
    </footer>
  );
}
