import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqsData } from '../data/faqs';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="py-12 bg-[#F6F8F7] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#10B981]/30 shadow-sm mb-3">
            <HelpCircle className="w-4 h-4 text-[#10B981]" />
            <span className="text-xs font-bold text-[#0A4D4E] uppercase">Frequently Asked Questions</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#102F30]">Hospital FAQs</h1>
          <p className="text-xs text-[#536667] mt-1">Answers regarding OPD appointments, emergency, TPA insurance, and visiting hours</p>
        </div>

        <div className="space-y-6">
          {faqsData.map((categoryGroup, groupIdx) => (
            <div key={groupIdx} className="bg-white rounded-3xl p-6 border border-[#EBF3F5] shadow-card space-y-4">
              <h2 className="text-base font-bold text-[#0A4D4E] uppercase tracking-wider border-b border-[#EBF3F5] pb-2">
                {categoryGroup.category}
              </h2>

              <div className="space-y-3">
                {categoryGroup.questions.map((faq, itemIdx) => {
                  const globalIdx = `${groupIdx}-${itemIdx}`;
                  const isOpen = openIndex === globalIdx;

                  return (
                    <div key={itemIdx} className="border border-[#EBF3F5] rounded-2xl overflow-hidden">
                      <button 
                        onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                        className="w-full p-4 text-left font-bold text-sm text-[#102F30] bg-[#F6F8F7] hover:bg-[#EBF3F5] flex justify-between items-center transition-colors"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#10B981]" /> : <ChevronDown className="w-4 h-4 text-[#7B8989]" />}
                      </button>
                      {isOpen && (
                        <div className="p-4 text-xs text-[#536667] leading-relaxed bg-white border-t border-[#EBF3F5]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
