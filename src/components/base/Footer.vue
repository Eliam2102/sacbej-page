<script setup lang="ts">
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { SiteContent, MenuLinks, SocialLinks } from "../../constants/content";

library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn)
</script>

<template>
  <footer class="footer">
    <div class="footer-top">
      <!-- Logo y descripción -->
      <div class="footer-logo">
        <img src="/src/assets/logo_transparente_beige.png" alt="Logo SacBej" class="logo" />
        <div class="brand-info">
          <h2 class="brand-name">{{ SiteContent.brandName }}</h2>
          <p class="brand-desc">{{ SiteContent.brandDesc }}</p>
        </div>
      </div>

      <!-- Enlaces rápidos -->
      <div class="footer-section">
        <h3>Enlaces rápidos</h3>
        <ul>
          <li v-for="link in MenuLinks" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <!-- Ayuda y FAQ -->
      <div class="footer-section">
        <h3>Ayuda & FAQ</h3>
        <ul>
          <li><a href="#faq">Preguntas Frecuentes</a></li>
          <li><a href="#privacy">Política de Privacidad</a></li>
          <li><a href="#terms">Términos y Condiciones</a></li>
        </ul>
      </div>

      <!-- Redes sociales -->
      <div class="footer-section">
        <h3>Síguenos</h3>
        <div class="social-icons">
          <a :href="SocialLinks.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon :icon="['fab','facebook-f']" />
          </a>
          <a :href="SocialLinks.twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon :icon="['fab','twitter']" />
          </a>
          <a :href="SocialLinks.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon :icon="['fab','instagram']" />
          </a>
          <a :href="SocialLinks.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon :icon="['fab','linkedin-in']" />
          </a>
        </div>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} SacBej - Celestún. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* ==================== RESET ==================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ==================== FOOTER PRINCIPAL ==================== */
.footer {
  background: linear-gradient(135deg, #3E342E 0%, #2D2420 100%);
  color: #E5E0D3;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
}

/* ==================== FOOTER TOP ==================== */
.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  align-items: start;
}

/* ==================== LOGO Y MARCA ==================== */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-right: 2rem;
}

.footer-logo .logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: transform 0.3s ease, filter 0.3s ease;
  flex-shrink: 0;
}

.footer-logo .logo:hover {
  transform: scale(1.1) rotate(5deg);
  filter: brightness(1.2);
}

.brand-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.brand-name {
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  font-weight: 700;
  color: #F5E6D3;
  margin: 0;
  letter-spacing: 0.5px;
}

.brand-desc {
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: #CBD5E1;
  margin: 0;
  font-weight: 400;
}

/* ==================== SECCIONES ==================== */
.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section h3 {
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  margin-bottom: 1.5rem;
  font-weight: 600;
  color: #F5E6D3;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(to right, #A68A6D, transparent);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-section li {
  margin: 0;
}

.footer-section a {
  color: #E5E0D3;
  text-decoration: none;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
}

.footer-section a::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #A68A6D;
  transition: width 0.3s ease;
}

.footer-section a:hover {
  color: #A68A6D;
  transform: translateX(5px);
}

.footer-section a:hover::before {
  width: 100%;
}

/* ==================== REDES SOCIALES ==================== */
.social-icons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.social-icons a {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(245, 230, 211, 0.1);
  border-radius: 50%;
  color: #E5E0D3;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.social-icons a:hover {
  background: #A68A6D;
  color: #2D2420;
  transform: translateY(-5px) scale(1.1);
  border-color: #F5E6D3;
  box-shadow: 0 8px 16px rgba(166, 138, 109, 0.3);
}

/* ==================== FOOTER BOTTOM ==================== */
.footer-bottom {
  text-align: center;
  border-top: 1px solid rgba(229, 224, 211, 0.2);
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.2);
}

.footer-bottom p {
  font-size: clamp(0.75rem, 1.5vw, 0.9rem);
  color: #94A3B8;
  margin: 0;
  font-weight: 400;
}

/* ==================== RESPONSIVE ==================== */

/* Móvil pequeño (< 375px) */
@media (max-width: 374px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 1rem;
    text-align: center;
  }

  .footer-logo {
    flex-direction: column;
    align-items: center;
    padding-right: 0;
    gap: 1rem;
  }

  .footer-logo .logo {
    width: 70px;
    height: 70px;
  }

  .brand-info {
    align-items: center;
  }

  .footer-section {
    align-items: center;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-section ul {
    align-items: center;
  }

  .footer-section a:hover {
    transform: translateX(0);
  }

  .social-icons {
    justify-content: center;
  }

  .social-icons a {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .footer-bottom {
    padding: 1rem;
  }
}

/* Móvil (375px - 479px) */
@media (min-width: 375px) and (max-width: 479px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 1.5rem;
    text-align: center;
  }

  .footer-logo {
    flex-direction: column;
    align-items: center;
    padding-right: 0;
  }

  .brand-info {
    align-items: center;
  }

  .footer-section {
    align-items: center;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-section ul {
    align-items: center;
  }

  .footer-section a:hover {
    transform: translateX(0);
  }

  .social-icons {
    justify-content: center;
  }
}

/* Móvil grande / Tablet pequeña (480px - 639px) */
@media (min-width: 480px) and (max-width: 639px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 3rem 2rem;
    text-align: center;
  }

  .footer-logo {
    flex-direction: row;
    justify-content: center;
    padding-right: 0;
  }

  .brand-info {
    align-items: flex-start;
  }

  .footer-section {
    align-items: center;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-section ul {
    align-items: center;
  }

  .social-icons {
    justify-content: center;
  }
}

/* Tablet vertical (640px - 767px) */
@media (min-width: 640px) and (max-width: 767px) {
  .footer-top {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    padding: 3.5rem 2rem;
  }

  .footer-logo {
    grid-column: 1 / -1;
    justify-content: center;
  }

  .footer-section {
    align-items: flex-start;
  }

  .footer-section h3::after {
    left: 0;
    transform: none;
  }
}

/* Tablet horizontal (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .footer-top {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 4rem 2.5rem;
  }

  .footer-logo {
    grid-column: 1 / -1;
  }
}

/* Desktop pequeño (1024px - 1199px) */
@media (min-width: 1024px) and (max-width: 1199px) {
  .footer-top {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 2rem;
    padding: 4rem 3rem;
  }
}

/* Desktop (1200px - 1399px) */
@media (min-width: 1200px) and (max-width: 1399px) {
  .footer-top {
    gap: 2.5rem;
    padding: 4.5rem 3rem;
  }
}

/* Desktop grande (1400px - 1599px) */
@media (min-width: 1400px) and (max-width: 1599px) {
  .footer-top {
    gap: 3rem;
    padding: 5rem 4rem;
  }

  .footer-logo .logo {
    width: 90px;
    height: 90px;
  }
}

/* Desktop extra grande (>= 1600px) */
@media (min-width: 1600px) {
  .footer-top {
    max-width: 1600px;
    gap: 4rem;
    padding: 6rem 5rem;
  }

  .footer-logo {
    gap: 2rem;
  }

  .footer-logo .logo {
    width: 100px;
    height: 100px;
  }

  .social-icons a {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  .footer-bottom {
    padding: 2rem;
  }
}

/* Landscape móviles */
@media (max-height: 500px) and (orientation: landscape) {
  .footer-top {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 2rem 2rem;
  }

  .footer-logo {
    grid-column: auto;
    flex-direction: row;
    gap: 1rem;
  }

  .footer-logo .logo {
    width: 60px;
    height: 60px;
  }

  .footer-section h3 {
    margin-bottom: 1rem;
  }

  .footer-section ul {
    gap: 0.5rem;
  }

  .social-icons a {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }

  .footer-bottom {
    padding: 1rem;
  }
}
</style>
