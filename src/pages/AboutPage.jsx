import React, { useState } from 'react';
import { 
  Building, 
  Award, 
  ShieldCheck, 
  HeartPulse, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Users, 
  Activity, 
  Cpu, 
  Sparkles, 
  ShieldAlert, 
  UserCheck, 
  Stethoscope, 
  Pill, 
  Brain, 
  Bone, 
  Eye, 
  Phone, 
  Calendar, 
  ArrowRight,
  ChevronRight,
  Heart,
  Globe,
  FileText
} from 'lucide-react';
import { hospitalData } from '../data/hospital';

export default function AboutPage({ setActivePage }) {
  const [activeNav, setActiveNav] = useState('who-we-are');

  const scrollToSection = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'our-story', label: 'Our Story' },
    { id: 'philosophy', label: 'Medical Philosophy' },
    { id: 'excellence', label: 'Clinical Excellence' },
    { id: 'services', label: 'Services' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'technology', label: 'Technology' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'multidisciplinary', label: 'Care Model' },
    { id: 'journey', label: 'Patient Experience' },
    { id: 'quality', label: 'Quality & Safety' },
    { id: 'community', label: 'Community' },
    { id: 'milestones', label: 'Milestones' },
    { id: 'visit', label: 'Location & Visit' }
  ];

  return (
    <div className="bg-[#F6F8F7] min-h-screen text-[#102F30]">
      
      {/* SECTION 01 — INSTITUTIONAL HERO */}
      <section className="relative bg-gradient-to-b from-[#0A4D4E] via-[#063233] to-[#042526] text-white pt-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#10B981] text-xs font-bold backdrop-blur-md">
                <Building className="w-4 h-4" />
                <span>ABOUT AAROGYA PRIME HOSPITAL</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Built Around Medicine.<br />
                <span className="text-[#10B981]">Driven by Human Care.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl">
                Aarogya Prime Hospital is a 300-bed multispeciality tertiary care hospital in Mumbai Central, bringing together experienced clinicians, advanced medical technology and patient-centred care under one roof.
              </p>

              {/* Institutional Facts Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 text-center">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="text-xl font-extrabold text-white">2011</div>
                  <div className="text-[10px] text-[#CBD5E1] font-semibold uppercase">Established</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="text-xl font-extrabold text-[#10B981]">300</div>
                  <div className="text-[10px] text-[#CBD5E1] font-semibold uppercase">Inpatient Beds</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="text-xl font-extrabold text-white">350+</div>
                  <div className="text-[10px] text-[#CBD5E1] font-semibold uppercase">Specialists</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="text-xl font-extrabold text-[#10B981]">24x7</div>
                  <div className="text-[10px] text-[#CBD5E1] font-semibold uppercase">Emergency</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-xl font-extrabold text-white">18</div>
                  <div className="text-[10px] text-[#CBD5E1] font-semibold uppercase">Modular OTs</div>
                </div>
              </div>
            </div>

            {/* Hero Architectural Photography */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 h-96 sm:h-[420px]">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Aarogya Prime Hospital Mumbai Central Campus" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042526] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-[#102F30] text-xs font-bold shadow-lg">
                  <div>Flagship Hospital Campus • Mumbai Central</div>
                  <div className="text-[11px] text-[#059669] font-semibold mt-0.5">Dr. E. Moses Road, Opp Famous Studios, Mumbai</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* STICKY "ON THIS PAGE" SECTION NAVIGATION */}
      <div className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-[#EBF3F5] shadow-sm py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 no-scrollbar">
          <span className="text-xs font-extrabold text-[#0A4D4E] uppercase tracking-wider flex-shrink-0 mr-2 flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>On This Page:</span>
          </span>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeNav === item.id 
                  ? 'bg-[#0A4D4E] text-white shadow-sm' 
                  : 'bg-[#F6F8F7] text-[#536667] hover:bg-[#EBF3F5] hover:text-[#0A4D4E]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* SECTION 02 — WHO WE ARE */}
        <section id="who-we-are" className="scroll-mt-32 space-y-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Institutional Purpose</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30] tracking-tight">
              More than a hospital.<br />A centre built around complete care.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 border border-[#EBF3F5] shadow-card space-y-4 text-sm sm:text-base text-[#536667] leading-relaxed">
              <p>
                Aarogya Prime Hospital was established in 2011 by senior cardiologists and clinical leaders associated with AIIMS New Delhi and KEM Hospital Mumbai. The institution was created with the vision of bringing advanced tertiary healthcare to patients in Mumbai while maintaining the personal attention traditionally associated with trusted family healthcare.
              </p>
              <p>
                Over the past 15 years, the hospital has developed into an integrated multispeciality ecosystem encompassing 14 specialized clinical departments, 65 critical care ICU beds, 18 Zero-Infection HEPA Modular Operating Theatres, and a 24x7 Emergency Cardiac Trauma Center.
              </p>
              <p>
                Our clinical care model ensures that every patient has access to coordinated diagnostics, precision surgical care, intensive rehabilitation, and ongoing preventive follow-up under one roof—eliminating fragmented referrals and unnecessary patient anxiety.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#EBF3F5]/80 rounded-3xl p-6 border border-[#10B981]/30 space-y-4">
              <h3 className="font-extrabold text-[#0A4D4E] text-base">Coordinated Care Ecosystem</h3>
              <ul className="space-y-2 text-xs font-semibold text-[#102F30]">
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>Multispeciality Clinical OPDs</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>24x7 Emergency & Critical Care</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>3T MRI & NABL Diagnostics</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>Mako Robotic Surgery OTs</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>Inpatient Private & Deluxe Suites</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>100% Cashless TPA Helpdesk</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 03 — OUR FOUNDING STORY */}
        <section id="our-story" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Chronological Journey</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">Why Aarogya Prime was founded</h2>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: "2011", title: "Foundation in Mumbai Central", desc: "Established as a 100-bed cardiac tertiary care hospital by AIIMS & KEM clinicians." },
              { year: "2013", title: "Critical Care Expansion", desc: "Launched 40-bed ICU and expanded surgical gastrointestinal capabilities." },
              { year: "2016", title: "Specialist Department Growth", desc: "Added Neurosciences, Medical Oncology, and 3T MRI diagnostic imaging." },
              { year: "2019", title: "Digital Patient Services", desc: "Pioneered zero-waiting digital OPD check-in and digital lab report delivery." },
              { year: "2021", title: "Emergency & Trauma Upgrade", desc: "Expanded Level-1 Emergency Trauma Ramp and 24x7 Cath Lab availability." },
              { year: "2024–2026", title: "Robotic Surgery & 300 Beds", desc: "Introduced Mako Robotic Joint Replacement, serving 45,000+ patients annually." }
            ].map((m, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-[#EBF3F5] shadow-card hover:border-[#0A4D4E] transition-all space-y-2">
                <div className="text-2xl font-black text-[#10B981]">{m.year}</div>
                <h3 className="font-bold text-base text-[#102F30]">{m.title}</h3>
                <p className="text-xs text-[#536667] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 04 — OUR MEDICAL PHILOSOPHY */}
        <section id="philosophy" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Core Values</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">"Medicine is science. Care is personal."</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: "01", title: "Listen First", desc: "Taking time to understand the patient's full clinical history and emotional concerns before prescribing." },
              { num: "02", title: "Diagnose Precisely", desc: "Leveraging 3T MRI, NABL labs, and expert clinical opinions to eliminate guesswork." },
              { num: "03", title: "Treat Thoughtfully", desc: "Choosing minimal access laparoscopic and robotic options for faster patient recovery." },
              { num: "04", title: "Communicate Clearly", desc: "Explaining diagnoses, treatment choices, and costs transparently without medical jargon." },
              { num: "05", title: "Care Beyond Treatment", desc: "Providing post-discharge rehabilitation, dietician advice, and annual health checkup tracking." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-[#EBF3F5] shadow-card flex flex-col justify-between hover:shadow-lg transition-all">
                <div className="text-3xl font-black text-[#0A4D4E]/30 mb-4">{p.num}</div>
                <div>
                  <h3 className="font-bold text-base text-[#102F30] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#536667] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05 — OUR CENTRES OF CLINICAL EXCELLENCE */}
        <section id="excellence" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Specialist Facilities</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">Centres of Clinical Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cardiac Sciences", subtitle: "24x7 Cath Lab, Angioplasty, TAVI & CABG Bypass", icon: HeartPulse },
              { title: "Neurosciences", subtitle: "Hyperacute Stroke Unit, 3T MRI & Spine Surgery", icon: Brain },
              { title: "Orthopaedics & Joint Care", subtitle: "Mako Robotic Knee Replacement & Trauma", icon: Bone },
              { title: "Oncology & Cancer Care", subtitle: "Immunotherapy, Targeted Chemotherapy & Tumor Surgery", icon: ShieldAlert },
              { title: "Women & Child Health", subtitle: "Painless Birthing, High-Risk Pregnancy & Level III NICU", icon: Users },
              { title: "Digestive & Liver Sciences", subtitle: "Advanced ERCP, Laparoscopic GI Surgery & HPB Liver", icon: Activity }
            ].map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-[#EBF3F5] shadow-card hover:shadow-xl transition-all space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF3F5] text-[#0A4D4E] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#102F30]">{c.title}</h3>
                  <p className="text-xs text-[#536667] leading-relaxed">{c.subtitle}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 06 — HOSPITAL SERVICES */}
        <section id="services" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Comprehensive Directory</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">Complete care, under one roof.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Outpatient OPD Consultations", "24x7 Emergency Trauma", "Inpatient Private Wards", 
              "Critical Care ICU & CCU", "Mako Robotic Surgery", "3T MRI Diagnostic Imaging", 
              "NABL Pathology Labs", "24x7 In-House Pharmacy", "24x7 Ambulance 108", 
              "Physiotherapy & Rehab", "Dietetics & Nutrition", "100% Cashless TPA Desk"
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-[#EBF3F5] text-xs font-bold text-[#102F30] flex items-center space-x-2 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 07 & 08 — INFRASTRUCTURE & MEDICAL TECHNOLOGY */}
        <section id="infrastructure" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Architecture & Equipment</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">Designed for complex care. Built for patient comfort.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#EBF3F5] shadow-card space-y-4">
              <h3 className="text-xl font-bold text-[#0A4D4E] flex items-center space-x-2">
                <Building className="w-5 h-5 text-[#10B981]" />
                <span>Hospital Infrastructure</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-[#536667]">
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>300 Inpatient Beds (Deluxe Suites, Private Rooms, Wards)</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>18 Zero-Infection HEPA Modular Operating Theatres</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>65 Critical Care ICU, CCU & Level III NICU Beds</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>24x7 Emergency Ramp & Direct Cardiac Cath Lab Access</span></li>
              </ul>
              <button 
                onClick={() => {
                  if (setActivePage) setActivePage('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-2.5 px-4 rounded-xl bg-[#0A4D4E] text-white text-xs font-bold hover:bg-[#063233] transition-colors"
              >
                View Hospital Infrastructure Gallery &rarr;
              </button>
            </div>

            <div id="technology" className="bg-[#063233] text-white rounded-3xl p-8 border border-[#0A4D4E] shadow-xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-[#10B981]" />
                <span>Advanced Medical Technology</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-[#CBD5E1]">
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>Mako Robotic Arm-Assisted Knee Surgery System</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>3T Digital MRI Scanner & 128-Slice CT Imaging</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>Flat-Panel DSA Cath Lab for Emergency PCI</span></li>
                <li className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-[#10B981]" /><span>Fully Automated NABL Pathology Analyzers</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 09 & 10 — DOCTORS, LEADERSHIP & MULTIDISCIPLINARY CARE */}
        <section id="leadership" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Medical Direction</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">Experienced clinicians. One shared standard of care.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dr. Rajesh Mehta", title: "Chairman & Senior Cardiologist", exp: "25+ Yrs Exp • KEM Alumni", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" },
              { name: "Dr. Ananya Deshmukh", title: "Director - Cardiac Sciences", exp: "18 Yrs Exp • AIIMS Delhi", img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80" },
              { name: "Dr. Vikramaditya Reddy", title: "Director - Joint Replacement", exp: "20 Yrs Exp • M.Ch UK", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80" },
              { name: "Dr. Priya Nair", title: "Senior Consultant - Neurology", exp: "16 Yrs Exp • NIMHANS", img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80" }
            ].map((l, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-[#EBF3F5] shadow-card text-center space-y-3">
                <img src={l.img} alt={l.name} className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-[#10B981]/30" />
                <div>
                  <h3 className="font-bold text-base text-[#102F30]">{l.name}</h3>
                  <div className="text-xs text-[#059669] font-medium">{l.title}</div>
                  <div className="text-[10px] text-[#7B8989] mt-1">{l.exp}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Multidisciplinary Care Diagram */}
          <div id="multidisciplinary" className="scroll-mt-32 bg-[#EBF3F5] rounded-3xl p-8 border border-[#10B981]/30 text-center space-y-4">
            <h3 className="text-2xl font-extrabold text-[#0A4D4E]">Complex cases deserve more than one perspective.</h3>
            <p className="text-xs text-[#536667] max-w-2xl mx-auto">
              Every complex cardiac, oncology, or neurosurgical patient is evaluated by a multi-disciplinary Tumor Board / Clinical Review Board comprising Cardiologists, Surgeons, Anaesthetists, Intensivists, and Physiotherapists.
            </p>
          </div>
        </section>

        {/* SECTION 11 & 12 — PATIENT EXPERIENCE & QUALITY */}
        <section id="journey" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Patient Centricity</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">Every patient's journey is different. Our care is personal.</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 text-center">
            {["01 DISCOVER", "02 CONSULT", "03 DIAGNOSE", "04 TREAT", "05 RECOVER", "06 PREVENT"].map((step, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-[#EBF3F5] shadow-sm font-extrabold text-xs text-[#0A4D4E]">
                {step}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 13 & 14 — ACCREDITATIONS & PATIENT SERVICES */}
        <section id="quality" className="scroll-mt-32 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Clinical Governance</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">Standards that hold us accountable</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hospitalData.accreditations.map((acc, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-[#EBF3F5] shadow-card space-y-2">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
                <h3 className="font-bold text-base text-[#102F30]">{acc.title}</h3>
                <p className="text-xs text-[#536667]">{acc.subtitle}</p>
                <div className="text-[10px] font-bold text-[#059669] pt-2 border-t border-[#EBF3F5]">{acc.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 16 & 17 — COMMUNITY & MILESTONES */}
        <section id="milestones" className="scroll-mt-32 space-y-8">
          <div id="community" className="scroll-mt-32 text-center max-w-2xl mx-auto">
            <div className="text-xs font-bold text-[#059669] uppercase tracking-wider mb-2">Community Impact</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102F30]">Better healthcare starts before illness</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-3xl p-8 border border-[#EBF3F5] shadow-card">
              <div className="text-4xl font-black text-[#0A4D4E]">10,000+</div>
              <div className="text-xs font-bold text-[#536667] uppercase mt-2">Free Community Health Screenings</div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-[#EBF3F5] shadow-card">
              <div className="text-4xl font-black text-[#10B981]">2,500+</div>
              <div className="text-xs font-bold text-[#536667] uppercase mt-2">Cardiac & Diabetes Awareness Seminars</div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-[#EBF3F5] shadow-card">
              <div className="text-4xl font-black text-[#0A4D4E]">500+</div>
              <div className="text-xs font-bold text-[#536667] uppercase mt-2">Hands-on CPR Training Participants</div>
            </div>
          </div>
        </section>

        {/* SECTION 23 — VISIT OUR HOSPITAL */}
        <section id="visit" className="scroll-mt-32 bg-white rounded-3xl p-8 sm:p-12 border border-[#EBF3F5] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold text-[#059669] uppercase tracking-wider">Campus Access</div>
              <h2 className="text-3xl font-extrabold text-[#102F30]">Visit Aarogya Prime Hospital</h2>
              <p className="text-xs text-[#536667] leading-relaxed">{hospitalData.location.address}</p>
              <div className="text-xs text-[#102F30] font-bold">OPD Timings: Mon-Sat 08:00 AM - 08:00 PM (Emergency 24x7)</div>
            </div>
            <div className="lg:col-span-6 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => {
                  if (setActivePage) setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#0A4D4E] text-white font-bold text-xs hover:bg-[#063233] text-center"
              >
                Get Driving Directions &rarr;
              </button>
              <button 
                onClick={() => {
                  if (setActivePage) setActivePage('appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#10B981] text-[#042526] font-extrabold text-xs hover:bg-white text-center shadow-md"
              >
                Book OPD Appointment
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 24 — FINAL CTA */}
        <section className="bg-gradient-to-br from-[#0A4D4E] to-[#063233] text-white rounded-3xl p-10 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Your health deserves experienced hands and thoughtful care.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => {
                if (setActivePage) setActivePage('appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3.5 px-8 rounded-xl bg-[#10B981] text-[#042526] font-extrabold text-xs hover:bg-white transition-all shadow-lg"
            >
              Book an Appointment
            </button>
            <button 
              onClick={() => {
                if (setActivePage) setActivePage('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-3.5 px-8 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/20 hover:bg-white/20 transition-all"
            >
              Find a Doctor
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
