import React from 'react';
import { BookOpen, Clock, UserCheck, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { articlesData } from '../data/articles';

export default function HealthLibraryPage({ setActivePage, setSelectedArticleId }) {
  return (
    <div className="py-12 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Editorial Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E4DC] shadow-sm">
            <BookOpen className="w-4 h-4 text-[#087F8C]" />
            <span className="text-xs font-extrabold text-[#1A3C34] uppercase tracking-wider">
              Doctor-Authored Clinical Publications
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
            Health Library & Medical Guides
          </h1>
          <p className="text-sm sm:text-base text-[#33413B] leading-relaxed">
            Medically reviewed clinical guides written by senior hospital specialists for South Asian health conditions.
          </p>
        </div>

        {/* 3 Rich Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((art) => (
            <div 
              key={art.id} 
              className="bg-white rounded-3xl border border-[#E8E4DC] overflow-hidden shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Image Banner */}
                <div className="relative h-56 overflow-hidden bg-[#EAF6FA]">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-[#1A3C34]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-wider">
                    {art.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 text-[#1A3C34] text-[11px] font-bold px-3 py-1 rounded-xl backdrop-blur-md border border-[#DCECEF] shadow-sm">
                    ⏱️ {art.readingTime}
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  {/* Author Credibility Pill Box */}
                  <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF]">
                    <img 
                      src={art.authorImage || "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80"} 
                      alt={art.authorName} 
                      className="w-10 h-10 rounded-xl object-cover border border-[#087F8C]/30 flex-shrink-0" 
                    />
                    <div className="text-xs min-w-0">
                      <div className="font-extrabold text-[#1A3C34] truncate">{art.authorName}</div>
                      <div className="text-[11px] text-[#087F8C] truncate font-bold">{art.authorTitle}</div>
                    </div>
                  </div>

                  <h2 className="text-xl font-extrabold text-[#1A3C34] font-serif-editorial group-hover:text-[#087F8C] transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>

                  {/* Key Insights Preview */}
                  {art.keyTakeaways && art.keyTakeaways.length > 0 && (
                    <div className="p-3.5 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] text-xs text-[#1A3C34] space-y-1">
                      <div className="font-bold flex items-center space-x-1.5 text-[#1A3C34]">
                        <Sparkles className="w-3.5 h-3.5 text-[#087F8C]" />
                        <span>Key Medical Insight:</span>
                      </div>
                      <div className="line-clamp-2 text-[#587176] font-medium text-[11px]">
                        {art.keyTakeaways[0]}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-7 pt-0 border-t border-[#E8E4DC] mt-4 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-[#587176] pt-3">
                  <span className="flex items-center space-x-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#159A86]" />
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
                  className="w-full py-3.5 rounded-2xl bg-[#1A3C34] text-white text-xs font-extrabold hover:bg-[#0F3B36] transition-all text-center flex items-center justify-center space-x-1.5 shadow-md"
                >
                  <span>Read Detailed Medical Guide</span>
                  <ArrowRight className="w-4 h-4 text-[#087F8C]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
