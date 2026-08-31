import React from 'react';
import { MapPin, Clock, Navigation, Car } from 'lucide-react';
import { hospitalData } from '../../data/hospital';

export default function HospitalLocationMap({ setActivePage }) {
  return (
    <section className="py-20 bg-white border-b border-[#DCECEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold text-[#087F8C] uppercase tracking-wider">
              Single Location Flagship Campus
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123238] tracking-tight">
              Hospital Location & Access
            </h2>
            <p className="text-sm text-[#587176] leading-relaxed">
              Situated in the heart of Mumbai Central, Aarogya Prime Hospital features direct access from Dr. E. Moses Road, 5 minutes from Mahalaxmi and Mumbai Central railway stations.
            </p>

            <div className="space-y-3 text-xs text-[#587176]">
              <div className="p-3.5 rounded-xl bg-[#F8FBFC] border border-[#DCECEF] space-y-1">
                <div className="font-bold text-[#123238] flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-[#087F8C]" />
                  <span>Hospital Address</span>
                </div>
                <div className="pl-5">{hospitalData.location.address}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FBFC] border border-[#DCECEF] space-y-1">
                <div className="font-bold text-[#123238] flex items-center space-x-1.5">
                  <Car className="w-4 h-4 text-[#087F8C]" />
                  <span>Parking & Valet</span>
                </div>
                <div className="pl-5">{hospitalData.location.parkingInfo}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FBFC] border border-[#DCECEF] space-y-1">
                <div className="font-bold text-[#123238] flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-[#087F8C]" />
                  <span>OPD Consultation Hours</span>
                </div>
                <div className="pl-5">Monday to Saturday: 08:00 AM - 08:00 PM (Emergency 24x7)</div>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <button 
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-3 px-5 rounded-xl bg-[#075E68] text-white font-bold text-xs hover:bg-[#043F47] transition-colors flex items-center space-x-2 shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#087F8C]" />
                <span>Get Driving Directions</span>
              </button>
            </div>
          </div>

          {/* Right Styled Map Illustration Placeholder */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[420px] rounded-3xl bg-[#EAF6FA] border border-[#DCECEF] shadow-xl overflow-hidden p-6 flex flex-col justify-between">
              
              {/* Abstract Map Grid Illustration */}
              <div className="absolute inset-0 bg-[radial-gradient(#075E6815_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-60"></div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#DCECEF] shadow-sm">
                  <div className="text-xs font-bold text-[#075E68]">{hospitalData.name}</div>
                  <div className="text-[11px] text-[#587176]">{hospitalData.location.googleMapLandmark}</div>
                </div>

                <div className="bg-[#075E68] text-white text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-sm">
                  Mumbai Central
                </div>
              </div>

              {/* Map Location Pin Icon Graphic */}
              <div className="relative z-10 mx-auto text-center space-y-2 my-auto">
                <div className="w-16 h-16 rounded-full bg-[#075E68] text-[#087F8C] flex items-center justify-center mx-auto shadow-2xl animate-bounce border-4 border-white">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-extrabold text-[#075E68] shadow-md inline-block border border-[#087F8C]/30">
                  Gate 1 OPD & Gate 3 Emergency Ramp
                </div>
              </div>

              <div className="relative z-10 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-[#DCECEF] text-xs text-[#587176] flex justify-between items-center">
                <span>Nearest Metro / Station: <strong>Mahalaxmi Station (Western Line)</strong></span>
                <span className="text-[#087F8C] font-bold">500m Away</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
