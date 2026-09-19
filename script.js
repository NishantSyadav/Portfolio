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

      const siblings = Array.from(
        entry.target.parentElement.children
      );

      const index = siblings.indexOf(entry.target);

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * index);

      observer.unobserve(entry.target);
    }

  });

}, {
  threshold: 0.12
});


reveals.forEach((el) => {
  observer.observe(el);
});


// ── NAV ACTIVE HIGHLIGHT ON SCROLL ──

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach((section) => {

    if (window.scrollY >= section.offsetTop - 200) {
      current = section.id;
    }

  });

  navLinks.forEach((link) => {

    link.style.color =
      link.getAttribute('href') === '#' + current
        ? 'var(--accent)'
        : '';

  });

});


// ── CERTIFICATES DATA ──
// To add a new certificate: copy one object, fill in the details, and add the image to your folder.
const certificates = [
  {
  name: "Supervised Machine Learning: Regression and Classification",
  issuer: "DeepLearning.AI · Stanford Online",
  date: "2026",
  image: "certificates/certificateMl.PNG",
  link: "https://coursera.org/verify/09GF3OHD2Y4D"
},
  {
    name: "AI/ML for Geodata Analytics",
    issuer: "IIRS · ISRO",
    date: "2026",
    image: "certificates/geodata-aiml.jpeg",
    link: "https://isrolms.iirs.gov.in/mod/customcert/verify_certificate.php"
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft · LinkedIn",
    date: "2026",
    image: "certificates/generative-ai.jpeg",
    link: "https://www.linkedin.com/learning/certificates/21c4ca5af121b2e69ffd7222041c395c86e3cedada706594ab8339d4b3bb3804"
  },
   {
    name: "AI and Cybersecurity Awareness",
    issuer: "TCS iON",
    date: "2026",
    image: "certificates/ai-cybersecurity.jpeg",
    Credential: 277082-31035895-1016
  },
  {
    name: "HTML5 - The Language",
    issuer: "Infosys Springboard",
    date: "2026",
    image: "certificates/html5-infosys.jpeg",
    link: "https://verify.onwingspan.com/"
  },
   {
    name: "Build with Bharat 2.0",
    issuer: "Hackathon Finalist",
    date: "2026",
    image: "certificates/build-with-bharat.jpeg",
  },
  {
    name: "Bharatiya Antariksh Hackathon 2026",
    issuer: "ISRO · Indian Space Research Organisation",
    date: "2026",
    image: "certificates/bharatiya-antariksh-hackathon.jpeg",
    link: "https://certificate.hack2skill.com/verify/2026H2S06BAH-P14671"
  },
  {
    name: "Machine Learning Introduction For Everyone",
    issuer: "IBM · Coursera",
    date: "March 2026",
    image: "certificates/ibm.jpeg",
    link: "https://coursera.org/share/c704dc8d1d0f4ebbadfbbd2c422de1db"
  },
  {
    name: "Introduction to Artificial Intelligence",
    issuer: "Coursera",
    date: "March 2026",
    image: "certificates/coursera.jpeg",
    link: "https://coursera.org/share/2b27c37d35894b0aa4c43235dde07096"
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "March 2026",
    image: "certificates/psb.jpeg",
    link: "https://www.hackerrank.com/certificates/e281f6807a9e"
  },
  // {
  //   name: "CSS (Basic)",
  //   issuer: "HackerRank",
  //   date: "March 2026",
  //   image: "certificates/csscertificate.jpeg",
  //   link: "https://www.hackerrank.com/certificates/62b9772e31ba"
  // },
  {
   name: "Artificial Intelligence & Machine Learning Workshop",
     issuer: "Techgyan Technologies(IIT Kanpur)",
    date: "March 2026",
   image: "certificates/workshop.jpeg",
  },
  
];

// ── RENDER CERTIFICATES ──

function renderCerts() {

  const grid = document.getElementById('certGrid');

  if (!grid) {
    return;
  }

  grid.innerHTML = '';

  certificates.forEach((cert, i) => {

    const card = document.createElement('div');

    card.className = 'cert-card reveal';

    let credentialButton = '';

    if (cert.link) {

      credentialButton = `
        <a
          href="${cert.link}"
          target="_blank"
          rel="noopener noreferrer"
          class="cert-credential-btn"
        >
          View Credential ↗
        </a>
      `;

    }

    card.innerHTML = `

      <div
        class="cert-preview"
        onclick="openLightbox('${cert.image}')"
      >

        <img
          src="${cert.image}"
          alt="${cert.name}"
          onerror="this.parentElement.classList.add('no-img')"
        >

        <div class="view-overlay">
          🔍 View Full
        </div>

      </div>

      <div class="cert-body">

        <div class="cert-name">
          ${cert.name}
        </div>

        <div class="cert-issuer">
          ${cert.issuer}
        </div>

        <div class="cert-date">
          ${cert.date}
        </div>

        ${credentialButton}

      </div>

    `;

    grid.appendChild(card);

    setTimeout(() => {
      card.classList.add('visible');
    }, 100 * i);

    observer.observe(card);

  });

}


// ── LIGHTBOX ──

function openLightbox(imgSrc) {

  document.getElementById('lightboxImg').src = imgSrc;

  document
    .getElementById('lightbox')
    .classList.add('open');

}


function closeLightbox() {

  document
    .getElementById('lightbox')
    .classList.remove('open');

}


document.addEventListener('keydown', (event) => {

  if (event.key === 'Escape') {
    closeLightbox();
  }

});


// ── INITIALIZE ──

renderCerts();