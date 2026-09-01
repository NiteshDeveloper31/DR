import React from 'react';
import { MapPin, Clock, Navigation, Car, ExternalLink } from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function HospitalLocationMap({ setActivePage }) {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Campus & Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
              Single Location Flagship Campus
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A3C34] font-serif-editorial tracking-tight">
              Hospital Location & Access
            </h2>
            <p className="text-sm text-[#33413B] leading-relaxed">
              Situated in the heart of Mumbai Central, Aarogya Prime Hospital features direct access from Dr. E. Moses Road, 5 minutes from Mahalaxmi and Mumbai Central railway stations.
            </p>

            <div className="space-y-3 text-xs text-[#587176]">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E4DC] shadow-sm space-y-1">
                <div className="font-bold text-[#1A3C34] flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-[#087F8C]" />
                  <span>Hospital Address</span>
                </div>
                <div className="pl-5 text-[#587176] font-medium">{hospitalData.location.address}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E4DC] shadow-sm space-y-1">
                <div className="font-bold text-[#1A3C34] flex items-center space-x-1.5">
                  <Car className="w-4 h-4 text-[#087F8C]" />
                  <span>Parking & Valet</span>
                </div>
                <div className="pl-5 text-[#587176] font-medium">{hospitalData.location.parkingInfo}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E4DC] shadow-sm space-y-1">
                <div className="font-bold text-[#1A3C34] flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-[#087F8C]" />
                  <span>OPD Consultation Hours</span>
                </div>
                <div className="pl-5 text-[#587176] font-medium">Monday to Saturday: 08:00 AM - 08:00 PM (Emergency 24x7)</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button 
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-3.5 px-6 rounded-2xl bg-[#1A3C34] text-white font-extrabold text-xs hover:bg-[#0F3B36] transition-colors flex items-center space-x-2 shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#087F8C]" />
                <span>Get Driving Directions</span>
              </button>

              <a 
                href="https://maps.google.com/?q=Dr.+E.+Moses+Road,+Mumbai+Central" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-2xl bg-white border border-[#1A3C34] text-[#1A3C34] font-bold text-xs hover:bg-[#EAF6FA] transition-colors flex items-center space-x-1.5"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right REAL INTERACTIVE GOOGLE MAPS EMBED */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[460px] rounded-3xl bg-white border border-[#E8E4DC] shadow-2xl overflow-hidden group">
              
              {/* Google Maps Interactive Iframe */}
              <iframe 
                title="Aarogya Prime Hospital Mumbai Central Location Map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.8468725912!2d72.8227653!3d18.9818817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8ec6888887%3A0x2a98f121d5fa04e6!2sDr%20E%20Moses%20Rd%2C%20Mumbai%20Central%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              />

              {/* Floating Top Info Overlay */}
              <div className="absolute top-4 left-4 right-4 pointer-events-none z-10 flex justify-between items-start">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-[#DCECEF] shadow-md pointer-events-auto">
                  <div className="text-xs font-extrabold text-[#1A3C34]">{hospitalData.name}</div>
                  <div className="text-[11px] text-[#587176]">Dr. E. Moses Road, Mumbai Central</div>
                </div>

                <div className="bg-[#1A3C34] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-xl shadow-md pointer-events-auto">
                  Gate 1 OPD & Gate 3 Trauma
                </div>
              </div>

              {/* Floating Bottom Transit Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#DCECEF] shadow-lg text-xs text-[#587176] flex justify-between items-center z-10 pointer-events-auto">
                <span>Nearest Railway / Metro: <strong className="text-[#1A3C34]">Mahalaxmi Station (Western Line)</strong></span>
                <span className="text-[#087F8C] font-bold">500m Away</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
