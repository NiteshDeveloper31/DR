import React from 'react';
import { HeartPulse, Check, Calendar, ShieldCheck } from 'lucide-react';
import { packagesData } from '../data/packages';

export default function HealthCheckupsPage({ setActivePage }) {
  return (
    <div className="py-12 bg-[#F6F8F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10B981]/30 shadow-sm mb-3">
            <HeartPulse className="w-4 h-4 text-[#10B981]" />
            <span className="text-xs font-bold text-[#0A4D4E] uppercase">Preventive Medicine</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">
            Preventive Health Checkup Packages
          </h1>
          <p className="text-sm text-[#536667] mt-2">
            NABL accredited pathology and 3T MRI health checkups with free doorstep home collection
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packagesData.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl p-6 border border-[#EBF3F5] shadow-card flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#102F30]">{pkg.name}</h3>
                <div className="text-xs text-[#536667] mt-1">{pkg.tagline}</div>
                <div className="my-4">
                  <div className="text-2xl font-black text-[#0A4D4E]">₹{pkg.price.toLocaleString()}</div>
                  <div className="text-xs text-[#7B8989] line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                </div>

                <div className="text-xs font-bold text-[#059669] mb-4">
                  {pkg.parametersCount} Included Test Parameters
                </div>

                <ul className="space-y-2 text-xs text-[#536667] mb-6">
                  {pkg.tests.map((t, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <Check className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => {
                  setActivePage('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-[#0A4D4E] text-white font-bold text-xs hover:bg-[#063233] flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-[#10B981]" />
                <span>Book Package</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
