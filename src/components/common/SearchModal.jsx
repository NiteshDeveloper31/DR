import React, { useState } from 'react';
import { Search, X, User, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
import { doctorsData } from '../../data/doctors';
import { specialtiesData } from '../../data/specialties';
import { treatmentsData } from '../../data/treatments';

export default function SearchModal({ isOpen, onClose, setActivePage, setSelectedDoctorId }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredDoctors = doctorsData.filter(d => 
    d.name.toLowerCase().includes(query.toLowerCase()) || 
    d.specialtyName.toLowerCase().includes(query.toLowerCase()) ||
    d.bio.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSpecialties = specialtiesData.filter(s => 
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTreatments = treatmentsData.filter(t => 
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelectDoctor = (id) => {
    setSelectedDoctorId(id);
    setActivePage('doctor-profile');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#063233]/70 backdrop-blur-md flex items-start justify-center pt-16 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#EBF3F5] overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#EBF3F5] flex items-center space-x-3 bg-[#F6F8F7]">
          <Search className="w-5 h-5 text-[#0A4D4E]" />
          <input 
            type="text" 
            placeholder="Search doctors, specialties, treatments, or symptoms..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-base font-semibold text-[#102F30] placeholder-[#7B8989]"
            autoFocus
          />
          <button onClick={onClose} className="p-1.5 text-[#7B8989] hover:text-[#0A4D4E] rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Container */}
        <div className="p-5 overflow-y-auto flex-1 space-y-6">
          
          {query.trim() === '' ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EBF3F5] text-[#0A4D4E] flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <div className="text-sm font-bold text-[#102F30]">Start typing to search hospital care</div>
              <div className="text-xs text-[#7B8989]">Try searching "Cardiologist", "Angioplasty", "Knee Pain", or "Dr. Ananya"</div>
            </div>
          ) : (
            <>
              {/* Doctor Matches */}
              {filteredDoctors.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-[#0A4D4E] uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                    <User className="w-4 h-4 text-[#10B981]" />
                    <span>Specialist Doctors ({filteredDoctors.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredDoctors.map(doc => (
                      <div 
                        key={doc.id}
                        onClick={() => handleSelectDoctor(doc.id)}
                        className="p-3 rounded-xl bg-[#F6F8F7] hover:bg-[#EBF3F5] cursor-pointer transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center space-x-3">
                          <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <div className="font-bold text-sm text-[#102F30] group-hover:text-[#0A4D4E]">{doc.name}</div>
                            <div className="text-xs text-[#059669] font-medium">{doc.specialtyName} • {doc.experienceYears}+ Yrs Exp</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#7B8989] group-hover:text-[#0A4D4E] transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specialty Matches */}
              {filteredSpecialties.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-[#0A4D4E] uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                    <HeartPulse className="w-4 h-4 text-[#10B981]" />
                    <span>Clinical Specialities ({filteredSpecialties.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {filteredSpecialties.map(spec => (
                      <div 
                        key={spec.id}
                        onClick={() => {
                          setActivePage('specialties');
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-[#F6F8F7] hover:bg-[#EBF3F5] cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-sm text-[#0A4D4E]">{spec.name}</div>
                        <div className="text-xs text-[#536667] line-clamp-1 mt-0.5">{spec.tagline}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Treatment Matches */}
              {filteredTreatments.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-[#0A4D4E] uppercase tracking-wider mb-3 flex items-center space-x-1.5">
                    <Stethoscope className="w-4 h-4 text-[#10B981]" />
                    <span>Treatments & Procedures ({filteredTreatments.length})</span>
                  </div>
                  <div className="space-y-2">
                    {filteredTreatments.map(treat => (
                      <div 
                        key={treat.id}
                        onClick={() => {
                          setActivePage('treatments');
                          onClose();
                        }}
                        className="p-3 rounded-xl bg-[#F6F8F7] hover:bg-[#EBF3F5] cursor-pointer transition-colors"
                      >
                        <div className="font-bold text-sm text-[#102F30]">{treat.name}</div>
                        <div className="text-xs text-[#536667]">{treat.specialtyName}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
}
