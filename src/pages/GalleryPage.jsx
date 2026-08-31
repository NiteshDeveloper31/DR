import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const images = [
    { title: "Modular Operation Theatre", category: "Surgery", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" },
    { title: "Deluxe Inpatient Private Suite", category: "Rooms", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80" },
    { title: "3T MRI Imaging Suite", category: "Diagnostics", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80" },
    { title: "Level III NICU Newborn Suite", category: "Pediatrics", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80" },
    { title: "24x7 Cath Lab Angioplasty Suite", category: "Cardiology", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80" },
    { title: "Mako Robotic Surgery System", category: "Orthopaedics", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80" }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filtered = activeCategory === 'All' ? images : images.filter(i => i.category === activeCategory);

  return (
    <div className="py-12 bg-[#F6F8F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10B981]/30 shadow-sm mb-3">
            <Camera className="w-4 h-4 text-[#10B981]" />
            <span className="text-xs font-bold text-[#0A4D4E] uppercase">Infrastructure Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">
            Hospital Photo Gallery
          </h1>
          <p className="text-sm text-[#536667] mt-2">
            Sterile clinical environments, advanced diagnostics, and comfortable patient suites
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImageIndex(idx)}
              className="bg-white rounded-3xl border border-[#EBF3F5] overflow-hidden shadow-card hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative h-60 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-bold text-[#059669] uppercase">{item.category}</div>
                <h3 className="text-sm font-bold text-[#102F30]">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 z-50 bg-[#042526]/90 backdrop-blur-md flex items-center justify-center p-4">
            <button 
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full space-y-4">
              <img 
                src={filtered[selectedImageIndex].img} 
                alt={filtered[selectedImageIndex].title} 
                className="w-full max-h-[75vh] object-contain rounded-2xl"
              />
              <div className="text-center text-white space-y-1">
                <h3 className="text-lg font-bold">{filtered[selectedImageIndex].title}</h3>
                <div className="text-xs text-[#10B981] font-semibold">{filtered[selectedImageIndex].category}</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
