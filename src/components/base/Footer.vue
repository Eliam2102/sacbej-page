<script setup lang="ts">
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Agregar íconos a la librería
library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn)
</script>

<template>
  <footer class="footer">
    <div class="footer-top">
      <!-- Logo y descripción -->
      <div class="footer-logo">
        <img src="/src/assets/logo_transparente_beige.png" alt="Logo" class="logo" />
        <div>
          <h2 class="brand-name">SacBej</h2>
          <p class="brand-desc">Experiencias innolvidables.</p>
        </div>
      </div>

      <!-- Links rápidos -->
      <div class="footer-section">
        <h3>Enlaces rápidos</h3>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>

      <!-- Preguntas frecuentes -->
      <div class="footer-section">
        <h3>Ayuda & FAQ</h3>
        <ul>
          <li><a href="/faq">Preguntas Frecuentes</a></li>
          <li><a href="/privacy">Política de Privacidad</a></li>
          <li><a href="/terms">Términos y Condiciones</a></li>
        </ul>
      </div>

      <!-- Redes sociales -->
      <div class="footer-section">
        <h3>Síguenos</h3>
        <div class="social-icons">
          <!-- Íconos manuales uno por uno -->
          <a href="https://facebook.com" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab','facebook-f']" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab','twitter']" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab','instagram']" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener">
            <FontAwesomeIcon :icon="['fab','linkedin-in']" />
          </a>
        </div>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} SacBeJ - Celestún. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #3E342E;
  color: #E5E0D3;
  font-family: 'Poppins', sans-serif;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  gap: 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1 1 250px;
}

.footer-logo .logo {
  width: 80px;
  height: 80px;
  margin-right: 3rem;
  transform: scale(3);
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
}

.brand-desc {
  font-size: 0.9rem;
  color: #cbd5e1;
  margin-top: 0.2rem;
}

.footer-section {
  flex: 1 1 200px;
}

.footer-section h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.6rem;
}

.footer-section a {
  color: #f8fafc;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: #A68A6D;
}

.social-icons a {
  margin-right: 0.8rem;
  font-size: 1.5rem;
  transition: transform 0.2s, color 0.2s;
}

.social-icons a:hover {
  color: #A68A6D;
  transform: scale(1.2);
}

.footer-bottom {
  text-align: center;
  border-top: 1px solid #1e293b;
  padding: 1rem;
  font-size: 0.85rem;
  color: #94a3b8;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-section {
    margin-top: 1.5rem;
  }
}
</style>
