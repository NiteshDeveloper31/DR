import React from 'react';
import { Award, ShieldCheck, Clock, CreditCard, Activity, Sparkles } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="py-10 bg-white border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          
          <div className="p-3 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6FA] text-[#075E68] flex items-center justify-center border border-[#DCECEF]">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-xs font-extrabold text-[#123238]">NABH Accredited</div>
            <div className="text-[10px] text-[#587176]">Gold Standard Hospital</div>
          </div>

          <div className="p-3 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6FA] text-[#075E68] flex items-center justify-center border border-[#DCECEF]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs font-extrabold text-[#123238]">NABL Certified</div>
            <div className="text-[10px] text-[#587176]">Pathology Laboratory</div>
          </div>

          <div className="p-3 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FEF3F2] text-[#D92D20] flex items-center justify-center border border-[#FCA5A5]/40">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs font-extrabold text-[#123238]">24x7 Emergency Care</div>
            <div className="text-[10px] text-[#587176]">Trauma & Cardiac Ramp</div>
          </div>

          <div className="p-3 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6FA] text-[#075E68] flex items-center justify-center border border-[#DCECEF]">
              <Activity className="w-5 h-5 text-[#087F8C]" />
            </div>
            <div className="text-xs font-extrabold text-[#123238]">Advanced Critical Care</div>
            <div className="text-[10px] text-[#587176]">Intensive ICU Monitoring</div>
          </div>

          <div className="p-3 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6FA] text-[#075E68] flex items-center justify-center border border-[#DCECEF]">
              <CreditCard className="w-5 h-5" />
            </div>
            <div className="text-xs font-extrabold text-[#123238]">Cashless Insurance</div>
            <div className="text-[10px] text-[#587176]">Star, HDFC & All Insurers</div>
          </div>

          <div className="p-3 flex flex-col items-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#EAF6FA] text-[#075E68] flex items-center justify-center border border-[#DCECEF]">
              <Sparkles className="w-5 h-5 text-[#087F8C]" />
            </div>
            <div className="text-xs font-extrabold text-[#123238]">350+ Specialists</div>
            <div className="text-[10px] text-[#587176]">AIIMS & KEM Alumni</div>
          </div>

        </div>

      </div>
    </section>
  );
}
