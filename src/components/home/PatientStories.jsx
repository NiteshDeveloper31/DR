import React from 'react';
import { Star, Quote, HeartHandshake } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export default function PatientStories() {
  return (
    <section className="py-20 bg-white border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider mb-2 flex items-center justify-center space-x-1">
            <HeartHandshake className="w-4 h-4 text-[#087F8C]" />
            <span>Clinical Outcomes & Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
            Patient Care Stories
          </h2>
          <p className="text-sm sm:text-base text-[#587176] mt-2">
            Real experiences from patients treated at Aarogya Prime Hospital Mumbai Central
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div key={t.id} className="bg-[#EAF6FA] rounded-3xl p-8 border border-[#DCECEF] shadow-card flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-[#F59E0B]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#075E68]/20" />
                </div>

                <p className="text-xs sm:text-sm text-[#587176] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCECEF] flex items-center space-x-3">
                <img src={t.avatar} alt={t.patientName} className="w-11 h-11 rounded-full object-cover border border-[#087F8C]/30" />
                <div>
                  <div className="text-sm font-bold text-[#123238]">{t.patientName}, {t.age}</div>
                  <div className="text-xs text-[#087F8C] font-medium">{t.treatment}</div>
                  <div className="text-[10px] text-[#587176]">{t.city} • {t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
