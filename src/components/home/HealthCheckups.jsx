import React from 'react';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import { packagesData } from '../../data/packages';

export default function HealthCheckups({ setActivePage }) {
  return (
    <section className="py-20 bg-white border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2">
            Preventive Healthcare
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
            Preventive Health Checkup Packages
          </h2>
          <p className="text-sm sm:text-base text-[#587176] mt-2">
            NABL-accredited diagnostic screening packages designed for early disease detection
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packagesData.slice(0, 3).map((pkg) => (
            <div 
              key={pkg.id} 
              className={`bg-white rounded-3xl p-8 border flex flex-col justify-between transition-all relative ${
                pkg.popular 
                  ? 'border-[#087F8C] shadow-2xl scale-102 ring-2 ring-[#087F8C]/20' 
                  : 'border-[#DCECEF] shadow-card hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 right-8 bg-[#075E68] text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#123238] mb-1">{pkg.name}</h3>
                <p className="text-xs text-[#587176] mb-4">{pkg.tagline}</p>

                <div className="flex items-baseline space-x-2 my-4">
                  <span className="text-3xl font-black text-[#075E68]">₹{pkg.price.toLocaleString()}</span>
                  <span className="text-sm text-[#587176] line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                </div>

                <div className="bg-[#EAF6FA] p-3 rounded-xl text-xs text-[#075E68] font-bold mb-6 flex justify-between">
                  <span>Included Parameters:</span>
                  <span>{pkg.parametersCount} Tests</span>
                </div>

                <ul className="space-y-2.5 text-xs text-[#587176] mb-8">
                  {pkg.tests.slice(0, 5).map((t, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-[#087F8C] flex-shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => {
                  setActivePage('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-xl font-bold text-xs transition-colors flex items-center justify-center space-x-2 ${
                  pkg.popular 
                    ? 'bg-[#075E68] text-white hover:bg-[#043F47] shadow-md' 
                    : 'bg-[#EAF6FA] text-[#075E68] hover:bg-[#075E68] hover:text-white'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Checkup Package</span>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button 
            onClick={() => {
              setActivePage('health-checkups');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-[#075E68] hover:text-[#087F8C] inline-flex items-center space-x-1"
          >
            <span>Compare All Packages & View Full Test Breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
