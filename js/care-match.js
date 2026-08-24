/* ==========================================================================
   AAROGYA ONE - Care Match Interactive Symptom Engine
   Guided Symptom-to-Specialist Recommendation Product Feature
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const careMatchContainer = document.getElementById('care-match-widget');
  if (!careMatchContainer) return;

  const symptomData = [
    {
      id: 'symptom-chest',
      icon: '🫀',
      label: 'Chest Pain / Palpitations',
      desc: 'Shortness of breath, chest tightness, high blood pressure',
      specialty: 'Cardiology (Heart Care)',
      doctorName: 'Dr. Rajesh Sharma',
      qual: 'MBBS, MD, DM (Cardiology) - AIIMS New Delhi',
      fee: '₹1,200',
      exp: '18+ Yrs Exp',
      location: 'Mumbai Central',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      docLink: 'doctor-profile.html'
    },
    {
      id: 'symptom-skin',
      icon: '✨',
      label: 'Skin Rash / Acne / Hairfall',
      desc: 'Persistent acne, eczema, psoriasis, hair thinning, skin allergies',
      specialty: 'Dermatology & Skin Surgery',
      doctorName: 'Dr. Ananya Iyer',
      qual: 'MBBS, MD (Dermatology), FRCP London',
      fee: '₹1,000',
      exp: '14+ Yrs Exp',
      location: 'Bengaluru',
      img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80',
      docLink: 'doctor-profile.html'
    },
    {
      id: 'symptom-brain',
      icon: '🧠',
      label: 'Migraine / Dizziness / Numbness',
      desc: 'Frequent severe headaches, nerve pain, vertigo, memory loss',
      specialty: 'Neurology & Stroke Care',
      doctorName: 'Dr. Priya Nair',
      qual: 'MBBS, MD (Internal Medicine), DM (Neurology)',
      fee: '₹1,300',
      exp: '16+ Yrs Exp',
      location: 'Delhi NCR',
      img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80',
      docLink: 'doctor-profile.html'
    },
    {
      id: 'symptom-joint',
      icon: '🦴',
      label: 'Knee / Back / Joint Stiffness',
      desc: 'Chronic knee arthritis, lower back pain, sports injuries, fractures',
      specialty: 'Orthopedics & Joint Replacement',
      doctorName: 'Dr. Vikramaditya Reddy',
      qual: 'MBBS, MS (Ortho), M.Ch Orth (UK)',
      fee: '₹1,500',
      exp: '22+ Yrs Exp',
      location: 'Hyderabad',
      img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
      docLink: 'doctor-profile.html'
    },
    {
      id: 'symptom-child',
      icon: '👶',
      label: 'Child Fever / Vaccination',
      desc: 'Pediatric fever, vaccination schedules, seasonal cough, growth check',
      specialty: 'Pediatrics & Child Care',
      doctorName: 'Dr. Suresh Mehta',
      qual: 'MBBS, DCH, MD (Pediatrics) - KEM Mumbai',
      fee: '₹900',
      exp: '20+ Yrs Exp',
      location: 'Pune',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      docLink: 'doctor-profile.html'
    },
    {
      id: 'symptom-women',
      icon: '👩',
      label: 'PCOD / Pregnancy Consult',
      desc: 'Irregular cycles, hormonal evaluation, prenatal ultrasound, menopause',
      specialty: 'Gynecology & Obstetrics',
      doctorName: 'Dr. Sunita Deshmukh',
      qual: 'MBBS, MS (Gynecology), FICOG',
      fee: '₹1,400',
      exp: '19+ Yrs Exp',
      location: 'Mumbai Bandra',
      img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80',
      docLink: 'doctor-profile.html'
    }
  ];

  let selectedSymptom = symptomData[0];

  function renderWidget() {
    careMatchContainer.innerHTML = `
      <div class="care-match-grid">
        <!-- Symptom Selector Buttons -->
        <div class="symptom-list">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem;">
            1. Select Your Health Concern / Symptom:
          </div>
          ${symptomData.map(s => `
            <button class="symptom-btn ${s.id === selectedSymptom.id ? 'active' : ''}" data-id="${s.id}">
              <span class="symptom-icon">${s.icon}</span>
              <div>
                <div class="symptom-title">${s.label}</div>
                <div class="symptom-sub">${s.desc}</div>
              </div>
            </button>
          `).join('')}
        </div>

        <!-- Recommended Doctor Match Result -->
        <div class="match-result-card">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-emerald); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem; display:flex; align-items:center; gap:0.4rem;">
            <span style="width:8px; height:8px; background:var(--accent-mint); border-radius:50%;"></span>
            2. Recommended Clinical Match:
          </div>

          <div style="background:var(--secondary-blue); border-radius:var(--radius-md); padding:1rem; margin-bottom:1.25rem;">
            <div style="font-size:0.75rem; color:var(--text-muted);">Recommended Department</div>
            <div style="font-size:1.1rem; font-weight:800; color:var(--primary-teal);">${selectedSymptom.specialty}</div>
          </div>

          <div style="display:flex; gap:1.25rem; align-items:center; margin-bottom:1.25rem;">
            <img src="${selectedSymptom.img}" alt="${selectedSymptom.doctorName}" style="width:80px; height:80px; border-radius:var(--radius-md); object-fit:cover; flex-shrink:0;">
            <div>
              <h3 style="font-size:1.15rem; margin-bottom:0.2rem; color:var(--text-heading);">${selectedSymptom.doctorName}</h3>
              <div style="font-size:0.85rem; color:var(--accent-emerald); font-weight:700;">${selectedSymptom.qual}</div>
              <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.2rem;">📍 ${selectedSymptom.location} • ⏳ ${selectedSymptom.exp}</div>
            </div>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; padding-top:1rem; border-top:1px solid var(--border-light);">
            <div>
              <div style="font-size:0.75rem; color:var(--text-muted);">Consultation Fee</div>
              <div style="font-size:1.25rem; font-weight:800; color:var(--primary-dark);">${selectedSymptom.fee}</div>
            </div>
            <a href="booking.html" class="btn btn-primary">Book Slot &rarr;</a>
          </div>
        </div>
      </div>
    `;

    // Attach click handlers to symptom buttons
    const btns = careMatchContainer.querySelectorAll('.symptom-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const found = symptomData.find(s => s.id === id);
        if (found) {
          selectedSymptom = found;
          renderWidget();
        }
      });
    });
  }

  renderWidget();
});
