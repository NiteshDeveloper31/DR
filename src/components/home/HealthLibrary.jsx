import React from 'react';
import { BookOpen, Clock, UserCheck, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { articlesData } from '../../data/articles';

export default function HealthLibrary({ setActivePage, setSelectedArticleId }) {
  return (
    <section className="py-20 bg-white border-b border-[#EBF3F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2 flex items-center space-x-1">
              <BookOpen className="w-4 h-4 text-[#10B981]" />
              <span>Doctor-Authored Medical Publication Desk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30] tracking-tight">
              Health Library & Patient Education
            </h2>
            <p className="text-sm sm:text-base text-[#536667] mt-2">
              Medically reviewed articles written by senior hospital clinicians for South Asian health conditions
            </p>
          </div>

          <button 
            onClick={() => {
              setActivePage('health-library');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 text-xs font-bold text-[#0A4D4E] hover:text-[#10B981] flex items-center space-x-1"
          >
            <span>View All Health Articles &rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((art) => (
            <div key={art.id} className="bg-[#F6F8F7] rounded-3xl border border-[#EBF3F5] overflow-hidden shadow-card hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-[#0A4D4E]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md">
                    {art.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#0A4D4E] text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md border border-[#10B981]/30">
                    {art.readingTime}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 p-2.5 rounded-xl bg-white border border-[#EBF3F5]">
                    <img 
                      src={art.authorImage || "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80"} 
                      alt={art.authorName} 
                      className="w-9 h-9 rounded-lg object-cover border border-[#10B981]/30 flex-shrink-0" 
                    />
                    <div className="text-xs min-w-0">
                      <div className="font-bold text-[#102F30] truncate">{art.authorName}</div>
                      <div className="text-[10px] text-[#059669] truncate">{art.authorTitle}</div>
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-[#102F30] group-hover:text-[#0A4D4E] transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#536667] leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#EBF3F5] mt-auto space-y-3">
                <div className="flex items-center justify-between text-[10px] text-[#7B8989]">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Reviewed by {art.reviewerName}</span>
                  </span>
                </div>

                <button 
                  onClick={() => {
                    setSelectedArticleId(art.id);
                    setActivePage('article-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl bg-white border border-[#0A4D4E] text-[#0A4D4E] text-xs font-bold hover:bg-[#0A4D4E] hover:text-white transition-all text-center flex items-center justify-center space-x-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
