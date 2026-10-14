# Portafolio para fisioterapeutas

## Descripción
Plantilla de una sola página para que un fisioterapeuta muestre su experiencia laboral, enfoques de tratamiento, formación y datos de contacto, con botón para descargar la hoja de vida. Incluye la pantalla de entrada (preloader) con el sello de BWL & SOFT.

## Stack
HTML + CSS + JavaScript sin dependencias ni proceso de compilación. Ilustraciones animadas en SVG propias (`assets/`).

## Requisitos
Un navegador moderno. Para verlo en local: Node 22+ (solo para el servidor estático).

## Instalación
```bash
npx serve -l 5502 .
```

## Variables de entorno
No usa.

## Personalizar para un cliente
1. `js/config.js`: nombre, WhatsApp, teléfono, correo, Instagram, dirección y ruta de la hoja de vida.
2. `index.html`: textos de perfil, enfoques, trayectoria, formación y testimonio; nombre del preloader y su año de inicio (`data-desde`).
3. `cv/hoja-de-vida.pdf`: reemplazar por la hoja de vida del cliente.
4. `assets/retrato.svg`: se puede cambiar por una foto real (mismo tamaño aproximado).

## Estructura
```
index.html        página
style.css         estilos, transiciones y preloader
script.js         datos de marca, menú, revelado, contadores y línea de tiempo
js/intro.js       control del preloader (va en el <head>)
js/config.js      datos de marca del profesional
assets/           ilustraciones SVG e ícono
cv/               hoja de vida descargable
```

## Despliegue
Vercel: importar el repositorio como proyecto estático (sin comando de build, directorio raíz `/`).

## Seguridad
Sitio estático sin formularios ni datos sensibles. Los enlaces externos usan `rel="noopener"`.
