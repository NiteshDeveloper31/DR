import React from 'react';
import { Check, Calendar, ArrowRight } from 'lucide-react';

export default function EditorialCareSection({ setActivePage }) {
  return (
    <section className="py-24 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Large Photorealistic Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8E4DC] h-[440px] sm:h-[500px]">
              <img 
                src="/images/hospital_care_comfort.jpg" 
                alt="Aarogya Prime Hospital Inpatient Care Suite" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#DCECEF] shadow-lg">
                <div className="text-xs font-bold text-[#1A3C34]">Inpatient Private & Deluxe Suites</div>
                <div className="text-[11px] text-[#587176]">Designed for quiet recovery, sterile infection control & family comfort</div>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy (Inspired by User Sample Image 2) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
              Patient-Centred Architecture
            </div>

            {/* Serif Heading matching image 2 */}
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight leading-[1.12]">
              Designed To Support Your Recovery & Comfort
            </h2>

            {/* Body Copy */}
            <p className="text-base text-[#33413B] leading-relaxed max-w-xl">
              Aarogya Prime Hospital combines advanced tertiary medical technology with quiet, dignified patient care environments—ensuring every patient receives precision treatment in a calm, compassionate setting.
            </p>

            {/* Checkmarked List (matching sample image 2) */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start space-x-3 text-sm font-semibold text-[#1A3C34]">
                <Check className="w-5 h-5 text-[#1A3C34] flex-shrink-0 stroke-[2.5] mt-0.5" />
                <span>Zero-infection HEPA modular operating suites & 24x7 Cath Lab</span>
              </div>

              <div className="flex items-start space-x-3 text-sm font-semibold text-[#1A3C34]">
                <Check className="w-5 h-5 text-[#1A3C34] flex-shrink-0 stroke-[2.5] mt-0.5" />
                <span>Multi-disciplinary clinical review boards for complex cardiac & cancer cases</span>
              </div>

              <div className="flex items-start space-x-3 text-sm font-semibold text-[#1A3C34]">
                <Check className="w-5 h-5 text-[#1A3C34] flex-shrink-0 stroke-[2.5] mt-0.5" />
                <span>100% Cashless TPA insurance helpdesk with instant pre-authorisation</span>
              </div>

              <div className="flex items-start space-x-3 text-sm font-semibold text-[#1A3C34]">
                <Check className="w-5 h-5 text-[#1A3C34] flex-shrink-0 stroke-[2.5] mt-0.5" />
                <span>Personalised post-discharge rehabilitation and home nursing support</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => {
                  setActivePage('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-3.5 px-6 rounded-xl bg-[#1A3C34] text-white font-extrabold text-sm hover:bg-[#0F3B36] shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#087F8C]" />
                <span>Book OPD Consultation</span>
              </button>

              <button 
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-3.5 px-6 rounded-xl bg-white border border-[#1A3C34] text-[#1A3C34] font-bold text-sm hover:bg-[#EAF6FA] transition-all flex items-center justify-center space-x-1"
              >
                <span>Read Institutional Profile</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
