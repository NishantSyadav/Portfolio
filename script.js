// ── HAMBURGER MENU ──
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('active');
}
function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('active');
}

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = Array.from(entry.target.parentElement.children);
      const index = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * index);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ── NAV ACTIVE HIGHLIGHT ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
});

// ── CERTIFICATES DATA ──
// To add a new certificate: copy one object, fill in the details, and add the image to your folder.
const certificates = [
  {
    name: "Machine Learning Introduction For Everyone",
    issuer: "IBM · Coursera",
    date: "March 2026",
    image: "ibm.jpeg",
    link: "https://coursera.org/share/c704dc8d1d0f4ebbadfbbd2c422de1db"
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "Coursera",
    date: "March 2026",
    image: "coursera.jpeg",
    link: "https://coursera.org/share/2b27c37d35894b0aa4c43235dde07096"
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    image: "psb.jpeg",
    link: "https://www.hackerrank.com/certificates/e281f6807a9e"
  },
  {
    name: "CSS (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    image: "csscertificate.jpeg",
    link: "https://www.hackerrank.com/certificates/62b9772e31ba"
  },
  {
   name: "Artificial Intelligence & Machine Learning Workshop",
     issuer: "Techgyan Technologies(IIT Kanpur)",
    date: "March 2026",
   image: "workshop.jpeg",
  },
  
];

// ── RENDER CERTIFICATES ──
function renderCerts() {
  const grid = document.getElementById('certGrid');
  grid.innerHTML = '';

  certificates.forEach((cert, i) => {
    const card = document.createElement('div');
    card.className = 'cert-card reveal';
    card.innerHTML = `
      <div class="cert-preview" onclick="openLightbox('${cert.image}')">
        <img src="${cert.image}" alt="${cert.name}" onerror="this.parentElement.classList.add('no-img')">
        <div class="view-overlay">🔍 View Full</div>
      </div>
      <div class="cert-body">
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-date">${cert.date}</div>
        <a href="${cert.link}" target="_blank" class="cert-credential-btn">
          View Credential ↗
        </a>
      </div>
    `;
    grid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), 100 * i);
    observer.observe(card);
  });
}

// ── LIGHTBOX ──
function openLightbox(imgSrc) {
  document.getElementById('lightboxImg').src = imgSrc;
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Init
renderCerts();
