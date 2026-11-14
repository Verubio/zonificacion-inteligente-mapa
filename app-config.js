// API de Azure para el mapa publicado en GitHub Pages.
// Esta configuración es pública: no incluir contraseñas, JWT ni claves de MySQL.
const API_PUBLICA = 'https://zonificacion-inteligente-verubio.northcentralus.cloudapp.azure.com';
const ZI_API_BASE = (API_PUBLICA || window.location.origin).replace(/\/$/, '');
const ZI_MAP_URL = window.location.href;
