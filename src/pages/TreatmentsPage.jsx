import React from 'react';
import { Stethoscope, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { treatmentsData } from '../data/treatments';

export default function TreatmentsPage({ setActivePage }) {
  return (
    <div className="py-12 bg-[#F6F8F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10B981]/30 shadow-sm mb-3">
            <Stethoscope className="w-4 h-4 text-[#10B981]" />
            <span className="text-xs font-bold text-[#0A4D4E] uppercase">Surgical & Interventional Procedures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">
            Treatments & Surgical Procedures
          </h1>
          <p className="text-sm text-[#536667] mt-2">
            Comprehensive surgical care protocols led by senior AIIMS & KEM qualified surgeons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatmentsData.map((treat) => (
            <div key={treat.id} className="bg-white rounded-3xl p-8 border border-[#EBF3F5] shadow-card hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-1">
                  {treat.specialtyName}
                </div>
                <h2 className="text-xl font-bold text-[#102F30] mb-2">{treat.name}</h2>
                <p className="text-xs text-[#536667] leading-relaxed mb-4">{treat.description}</p>

                <div className="p-4 rounded-2xl bg-[#F6F8F7] border border-[#EBF3F5] space-y-2 text-xs text-[#536667] mb-6">
                  <div><strong className="text-[#102F30]">Surgical Approach:</strong> {treat.procedureDetails}</div>
                  <div><strong className="text-[#102F30]">Expected Recovery:</strong> {treat.recoveryDays}</div>
                  <div><strong className="text-[#102F30]">Lead Clinician:</strong> {treat.doctorName}</div>
                </div>
              </div>

              <button 
                onClick={() => {
                  setActivePage('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-[#0A4D4E] text-white text-xs font-bold hover:bg-[#063233] flex items-center justify-center space-x-1"
              >
                <span>Book Consultation for {treat.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
