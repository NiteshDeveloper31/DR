import React, { useState } from 'react';
import { FileText, Search, Download, Printer, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { hospitalData } from '../data/hospital';

export default function PatientReportsPage() {
  const [uhidInput, setUhidInput] = useState('APH-UHID-84219');
  const [reportFound, setReportFound] = useState(true);

  const sampleReport = {
    patientName: "Aarav Sharma",
    uhid: "APH-UHID-84219",
    ageGender: "45 Yrs / Male",
    sampleDate: "28-Aug-2026 08:30 AM",
    reportDate: "28-Aug-2026 02:15 PM",
    referredBy: "Dr. Ananya Deshmukh (Cardiology)",
    labStatus: "NABL Verified & Released",
    tests: [
      { testName: "Fasting Blood Sugar", result: "98 mg/dL", reference: "70 - 99 mg/dL", status: "Normal" },
      { testName: "HbA1c (Glycated Hemoglobin)", result: "5.8 %", reference: "< 5.7% (Prediabetes 5.7-6.4)", status: "Borderline" },
      { testName: "Total Serum Cholesterol", result: "185 mg/dL", reference: "< 200 mg/dL", status: "Normal" },
      { testName: "LDL Cholesterol (Calculated)", result: "110 mg/dL", reference: "< 100 mg/dL (Optimal)", status: "Slightly High" },
      { testName: "HDL Cholesterol (Good)", result: "48 mg/dL", reference: "> 40 mg/dL", status: "Normal" },
      { testName: "Serum Creatinine", result: "0.9 mg/dL", reference: "0.7 - 1.3 mg/dL", status: "Normal" }
    ]
  };

  const handleSearchReport = (e) => {
    e.preventDefault();
    setReportFound(true);
  };

  return (
    <div className="py-12 bg-[#F8FBFC] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#087F8C]/30 shadow-sm mb-2">
            <FileText className="w-4 h-4 text-[#087F8C]" />
            <span className="text-xs font-bold text-[#075E68] uppercase">NABL Accredited Diagnostic Portal</span>
          </div>
          <h1 className="text-3xl font-extrabold text-[#123238]">Online Patient Lab Reports</h1>
          <p className="text-xs text-[#587176] mt-1">Enter your Patient UHID or Registration Number to view digital pathology reports</p>
        </div>

        {/* Lookup Box */}
        <form onSubmit={handleSearchReport} className="bg-white rounded-3xl p-6 border border-[#DCECEF] shadow-md mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center space-x-3 bg-[#F8FBFC] px-4 rounded-xl border border-[#DCECEF]">
              <Search className="w-5 h-5 text-[#075E68]" />
              <input 
                type="text"
                placeholder="Enter UHID Number (e.g. APH-UHID-84219)..."
                value={uhidInput}
                onChange={(e) => setUhidInput(e.target.value)}
                className="w-full h-11 bg-transparent border-none outline-none text-sm font-semibold text-[#123238]"
                required
              />
            </div>
            <button type="submit" className="py-3 px-6 rounded-xl bg-[#075E68] text-white font-bold text-xs hover:bg-[#043F47] shadow-sm">
              View Lab Report
            </button>
          </div>
        </form>

        {/* Report Preview */}
        {reportFound && (
          <div className="bg-white rounded-3xl p-8 border border-[#087F8C]/30 shadow-2xl space-y-6">
            
            {/* Header */}
            <div className="flex justify-between items-start pb-4 border-b border-[#DCECEF]">
              <div>
                <div className="font-extrabold text-lg text-[#075E68]">AAROGYA PRIME HOSPITAL</div>
                <div className="text-xs text-[#587176]">NABL Certified Pathology & Genomics Laboratory</div>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-[#EAF6FA] text-[#075E68] text-xs font-extrabold border border-[#DCECEF]">
                  {sampleReport.labStatus}
                </span>
              </div>
            </div>

            {/* Patient Info Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#F8FBFC] text-xs border border-[#DCECEF]">
              <div>
                <span className="text-[#587176] block">Patient Name:</span>
                <strong className="text-[#123238]">{sampleReport.patientName}</strong>
              </div>
              <div>
                <span className="text-[#587176] block">UHID / Reg No:</span>
                <strong className="text-[#075E68]">{sampleReport.uhid}</strong>
              </div>
              <div>
                <span className="text-[#587176] block">Age / Gender:</span>
                <strong className="text-[#123238]">{sampleReport.ageGender}</strong>
              </div>
              <div>
                <span className="text-[#587176] block">Referred By:</span>
                <strong className="text-[#123238]">{sampleReport.referredBy}</strong>
              </div>
            </div>

            {/* Test Results Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#075E68] text-white font-bold">
                    <th className="p-3 rounded-l-xl">Test Parameter</th>
                    <th className="p-3">Observed Result</th>
                    <th className="p-3">Biological Reference Interval</th>
                    <th className="p-3 rounded-r-xl">Flag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#DCECEF]">
                  {sampleReport.tests.map((t, i) => (
                    <tr key={i} className="hover:bg-[#EAF6FA]">
                      <td className="p-3 font-semibold text-[#123238]">{t.testName}</td>
                      <td className="p-3 font-extrabold text-[#075E68]">{t.result}</td>
                      <td className="p-3 text-[#587176]">{t.reference}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          t.status === 'Normal' ? 'bg-[#EAF6FA] text-[#075E68]' : 'bg-[#FEF3F2] text-[#D92D20]'
                        }`}>
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Download & Print Buttons */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-[#DCECEF]">
              <button onClick={() => window.print()} className="py-2.5 px-4 rounded-xl bg-[#075E68] text-white text-xs font-bold flex items-center space-x-1.5 hover:bg-[#043F47] transition-all">
                <Printer className="w-4 h-4 text-[#087F8C]" />
                <span>Print Official Signed Report</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
