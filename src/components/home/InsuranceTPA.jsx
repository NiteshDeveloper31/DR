import React, { useState } from 'react';
import { CreditCard, CheckCircle2 } from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function InsuranceTPA() {
  const [selectedProvider, setSelectedProvider] = useState('');
  const [coverageChecked, setCoverageChecked] = useState(false);

  const handleCheckCoverage = (e) => {
    e.preventDefault();
    if (!selectedProvider) return;
    setCoverageChecked(true);
  };

  return (
    <section className="py-20 bg-[#EAF6FA] border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
              Making healthcare easier to navigate
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
              Healthcare shouldn't come with paperwork surprises.
            </h2>
            <p className="text-sm text-[#587176] leading-relaxed">
              Our 24x7 TPA Help Desk at Gate 1 handles pre-authorisation, claim documentation, and 100% cashless approvals for all major Indian health insurance providers and government schemes.
            </p>

            {/* Insurance Partner Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {hospitalData.tpaInsurancePartners.slice(0, 6).map((partner, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white border border-[#DCECEF] text-xs font-bold text-[#075E68] flex items-center space-x-2 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#087F8C] flex-shrink-0" />
                  <span className="truncate">{partner}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive UI-Only Insurance Coverage Checker */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#DCECEF] shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#075E68] text-white flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[#087F8C]" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#123238]">Check Insurance Coverage</h3>
                <div className="text-xs text-[#587176]">Instant pre-authorisation guidance for planned procedures</div>
              </div>
            </div>

            <form onSubmit={handleCheckCoverage} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Select Insurance TPA Provider</label>
                <select 
                  value={selectedProvider}
                  onChange={(e) => {
                    setSelectedProvider(e.target.value);
                    setCoverageChecked(false);
                  }}
                  className="w-full h-11 px-3 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-sm font-semibold text-[#123238] outline-none focus:border-[#075E68]"
                  required
                >
                  <option value="">-- Choose Insurance Company / TPA --</option>
                  {hospitalData.tpaInsurancePartners.map((p, i) => (
                    <option key={i} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Planned Department / Surgery</label>
                <input 
                  type="text" 
                  placeholder="e.g. Cardiac Angioplasty, Knee Replacement, Maternity" 
                  className="w-full h-11 px-3 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-sm font-semibold text-[#123238] outline-none focus:border-[#075E68]"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 rounded-xl bg-[#075E68] text-white font-bold text-sm hover:bg-[#043F47] transition-colors shadow-md"
              >
                Check Cashless Empanoply & Guidance
              </button>
            </form>

            {/* Coverage Verified Result Banner */}
            {coverageChecked && (
              <div className="mt-4 p-4 rounded-2xl bg-[#EAF6FA] border border-[#087F8C]/40 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-extrabold text-[#075E68]">
                  <CheckCircle2 className="w-4 h-4 text-[#087F8C]" />
                  <span>{selectedProvider} is 100% Empanelled at Aarogya Prime Hospital</span>
                </div>
                <p className="text-xs text-[#587176]">
                  Visit Gate 1 TPA Counter with your Health Card & Aadhaar Card for instant 2-hour pre-authorisation approval.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
