import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  UserCheck, 
  Stethoscope, 
  Heart,
  ChevronRight,
  Sparkles,
  Lock,
  Phone
} from 'lucide-react';
import { doctorsData } from '../data/doctors';

export default function AboutPage({ setActivePage, setSelectedDoctorId, setSelectedDoctorForBooking }) {
  
  // Pick top 3 doctors for the compact team preview
  const featuredTeam = doctorsData.slice(0, 3);

  const specialtiesList = [
    "Cardiology & Cardiac Surgery",
    "Neurology & Neuro-ICU",
    "Orthopaedics & Robotic Surgery",
    "Gastroenterology & GI Surgery",
    "Oncology & Immunotherapy",
    "Obstetrics & Gynaecology",
    "Pediatrics & Child Care",
    "General Internal Medicine",
    "ENT & Head-Neck Surgery",
    "Ophthalmology & Eye Care",
    "Dermatology & Skin Care"
  ];

  const philosophyItems = [
    {
      num: "01",
      title: "Listen First",
      desc: "Good healthcare begins with understanding the person, not just treating symptoms. We take time to listen to your history, concerns, and expectations."
    },
    {
      num: "02",
      title: "Make Access Simple",
      desc: "Appointments, specialist discovery, and follow-ups should feel straightforward. We reduce unnecessary waiting and administrative complexity."
    },
    {
      num: "03",
      title: "Build Trust",
      desc: "Patients deserve clear clinical information, transparent communication, and respectful care without medical jargon or hidden costs."
    },
    {
      num: "04",
      title: "Stay Connected",
      desc: "Healthcare should continue beyond a single consultation. We support continuity through follow-up scheduling, digital reports, and ongoing guidance."
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Find the Right Doctor",
      desc: "Browse senior consultants by specialty, clinical experience, and patient ratings."
    },
    {
      step: "02",
      title: "Choose a Convenient Time",
      desc: "Select an OPD consultation slot that fits your schedule."
    },
    {
      step: "03",
      title: "Book Your Appointment",
      desc: "Receive instant confirmation and digital appointment vouchers."
    },
    {
      step: "04",
      title: "Receive Your Care",
      desc: "Meet senior consultants in private, comfortable clinical suites."
    },
    {
      step: "05",
      title: "Continue Your Journey",
      desc: "Access digital lab reports, prescriptions, and follow-up slots online."
    }
  ];

  const testimonials = [
    {
      quote: "The booking process was simple, and I was able to find a cardiologist who matched the consultation I needed. The appointment confirmation was also very clear.",
      author: "Priya S.",
      location: "Mumbai Central"
    },
    {
      quote: "Consulting Dr. Reddy for my mother's knee joint evaluation gave us complete clarity. The OPD scheduling was prompt and without confusion.",
      author: "Amit K.",
      location: "Thane"
    },
    {
      quote: "Having direct access to doctor availability and instant digital vouchers made managing my father's follow-up care stress-free.",
      author: "Sunita R.",
      location: "Worli"
    }
  ];

  return (
    <div className="bg-[#FBF9F5] min-h-screen text-[#1A3C34]">
      
      {/* 1. PREMIUM ABOUT HERO */}
      <section className="py-16 sm:py-24 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">
                ABOUT US
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight leading-[1.08]">
                Healthcare Built Around People.
              </h1>

              <p className="text-base sm:text-lg text-[#33413B] leading-relaxed max-w-xl font-medium">
                Making quality medical care easier to discover, access, and navigate. We connect patients with experienced specialists across disciplines, supported by modern clinical facilities and respectful, individual care.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => {
                    if (setActivePage) setActivePage('appointment');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="py-4 px-7 rounded-2xl bg-[#1A3C34] text-white font-extrabold text-xs hover:bg-[#0F3B36] shadow-md transition-all flex items-center justify-center space-x-2.5"
                >
                  <Calendar className="w-4 h-4 text-[#087F8C]" />
                  <span>Book an Appointment</span>
                </button>
              </div>
            </div>

            {/* Right Large Authentic Healthcare Photograph */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8E4DC] aspect-[4/3] group">
                <img 
                  src="/images/hospital_care_comfort.jpg" 
                  alt="Doctor warmly consulting with patient in clinical office" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-md text-xs">
                  <div className="font-extrabold text-[#1A3C34]">Empathetic Clinical Consultation</div>
                  <div className="text-[#587176] font-medium mt-0.5">Aarogya Prime Hospital Flagship Campus • Mumbai Central</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION / OUR STORY (Wide Editorial Section) */}
      <section className="py-20 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2">
                OUR STORY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight leading-tight">
                Care That Begins With Listening.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#33413B] leading-relaxed font-medium">
              <p>
                Finding the right medical care should be straightforward, clear, and centered on the patient's actual needs. Too often, patients face fragmented information, long wait times, and confusing processes when seeking specialized medical attention.
              </p>
              <p className="border-l-2 border-[#087F8C] pl-4 italic text-[#1A3C34] font-serif-editorial text-lg font-bold">
                "Founded with a simple idea: finding the right medical care should be easier, clearer and more personal."
              </p>
              <p>
                By organizing specialist availability, clinical expertise, and appointment access under a unified platform, we help patients connect with appropriate doctors with confidence. From initial consultation discovery to post-treatment follow-ups, we support patients throughout their care journey with transparent communication, direct scheduling, and empathetic guidance at every step.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION + VISION (Sophisticated Split Section, NOT Cards) */}
      <section className="py-20 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Mission */}
            <div className="space-y-4">
              <div className="text-[10px] font-extrabold text-[#087F8C] tracking-[0.12em] uppercase">
                OUR MISSION
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34] font-serif-editorial leading-snug">
                "To make trusted medical care easier to discover, access and continue."
              </h3>
              <p className="text-xs sm:text-sm text-[#587176] leading-relaxed font-medium">
                We focus on removing friction between patients and qualified doctors, ensuring every individual receives timely, respectful, and coordinated care from first contact through complete recovery.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4 lg:border-l lg:border-[#E8E4DC] lg:pl-12">
              <div className="text-[10px] font-extrabold text-[#087F8C] tracking-[0.12em] uppercase">
                OUR VISION
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1A3C34] font-serif-editorial leading-snug">
                "To build a healthcare experience where technology simplifies access without replacing the human connection between doctor and patient."
              </h3>
              <p className="text-xs sm:text-sm text-[#587176] leading-relaxed font-medium">
                We believe digital tools should serve as thoughtful bridges—reducing administrative waiting so doctors and patients can focus entirely on meaningful clinical care.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HEALTHCARE PHILOSOPHY ("How We Think About Care" - Numbered Rows, NOT cards) */}
      <section className="py-24 border-b border-[#E8E4DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2">
              CLINICAL VALUES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              How We Think About Care
            </h2>
          </div>

          <div className="divide-y divide-[#E8E4DC]">
            {philosophyItems.map((item, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group hover:bg-white/40 px-4 rounded-2xl transition-colors">
                <div className="md:col-span-2 text-3xl font-extrabold text-[#1A3C34]/20 group-hover:text-[#087F8C] transition-colors font-serif-editorial">
                  {item.num}
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-xl font-extrabold text-[#1A3C34] font-serif-editorial">
                    {item.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="text-xs sm:text-sm text-[#587176] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. OUR MEDICAL NETWORK (Clean Specialty List) */}
      <section className="py-20 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">
                MEDICAL NETWORK
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
                Experienced Care Across Specialties
              </h2>
              <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed font-medium">
                Patients can discover and consult doctors based on clinical specialty, years of experience, campus availability, and specific consultation needs. Our network spans primary, specialized, and surgical care.
              </p>
              <button 
                onClick={() => {
                  if (setActivePage) setActivePage('specialties');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#1A3C34] hover:text-[#087F8C] transition-colors pt-2"
              >
                <span>Explore All Departments</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Specialties List */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#E8E4DC] shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-extrabold text-[#1A3C34]">
                {specialtiesList.map((spec, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF]">
                    <span className="w-2 h-2 rounded-full bg-[#087F8C] flex-shrink-0"></span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. REALISTIC STATISTICS SECTION (Refined Typography & Whitespace) */}
      <section className="py-20 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A3C34] text-white rounded-3xl p-10 sm:p-14 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              <div className="pt-4 md:pt-0">
                <div className="text-4xl sm:text-5xl font-extrabold font-serif-editorial text-[#38BDF8]">15+</div>
                <div className="text-xs font-bold text-[#D8EEF4] uppercase tracking-wider mt-2">Medical Specialties</div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="text-4xl sm:text-5xl font-extrabold font-serif-editorial text-[#38BDF8]">80+</div>
                <div className="text-xs font-bold text-[#D8EEF4] uppercase tracking-wider mt-2">Senior Clinicians</div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="text-4xl sm:text-5xl font-extrabold font-serif-editorial text-[#38BDF8]">12+</div>
                <div className="text-xs font-bold text-[#D8EEF4] uppercase tracking-wider mt-2">Years Clinical Excellence</div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="text-4xl sm:text-5xl font-extrabold font-serif-editorial text-[#38BDF8]">4.8 / 5</div>
                <div className="text-xs font-bold text-[#D8EEF4] uppercase tracking-wider mt-2">Average Patient Rating</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. PATIENT JOURNEY (5 Editorial Process Steps) */}
      <section className="py-24 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2">
              PATIENT EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              Your Journey to Better Health
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {journeySteps.map((j, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-[#E8E4DC] shadow-sm flex flex-col justify-between relative group hover:-translate-y-1 transition-transform">
                <div>
                  <div className="text-2xl font-black text-[#1A3C34]/20 group-hover:text-[#087F8C] transition-colors font-serif-editorial mb-3">
                    {j.step}
                  </div>
                  <h3 className="text-base font-extrabold text-[#1A3C34] font-serif-editorial mb-2">
                    {j.title}
                  </h3>
                  <p className="text-xs text-[#587176] leading-relaxed font-medium">
                    {j.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. HUMAN SIDE OF HEALTHCARE ("Because Healthcare Is Personal.") */}
      <section className="py-24 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em]">
                HUMAN-CENTERED CARE
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
                Because Healthcare Is Personal.
              </h2>
              <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed font-medium">
                Every patient arrives with different concerns, circumstances, and expectations. Behind every appointment request is a person seeking clarity, comfort, and clinical direction.
              </p>
              <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed font-medium">
                We believe in providing care that treats people with dignity, patience, and warmth. Technology should streamline the scheduling, but the heart of healthcare will always remain the personal connection between a patient and their doctor.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E8E4DC] aspect-[16/10]">
                <img 
                  src="/images/about_patient_care.jpg" 
                  alt="Doctor sitting warmly with patient and family member reviewing medical charts" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. PATIENT TRUST & PRIVACY ("Your Information Deserves Care Too.") */}
      <section className="py-20 border-b border-[#E8E4DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#EAF6FA] rounded-3xl p-8 sm:p-12 border border-[#DCECEF] space-y-4 shadow-sm">
            <div className="flex items-center space-x-2 text-[#087F8C]">
              <Lock className="w-5 h-5" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.12em]">PATIENT CONFIDENTIALITY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              Your Information Deserves Care Too.
            </h2>
            <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed font-medium max-w-3xl">
              We handle patient information with responsibility and care. Appointment details remain strictly private, consultation records are securely managed, and communication is designed around patient confidentiality and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* 10. MEET THE MEDICAL TEAM (Compact 3-Doctor Preview) */}
      <section className="py-24 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2">
                MEDICAL FACULTY
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
                Meet Our Senior Medical Team
              </h2>
              <p className="text-xs sm:text-sm text-[#587176] font-medium mt-1">
                A compact preview of senior consultants leading our multidisciplinary clinical departments.
              </p>
            </div>

            <button 
              onClick={() => {
                if (setActivePage) setActivePage('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-extrabold text-[#1A3C34] hover:text-[#087F8C] transition-colors"
            >
              <span>Meet All Doctors</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTeam.map(doc => (
              <div key={doc.id} className="bg-white rounded-3xl p-6 border border-[#E8E4DC] shadow-sm flex items-center space-x-4">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-20 h-20 rounded-2xl object-cover object-top border border-[#E8E4DC] flex-shrink-0"
                />
                <div className="space-y-1 min-w-0">
                  <h3 className="font-extrabold text-base text-[#1A3C34] font-serif-editorial truncate">{doc.name}</h3>
                  <div className="text-xs font-bold text-[#087F8C] truncate">{doc.title || doc.designation}</div>
                  <div className="text-[11px] text-[#587176] font-medium">{doc.qualification}</div>
                  <div className="text-[10px] font-extrabold text-[#159A86]">{doc.experienceYears}+ Years Experience</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. PATIENT PERSPECTIVE (3 Believable Testimonials) */}
      <section className="py-24 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[10px] font-extrabold text-[#087F8C] uppercase tracking-[0.12em] mb-2">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              Patient Perspectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-[#E8E4DC] shadow-sm flex flex-col justify-between space-y-6">
                <p className="text-xs sm:text-sm text-[#33413B] leading-relaxed italic font-serif-editorial">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-[#E8E4DC]">
                  <div className="font-extrabold text-xs text-[#1A3C34]">{t.author}</div>
                  <div className="text-[11px] text-[#587176] font-medium">{t.location}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-20 bg-[#1A3C34] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-serif-editorial tracking-tight">
            Finding the Right Care Should Feel Simple.
          </h2>
          <p className="text-sm sm:text-base text-[#D8EEF4] max-w-xl mx-auto font-medium">
            Explore our network of doctors and book an appointment at a time that works for you.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => {
                if (setActivePage) setActivePage('doctors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-4 px-8 rounded-2xl bg-white border border-white text-[#1A3C34] font-extrabold text-xs hover:bg-[#EAF6FA] transition-all shadow-md"
            >
              Find a Doctor
            </button>
            <button 
              onClick={() => {
                if (setActivePage) setActivePage('appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="py-4 px-8 rounded-2xl bg-[#087F8C] text-white font-extrabold text-xs hover:bg-[#075E68] transition-all shadow-md"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
