import React, { useState } from 'react';
import { Calendar, User, CheckCircle2, Clock, MapPin, Printer, ArrowRight, ArrowLeft } from 'lucide-react';
import { doctorsData } from '../data/doctors';
import { specialtiesData } from '../data/specialties';

export default function AppointmentWizardPage({ initialDoctor, setActivePage }) {
  const [step, setStep] = useState(initialDoctor ? 3 : 1);
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialDoctor ? initialDoctor.specialtyId : '');
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor || null);
  const [selectedDate, setSelectedDate] = useState('2026-09-02');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('10:30 AM');
  
  const [patientForm, setPatientForm] = useState({
    fullName: 'Ramesh Sharma',
    phone: '+91 98200 12345',
    email: 'ramesh.sharma@example.com',
    age: '45',
    gender: 'Male',
    reason: 'Routine OPD Consultation & Health Checkup'
  });

  const [appointmentRef, setAppointmentRef] = useState('');

  const filteredDoctors = doctorsData.filter(d => 
    !selectedSpecialty || d.specialtyId === selectedSpecialty
  );

  const handleNext = () => {
    if (step === 5) {
      const ref = `APH-OPD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setAppointmentRef(ref);
      setStep(6);
      return;
    }
    setStep(s => Math.min(s + 1, 6));
  };

  const handleBack = () => {
    setStep(s => Math.max(s - 1, 1));
  };

  return (
    <div className="py-12 bg-[#F8FBFC] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#087F8C]/30 text-xs font-bold text-[#075E68] mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#087F8C]" />
            <span>Digital OPD Appointment Portal</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#123238]">Book Doctor Appointment</h1>
          <p className="text-xs text-[#587176] mt-1">Aarogya Prime Hospital • Mumbai Central Flagship OPD</p>
        </div>

        {/* 6 Step Progress Bar */}
        {step < 6 && (
          <div className="bg-white p-4 rounded-2xl border border-[#DCECEF] shadow-sm mb-8">
            <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-bold">
              {["1. Specialty", "2. Doctor", "3. Date & Time", "4. Patient Details", "5. Review"].map((label, idx) => (
                <div key={idx} className={`py-1.5 rounded-lg transition-all ${
                  step === idx + 1 
                    ? 'bg-[#075E68] text-white shadow-sm' 
                    : step > idx + 1 
                    ? 'bg-[#EAF6FA] text-[#075E68]' 
                    : 'bg-[#F8FBFC] text-[#587176]'
                }`}>
                  {label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wizard Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DCECEF] shadow-xl space-y-6">
          
          {/* STEP 1: Select Specialty */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-[#123238]">Step 1: Select Clinical Specialty</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialtiesData.map(spec => (
                  <div 
                    key={spec.id}
                    onClick={() => {
                      setSelectedSpecialty(spec.id);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      selectedSpecialty === spec.id ? 'bg-[#EAF6FA] border-[#075E68] shadow-sm' : 'bg-[#F8FBFC] border-[#DCECEF] hover:border-[#075E68]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-[#123238]">{spec.name}</div>
                      <div className="text-xs text-[#587176]">{spec.doctorCount} Doctors Available</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#075E68]" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Doctor */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#123238]">Step 2: Choose Doctor</h2>
                <button onClick={handleBack} className="text-xs font-bold text-[#075E68]">← Change Specialty</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredDoctors.map(doc => (
                  <div 
                    key={doc.id}
                    onClick={() => {
                      setSelectedDoctor(doc);
                      setStep(3);
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center space-x-3 ${
                      selectedDoctor?.id === doc.id ? 'bg-[#EAF6FA] border-[#075E68] shadow-sm' : 'bg-[#F8FBFC] border-[#DCECEF] hover:border-[#075E68]'
                    }`}
                  >
                    <img src={doc.image} alt={doc.name} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-xs text-[#123238] truncate">{doc.name}</div>
                      <div className="text-[11px] text-[#087F8C] truncate">{doc.specialtyName}</div>
                      <div className="text-[10px] text-[#587176]">Fee: ₹{doc.fee}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Select Date & Slot */}
          {step === 3 && selectedDoctor && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-[#DCECEF] pb-4">
                <div className="flex items-center space-x-3">
                  <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <div className="font-bold text-sm text-[#123238]">{selectedDoctor.name}</div>
                    <div className="text-xs text-[#087F8C]">{selectedDoctor.specialtyName} • ₹{selectedDoctor.fee}</div>
                  </div>
                </div>
                <button onClick={handleBack} className="text-xs font-bold text-[#075E68]">← Back</button>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123238] uppercase mb-2">Select Consultation Date</label>
                <input 
                  type="date" 
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-sm font-semibold text-[#123238] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123238] uppercase mb-2">Available Time Slots</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {["09:30 AM", "10:00 AM", "10:30 AM", "11:15 AM", "04:00 PM", "04:30 PM", "05:15 PM", "06:00 PM"].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedTimeSlot === slot 
                          ? 'bg-[#075E68] text-white shadow-sm' 
                          : 'bg-[#F8FBFC] border border-[#DCECEF] text-[#123238] hover:border-[#075E68]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => setStep(4)} className="w-full py-3 rounded-xl bg-[#075E68] text-white font-bold text-xs hover:bg-[#043F47]">
                Proceed to Patient Details &rarr;
              </button>
            </div>
          )}

          {/* STEP 4: Patient Details Form */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#123238]">Step 4: Patient Information</h2>
                <button onClick={handleBack} className="text-xs font-bold text-[#075E68]">← Back</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Patient Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Ramesh Sharma" 
                    value={patientForm.fullName}
                    onChange={(e) => setPatientForm({...patientForm, fullName: e.target.value})}
                    className="w-full h-11 px-3 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-xs font-semibold text-[#123238]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Mobile Number *</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. +91 98200 12345" 
                    value={patientForm.phone}
                    onChange={(e) => setPatientForm({...patientForm, phone: e.target.value})}
                    className="w-full h-11 px-3 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-xs font-semibold text-[#123238]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Age *</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 45" 
                    value={patientForm.age}
                    onChange={(e) => setPatientForm({...patientForm, age: e.target.value})}
                    className="w-full h-11 px-3 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-xs font-semibold text-[#123238]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Gender</label>
                  <select 
                    value={patientForm.gender}
                    onChange={(e) => setPatientForm({...patientForm, gender: e.target.value})}
                    className="w-full h-11 px-3 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-xs font-semibold text-[#123238]"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Brief Symptoms / Reason for Visit</label>
                <textarea 
                  rows={2} 
                  placeholder="e.g. Chest tightness during walking, Routine annual checkup..." 
                  value={patientForm.reason}
                  onChange={(e) => setPatientForm({...patientForm, reason: e.target.value})}
                  className="w-full p-3 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-xs font-semibold text-[#123238]"
                />
              </div>

              <button 
                onClick={() => {
                  if (!patientForm.fullName) setPatientForm(p => ({ ...p, fullName: 'Ramesh Sharma' }));
                  if (!patientForm.phone) setPatientForm(p => ({ ...p, phone: '+91 98200 12345' }));
                  handleNext();
                }}
                className="w-full py-3.5 rounded-xl bg-[#075E68] text-white font-extrabold text-xs hover:bg-[#043F47] shadow-md transition-all cursor-pointer"
              >
                Review Booking Details &rarr;
              </button>
            </div>
          )}

          {/* STEP 5: Review & Confirm */}
          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-[#123238]">Step 5: Review & Confirm Appointment</h2>
              
              <div className="p-4 rounded-2xl bg-[#EAF6FA] border border-[#DCECEF] space-y-2 text-xs text-[#123238]">
                <div><strong>Doctor:</strong> {selectedDoctor?.name} ({selectedDoctor?.specialtyName})</div>
                <div><strong>Consultation Date & Slot:</strong> {selectedDate} at {selectedTimeSlot}</div>
                <div><strong>Patient Name:</strong> {patientForm.fullName} ({patientForm.age} yrs, {patientForm.gender})</div>
                <div><strong>Contact:</strong> {patientForm.phone}</div>
                <div><strong>Hospital Location:</strong> Gate 1 OPD Reception, Mumbai Central Campus</div>
                <div className="pt-2 border-t border-[#DCECEF] text-sm font-extrabold text-[#075E68]">
                  Payable at OPD Counter: ₹{selectedDoctor?.fee}
                </div>
              </div>

              <button 
                onClick={handleNext}
                className="w-full py-3.5 rounded-xl bg-[#075E68] text-white font-extrabold text-xs hover:bg-[#043F47] shadow-lg"
              >
                Confirm OPD Appointment Booking
              </button>
            </div>
          )}

          {/* STEP 6: Final Printable Confirmation Card */}
          {step === 6 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EAF6FA] text-[#075E68] flex items-center justify-center mx-auto border-2 border-[#087F8C]">
                <CheckCircle2 className="w-10 h-10 text-[#087F8C]" />
              </div>

              <div>
                <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">Booking Successful</div>
                <h2 className="text-2xl font-extrabold text-[#123238]">Appointment Confirmed</h2>
                <div className="inline-block mt-2 px-4 py-1.5 rounded-full bg-[#075E68] text-white text-xs font-extrabold shadow-sm">
                  Ref ID: {appointmentRef}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8FBFC] border border-[#DCECEF] text-left text-xs text-[#123238] space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#DCECEF] pb-2">
                  <span className="text-[#587176]">Patient Name:</span>
                  <strong className="text-[#123238]">{patientForm.fullName}</strong>
                </div>
                <div className="flex justify-between border-b border-[#DCECEF] pb-2">
                  <span className="text-[#587176]">Consultant Doctor:</span>
                  <strong className="text-[#075E68]">{selectedDoctor?.name}</strong>
                </div>
                <div className="flex justify-between border-b border-[#DCECEF] pb-2">
                  <span className="text-[#587176]">Date & Time:</span>
                  <strong>{selectedDate} • {selectedTimeSlot}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#587176]">Reporting Gate:</span>
                  <strong>Gate 1 OPD Counter, Floor 2</strong>
                </div>
              </div>

              <div className="flex justify-center space-x-3 pt-2">
                <button 
                  onClick={() => window.print()}
                  className="py-2.5 px-4 rounded-xl bg-white border border-[#075E68] text-[#075E68] font-bold text-xs hover:bg-[#EAF6FA] flex items-center space-x-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>
                <button 
                  onClick={() => setActivePage('home')}
                  className="py-2.5 px-4 rounded-xl bg-[#075E68] text-white font-bold text-xs hover:bg-[#043F47]"
                >
                  Back to Homepage
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
