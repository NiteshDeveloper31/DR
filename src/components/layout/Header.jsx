import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  HeartPulse, 
  ShieldAlert, 
  FileText, 
  Clock,
  Activity,
  BookOpen,
  Stethoscope
} from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function Header({ activePage, setActivePage, openSearchModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar (Deep Teal Canvas #043F47) */}
      <div className="bg-[#043F47] text-[#D8EEF4] text-xs py-2 px-4 border-b border-[#075E68]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href={`tel:${hospitalData.emergency.phone}`} className="flex items-center space-x-1.5 text-[#D92D20] font-bold hover:text-white transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#D92D20] animate-ping"></span>
              <Phone className="w-3.5 h-3.5" />
              <span>24x7 Emergency: {hospitalData.emergency.phone}</span>
            </a>
            <div className="flex items-center space-x-1 text-[#D8EEF4]/80">
              <MapPin className="w-3.5 h-3.5 text-[#087F8C]" />
              <span>{hospitalData.location.area}, {hospitalData.location.city}</span>
            </div>
            <div className="flex items-center space-x-1 text-[#D8EEF4]/80">
              <Clock className="w-3.5 h-3.5 text-[#087F8C]" />
              <span>OPD Hours: 08:00 AM - 08:00 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <button onClick={() => navigateTo('patient-care')} className="hover:text-white transition-colors">
              Insurance & Cashless TPA
            </button>
            <button onClick={() => navigateTo('patient-reports')} className="hover:text-[#087F8C] font-semibold text-white transition-colors flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5 text-[#087F8C]" />
              <span>Online Lab Reports</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Clean Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#DCECEF]' 
          : 'bg-white py-4 border-b border-[#DCECEF]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center space-x-3 cursor-pointer group flex-shrink-0"
          >
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#1A3C34] tracking-tight leading-none font-serif-editorial">
                AAROGYA <span className="text-[#087F8C]">PRIME</span>
              </div>
              <div className="text-[10px] font-bold text-[#587176] tracking-wider uppercase mt-1">
                HOSPITAL • MUMBAI CENTRAL
              </div>
            </div>
          </div>

          {/* SIMPLIFIED DESKTOP NAVIGATION (4 CLEAN LINKS) */}
          <nav className="hidden lg:flex items-center space-x-2">
            
            {/* 1. Find a Doctor */}
            <button 
              onClick={() => navigateTo('doctors')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'doctors' ? 'text-[#1A3C34] bg-[#EAF6FA]' : 'text-[#123238] hover:text-[#1A3C34] hover:bg-[#F8FBFC]'
              }`}
            >
              Find a Doctor
            </button>

            {/* 2. Specialities */}
            <button 
              onClick={() => navigateTo('specialties')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'specialties' ? 'text-[#1A3C34] bg-[#EAF6FA]' : 'text-[#123238] hover:text-[#1A3C34] hover:bg-[#F8FBFC]'
              }`}
            >
              Specialities
            </button>

            {/* 3. Services & Care Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => navigateTo('patient-care')}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1 ${
                  ['treatments', 'patient-care', 'health-checkups', 'health-library'].includes(activePage) 
                    ? 'text-[#1A3C34] bg-[#EAF6FA]' 
                    : 'text-[#123238] hover:text-[#1A3C34] hover:bg-[#F8FBFC]'
                }`}
              >
                <span>Services & Care</span>
                <ChevronDown className="w-4 h-4 text-[#587176]" />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-[420px] bg-white shadow-2xl rounded-2xl border border-[#DCECEF] p-4 grid grid-cols-2 gap-3 mt-1 transition-all duration-200">
                  
                  <div onClick={() => navigateTo('treatments')} className="p-3 rounded-xl hover:bg-[#EAF6FA] cursor-pointer transition-colors space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-xs text-[#1A3C34]">
                      <Stethoscope className="w-3.5 h-3.5 text-[#087F8C]" />
                      <span>Treatments & Procedures</span>
                    </div>
                    <div className="text-[11px] text-[#587176]">Robotic surgery, angioplasty, joint care</div>
                  </div>

                  <div onClick={() => navigateTo('health-checkups')} className="p-3 rounded-xl hover:bg-[#EAF6FA] cursor-pointer transition-colors space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-xs text-[#1A3C34]">
                      <Activity className="w-3.5 h-3.5 text-[#087F8C]" />
                      <span>Health Checkups</span>
                    </div>
                    <div className="text-[11px] text-[#587176]">Preventive health packages</div>
                  </div>

                  <div onClick={() => navigateTo('patient-care')} className="p-3 rounded-xl hover:bg-[#EAF6FA] cursor-pointer transition-colors space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-xs text-[#1A3C34]">
                      <FileText className="w-3.5 h-3.5 text-[#087F8C]" />
                      <span>Patient & Visitor Guide</span>
                    </div>
                    <div className="text-[11px] text-[#587176]">Admission, visiting hours, TPA</div>
                  </div>

                  <div onClick={() => navigateTo('health-library')} className="p-3 rounded-xl hover:bg-[#EAF6FA] cursor-pointer transition-colors space-y-1">
                    <div className="flex items-center space-x-1.5 font-bold text-xs text-[#1A3C34]">
                      <BookOpen className="w-3.5 h-3.5 text-[#087F8C]" />
                      <span>Health Library</span>
                    </div>
                    <div className="text-[11px] text-[#587176]">Doctor-authored articles</div>
                  </div>

                </div>
              )}
            </div>

            {/* 4. About Us */}
            <button 
              onClick={() => navigateTo('about')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activePage === 'about' ? 'text-[#1A3C34] bg-[#EAF6FA]' : 'text-[#123238] hover:text-[#1A3C34] hover:bg-[#F8FBFC]'
              }`}
            >
              About Us
            </button>

          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-3">
            
            {/* Search Trigger Button */}
            <button 
              onClick={openSearchModal}
              className="p-2.5 text-[#587176] hover:text-[#1A3C34] hover:bg-[#EAF6FA] rounded-xl transition-colors"
              aria-label="Search Doctor, Specialty or Treatment"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Emergency Hotline Button */}
            <a 
              href={`tel:${hospitalData.emergency.phone}`}
              className="hidden xl:flex items-center space-x-2 px-3 py-2 rounded-xl bg-[#FEF3F2] border border-[#FCA5A5] text-[#D92D20] text-xs font-bold hover:bg-[#FEE2E2] transition-colors"
            >
              <ShieldAlert className="w-4 h-4 animate-pulse text-[#D92D20]" />
              <span>Emergency 108</span>
            </a>

            {/* Book Appointment CTA */}
            <button 
              onClick={() => navigateTo('appointment')}
              className="hidden sm:flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#1A3C34] text-white text-sm font-bold shadow-md hover:bg-[#0F3B36] transition-all"
            >
              <Calendar className="w-4 h-4 text-[#087F8C]" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Drawer Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-[#1A3C34] bg-[#EAF6FA] hover:bg-[#1A3C34] hover:text-white transition-colors"
              aria-label="Toggle Mobile Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#043F47]/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col p-6 overflow-y-auto">
            
            <div className="flex justify-between items-center pb-4 border-b border-[#DCECEF]">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-[#1A3C34] flex items-center justify-center text-[#EAF6FA]">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <span className="font-extrabold text-[#1A3C34] text-base font-serif-editorial">AAROGYA PRIME</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[#587176] hover:text-[#1A3C34] rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Items */}
            <div className="py-6 space-y-4 flex-1">
              <button onClick={() => navigateTo('home')} className="w-full text-left font-bold text-lg text-[#123238] hover:text-[#1A3C34] py-1 border-b border-gray-100">Home</button>
              <button onClick={() => navigateTo('doctors')} className="w-full text-left font-bold text-lg text-[#123238] hover:text-[#1A3C34] py-1 border-b border-gray-100">Find a Doctor</button>
              <button onClick={() => navigateTo('specialties')} className="w-full text-left font-bold text-lg text-[#123238] hover:text-[#1A3C34] py-1 border-b border-gray-100">Clinical Specialities</button>
              <button onClick={() => navigateTo('treatments')} className="w-full text-left font-bold text-lg text-[#123238] hover:text-[#1A3C34] py-1 border-b border-gray-100">Treatments & Procedures</button>
              <button onClick={() => navigateTo('health-checkups')} className="w-full text-left font-bold text-lg text-[#123238] hover:text-[#1A3C34] py-1 border-b border-gray-100">Health Checkup Packages</button>
              <button onClick={() => navigateTo('patient-care')} className="w-full text-left font-bold text-lg text-[#123238] hover:text-[#1A3C34] py-1 border-b border-gray-100">Patient & Visitor Guide</button>
              <button onClick={() => navigateTo('patient-reports')} className="w-full text-left font-bold text-lg text-[#087F8C] hover:text-[#1A3C34] py-1 border-b border-gray-100">View Lab Reports</button>
              <button onClick={() => navigateTo('health-library')} className="w-full text-left font-bold text-lg text-[#123238] hover:text-[#1A3C34] py-1 border-b border-gray-100">Health Library & Blog</button>
              <button onClick={() => navigateTo('about')} className="w-full text-left font-bold text-lg text-[#123238] hover:text-[#1A3C34] py-1 border-b border-gray-100">About Hospital</button>
              <button onClick={() => navigateTo('contact')} className="w-full text-left font-bold text-lg text-[#123238] hover:text-[#1A3C34] py-1 border-b border-gray-100">Contact & Directions</button>
            </div>

            {/* Mobile CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#DCECEF]">
              <a href={`tel:${hospitalData.emergency.phone}`} className="w-full py-3 rounded-xl bg-[#FEF3F2] border border-[#FCA5A5] text-[#D92D20] font-bold text-center flex items-center justify-center space-x-2">
                <ShieldAlert className="w-5 h-5" />
                <span>Call Emergency 108</span>
              </a>

              <button onClick={() => navigateTo('appointment')} className="w-full py-3 rounded-xl bg-[#1A3C34] text-white font-bold text-center flex items-center justify-center space-x-2 shadow-lg">
                <Calendar className="w-5 h-5 text-[#087F8C]" />
                <span>Book Appointment</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
