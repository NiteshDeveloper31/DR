import React from 'react';
import { BookOpen, Clock, UserCheck, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { articlesData } from '../data/articles';

export default function HealthLibraryPage({ setActivePage, setSelectedArticleId }) {
  return (
    <div className="py-12 bg-[#F6F8F7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10B981]/30 shadow-sm mb-3">
            <BookOpen className="w-4 h-4 text-[#10B981]" />
            <span className="text-xs font-bold text-[#0A4D4E] uppercase">Clinical Publication Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">
            Health Library & Doctor Guides
          </h1>
          <p className="text-sm text-[#536667] mt-2">
            Medically reviewed guides written by senior hospital specialists for South Asian health conditions
          </p>
        </div>

        {/* 3 Rich Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((art) => (
            <div 
              key={art.id} 
              className="bg-white rounded-3xl border border-[#EBF3F5] overflow-hidden shadow-card hover:shadow-2xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Image Banner */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-[#0A4D4E]/90 text-white text-[10px] font-bold px-3 py-1 rounded-lg backdrop-blur-md flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    <span>{art.category}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-[#0A4D4E] text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md border border-[#10B981]/30 shadow-sm">
                    {art.readingTime}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Author Credibility Pill Box */}
                  <div className="flex items-center space-x-3 p-3 rounded-2xl bg-[#F6F8F7] border border-[#EBF3F5]">
                    <img 
                      src={art.authorImage || "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80"} 
                      alt={art.authorName} 
                      className="w-10 h-10 rounded-xl object-cover border border-[#10B981]/30 flex-shrink-0" 
                    />
                    <div className="text-xs min-w-0">
                      <div className="font-bold text-[#102F30] truncate">{art.authorName}</div>
                      <div className="text-[10px] text-[#059669] truncate font-medium">{art.authorTitle}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#102F30] group-hover:text-[#0A4D4E] transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#536667] leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>

                  {/* Key Insights Preview Pill */}
                  {art.keyTakeaways && art.keyTakeaways.length > 0 && (
                    <div className="p-3 rounded-xl bg-[#EBF3F5]/60 border border-[#10B981]/20 text-[11px] text-[#0A4D4E] space-y-1">
                      <div className="font-bold flex items-center space-x-1 text-[#0A4D4E]">
                        <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>Key Insight:</span>
                      </div>
                      <div className="line-clamp-2 text-[#536667] font-medium pl-4">
                        {art.keyTakeaways[0]}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0 border-t border-[#EBF3F5] mt-4 space-y-3">
                <div className="flex items-center justify-between text-[10px] text-[#7B8989]">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Reviewed by {art.reviewerName}</span>
                  </span>
                  <span>{art.date}</span>
                </div>

                <button 
                  onClick={() => {
                    setSelectedArticleId(art.id);
                    setActivePage('article-detail');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#0A4D4E] text-white text-xs font-bold hover:bg-[#063233] transition-all text-center flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <span>Read Detailed Medical Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
