<template>
  <main>
    <section class="hero">

      <!-- Imagen hero -->
      <div class="hero-bg"></div>

      <!-- Contenido -->
      <div class="hero-content">
        <p class="hero-tagline">{{ SiteContent.hero.tagline }}</p>

        <h1 class="hero-title" v-html="SiteContent.hero.title.replace('\n', '<br />')"></h1>

        <hr class="hero-divider" />

        <h2 class="hero-subtitle" v-html="SiteContent.hero.subtitle"></h2>

        <a class="hero-btn" href="#experiencias">{{ SiteContent.hero.cta }}</a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { SiteContent } from "../../constants/content";
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');

/* ========== RESET ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ======== HERO SECTION (ESTILO EXACTO DE LA IMAGEN) ======== */

.hero {
  position: relative;
  height: 100vh !important;
  min-height: 650px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 0 !important;
}

/* Imagen de fondo */
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('/src/assets/ría-celest.png'); /* <- pon tu imagen aquí */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  filter: brightness(0.72) contrast(1.1) saturate(0.9);
}

/* Overlay cálido igual al ejemplo */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(20, 15, 5, 0.55),
    rgba(20, 15, 5, 0.40),
    rgba(20, 15, 5, 0.75)
  );
  z-index: 1;
}

/* Contenido */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 40px 20px;
  width: 100%;
}

/* Top Tagline */
.hero-tagline {
  color: #e2d3b7;
  font-family: "Poppins", sans-serif;
  font-size: 0.95rem;
  letter-spacing: 0.33em;
  margin-bottom: 1.5rem;
  opacity: 0.85;
}

/* Título principal */
.hero-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(2.4rem, 6vw, 4.2rem);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  line-height: 1.1;
  margin: 0.5rem 0 2rem;
  color: #f7ead1;
}

/* Separador */
.hero-divider {
  border: none;
  border-top: 3px solid #7d8c63;
  width: 120px;
  margin: 0 auto 2rem;
}

/* Subtítulo */
.hero-subtitle {
  font-family: "Merriweather", serif;
  color: #e7d9b5;
  font-size: clamp(1.1rem, 2.8vw, 1.6rem);
  line-height: 1.6;
  margin-bottom: 3rem;
}

/* Botón */
.hero-btn {
  background: #f5e6d3;
  color: #4e342e;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 0.15em;
  padding: 14px 40px;
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.hero-btn:hover {
  background: #bda98d;
  color: #f8f5ef;
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.5);
}

/* ========== RESPONSIVE COMPLETO ========== */

/* Mobile Extra Small (320px - 374px) */
@media (max-width: 374px) {
  .hero {
    min-height: 450px;
  }
  
  .hero-content {
    padding: 20px 15px;
  }
  
  .hero-title {
    font-size: 1.75rem;
    margin: 1rem 0 1.5rem;
  }
  
  .hero-title br {
    display: none;
  }
  
  .hero-divider {
    width: 60px;
    margin: 1.5rem auto;
    border-top-width: 2px;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin: 1.5rem 0 2.5rem;
    padding: 0 0.5rem;
    line-height: 1.6;
  }
  
  .hero-btn {
  display: inline-block;
  margin-top: 2.5rem !important;
}

}

/* Mobile Small (375px - 424px) */
@media (min-width: 375px) and (max-width: 424px) {
  .hero {
    height: 50px;
  }
  
  .hero-content {
    padding: 25px 18px;
    margin-top:  142px;
  }
  
  .hero-title {
    font-size: 2rem;
    margin: 1.25rem 0 1.75rem;
  }
  
  .hero-divider {
    width: 70px;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin: 1.75rem 0 2.75rem;
  }
  
  .hero-btn {
  display: inline-block;
  margin-top: 2.5rem !important;
}
}

/* Mobile Medium (425px - 639px) */
@media (min-width: 425px) and (max-width: 639px) {
  .hero {
    min-height: 500px;
  }
  
  .hero-content {
    padding: 30px 20px;
  }
  
  .hero-title {
    font-size: 2.25rem;
    margin: 1.5rem 0 2rem;
  }
  
  .hero-divider {
    width: 80px;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin: 2rem 0 3rem;
  }
  
  .hero-btn {
  display: inline-block;
  margin-top: 2.5rem !important;
}

}

/* Tablet Small (640px - 767px) */
@media (min-width: 640px) and (max-width: 767px) {
  .hero {
    margin-top: 75px;
    min-height: 550px;
  }
  
  .hero-content {
    padding: 35px 25px;
    max-width: 600px;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin: 1.75rem 0 2.25rem;
  }
  
  .hero-divider {
    width: 85px;
  }
  
  .hero-subtitle {
    font-size: 1.35rem;
    margin: 2.25rem 0 3.25rem;
  }
  
  .hero-btn {
  display: inline-block;
  margin-top: 2.5rem !important;
}
}

/* Tablet Medium (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .hero {
    margin-top: 80px;
    min-height: 600px;
  }
  
  .hero-content {
    padding: 40px 30px;
    max-width: 750px;
  }
  
  .hero-title {
    font-size: 3rem;
    margin: 2rem 0 2.5rem;
  }
  
  .hero-divider {
    width: 90px;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin: 2.5rem 0 3.5rem;
    padding: 0 2rem;
  }
  
  .hero-btn {
  display: inline-block;
  margin-top: 2.5rem !important;
}

}

/* Laptop Small (1024px - 1279px) */
@media (min-width: 1024px) and (max-width: 1279px) {
  .hero {
    margin-top: 80px;
    height: 100vh;
    min-height: 650px;
  }
  
  .hero-content {
    padding: 40px 35px;
    max-width: 850px;
  }
  
  .hero-title {
    font-size: 3.25rem;
    letter-spacing: -0.3px;
  }
  
  .hero-divider {
    width: 95px;
  }
  
  .hero-subtitle {
    font-size: 1.65rem;
    margin: 2rem 0 3.75rem;
  }
  
  .hero-btn {
  display: inline-block;
  margin-top: 2.5rem !important;
}

}

/* Laptop Medium (1280px - 1439px) */
@media (min-width: 1280px) and (max-width: 1439px) {
  .hero {
    height: 100vh;
    min-height: 700px;
  }
  
  .hero-content {
    max-width: 880px;
  }
  
  .hero-title {
    font-size: 3.4rem;
  }
  
  .hero-subtitle {
    font-size: 1.75rem;
  }
  
  .hero-btn {
  display: inline-block;
  margin-top: 2.5rem !important;
}

}

/* Desktop (1440px - 1919px) */
@media (min-width: 1440px) and (max-width: 1919px) {
  .hero {
    height: 85vh;
    min-height: 750px;
  }
  
  .hero-content {
    max-width: 900px;
    margin-top: 14rem;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.8rem;
  }
  
.hero-btn {
  display: inline-block;
  margin-top: 2.5rem !important;
}


}

/* Desktop Large (1920px+) */
@media (min-width: 1920px) {
  .hero {
    height: 100vh;
    min-height: 800px;
  }
  
  .hero-content {
    max-width: 1000px;
    padding: 50px 40px;
  }
  
  .hero-title {
    font-size: 4rem;
    margin: 2.5rem 0 3rem;
  }
  
  .hero-divider {
    width: 120px;
    border-top-width: 4px;
  }
  
  .hero-subtitle {
    font-size: 2rem;
    margin: 2.5rem 0 4.5rem;
  }
  
  .hero-btn {
    font-size: 1.4rem;
    padding: 18px 40px;
    border-radius: 14px;
  }
}

/* ========== ORIENTACIÓN HORIZONTAL (LANDSCAPE) ========== */

/* Mobile Landscape */
@media (max-height: 500px) and (orientation: landscape) {
  .hero {
    margin-top: 60px;
    min-height: 400px;
  }
  
  .hero-content {
    padding: 20px 15px;
  }
  
  .hero-title {
    font-size: 1.5rem;
    margin: 0.5rem 0 1rem;
  }
  
  .hero-divider {
    width: 50px;
    margin: 1rem auto;
  }
  
  .hero-subtitle {
    font-size: 0.95rem;
    margin: 1rem 0 1.5rem;
    line-height: 1.4;
  }
  
  .hero-btn {
    font-size: 0.9rem;
    padding: 8px 18px;
  }
}

/* Tablet Landscape */
@media (min-width: 768px) and (max-height: 600px) and (orientation: landscape) {
  .hero {
    min-height: 500px;
  }
  
  .hero-content {
    padding: 25px 30px;
  }
  
  .hero-title {
    font-size: 2.25rem;
    margin: 1rem 0 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin: 1.5rem 0 2rem;
  }
}

/* ========== DISPOSITIVOS ESPECÍFICOS ========== */

/* iPad Portrait */
@media (min-width: 768px) and (max-width: 834px) and (orientation: portrait) {
  .hero {
    min-height: 650px;
  }
  
  .hero-title {
    font-size: 3.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.6rem;
    padding: 0 2.5rem;
  }
}

/* iPad Landscape */
@media (min-width: 1024px) and (max-width: 1112px) and (orientation: landscape) {
  .hero {
    min-height: 600px;
  }
  
  .hero-content {
    max-width: 900px;
  }
}

/* ========== PANTALLAS TÁCTILES ========== */
@media (hover: none) and (pointer: coarse) {
  .hero-btn {
    min-height: 44px;
    min-width: 120px;
    padding: 14px 32px;
  }
  
  .hero-btn:active {
    transform: scale(0.97);
  }
}

/* ========== ALTA DENSIDAD DE PÍXELES ========== */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero-video {
    image-rendering: -webkit-optimize-contrast;
  }
}

/* ========== ACCESIBILIDAD ========== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .hero-btn:hover {
    transform: none;
  }
}

/* ========== MODO DE ALTO CONTRASTE ========== */
@media (prefers-contrast: high) {
  .hero::before {
    background: rgba(0, 0, 0, 0.7);
  }
  
  .hero-btn {
    border: 2px solid #4e342e;
  }
}
</style>
