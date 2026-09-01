import React, { useState } from 'react';
import { 
  Stethoscope, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  Check, 
  Calendar, 
  HelpCircle,
  X,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { treatmentsData } from '../data/treatments';

export default function TreatmentsPage({ setActivePage, setSelectedDoctorForBooking }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalTreatment, setActiveModalTreatment] = useState(null);

  const specialties = [
    { id: 'all', name: 'All Treatments' },
    { id: 'cardiac-sciences', name: 'Cardiac Sciences' },
    { id: 'orthopaedics', name: 'Orthopaedics & Joint Care' },
    { id: 'neurosciences', name: 'Neurosciences' },
    { id: 'gastroenterology', name: 'GI & Laparoscopy' },
    { id: 'oncology', name: 'Oncology & Cancer Care' },
    { id: 'obstetrics-gynecology', name: 'Maternity & Gynaec' }
  ];

  const filteredTreatments = treatmentsData.filter(t => {
    const matchesSpec = selectedSpecialty === 'all' || t.specialtyId === selectedSpecialty;
    const matchesQuery = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpec && matchesQuery;
  });

  return (
    <div className="py-12 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E4DC] shadow-sm">
            <Stethoscope className="w-4 h-4 text-[#087F8C]" />
            <span className="text-xs font-extrabold text-[#1A3C34] uppercase tracking-wider">
              Advanced Tertiary Surgical Protocols
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
            Specialised Treatments & Procedures
          </h1>
          <p className="text-sm sm:text-base text-[#33413B] leading-relaxed">
            State-of-the-art robotic, interventional, and minimally invasive procedures conducted by AIIMS & KEM qualified operating faculty.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white rounded-3xl p-6 border border-[#E8E4DC] shadow-card space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <div className="flex items-center space-x-2 bg-[#F8FBFC] px-3.5 py-2.5 rounded-2xl border border-[#DCECEF]">
                <Search className="w-4 h-4 text-[#1A3C34]" />
                <input 
                  type="text" 
                  placeholder="Search treatment or surgery..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-xs font-semibold text-[#123238] placeholder-[#587176]"
                />
              </div>
            </div>

            {/* Specialty Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {specialties.map(spec => (
                <button
                  key={spec.id}
                  onClick={() => setSelectedSpecialty(spec.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedSpecialty === spec.id 
                      ? 'bg-[#1A3C34] text-white shadow-md' 
                      : 'bg-[#F8FBFC] border border-[#DCECEF] text-[#587176] hover:text-[#1A3C34]'
                  }`}
                >
                  {spec.name}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Rich Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTreatments.map((treat) => (
            <div key={treat.id} className="bg-white rounded-3xl border border-[#E8E4DC] overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
              
              <div>
                {/* Photo Banner */}
                <div className="relative h-56 bg-[#EAF6FA] overflow-hidden">
                  <img 
                    src={treat.image} 
                    alt={treat.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-[#1A3C34] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {treat.specialtyName}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-bold text-[#1A3C34] shadow-sm">
                    ⏱️ Recovery: {treat.recoveryDays}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-7 space-y-4">
                  <h2 className="text-2xl font-extrabold text-[#1A3C34] font-serif-editorial group-hover:text-[#087F8C] transition-colors">
                    {treat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed">
                    {treat.description}
                  </p>

                  {/* Clinical Symptoms & Indications */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-[#1A3C34] uppercase tracking-wider">Clinical Indications & Symptoms:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {treat.symptoms.map((sym, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#EAF6FA] border border-[#DCECEF] text-[11px] font-semibold text-[#075E68]">
                          • {sym}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 3-Step Surgical Pathway */}
                  <div className="p-4 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-2">
                    <div className="text-xs font-bold text-[#1A3C34] flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#087F8C]" />
                      <span>Precision Surgical Protocol</span>
                    </div>
                    <div className="text-xs text-[#587176] font-medium leading-normal">
                      {treat.procedureDetails}
                    </div>
                  </div>

                  {/* Lead Operating Clinician */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#DCECEF] text-xs text-[#587176]">
                    <span>Lead Surgeon: <strong className="text-[#1A3C34]">{treat.doctorName}</strong></span>
                    <span className="text-[#159A86] font-bold">100% Cashless TPA</span>
                  </div>

                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-7 pt-0 grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setActiveModalTreatment(treat)}
                  className="py-3.5 px-4 rounded-2xl border border-[#1A3C34] text-[#1A3C34] font-extrabold text-xs hover:bg-[#EAF6FA] transition-colors text-center flex items-center justify-center space-x-1"
                >
                  <HelpCircle className="w-4 h-4 text-[#087F8C]" />
                  <span>Clinical FAQs</span>
                </button>

                <button 
                  onClick={() => {
                    setActivePage('appointment');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-3.5 px-4 rounded-2xl bg-[#1A3C34] text-white font-extrabold text-xs hover:bg-[#0F3B36] shadow-md transition-colors text-center flex items-center justify-center space-x-1.5"
                >
                  <Calendar className="w-4 h-4 text-[#087F8C]" />
                  <span>Book Surgery OPD</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Clinical Protocol Detail Modal */}
      {activeModalTreatment && (
        <div className="fixed inset-0 z-50 bg-[#043F47]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-[#DCECEF]">
            
            <div className="flex justify-between items-start border-b border-[#DCECEF] pb-4">
              <div>
                <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">Clinical Procedure Guide</div>
                <h3 className="text-2xl font-extrabold text-[#1A3C34] font-serif-editorial">{activeModalTreatment.name}</h3>
              </div>
              <button onClick={() => setActiveModalTreatment(null)} className="p-2 text-[#587176] hover:text-[#1A3C34] rounded-xl">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm text-[#33413B]">
              <div className="p-4 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-2">
                <div className="font-extrabold text-[#1A3C34]">Pre-Procedure Patient Preparation:</div>
                <ul className="space-y-1 list-disc list-inside text-xs text-[#587176]">
                  <li>Overnight 8-hour fasting mandatory prior to anesthesia.</li>
                  <li>Discontinue blood thinners 3 days prior as instructed by lead surgeon {activeModalTreatment.doctorName}.</li>
                  <li>Complete Pre-Anaesthesia Checkup (PAC) and ECG/3T MRI diagnostic imaging.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-2">
                <div className="font-extrabold text-[#1A3C34]">Post-Operative Recovery Timeline:</div>
                <div className="text-xs text-[#587176] leading-relaxed">
                  {activeModalTreatment.recoveryDays}. 24x7 nursing monitoring in private deluxe suites with personalized physio rehabilitation.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FEF3F2] border border-[#FCA5A5] flex items-center justify-between text-xs font-bold text-[#D92D20]">
                <span>100% Empanelled Cashless TPA Helpdesk</span>
                <span>Gate 1 Desk • Ext 402</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button onClick={() => setActiveModalTreatment(null)} className="py-3 px-5 rounded-xl border border-[#1A3C34] text-[#1A3C34] font-bold text-xs">Close</button>
              <button onClick={() => { setActiveModalTreatment(null); setActivePage('appointment'); }} className="py-3 px-6 rounded-xl bg-[#1A3C34] text-white font-extrabold text-xs shadow-md">Book Surgery Consultation &rarr;</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
