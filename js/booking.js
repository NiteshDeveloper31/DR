/* ==========================================================================
   AAROGYA ONE - Appointment Booking Engine
   Interactive 6-Step Multi-Step Flow with Confirmation Voucher Generator
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const wizardContainer = document.getElementById('booking-wizard');
  if (!wizardContainer) return;

  // Booking State Object
  const bookingState = {
    step: 1,
    specialty: 'Cardiology',
    doctor: {
      name: 'Dr. Rajesh Sharma',
      title: 'Senior Consultant Cardiologist',
      hospital: 'AAROGYA ONE Super Specialty, Mumbai Central',
      fee: '₹1,200',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
    },
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM',
    mode: 'In-Person Consultation',
    patient: {
      fullName: '',
      phone: '',
      email: '',
      age: '',
      gender: 'Male'
    },
    bookingId: ''
  };

  // Doctors Database
  const doctorsData = [
    {
      id: 'doc-1',
      name: 'Dr. Rajesh Sharma',
      specialty: 'Cardiology',
      qual: 'MBBS, MD, DM (Cardiology) - AIIMS New Delhi',
      exp: '18 Years Exp',
      hospital: 'AAROGYA ONE Super Specialty, Mumbai Central',
      fee: '₹1,200',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'doc-2',
      name: 'Dr. Ananya Iyer',
      specialty: 'Dermatology',
      qual: 'MBBS, MD (Dermatology), FRCP',
      exp: '14 Years Exp',
      hospital: 'AAROGYA ONE Clinic, Bengaluru Indiranagar',
      fee: '₹1,000',
      img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'doc-3',
      name: 'Dr. Vikramaditya Reddy',
      specialty: 'Orthopedics',
      qual: 'MBBS, MS (Ortho), M.Ch (UK)',
      exp: '22 Years Exp',
      hospital: 'AAROGYA ONE Heart & Joint Institute, Hyderabad',
      fee: '₹1,500',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'doc-4',
      name: 'Dr. Priya Nair',
      specialty: 'Neurology',
      qual: 'MBBS, DM (Neurology) - NIMHANS',
      exp: '16 Years Exp',
      hospital: 'AAROGYA ONE Medical Hub, Delhi NCR',
      fee: '₹1,400',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // DOM Elements
  const stepItems = document.querySelectorAll('.wizard-step-item');
  const stepPanes = document.querySelectorAll('.wizard-pane');
  const btnNext = document.getElementById('wizard-next-btn');
  const btnPrev = document.getElementById('wizard-prev-btn');

  function updateWizardUI() {
    // Update step indicator header
    stepItems.forEach((item, idx) => {
      const stepNum = idx + 1;
      item.classList.remove('active', 'completed');
      if (stepNum === bookingState.step) {
        item.classList.add('active');
      } else if (stepNum < bookingState.step) {
        item.classList.add('completed');
      }
    });

    // Update step panes visibility
    stepPanes.forEach((pane, idx) => {
      pane.style.display = (idx + 1 === bookingState.step) ? 'block' : 'none';
    });

    // Update Next/Prev buttons state
    if (bookingState.step === 1) {
      btnPrev.style.display = 'none';
    } else if (bookingState.step === 6) {
      btnPrev.style.display = 'none';
      btnNext.style.display = 'none';
    } else {
      btnPrev.style.display = 'inline-flex';
      btnNext.style.display = 'inline-flex';
      btnNext.textContent = bookingState.step === 5 ? 'Confirm & Book Appointment' : 'Continue to Next Step';
    }
  }

  // Step 1: Specialty Selection Listener
  const specialtyCards = document.querySelectorAll('.booking-spec-card');
  specialtyCards.forEach(card => {
    card.addEventListener('click', () => {
      specialtyCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      bookingState.specialty = card.getAttribute('data-spec') || 'Cardiology';
      renderDoctorsList();
    });
  });

  function renderDoctorsList() {
    const listContainer = document.getElementById('wizard-doctors-grid');
    if (!listContainer) return;

    const filtered = doctorsData.filter(d => d.specialty.toLowerCase() === bookingState.specialty.toLowerCase()) ;
    const displayList = filtered.length > 0 ? filtered : doctorsData;

    listContainer.innerHTML = displayList.map(doc => `
      <div class="doctor-select-card ${bookingState.doctor.name === doc.name ? 'selected' : ''}" data-doc-id="${doc.id}">
        <img src="${doc.img}" alt="${doc.name}">
        <div>
          <h4 style="margin-bottom:0.2rem;">${doc.name}</h4>
          <p style="font-size:0.85rem; color:var(--accent-emerald); font-weight:600;">${doc.qual}</p>
          <p style="font-size:0.8rem; color:var(--text-muted);">${doc.hospital}</p>
          <div style="font-weight:700; color:var(--primary-teal); margin-top:0.4rem;">${doc.fee} <span style="font-weight:400; font-size:0.8rem;">Consultation Fee</span></div>
        </div>
      </div>
    `).join('');

    // Attach click listeners to newly rendered doctor cards
    document.querySelectorAll('.doctor-select-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.doctor-select-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        const docId = card.getAttribute('data-doc-id');
        const selectedDoc = doctorsData.find(d => d.id === docId);
        if (selectedDoc) {
          bookingState.doctor = selectedDoc;
        }
      });
    });
  }

  renderDoctorsList();

  // Step 4: Time Slot Click Listener
  const slotBtns = document.querySelectorAll('.slot-btn:not(.disabled)');
  slotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      slotBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      bookingState.time = btn.textContent.trim();
    });
  });

  // Step 5: Patient Form Handler
  const patientForm = document.getElementById('patient-details-form');
  
  btnNext?.addEventListener('click', () => {
    if (bookingState.step === 5) {
      // Validate Form
      const nameInput = document.getElementById('patient-name');
      const phoneInput = document.getElementById('patient-phone');
      const emailInput = document.getElementById('patient-email');

      if (!nameInput?.value || !phoneInput?.value) {
        alert('Please fill in patient name and phone number to proceed.');
        return;
      }

      bookingState.patient.fullName = nameInput.value;
      bookingState.patient.phone = phoneInput.value;
      bookingState.patient.email = emailInput?.value || 'patient@example.com';
      bookingState.bookingId = 'ARG-2026-' + Math.floor(1000 + Math.random() * 9000);

      // Generate Ticket Confirmation View
      renderConfirmationTicket();
    }

    if (bookingState.step < 6) {
      bookingState.step++;
      updateWizardUI();
    }
  });

  btnPrev?.addEventListener('click', () => {
    if (bookingState.step > 1) {
      bookingState.step--;
      updateWizardUI();
    }
  });

  function renderConfirmationTicket() {
    const confirmationPane = document.getElementById('confirmation-ticket-container');
    if (!confirmationPane) return;

    confirmationPane.innerHTML = `
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="width: 70px; height: 70px; background: var(--accent-soft-mint); color: var(--accent-emerald); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
          <svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 style="color: var(--primary-teal); margin-bottom: 0.5rem;">Appointment Confirmed!</h2>
        <p style="color: var(--text-muted);">We have sent a SMS confirmation to <strong>${bookingState.patient.phone}</strong></p>
      </div>

      <div class="booking-ticket">
        <div class="ticket-header">
          <div>
            <div style="font-weight: 800; font-size: 1.2rem; color: var(--primary-teal);">AAROGYA ONE</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">Healthcare Booking Pass</div>
          </div>
          <div class="ticket-id">${bookingState.bookingId}</div>
        </div>

        <div class="grid-2" style="gap: 1.5rem; margin-bottom: 1.5rem;">
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted); font-weight:700;">DOCTOR</div>
            <div style="font-weight: 700; font-size: 1.1rem; color: var(--text-heading);">${bookingState.doctor.name}</div>
            <div style="font-size: 0.85rem; color: var(--accent-emerald); font-weight:600;">${bookingState.doctor.specialty}</div>
          </div>
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted); font-weight:700;">PATIENT NAME</div>
            <div style="font-weight: 700; font-size: 1.1rem; color: var(--text-heading);">${bookingState.patient.fullName}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">${bookingState.patient.phone}</div>
          </div>
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted); font-weight:700;">DATE & TIME</div>
            <div style="font-weight: 700; color: var(--primary-teal);">${bookingState.date} at ${bookingState.time}</div>
          </div>
          <div>
            <div style="font-size: 0.8rem; color: var(--text-muted); font-weight:700;">LOCATION / MODE</div>
            <div style="font-weight: 600; color: var(--text-body);">${bookingState.doctor.hospital}</div>
          </div>
        </div>

        <div style="background: rgba(16, 185, 129, 0.1); padding: 0.85rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--accent-emerald); font-weight:600; display: flex; align-items: center; gap: 0.5rem;">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Please arrive 15 minutes before your scheduled slot with any previous medical reports.
        </div>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
        <button onclick="window.print()" class="btn btn-secondary">Print Digital Pass</button>
        <a href="index.html" class="btn btn-primary">Return to Homepage</a>
      </div>
    `;
  }

  updateWizardUI();
});
