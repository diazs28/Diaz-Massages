// Interacciones del portafolio: datos de marca, menú, revelado al hacer scroll,
// eje de la línea de tiempo y contadores. Las transiciones viven en style.css.
(function () {
  'use strict';
  const marca = window.MARCA || {};
  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Enlaces y textos desde js/config.js
  const enlaces = {
    whatsapp: () => marca.whatsapp,
    hojaDeVida: () => marca.hojaDeVida,
    instagram: () => marca.instagram,
    telefono: () => marca.telefono && 'tel:' + marca.telefono.replace(/\s/g, ''),
    correo: () => marca.correo && 'mailto:' + marca.correo,
  };
  const textos = { telefono: 'telefono', correo: 'correo', instagram: 'usuarioInstagram' };
  document.querySelectorAll('[data-marca]').forEach((el) => {
    const clave = el.dataset.marca;
    const url = enlaces[clave]?.();
    if (url) el.href = url;
    if (textos[clave] && marca[textos[clave]]) el.textContent = marca[textos[clave]];
  });
  document.querySelectorAll('[data-marca-texto]').forEach((el) => {
    const valor = marca[el.dataset.marcaTexto];
    if (valor === '') el.remove();
    else if (valor) el.textContent = valor;
  });
  document.querySelector('[data-anio]').textContent = new Intl.DateTimeFormat('es-CO', {
    year: 'numeric',
    timeZone: 'America/Bogota',
  }).format(new Date());

  // Hero: entra cuando termina el preloader
  document.addEventListener('bwl:intro-fin', () => document.body.classList.add('listo'), {
    once: true,
  });

  // Menú móvil
  const boton = document.querySelector('[data-menu-btn]');
  const menu = document.querySelector('[data-menu]');
  const alternar = (abrir) => {
    boton.setAttribute('aria-expanded', String(abrir));
    menu.classList.toggle('abierto', abrir);
    document.body.classList.toggle('menu-abierto', abrir);
  };
  boton.addEventListener('click', () => alternar(boton.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => e.target.closest('a') && alternar(false));

  // Contadores
  const formato = new Intl.NumberFormat('es-CO');
  function contar(el) {
    const meta = Number(el.dataset.contar);
    const sufijo = el.dataset.sufijo || '';
    if (reducido) {
      el.textContent = formato.format(meta) + sufijo;
      return;
    }
    const inicio = performance.now();
    const paso = (t) => {
      const avance = Math.min(1, (t - inicio) / 1600);
      el.textContent = formato.format(Math.round(meta * (1 - (1 - avance) ** 3))) + sufijo;
      if (avance < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  }

  // Revelado al entrar en pantalla
  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add('visible');
        entrada.target.querySelectorAll('[data-contar]').forEach(contar);
        observador.unobserve(entrada.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px' },
  );
  document.querySelectorAll('.revelar').forEach((el) => observador.observe(el));

  // Cabecera compacta y eje de la trayectoria que se dibuja con el scroll
  const cabecera = document.querySelector('[data-cabecera]');
  const linea = document.querySelector('[data-linea-tiempo]');
  const progreso = document.querySelector('[data-eje-progreso]');
  let pendiente = false;
  function alDesplazar() {
    pendiente = false;
    cabecera.classList.toggle('compacta', window.scrollY > 40);
    const caja = linea.getBoundingClientRect();
    const avance = (window.innerHeight * 0.6 - caja.top) / caja.height;
    progreso.style.transform = `scaleY(${Math.min(1, Math.max(0, avance))})`;
  }
  window.addEventListener(
    'scroll',
    () => {
      if (!pendiente) {
        pendiente = true;
        requestAnimationFrame(alDesplazar);
      }
    },
    { passive: true },
  );
  alDesplazar();
})();
