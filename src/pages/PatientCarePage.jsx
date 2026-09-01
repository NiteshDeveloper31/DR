import React, { useState } from 'react';
import { 
  UserCheck, 
  Building, 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  FileText, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  AlertCircle,
  ShieldAlert,
  Sparkles,
  ChevronDown,
  ChevronUp,
  HeartPulse,
  Pill,
  Truck,
  HelpCircle
} from 'lucide-react';

export default function PatientCarePage({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('admission');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const tpaList = [
    "Star Health & Allied Insurance",
    "HDFC ERGO Health Insurance",
    "ICICI Lombard General Insurance",
    "Niva Bupa Health Insurance",
    "Care Health Insurance",
    "Medi Assist TPA",
    "Paramount Health TPA",
    "MDIndia Healthcare TPA",
    "Heritage Health TPA",
    "Vipul Medcorp TPA",
    "New India Assurance (PSU)",
    "National Insurance (PSU)",
    "Oriental Insurance (PSU)",
    "United India Insurance (PSU)",
    "FHPL Health TPA",
    "Raksha Health Insurance TPA"
  ];

  const faqs = [
    {
      q: "What documents are mandatory during inpatient admission?",
      a: "Patients need to carry the Doctor's OPD Admission Advice Slip, Government photo ID (Aadhaar Card, Passport, or PAN Card) of patient and primary attendant, and Health Insurance / TPA Card with policy copy for cashless approval."
    },
    {
      q: "How does 100% cashless TPA authorization work?",
      a: "Our TPA desk submits pre-authorization forms directly to your insurer upon admission. Initial approval is received within 2-3 hours. At discharge, final hospital bills are submitted online for final cashless authorization."
    },
    {
      q: "Can an attendant stay overnight with the patient?",
      a: "Yes. All Private Suites, Single Rooms, and Twin Sharing Rooms include a dedicated attendant bed/sofa. One 24x7 attendant pass is issued per inpatient bed."
    },
    {
      q: "What are the visiting hours for general wards and ICU?",
      a: "General Wards: 04:00 PM to 07:00 PM daily (Max 2 visitors). Intensive Care Unit (ICU/CCU): 11:00 AM to 12:00 PM & 05:00 PM to 06:00 PM (Strictly 1 visitor at a time with sterile gown)."
    },
    {
      q: "Are outside food and flowers permitted inside patient rooms?",
      a: "To ensure strict clinical infection control, outside food and fresh flowers are not permitted inside inpatient rooms. Customized therapeutic meals are provided by our In-House Clinical Nutrition Department."
    }
  ];

  return (
    <div className="py-12 bg-[#FBF9F5] min-h-screen text-[#1A3C34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. EDITORIAL HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-[#E8E4DC] shadow-sm">
              <UserCheck className="w-4 h-4 text-[#087F8C]" />
              <span className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">
                Institutional Patient Guide
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight leading-tight">
              Patient Care, Inpatient Admission & TPA Guide
            </h1>
            
            <p className="text-sm sm:text-base text-[#33413B] leading-relaxed font-medium">
              Complete institutional protocol for OPD consultations, inpatient admissions (IPD), cashless insurance pre-authorisation, visiting hours, and room amenities at Aarogya Prime Hospital Mumbai Central.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-extrabold">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E4DC] shadow-sm space-y-1">
                <div className="text-[#087F8C]">24x7 IPD Admissions</div>
                <div className="text-[#587176] font-medium text-[11px]">Gate 1 Inpatient Desk</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E4DC] shadow-sm space-y-1">
                <div className="text-[#159A86]">100% Cashless TPA</div>
                <div className="text-[#587176] font-medium text-[11px]">16+ Insurers Empanelled</div>
              </div>
            </div>
          </div>

          {/* Authentic Indian Admission Desk Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8E4DC] aspect-[16/10] group">
              <img 
                src="/images/patient_admission_desk.jpg" 
                alt="Aarogya Prime Hospital Inpatient Admission Reception Counter in Mumbai Central" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-md text-xs">
                <div className="font-extrabold text-[#1A3C34]">Inpatient Admissions & TPA Helpdesk</div>
                <div className="text-[#587176] font-medium mt-0.5">Gate 1 Main Lobby • Aarogya Prime Hospital Mumbai Central</div>
              </div>
            </div>
          </div>

        </div>

        {/* 2. CATEGORY NAVIGATION TABS */}
        <div className="space-y-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2">
              CLINICAL & ADMINISTRATIVE PROTOCOLS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              Hospital Admission & Visitor Directives
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-3 border border-[#E8E4DC] shadow-sm flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              { id: 'admission', label: 'Admission Protocol' },
              { id: 'discharge', label: 'Discharge Process' },
              { id: 'insurance', label: '100% Cashless TPA' },
              { id: 'visitor', label: 'Visiting Hours & Passes' },
              { id: 'rooms', label: 'Inpatient Rooms & Suites' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-2xl font-extrabold text-xs transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#1A3C34] text-white shadow-md' 
                    : 'bg-transparent text-[#587176] hover:bg-[#F8FBFC] hover:text-[#1A3C34]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB DETAILED PANELS */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8E4DC] shadow-sm max-w-5xl mx-auto space-y-8">
            
            {/* TAB 1: ADMISSION PROTOCOL */}
            {activeTab === 'admission' && (
              <div className="space-y-8">
                <div className="border-b border-[#E8E4DC] pb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">Step-by-Step Guidance</div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34] font-serif-editorial">Inpatient Admission Protocol (IPD)</h3>
                  </div>
                  <Building className="w-8 h-8 text-[#1A3C34]/20 hidden sm:block" />
                </div>

                <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed font-medium">
                  Planned admissions take place at Gate 1 IPD Desk between 08:00 AM - 08:00 PM. Emergency cardiac, neuro, and trauma admissions are triaged 24x7 directly at the Level-1 Emergency Trauma Ramp.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-semibold text-[#1A3C34]">
                  <div className="p-5 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-2">
                    <div className="font-extrabold text-[#1A3C34] flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#087F8C]" />
                      <span>Doctor OPD Admission Note</span>
                    </div>
                    <p className="text-[#587176] leading-relaxed">Mandatory OPD consultation slip or surgical advice note signed by the treating consultant doctor.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-2">
                    <div className="font-extrabold text-[#1A3C34] flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#087F8C]" />
                      <span>Government Identity Verification</span>
                    </div>
                    <p className="text-[#587176] leading-relaxed">Aadhaar Card, Passport, or PAN card copy for patient & primary attendant verification.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-2">
                    <div className="font-extrabold text-[#1A3C34] flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#087F8C]" />
                      <span>TPA Cashless Pre-Authorization</span>
                    </div>
                    <p className="text-[#587176] leading-relaxed">Completed TPA cashless claim form along with health insurance card submitted prior to room allocation.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-2">
                    <div className="font-extrabold text-[#1A3C34] flex items-center space-x-2 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#087F8C]" />
                      <span>Barcoded Patient ID Wristband</span>
                    </div>
                    <p className="text-[#587176] leading-relaxed">Issued at admissions desk for electronic barcode medication administration and zero-error surgical verification.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-2 text-xs">
                  <div className="font-extrabold text-[#1A3C34] flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#087F8C]" />
                    <span>Advance Deposit Policy for Cash Patients:</span>
                  </div>
                  <p className="text-[#587176] leading-relaxed">For non-cashless admissions, an initial room deposit is accepted at the billing desk via Credit Card, Debit Card, UPI, or Net Banking. Itemized daily statements are sent via SMS.</p>
                </div>
              </div>
            )}

            {/* TAB 2: DISCHARGE PROCESS */}
            {activeTab === 'discharge' && (
              <div className="space-y-8">
                <div className="border-b border-[#E8E4DC] pb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">Efficient Turnaround</div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34] font-serif-editorial">Smooth Hospital Discharge Process</h3>
                  </div>
                  <FileText className="w-8 h-8 text-[#1A3C34]/20 hidden sm:block" />
                </div>

                <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed font-medium">
                  Discharge commences following morning consultant rounds. The entire process (billing audit, final TPA claim approval, pharmacy discharge medication, and discharge summary briefing) takes approximately 2 to 3 hours.
                </p>

                <div className="p-6 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-4 text-xs text-[#33413B]">
                  <div className="font-extrabold text-[#1A3C34] text-sm">Discharge Inclusions & Folder Provided:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-semibold text-[#587176]">
                    <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#159A86]" /><span>Detailed Discharge Summary signed by Consultant Doctor</span></div>
                    <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#159A86]" /><span>Post-discharge prescription & dietary rehabilitation chart</span></div>
                    <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#159A86]" /><span>Original diagnostic radiology CD scans (3T MRI / CT Scan)</span></div>
                    <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#159A86]" /><span>Itemized final bill receipt & cashless settlement voucher</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: 100% CASHLESS TPA */}
            {activeTab === 'insurance' && (
              <div className="space-y-8">
                <div className="border-b border-[#E8E4DC] pb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">Financial Peace of Mind</div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34] font-serif-editorial">100% Empanelled Cashless TPA Desk</h3>
                  </div>
                  <CreditCard className="w-8 h-8 text-[#1A3C34]/20 hidden sm:block" />
                </div>

                <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed font-medium">
                  Aarogya Prime Hospital operates a dedicated 24x7 TPA Insurance Helpdesk (Gate 1 Main Lobby) providing instant pre-authorisation and cashless settlement with all leading private and PSU health insurance companies.
                </p>

                <div className="text-xs font-extrabold text-[#1A3C34] uppercase tracking-wider">Empanelled Insurance Providers & TPAs (16+):</div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-extrabold text-[#1A3C34]">
                  {tpaList.map((tpa, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-[#159A86] flex-shrink-0" />
                      <span className="truncate">{tpa}</span>
                    </div>
                  ))}
                </div>

                <div className="p-5 rounded-2xl bg-[#FEF3F2] border border-[#FCA5A5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#D92D20]">
                  <div>
                    <div className="font-extrabold text-sm">TPA Insurance Desk Direct Helpline:</div>
                    <div className="font-medium text-[#587176]">Gate 1 Ground Floor • Phone: +91 22 6123 4567 (Ext 402 / 403)</div>
                  </div>
                  <a href="tel:1800221080" className="py-3 px-6 rounded-2xl bg-[#D92D20] text-white hover:bg-red-700 transition-colors shadow-md text-xs font-extrabold whitespace-nowrap">
                    Call TPA Desk
                  </a>
                </div>
              </div>
            )}

            {/* TAB 4: VISITING HOURS */}
            {activeTab === 'visitor' && (
              <div className="space-y-8">
                <div className="border-b border-[#E8E4DC] pb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">Infection Control & Safety</div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34] font-serif-editorial">Visiting Hours & Attendant Guidelines</h3>
                  </div>
                  <Clock className="w-8 h-8 text-[#1A3C34]/20 hidden sm:block" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#33413B]">
                  <div className="p-6 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-3">
                    <div className="font-extrabold text-[#1A3C34] flex items-center space-x-2 text-sm">
                      <Clock className="w-4.5 h-4.5 text-[#087F8C]" />
                      <span>General Inpatient Wards</span>
                    </div>
                    <div className="text-base font-extrabold text-[#087F8C]">04:00 PM - 07:00 PM (Daily)</div>
                    <p className="text-[#587176] font-medium leading-relaxed">Maximum 2 visitors allowed per patient bed during official visiting hours to maintain clinical peace.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-3">
                    <div className="font-extrabold text-[#1A3C34] flex items-center space-x-2 text-sm">
                      <Clock className="w-4.5 h-4.5 text-[#D92D20]" />
                      <span>Intensive Care Unit (ICU / CCU)</span>
                    </div>
                    <div className="text-base font-extrabold text-[#D92D20]">11:00 AM - 12:00 PM | 05:00 PM - 06:00 PM</div>
                    <p className="text-[#587176] font-medium leading-relaxed">Strictly 1 visitor at a time wearing sterile hospital gown and mask provided at ICU reception.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FEF3F2] border border-[#FCA5A5] text-xs text-[#D92D20] space-y-1">
                  <div className="font-extrabold flex items-center space-x-2">
                    <AlertCircle className="w-4.5 h-4.5" />
                    <span>Clinical Infection Prevention Protocol:</span>
                  </div>
                  <p className="font-medium text-[#587176] leading-relaxed">Children under 12 years of age are not permitted inside inpatient ward floors to protect both children and admitted patients from cross-infections.</p>
                </div>
              </div>
            )}

            {/* TAB 5: ROOM CATEGORIES */}
            {activeTab === 'rooms' && (
              <div className="space-y-8">
                <div className="border-b border-[#E8E4DC] pb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">Accommodation Standards</div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34] font-serif-editorial">Inpatient Wards & Deluxe Private Suites</h3>
                  </div>
                  <Building className="w-8 h-8 text-[#1A3C34]/20 hidden sm:block" />
                </div>

                {/* Real HD Photo of Deluxe Suite */}
                <div className="rounded-3xl overflow-hidden border border-[#E8E4DC] aspect-[16/9] shadow-md">
                  <img 
                    src="/images/patient_deluxe_room.jpg" 
                    alt="Aarogya Prime Hospital Deluxe Private Inpatient Suite Room in Mumbai Central" 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#33413B]">
                  <div className="p-6 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-3">
                    <div className="font-extrabold text-[#1A3C34] text-sm">Deluxe VIP Private Suite</div>
                    <div className="text-lg font-extrabold text-[#087F8C]">₹12,500 / day</div>
                    <ul className="space-y-1.5 text-[#587176] font-medium">
                      <li>• Motorized electronic clinical bed</li>
                      <li>• Dedicated attendant sofa & writing desk</li>
                      <li>• Ensuite luxury bathroom & Smart TV</li>
                      <li>• 24x7 dedicated nursing caller</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-3">
                    <div className="font-extrabold text-[#1A3C34] text-sm">Single Private Room</div>
                    <div className="text-lg font-extrabold text-[#087F8C]">₹7,500 / day</div>
                    <ul className="space-y-1.5 text-[#587176] font-medium">
                      <li>• Private air-conditioned room with window</li>
                      <li>• Dedicated attendant couch</li>
                      <li>• Private ensuite bathroom</li>
                      <li>• Wi-Fi & LED Television</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] space-y-3">
                    <div className="font-extrabold text-[#1A3C34] text-sm">Twin Sharing Room</div>
                    <div className="text-lg font-extrabold text-[#087F8C]">₹4,200 / day</div>
                    <ul className="space-y-1.5 text-[#587176] font-medium">
                      <li>• Two patient beds with privacy curtains</li>
                      <li>• Shared ensuite bathroom</li>
                      <li>• Attendant reclining chair</li>
                      <li>• Individual bedside nurse call</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* 3. PATIENT AMENITIES & SUPPORT SERVICES GRID */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2">
              CAMPUS AMENITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              In-House Patient Support & Convenience
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#E8E4DC] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF6FA] text-[#1A3C34] flex items-center justify-center">
                <Pill className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1A3C34] font-serif-editorial">24x7 In-House Pharmacy</h3>
              <p className="text-xs text-[#587176] leading-relaxed font-medium">Located in Main Lobby. Fully stocked authentic medications, surgical consumables, and doorstep delivery within 5km.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E8E4DC] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF6FA] text-[#1A3C34] flex items-center justify-center">
                <HeartPulse className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1A3C34] font-serif-editorial">Clinical Nutrition & Dining</h3>
              <p className="text-xs text-[#587176] leading-relaxed font-medium">Customized therapeutic meals prepared under supervision of senior dieticians for cardiac, renal, and diabetic inpatients.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#E8E4DC] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF6FA] text-[#1A3C34] flex items-center justify-center">
                <Truck className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-extrabold text-[#1A3C34] font-serif-editorial">24x7 ICU Ambulance (108)</h3>
              <p className="text-xs text-[#587176] leading-relaxed font-medium">GPS-tracked mobile cardiac ICU ambulances equipped with ventilators, defibrillators, and trained paramedics.</p>
            </div>
          </div>
        </div>

        {/* 4. FREQUENTLY ASKED PATIENT QUESTIONS (FAQ ACCORDIONS) */}
        <div className="max-w-4xl mx-auto space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2 flex items-center justify-center space-x-1.5">
              <HelpCircle className="w-4 h-4 text-[#087F8C]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              Patient Care FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-[#E8E4DC] overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-extrabold text-sm text-[#1A3C34] font-serif-editorial hover:text-[#087F8C] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#087F8C] flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#587176] flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="p-6 pt-0 text-xs text-[#587176] leading-relaxed font-medium border-t border-[#F8FBFC]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5. 24x7 DIRECT HELPLINE CTA */}
        <div className="bg-[#1A3C34] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-editorial tracking-tight">
            Need Immediate Admission or TPA Assistance?
          </h2>
          <p className="text-xs sm:text-sm text-[#D8EEF4] max-w-xl mx-auto font-medium leading-relaxed">
            Our 24x7 Inpatient Admission Desk and TPA Insurance Coordinator team is available round-the-clock to guide your family.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:02261234567"
              className="py-4 px-8 rounded-2xl bg-[#087F8C] text-white font-extrabold text-xs hover:bg-[#075E68] transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Admissions: +91 22 6123 4567</span>
            </a>
            <button 
              onClick={() => {
                if (setActivePage) setActivePage('appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-4 px-8 rounded-2xl bg-white text-[#1A3C34] font-extrabold text-xs hover:bg-[#EAF6FA] transition-all shadow-md"
            >
              Book OPD Appointment
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
