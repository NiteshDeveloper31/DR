import React from 'react';
import { 
  ArrowLeft, 
  Clock, 
  UserCheck, 
  ShieldCheck, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  HeartPulse, 
  Activity, 
  AlertCircle, 
  Zap, 
  ShieldAlert,
  Award,
  Share2,
  Bookmark
} from 'lucide-react';
import { articlesData } from '../data/articles';

const iconMap = {
  HeartPulse: HeartPulse,
  Activity: Activity,
  AlertCircle: AlertCircle,
  Zap: Zap,
  ShieldAlert: ShieldAlert,
  CheckCircle2: CheckCircle2,
  Bone: Activity
};

export default function ArticleDetailPage({ articleId, setActivePage }) {
  const article = articlesData.find(a => a.id === articleId) || articlesData[0];

  return (
    <div className="py-12 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Button */}
        <button 
          onClick={() => {
            setActivePage('health-library');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1A3C34] hover:text-[#087F8C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Health Library</span>
        </button>

        {/* Main Article Editorial Container */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E8E4DC] shadow-card space-y-8">
          
          {/* Header Title & Category */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#EAF6FA] text-[#1A3C34] text-xs font-bold border border-[#DCECEF]">
              <span className="w-2 h-2 rounded-full bg-[#159A86]"></span>
              <span>{article.category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial leading-tight tracking-tight">
              {article.title}
            </h1>

            {/* Author & Medically Reviewed Credibility Banner */}
            <div className="bg-[#F8FBFC] rounded-2xl p-5 border border-[#DCECEF] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              {/* Author Details */}
              <div className="flex items-center space-x-3.5">
                <img 
                  src={article.authorImage || "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80"} 
                  alt={article.authorName} 
                  className="w-12 h-12 rounded-2xl object-cover border border-[#087F8C]/30 flex-shrink-0"
                />
                <div>
                  <div className="text-[10px] font-bold text-[#087F8C] uppercase tracking-wider">Clinical Author</div>
                  <div className="font-extrabold text-[#1A3C34] text-sm">{article.authorName}</div>
                  <div className="text-[11px] text-[#587176] font-medium">{article.authorTitle}</div>
                  {article.authorCredentials && (
                    <div className="text-[10px] text-[#075E68] font-bold mt-0.5">{article.authorCredentials}</div>
                  )}
                </div>
              </div>

              {/* Medically Reviewed & Meta Info */}
              <div className="flex items-center space-x-3.5 border-t md:border-t-0 md:border-l border-[#DCECEF] pt-3 md:pt-0 md:pl-5">
                <div className="w-10 h-10 rounded-2xl bg-[#EAF6FA] text-[#1A3C34] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#159A86]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#1A3C34] uppercase tracking-wider">Medically Reviewed</div>
                  <div className="font-bold text-[#1A3C34] text-xs">{article.reviewerName}</div>
                  <div className="text-[11px] text-[#587176] flex items-center space-x-2 mt-0.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#087F8C]" />
                    <span>{article.readingTime} • Published {article.date}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Hero Feature Image */}
          <div className="rounded-3xl overflow-hidden h-72 sm:h-96 bg-[#EAF6FA] relative shadow-sm border border-[#E8E4DC]">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-[#1A3C34]/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl backdrop-blur-md">
              Reviewed by Aarogya Prime Clinical Governance Board
            </div>
          </div>

          {/* Executive Key Clinical Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-[#EAF6FA] rounded-2xl p-6 border border-[#DCECEF] space-y-3 shadow-sm">
              <div className="flex items-center space-x-2 text-sm font-extrabold text-[#1A3C34]">
                <Sparkles className="w-5 h-5 text-[#087F8C]" />
                <span>Key Medical Takeaways & Insights</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#33413B]">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#159A86] flex-shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="leading-relaxed font-semibold">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Detailed Clinical Sections */}
          <div className="space-y-6 pt-2">
            {article.sections ? (
              article.sections.map((sec, idx) => {
                const IconComponent = iconMap[sec.icon] || Activity;
                return (
                  <div key={idx} className="bg-[#F8FBFC] rounded-2xl p-6 sm:p-7 border border-[#DCECEF] space-y-3.5">
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-2xl bg-white text-[#1A3C34] flex items-center justify-center shadow-sm border border-[#DCECEF]">
                          <IconComponent className="w-5 h-5 text-[#087F8C]" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#1A3C34] font-serif-editorial">
                          {sec.title}
                        </h3>
                      </div>
                      {sec.badge && (
                        <span className="px-3 py-1 rounded-full bg-white border border-[#DCECEF] text-[11px] font-bold text-[#159A86]">
                          {sec.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed">
                      {sec.content}
                    </p>

                    {sec.clinicalHighlight && (
                      <div className="p-4 rounded-2xl bg-white border-l-4 border-[#D92D20] text-xs text-[#1A3C34] font-semibold flex items-start space-x-2.5 shadow-sm">
                        <ShieldAlert className="w-4 h-4 text-[#D92D20] flex-shrink-0 mt-0.5" />
                        <span>{sec.clinicalHighlight}</span>
                      </div>
                    )}

                  </div>
                );
              })
            ) : (
              <div className="prose max-w-none text-sm text-[#33413B] leading-relaxed">
                {article.excerpt}
              </div>
            )}
          </div>

          {/* Doctor OPD Consultation CTA Banner */}
          <div className="p-7 rounded-3xl bg-[#1A3C34] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-extrabold text-lg sm:text-xl font-serif-editorial">Have clinical concerns regarding this condition?</div>
              <div className="text-xs text-[#D8EEF4] font-medium">Consult directly with {article.authorName} at Mumbai Central OPD</div>
            </div>
            <button 
              onClick={() => {
                setActivePage('appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-4 px-7 rounded-2xl bg-[#087F8C] text-white font-extrabold text-xs hover:bg-[#075E68] transition-all shadow-md flex items-center space-x-2 flex-shrink-0"
            >
              <Calendar className="w-4 h-4 text-[#EAF6FA]" />
              <span>Book Consultation</span>
            </button>
          </div>

        </article>

      </div>
    </div>
  );
}
