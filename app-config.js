// GitHub Pages: reemplazar '' por la URL HTTPS del backend cuando esté publicado.
// Por ahora las consultas quedan en el mismo sitio y muestran el estado sin conexión.
// Esta configuración es pública: no incluir contraseñas, JWT ni claves de MySQL.
const API_PUBLICA = '';
const ZI_API_BASE = (API_PUBLICA || window.location.origin).replace(/\/$/, '');
const ZI_MAP_URL = window.location.href;
