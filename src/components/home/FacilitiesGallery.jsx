import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';

export default function FacilitiesGallery({ setActivePage }) {
  const items = [
    { title: "Modular Operation Theatre", category: "Laminar Airflow Suite", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" },
    { title: "Deluxe Inpatient Private Suite", category: "Patient Accommodation", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80" },
    { title: "3T MRI Diagnostic Facility", category: "Precision Imaging", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" },
    { title: "Level III Neonatal ICU", category: "Critical Newborn Care", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <section className="py-20 bg-[#F8FBFC] border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2 flex items-center space-x-1">
              <Camera className="w-4 h-4 text-[#087F8C]" />
              <span>World-Class Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
              Hospital Facilities & Environments
            </h2>
            <p className="text-sm sm:text-base text-[#587176] mt-2">
              Designed for sterile clinical safety, quiet patient recovery, and comfortable family support
            </p>
          </div>

          <button 
            onClick={() => {
              setActivePage('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 text-xs font-bold text-[#075E68] hover:text-[#087F8C] flex items-center space-x-1"
          >
            <span>Explore Full Photo Gallery &rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-[#DCECEF] overflow-hidden shadow-card hover:shadow-xl transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#043F47]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white">Click to View Full Screen</span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-[10px] font-bold text-[#087F8C] uppercase tracking-wider">{item.category}</div>
                <h3 className="text-sm font-bold text-[#123238] mt-0.5">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
