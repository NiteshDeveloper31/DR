import React, { useState } from 'react';
import { UserCheck, Building, Clock, ShieldCheck, CreditCard, FileText, ArrowRight } from 'lucide-react';
import { hospitalData } from '../data/hospital';

export default function PatientCarePage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('admission');

  return (
    <div className="py-12 bg-[#F6F8F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10B981]/30 shadow-sm mb-3">
            <UserCheck className="w-4 h-4 text-[#10B981]" />
            <span className="text-xs font-bold text-[#0A4D4E] uppercase">Patient Assistance Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">
            Patient Care & Admission Guide
          </h1>
          <p className="text-sm text-[#536667] mt-2">
            Essential guidelines for OPD visits, hospital admission, cashless insurance, and patient rights
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'admission', label: 'Admission & IPD' },
            { id: 'discharge', label: 'Discharge Process' },
            { id: 'insurance', label: 'Cashless TPA Insurance' },
            { id: 'visitor', label: 'Visitor Guidelines' },
            { id: 'rights', label: 'Patient Charter & Rights' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                activeTab === tab.id 
                  ? 'bg-[#0A4D4E] text-white shadow-md' 
                  : 'bg-white text-[#536667] border border-[#EBF3F5] hover:bg-[#EBF3F5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Box */}
        <div className="bg-white rounded-3xl p-8 border border-[#EBF3F5] shadow-xl max-w-4xl mx-auto space-y-6">
          
          {activeTab === 'admission' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#102F30] border-l-4 border-[#10B981] pl-3">Inpatient Admission Guidelines</h2>
              <p className="text-xs text-[#536667] leading-relaxed">
                Planned admissions take place at Gate 1 IPD Desk. Please bring your Doctor's Admission Advice Note, Government Photo ID, and valid TPA Card.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#102F30]">
                <div className="p-3 bg-[#F6F8F7] rounded-xl border border-[#EBF3F5]">✓ Deluxe Private Suite Wards</div>
                <div className="p-3 bg-[#F6F8F7] rounded-xl border border-[#EBF3F5]">✓ Zero-Infection HEPA ICU Beds</div>
                <div className="p-3 bg-[#F6F8F7] rounded-xl border border-[#EBF3F5]">✓ 24x7 Resident Doctor & Nurse</div>
                <div className="p-3 bg-[#F6F8F7] rounded-xl border border-[#EBF3F5]">✓ Nutritious Dietician Meals</div>
              </div>
            </div>
          )}

          {activeTab === 'discharge' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#102F30] border-l-4 border-[#10B981] pl-3">Smooth Discharge Process</h2>
              <p className="text-xs text-[#536667] leading-relaxed">
                Discharge starts after morning consultant rounds. Summary documentation, medication instructions, and cashless TPA final approvals take approximately 2 hours.
              </p>
            </div>
          )}

          {activeTab === 'insurance' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#102F30] border-l-4 border-[#10B981] pl-3">Cashless TPA Insurance Support</h2>
              <p className="text-xs text-[#536667] leading-relaxed">
                Aarogya Prime Hospital is 100% empanelled with Star Health, HDFC ERGO, ICICI Lombard, Max Bupa, Care Health, and all PSU insurance providers.
              </p>
            </div>
          )}

          {activeTab === 'visitor' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#102F30] border-l-4 border-[#10B981] pl-3">Visiting Hours & Attendant Rules</h2>
              <p className="text-xs text-[#536667] leading-relaxed">
                General Wards: 04:00 PM - 07:00 PM. Intensive Care Units (ICU): 11:00 AM - 12:00 PM & 05:00 PM - 06:00 PM. One attendant pass per private room.
              </p>
            </div>
          )}

          {activeTab === 'rights' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#102F30] border-l-4 border-[#10B981] pl-3">Patient Rights & Responsibilities</h2>
              <p className="text-xs text-[#536667] leading-relaxed">
                Guaranteed right to privacy, informed clinical consent, second medical opinions, itemized billing transparency, and dignified medical treatment.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
