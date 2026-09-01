import React from 'react';
import HeroSection from '../components/home/HeroSection';
import QuickCareFinder from '../components/home/QuickCareFinder';
import TrustStrip from '../components/home/TrustStrip';
import FeaturedDoctors from '../components/home/FeaturedDoctors';
import EditorialCareSection from '../components/home/EditorialCareSection';
import SpecialtiesBento from '../components/home/SpecialtiesBento';
import CentresOfExcellence from '../components/home/CentresOfExcellence';
import SpecialisedTreatments from '../components/home/SpecialisedTreatments';
import InfrastructureTech from '../components/home/InfrastructureTech';
import PatientJourneyTimeline from '../components/home/PatientJourneyTimeline';
import PatientServicesGrid from '../components/home/PatientServicesGrid';
import VisitorGuide from '../components/home/VisitorGuide';
import InsuranceTPA from '../components/home/InsuranceTPA';
import HealthCheckups from '../components/home/HealthCheckups';
import EmergencySection from '../components/home/EmergencySection';
import PatientStories from '../components/home/PatientStories';
import FacilitiesGallery from '../components/home/FacilitiesGallery';
import HealthLibrary from '../components/home/HealthLibrary';
import DoctorReviewedContent from '../components/home/DoctorReviewedContent';
import HospitalStoryTimeline from '../components/home/HospitalStoryTimeline';
import AccreditationsQuality from '../components/home/AccreditationsQuality';
import HospitalLocationMap from '../components/home/HospitalLocationMap';
import FinalCallToAction from '../components/home/FinalCallToAction';

export default function HomePage({ 
  setActivePage, 
  setSelectedDoctorId, 
  setSelectedDoctorForBooking, 
  setSelectedArticleId,
  openSearchModal 
}) {
  return (
    <div className="space-y-0 bg-[#FBF9F5]">
      {/* Sec 01 */} <HeroSection setActivePage={setActivePage} openSearchModal={openSearchModal} />
      {/* Sec 02 */} <QuickCareFinder setActivePage={setActivePage} setSelectedDoctorId={setSelectedDoctorId} />
      {/* Sec 03 */} <TrustStrip />
      {/* Sec 04 */} <FeaturedDoctors setActivePage={setActivePage} setSelectedDoctorId={setSelectedDoctorId} setSelectedDoctorForBooking={setSelectedDoctorForBooking} />
      {/* Sec 05 */} <EditorialCareSection setActivePage={setActivePage} />
      {/* Sec 06 */} <CentresOfExcellence setActivePage={setActivePage} />
      {/* Sec 08 */} <SpecialisedTreatments setActivePage={setActivePage} />
      {/* Sec 09 */} <InfrastructureTech />
      {/* Sec 10 */} <PatientJourneyTimeline />
      {/* Sec 11 */} <PatientServicesGrid setActivePage={setActivePage} />
      {/* Sec 12 */} <VisitorGuide setActivePage={setActivePage} />
      {/* Sec 13 */} <InsuranceTPA setActivePage={setActivePage} />
      {/* Sec 15 */} <EmergencySection setActivePage={setActivePage} />
      {/* Sec 17 */} <FacilitiesGallery setActivePage={setActivePage} />
      {/* Sec 18 */} <HealthLibrary setActivePage={setActivePage} setSelectedArticleId={setSelectedArticleId} />
      {/* Sec 19 */} <DoctorReviewedContent />
      {/* Sec 20 */} <HospitalStoryTimeline />
      {/* Sec 22 */} <HospitalLocationMap setActivePage={setActivePage} />
      {/* Sec 23 */} <FinalCallToAction setActivePage={setActivePage} />
    </div>
  );
}
