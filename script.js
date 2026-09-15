// Spanish content for the Colombia version of the site.
const spanishContent = {
    '.service-card h3': ['Terapia Yumeiho', 'Kinesioterapia', 'Terapia manual', 'Terapia Jen-Ziu', 'Terapia de vacío', 'Acupresión', 'Acupuntura', 'Masaje infantil', 'Terapia para la escoliosis'],
    '.service-card img': ['Terapia Yumeiho', 'Kinesioterapia', 'Terapia manual', 'Terapia Jen-Ziu', 'Terapia de vacío', 'Acupresión', 'Acupuntura', 'Masaje infantil', 'Terapia para la escoliosis'],
    '.footer-col a': ['Terapia Yumeiho', 'Kinesioterapia', 'Terapia manual', 'Terapia Jen-Ziu', 'Terapia de vacío', 'Acupresión', 'Acupuntura', 'Masaje infantil', 'Terapia para la escoliosis']
};

Object.entries(spanishContent).forEach(([selector, values]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
        if (values[index]) {
            if (element.tagName === 'IMG') element.alt = values[index];
            else element.textContent = values[index];
        }
    });
});

const serviceDescriptions = [
    'Yumeiho es una terapia manual japonesa que combina shiatsu y técnicas de manipulación. Ayuda a recuperar el equilibrio corporal y se utiliza para problemas de columna y articulaciones, así como para el estrés y la fatiga crónica.',
    'Tratamiento mediante ejercicios físicos que incluye equilibrio, coordinación, ejercicios activos, pasivos y con resistencia. También integra ejercicios respiratorios, taichí, yoga y terapias acuáticas.',
    'Método terapéutico para corregir alteraciones de la columna, las articulaciones y el sistema muscular, y favorecer la movilidad y el bienestar.',
    'Método ancestral de reflexoterapia de la medicina china que estimula puntos biológicamente activos y puede apoyar el tratamiento de problemas neurológicos y musculoesqueléticos.',
    'Masaje terapéutico preventivo que utiliza ventosas para estimular la circulación, mejorar la movilidad y aliviar la tensión muscular.',
    'Método de la medicina tradicional china que aplica presión sobre puntos específicos para aliviar la tensión y mejorar la circulación.',
    'Técnica terapéutica con agujas que estimula puntos biológicamente activos y puede contribuir al bienestar y la prevención.',
    'El masaje infantil favorece el desarrollo, la postura y el bienestar del bebé. Combinado con ejercicios suaves, acompaña su crecimiento saludable.',
    'Tratamiento integral para acompañar la postura y la movilidad en casos de desviación de la columna, con ejercicios adaptados a cada paciente.'
];
document.querySelectorAll('.service-card p').forEach((element, index) => {
    if (serviceDescriptions[index]) element.textContent = serviceDescriptions[index];
});

document.querySelectorAll('.testimonial-item p').forEach((element, index) => {
    const testimonials = [
        'Terapeuta profesional que me ayudó a aliviar el dolor de espalda. ¡Lo recomiendo!',
        'La terapia Yumeiho cambió mi vida. El dolor crónico desapareció después de varias sesiones.',
        'Excelente especialista en Bogotá. ¡Gracias por tu profesionalismo!',
        'Después del tratamiento de acupuntura, los dolores de cabeza desaparecieron. ¡Estoy muy satisfecho!',
        'Mi hijo recibe terapia para la escoliosis y el resultado es evidente. ¡Muchas gracias!',
        'La terapia manual me ayudó a aliviar el dolor de cuello. ¡La recomiendo!'
    ];
    if (testimonials[index]) element.textContent = testimonials[index];
});
document.querySelectorAll('.testimonial-author strong').forEach((element, index) => {
    element.textContent = ['Nina M.', 'Jorge C.', 'Mariana B.', 'Ana D.', 'Tatiana L.', 'David S.'][index];
});
document.querySelectorAll('.testimonial-author span').forEach(element => {
    element.textContent = 'Paciente';
});

const contactTitle = document.querySelector('.contact-info h2');
const contactText = document.querySelector('.contact-info p');
const contactButton = document.querySelector('.contact-info .btn');
const whatsappTooltip = document.querySelector('.whatsapp-tooltip');
if (contactTitle) contactTitle.textContent = '¿Tienes preguntas?';
if (contactText) contactText.textContent = 'Contáctame y recibe una consulta inicial';
if (contactButton) contactButton.textContent = 'Solicitar consulta';
if (whatsappTooltip) whatsappTooltip.textContent = 'Contáctame';

// ===== Navigation Scroll Effect =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Add scrolled class to navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Enhanced Scroll Animations =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.testimonial-item, .timeline-item, .about-experience, .contact-info, .section-header, .footer-content').forEach((el, index) => {
    el.classList.add('animate-on-scroll');
    el.style.transitionDelay = `${index * 0.02}s`;
    observer.observe(el);
});

// ===== Active Navigation Link Highlighting =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
            heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 1.5));
        }
        if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    }
});


// ===== Testimonials Slider =====
let currentSlide = 0;
const slider = document.getElementById('testimonialSlider');
const dotsContainer = document.getElementById('sliderDots');
const items = document.querySelectorAll('.testimonial-item');
const totalSlides = items.length;

function getVisibleSlides() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

let visibleSlides = getVisibleSlides();
let maxSlide = totalSlides - visibleSlides;

// Create dots
function createDots() {
    dotsContainer.innerHTML = '';
    maxSlide = totalSlides - getVisibleSlides();
    for (let i = 0; i <= maxSlide; i++) {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

createDots();

function updateDots() {
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function moveSlider(direction) {
    maxSlide = totalSlides - getVisibleSlides();
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = maxSlide;
    if (currentSlide > maxSlide) currentSlide = 0;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function updateSlider() {
    const slideWidth = items[0].offsetWidth + 20;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    updateDots();
}

// Recalculate on resize
window.addEventListener('resize', () => {
    visibleSlides = getVisibleSlides();
    maxSlide = totalSlides - visibleSlides;
    if (currentSlide > maxSlide) currentSlide = maxSlide;
    createDots();
    updateSlider();
});

// Auto slide
setInterval(() => {
    moveSlider(1);
}, 5000);

// ===== Image Lightbox =====
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img src="" alt="Lightbox Image">
    </div>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.service-image img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Floating WhatsApp Button Animation =====
const whatsappBtn = document.querySelector('.whatsapp-float');
if (whatsappBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            whatsappBtn.classList.add('visible');
        } else {
            whatsappBtn.classList.remove('visible');
        }
    });
}

// ===== Typed Text Effect for Hero =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// ===== Counter Animation =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    updateCounter();
}

// ===== Magnetic Button Effect =====
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});


// ===== Ripple Effect on Buttons =====
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = this.getBoundingClientRect();
        ripple.style.left = e.clientX - rect.left + 'px';
        ripple.style.top = e.clientY - rect.top + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
