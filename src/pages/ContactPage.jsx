import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, Car, ShieldAlert } from 'lucide-react';
import { hospitalData } from '../data/hospital';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'General Enquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#F8FBFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#087F8C]/30 shadow-sm mb-3">
            <MapPin className="w-4 h-4 text-[#087F8C]" />
            <span className="text-xs font-bold text-[#075E68] uppercase">Hospital Campus Contact & Location</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123238]">
            Contact & Campus Location
          </h1>
          <p className="text-sm text-[#587176] mt-2">
            Single location flagship hospital campus at Dr. E. Moses Road, Mumbai Central
          </p>
        </div>

        {/* Contact Info & Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-[#DCECEF] shadow-card space-y-4">
              <h3 className="font-bold text-base text-[#123238] flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#087F8C]" />
                <span>Hospital Address</span>
              </h3>
              <p className="text-xs text-[#587176] leading-relaxed">{hospitalData.location.address}</p>
              <div className="text-[11px] text-[#075E68] font-bold bg-[#EAF6FA] px-3 py-1.5 rounded-xl inline-block border border-[#DCECEF]">
                Landmark: {hospitalData.location.googleMapLandmark}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#DCECEF] shadow-card space-y-3 text-xs text-[#587176]">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8FBFC] border border-[#DCECEF]">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#087F8C]" />
                  <span>OPD Desk</span>
                </div>
                <strong className="text-[#123238]">{hospitalData.contacts.opdAppointments}</strong>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FEF3F2] border border-[#FCA5A5]/60 text-[#D92D20]">
                <div className="flex items-center space-x-2 font-bold">
                  <ShieldAlert className="w-4 h-4 animate-pulse text-[#D92D20]" />
                  <span>24x7 Emergency</span>
                </div>
                <strong className="font-extrabold">{hospitalData.emergency.phone}</strong>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8FBFC] border border-[#DCECEF]">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#075E68]" />
                  <span>Official Email</span>
                </div>
                <span className="font-semibold text-[#123238]">{hospitalData.contacts.email}</span>
              </div>
            </div>

            <div className="bg-[#EAF6FA] rounded-3xl p-6 border border-[#DCECEF] space-y-2 text-xs text-[#587176]">
              <div className="font-bold text-[#123238] flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-[#075E68]" />
                <span>Operating Timings</span>
              </div>
              <div>OPD Consultations: Monday - Saturday 08:00 AM - 08:00 PM</div>
              <div className="text-[#075E68] font-bold">Emergency & Critical ICU: Open 24x7</div>
            </div>
          </div>

          {/* Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#DCECEF] shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#087F8C] mx-auto" />
                <h3 className="text-lg font-bold text-[#123238]">Enquiry Submitted Successfully</h3>
                <p className="text-xs text-[#587176]">Our patient care coordinator will call you back shortly on {formData.phone}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-extrabold text-[#123238]">Send Hospital Enquiry</h2>
                
                <div>
                  <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Your Full Name *</label>
                  <input 
                    type="text" required
                    placeholder="e.g. Ananya Deshmukh"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-sm text-[#123238] outline-none focus:border-[#075E68]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Mobile Number *</label>
                    <input 
                      type="tel" required
                      placeholder="+91 98200 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-sm text-[#123238] outline-none focus:border-[#075E68]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Department</label>
                    <select 
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-sm text-[#123238] outline-none focus:border-[#075E68]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Cardiology">Cardiac Sciences</option>
                      <option value="Orthopaedics">Orthopaedics & Joint Surgery</option>
                      <option value="Insurance TPA">Cashless TPA Helpdesk</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#123238] uppercase mb-1">Message / Medical Enquiry</label>
                  <textarea 
                    rows={4}
                    placeholder="Describe your query or consultation request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl border border-[#DCECEF] bg-[#F8FBFC] text-sm text-[#123238] outline-none focus:border-[#075E68]"
                  />
                </div>

                <button type="submit" className="w-full py-3.5 rounded-xl bg-[#075E68] text-white font-bold text-sm hover:bg-[#043F47] transition-all shadow-md">
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>

        </div>

        {/* GOOGLE MAP INTEGRATION SECTION */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DCECEF] shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">Campus Navigation</div>
              <h2 className="text-2xl font-extrabold text-[#123238]">Interactive Campus Map</h2>
              <p className="text-xs text-[#587176]">Dr. E. Moses Road, Mumbai Central, Mumbai, Maharashtra 400011</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a 
                href="https://maps.google.com/?q=Mumbai+Central+Hospital" 
                target="_blank" 
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#075E68] text-white text-xs font-bold hover:bg-[#043F47] transition-colors flex items-center space-x-1.5 shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#087F8C]" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Map Frame Container */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-[#DCECEF] shadow-md bg-[#EAF6FA]">
            <iframe
              title="Aarogya Prime Hospital Mumbai Central Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.766324391642!2d72.82276587595304!3d18.98606138220023!2m3!1f0f0f0f03210!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce89a80e14a1%3A0x679051410784260!2sMumbai%20Central%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Direction Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#587176]">
            <div className="p-3 rounded-xl bg-[#F8FBFC] border border-[#DCECEF] flex items-center space-x-2">
              <Car className="w-4 h-4 text-[#075E68]" />
              <span><strong>Gate 1:</strong> Main OPD & Visitor Parking Ramp</span>
            </div>
            <div className="p-3 rounded-xl bg-[#FEF3F2] border border-[#FCA5A5]/60 text-[#D92D20] flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4" />
              <span><strong>Gate 3:</strong> 24x7 Cardiac & Trauma Emergency Ramp</span>
            </div>
            <div className="p-3 rounded-xl bg-[#F8FBFC] border border-[#DCECEF] flex items-center space-x-2">
              <Navigation className="w-4 h-4 text-[#087F8C]" />
              <span><strong>Nearest Railway:</strong> Mahalaxmi Station (500m)</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
