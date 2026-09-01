import React, { useState } from 'react';
import { 
  HeartPulse, 
  Check, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Home, 
  Building, 
  ChevronRight,
  HelpCircle,
  X,
  Sparkles
} from 'lucide-react';
import { packagesData } from '../data/packages';

export default function HealthCheckupsPage({ setActivePage }) {
  const [activeModalPackage, setActiveModalPackage] = useState(null);

  return (
    <div className="py-12 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E4DC] shadow-sm">
            <HeartPulse className="w-4 h-4 text-[#087F8C]" />
            <span className="text-xs font-extrabold text-[#1A3C34] uppercase tracking-wider">
              NABL Accredited Diagnostic Screening
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
            Preventive Health Checkup Packages
          </h1>
          <p className="text-sm sm:text-base text-[#33413B] leading-relaxed">
            NABL accredited pathology and 3T MRI diagnostic screening packages with free doorstep home collection or VIP hospital lounge sampling.
          </p>
        </div>

        {/* Home Collection vs Hospital Sampling Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E4DC] shadow-card grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF6FA] text-[#087F8C] flex items-center justify-center flex-shrink-0 font-bold">
              <Home className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-[#1A3C34]">Free Home Sample Collection</div>
              <div className="text-xs text-[#587176]">Phlebotomist visits your doorstep at 06:00 AM - 10:00 AM</div>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF6FA] text-[#087F8C] flex items-center justify-center flex-shrink-0 font-bold">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-[#1A3C34]">VIP In-Hospital Executive Lounge</div>
              <div className="text-xs text-[#587176]">Fast-track blood sampling, breakfast buffet & 3T MRI suite</div>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#EAF6FA] text-[#087F8C] flex items-center justify-center flex-shrink-0 font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-[#1A3C34]">Free Senior Doctor Consultation</div>
              <div className="text-xs text-[#587176]">Includes 1-on-1 report review with Senior Physician</div>
            </div>
          </div>
        </div>

        {/* Package Grid with Deep Test Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagesData.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl p-6 border border-[#E8E4DC] shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative">
              
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A3C34] text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Recommended
                </div>
              )}

              <div>
                <h3 className="text-xl font-extrabold text-[#1A3C34] font-serif-editorial">{pkg.name}</h3>
                <div className="text-xs text-[#587176] font-medium mt-1">{pkg.tagline}</div>
                
                {/* Price Box */}
                <div className="my-5 p-4 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] text-center">
                  <div className="text-3xl font-extrabold text-[#1A3C34]">₹{pkg.price.toLocaleString()}</div>
                  <div className="text-xs text-[#587176] line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                  <div className="mt-1 text-[11px] font-bold text-[#159A86] bg-[#EAF6FA] px-2 py-0.5 rounded-full inline-block">
                    Save {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% Today
                  </div>
                </div>

                {/* Test Parameters Badge */}
                <div className="text-xs font-extrabold text-[#087F8C] uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>{pkg.parametersCount} Included Parameters</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>

                {/* Key Tests List */}
                <ul className="space-y-2 text-xs text-[#33413B] mb-6">
                  {pkg.tests.map((t, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-[#159A86] flex-shrink-0 stroke-[2.5] mt-0.5" />
                      <span className="line-clamp-2">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2 border-t border-[#E8E4DC]">
                <button 
                  onClick={() => setActiveModalPackage(pkg)}
                  className="w-full py-2.5 rounded-xl border border-[#1A3C34] text-[#1A3C34] text-xs font-extrabold hover:bg-[#EAF6FA] transition-colors flex items-center justify-center space-x-1"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#087F8C]" />
                  <span>View All {pkg.parametersCount} Tests</span>
                </button>

                <button 
                  onClick={() => {
                    setActivePage('appointment');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-xl bg-[#1A3C34] text-white text-xs font-extrabold hover:bg-[#0F3B36] transition-colors flex items-center justify-center space-x-2 shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#087F8C]" />
                  <span>Book Package</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Package Test Parameter Detail Modal */}
      {activeModalPackage && (
        <div className="fixed inset-0 z-50 bg-[#043F47]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-[#DCECEF]">
            
            <div className="flex justify-between items-start border-b border-[#DCECEF] pb-4">
              <div>
                <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">{activeModalPackage.parametersCount} Diagnostic Test Breakdown</div>
                <h3 className="text-2xl font-extrabold text-[#1A3C34] font-serif-editorial">{activeModalPackage.name}</h3>
              </div>
              <button onClick={() => setActiveModalPackage(null)} className="p-2 text-[#587176] hover:text-[#1A3C34] rounded-xl">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm text-[#33413B]">
              <div className="p-4 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-2">
                <div className="font-extrabold text-[#1A3C34]">Pre-Test Fasting Guidelines:</div>
                <ul className="space-y-1 list-disc list-inside text-xs text-[#587176]">
                  <li>Overnight 10-12 hours fasting required for Glucose (HbA1c) & Lipid Profile.</li>
                  <li>Plain water is permitted during fasting hours.</li>
                  <li>Morning urine sample collection (first void).</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-3">
                <div className="font-extrabold text-[#1A3C34]">Full Pathology & Radiology Test Inclusions:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#587176]">
                  {activeModalPackage.tests.map((testItem, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-white border border-[#DCECEF] flex items-center space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#159A86] flex-shrink-0" />
                      <span>{testItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button onClick={() => setActiveModalPackage(null)} className="py-3 px-5 rounded-xl border border-[#1A3C34] text-[#1A3C34] font-bold text-xs">Close</button>
              <button onClick={() => { setActiveModalPackage(null); setActivePage('appointment'); }} className="py-3 px-6 rounded-xl bg-[#1A3C34] text-white font-extrabold text-xs shadow-md">Book This Package &rarr;</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
