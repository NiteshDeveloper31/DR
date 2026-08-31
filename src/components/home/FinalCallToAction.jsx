import React from 'react';
import { Calendar, UserCheck, Phone } from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function FinalCallToAction({ setActivePage }) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#075E68] to-[#043F47] text-white relative overflow-hidden">
      
      {/* Background Pulse Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#EAF6FA] text-xs font-bold backdrop-blur-md">
            <span>Aarogya Prime Hospital Mumbai Central</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your health deserves experienced hands and thoughtful care.
          </h2>

          <p className="text-base sm:text-lg text-[#D8EEF4] leading-relaxed">
            Connect with experienced senior consultants, access 3T diagnostic imaging, and experience zero-waiting digital OPD check-in.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => {
                setActivePage('appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-[#087F8C] text-white font-extrabold text-sm hover:bg-white hover:text-[#043F47] transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5 text-[#EAF6FA]" />
              <span>Book an Appointment</span>
            </button>

            <button 
              onClick={() => {
                setActivePage('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <UserCheck className="w-5 h-5 text-[#087F8C]" />
              <span>Find a Specialist Doctor</span>
            </button>
          </div>

          <div className="pt-6 border-t border-white/15 text-xs text-[#D8EEF4] flex items-center justify-center space-x-2">
            <Phone className="w-4 h-4 text-[#087F8C]" />
            <span>Prefer to call? Speak with OPD Reception: <strong className="text-white">{hospitalData.contacts.opdAppointments}</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}
