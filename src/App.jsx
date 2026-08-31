import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StickyEmergencyBar from './components/layout/StickyEmergencyBar';
import SearchModal from './components/common/SearchModal';

// Pages
import HomePage from './pages/HomePage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import SpecialtiesPage from './pages/SpecialtiesPage';
import TreatmentsPage from './pages/TreatmentsPage';
import HealthCheckupsPage from './pages/HealthCheckupsPage';
import HealthLibraryPage from './pages/HealthLibraryPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import PatientCarePage from './pages/PatientCarePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AppointmentWizardPage from './pages/AppointmentWizardPage';
import PatientReportsPage from './pages/PatientReportsPage';
import FaqPage from './pages/FaqPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedDoctorId, setSelectedDoctorId] = useState('dr-ananya-deshmukh');
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState(null);
  const [selectedArticleId, setSelectedArticleId] = useState('5-early-warning-signs-of-heart-disease');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8F7] text-[#102F30] font-sans antialiased selection:bg-[#10B981] selection:text-white">
      
      {/* Sticky Top Header */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openSearchModal={() => setIsSearchModalOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            setActivePage={setActivePage} 
            setSelectedDoctorId={setSelectedDoctorId}
            setSelectedDoctorForBooking={setSelectedDoctorForBooking}
            setSelectedArticleId={setSelectedArticleId}
            openSearchModal={() => setIsSearchModalOpen(true)}
          />
        )}

        {activePage === 'doctors' && (
          <DoctorsPage 
            setActivePage={setActivePage} 
            setSelectedDoctorId={setSelectedDoctorId}
            setSelectedDoctorForBooking={setSelectedDoctorForBooking}
          />
        )}

        {activePage === 'doctor-profile' && (
          <DoctorProfilePage 
            doctorId={selectedDoctorId} 
            setActivePage={setActivePage} 
            setSelectedDoctorForBooking={setSelectedDoctorForBooking}
          />
        )}

        {activePage === 'specialties' && (
          <SpecialtiesPage setActivePage={setActivePage} />
        )}

        {activePage === 'treatments' && (
          <TreatmentsPage setActivePage={setActivePage} />
        )}

        {activePage === 'health-checkups' && (
          <HealthCheckupsPage setActivePage={setActivePage} />
        )}

        {activePage === 'health-library' && (
          <HealthLibraryPage 
            setActivePage={setActivePage} 
            setSelectedArticleId={setSelectedArticleId} 
          />
        )}

        {activePage === 'article-detail' && (
          <ArticleDetailPage 
            articleId={selectedArticleId} 
            setActivePage={setActivePage} 
          />
        )}

        {activePage === 'patient-care' && (
          <PatientCarePage setActivePage={setActivePage} />
        )}

        {activePage === 'gallery' && (
          <GalleryPage />
        )}

        {activePage === 'about' && (
          <AboutPage setActivePage={setActivePage} />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}

        {activePage === 'appointment' && (
          <AppointmentWizardPage 
            selectedDoctorForBooking={selectedDoctorForBooking} 
            setActivePage={setActivePage} 
          />
        )}

        {activePage === 'patient-reports' && (
          <PatientReportsPage />
        )}

        {activePage === 'faq' && (
          <FaqPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Mobile Sticky Emergency & Booking Action Bar */}
      <StickyEmergencyBar setActivePage={setActivePage} />

      {/* Global Search Modal Overlay */}
      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)} 
        setActivePage={setActivePage} 
        setSelectedDoctorId={setSelectedDoctorId}
      />

    </div>
  );
}
