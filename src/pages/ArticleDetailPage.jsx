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
  Award
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
    <div className="py-12 bg-[#F6F8F7] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => {
            setActivePage('health-library');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0A4D4E] hover:text-[#10B981] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Health Library</span>
        </button>

        {/* Main Article Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#EBF3F5] shadow-xl space-y-8">
          
          {/* Header Title & Category */}
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EBF3F5] text-[#0A4D4E] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span>{article.category}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#102F30] leading-tight">
              {article.title}
            </h1>

            {/* Author & Reviewer Credibility Box */}
            <div className="bg-[#F6F8F7] rounded-2xl p-4 border border-[#EBF3F5] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-4">
              
              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <img 
                  src={article.authorImage || "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80"} 
                  alt={article.authorName} 
                  className="w-12 h-12 rounded-xl object-cover border border-[#10B981]/30 flex-shrink-0"
                />
                <div>
                  <div className="text-[10px] font-bold text-[#059669] uppercase tracking-wider">Author</div>
                  <div className="font-bold text-[#102F30]">{article.authorName}</div>
                  <div className="text-[11px] text-[#536667]">{article.authorTitle}</div>
                  {article.authorCredentials && (
                    <div className="text-[10px] text-[#0A4D4E] font-semibold">{article.authorCredentials}</div>
                  )}
                </div>
              </div>

              {/* Reviewer & Meta Info */}
              <div className="flex items-center space-x-3 border-t md:border-t-0 md:border-l border-[#EBF3F5] pt-3 md:pt-0 md:pl-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3F5] text-[#0A4D4E] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-[#0A4D4E] uppercase tracking-wider">Medically Reviewed</div>
                  <div className="font-bold text-[#102F30]">{article.reviewerName}</div>
                  <div className="text-[11px] text-[#7B8989] flex items-center space-x-2 mt-0.5">
                    <Clock className="w-3 h-3 text-[#10B981]" />
                    <span>{article.readingTime} • {article.date}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden h-72 sm:h-96 bg-gray-100 relative shadow-md">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-3 left-3 bg-[#0A4D4E]/90 text-white text-[11px] font-semibold px-3 py-1 rounded-lg backdrop-blur-md">
              Reviewed by Hospital Clinical Governance Board
            </div>
          </div>

          {/* Key Takeaways Card (Executive Summary) */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-gradient-to-br from-[#EBF3F5] to-[#F6F8F7] rounded-2xl p-6 border border-[#10B981]/30 space-y-3 shadow-sm">
              <div className="flex items-center space-x-2 text-sm font-extrabold text-[#0A4D4E]">
                <Sparkles className="w-5 h-5 text-[#10B981]" />
                <span>Key Clinical Takeaways</span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#102F30]">
                {article.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-semibold">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Article Detailed Section Cards */}
          <div className="space-y-6 pt-2">
            {article.sections ? (
              article.sections.map((sec, idx) => {
                const IconComponent = iconMap[sec.icon] || Activity;
                return (
                  <div key={idx} className="bg-[#F6F8F7] rounded-2xl p-6 border border-[#EBF3F5] space-y-3 hover:border-[#0A4D4E] transition-colors">
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-white text-[#0A4D4E] flex items-center justify-center shadow-sm">
                          <IconComponent className="w-5 h-5 text-[#10B981]" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#102F30]">
                          {sec.title}
                        </h3>
                      </div>
                      {sec.badge && (
                        <span className="px-2.5 py-1 rounded-md bg-white border border-[#EBF3F5] text-[10px] font-bold text-[#059669]">
                          {sec.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#536667] leading-relaxed">
                      {sec.content}
                    </p>

                    {sec.clinicalHighlight && (
                      <div className="p-3.5 rounded-xl bg-white border-l-4 border-[#10B981] text-xs text-[#0A4D4E] font-semibold flex items-start space-x-2">
                        <ShieldAlert className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span>{sec.clinicalHighlight}</span>
                      </div>
                    )}

                  </div>
                );
              })
            ) : (
              <div className="prose max-w-none text-sm text-[#536667] leading-relaxed">
                {article.excerpt}
              </div>
            )}
          </div>

          {/* Doctor OPD Consultation Banner (NO RED DISCLAIMER BOX ABOVE IT!) */}
          <div className="p-6 rounded-2xl bg-[#0A4D4E] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div>
              <div className="font-extrabold text-base">Have concerns regarding this condition?</div>
              <div className="text-xs text-[#CBD5E1] mt-0.5">Consult with {article.authorName} at Mumbai Central OPD</div>
            </div>
            <button 
              onClick={() => {
                setActivePage('appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3 px-6 rounded-xl bg-[#10B981] text-[#042526] font-extrabold text-xs hover:bg-white transition-all shadow-md flex items-center space-x-2 flex-shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor Consultation</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
