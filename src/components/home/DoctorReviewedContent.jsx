import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';

export default function DoctorReviewedContent() {
  return (
    <section className="py-12 bg-[#EAF6FA] border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl p-6 border border-[#087F8C]/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF6FA] text-[#075E68] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#087F8C]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">Clinical Governance Guarantee</div>
              <h3 className="text-base font-bold text-[#123238]">100% Doctor-Reviewed Medical Content</h3>
              <p className="text-xs text-[#587176] mt-0.5 max-w-xl">
                Every health guide, diagnostic parameter, and clinical protocol on this portal is authored and peer-reviewed by senior AIIMS and Tata Memorial qualified hospital specialists.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs font-bold text-[#075E68] bg-[#F8FBFC] px-4 py-2.5 rounded-xl border border-[#DCECEF] flex-shrink-0">
            <UserCheck className="w-4 h-4 text-[#087F8C]" />
            <span>Medically Audited August 2026</span>
          </div>
        </div>

      </div>
    </section>
  );
}
