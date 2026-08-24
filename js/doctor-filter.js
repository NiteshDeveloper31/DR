/* ==========================================================================
   AAROGYA ONE - Doctor Discovery Filter Engine
   Real-Time Multi-Criteria Filtering for Doctor Cards Grid
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('doctor-search-input');
  const citySelect = document.getElementById('filter-city-select');
  const availableTodayCheck = document.getElementById('filter-today-check');
  const specCheckboxes = document.querySelectorAll('.filter-spec-check');
  const doctorCards = document.querySelectorAll('.doctor-card-item');
  const countBadge = document.getElementById('doctor-count-badge');

  if (doctorCards.length === 0) return;

  function filterDoctors() {
    const searchTerm = (searchInput?.value || '').toLowerCase();
    const selectedCity = citySelect?.value || 'all';
    const todayOnly = availableTodayCheck?.checked || false;

    // Get selected specialties
    const selectedSpecs = [];
    specCheckboxes.forEach(cb => {
      if (cb.checked) selectedSpecs.push(cb.value.toLowerCase());
    });

    let visibleCount = 0;

    doctorCards.forEach(card => {
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      const spec = (card.getAttribute('data-spec') || '').toLowerCase();
      const city = (card.getAttribute('data-city') || '').toLowerCase();
      const today = card.getAttribute('data-today') === 'true';

      const matchesSearch = name.includes(searchTerm) || spec.includes(searchTerm) || city.includes(searchTerm);
      const matchesCity = selectedCity === 'all' || city === selectedCity.toLowerCase();
      const matchesSpec = selectedSpecs.length === 0 || selectedSpecs.includes(spec);
      const matchesToday = !todayOnly || today;

      if (matchesSearch && matchesCity && matchesSpec && matchesToday) {
        card.style.display = 'block';
        card.classList.add('reveal-scale', 'active');
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countBadge) {
      countBadge.textContent = `Showing ${visibleCount} Specialist Doctors`;
    }
  }

  searchInput?.addEventListener('input', filterDoctors);
  citySelect?.addEventListener('change', filterDoctors);
  availableTodayCheck?.addEventListener('change', filterDoctors);
  specCheckboxes.forEach(cb => cb.addEventListener('change', filterDoctors));

});
