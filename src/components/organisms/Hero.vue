<template>
  <main>
    <section class="hero">
      <!-- 🎥 Video de fondo -->
      <video class="hero-video" autoplay muted loop playsinline>
        <source src="/src/assets/hero-sacbej.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <!-- Contenido sobre el video -->
      <div class="hero-content">
        <h1 class="hero-title">
          Diseñamos el escape perfecto.<br />
          La naturaleza pone la magia
        </h1>

        <hr class="hero-divider" />

        <h2 class="hero-subtitle">
          Bienvenido a <strong>SacBej</strong>, tu guía personal hacia las maravillas inolvidables de <strong>Celestún</strong>.
        </h2>

        <a class="hero-btn" href="#experiencias">Descúbrelo Ahora</a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');

/* ========== RESET ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========== HERO SECTION ========== */
.hero {
  margin-top: 80px;
  height: 100vh;
  min-height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

/* 🎥 Video de fondo */
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Overlay para contraste */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* Contenido sobre el video */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 40px 20px;
  width: 100%;
}

/* Frase principal / título */
.hero-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(2rem, 6vw, 3.5rem);
  line-height: 1.2;
  font-weight: 300;
  letter-spacing: -0.5px;
  margin: 2rem 0 2.5rem;
  color: #f5e6d3;
}

/* Separador decorativo */
.hero-divider {
  border: none;
  border-top: 3px solid #4caf50;
  width: clamp(60px, 15vw, 100px);
  margin: 2rem auto;
  border-radius: 2px;
}

/* Subtítulo */
.hero-subtitle {
  font-family: "Merriweather", serif;
  font-size: clamp(1.1rem, 3vw, 1.8rem);
  font-weight: 400;
  margin-top: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.5;
  letter-spacing: 0.3px;
  margin: 2rem 0 4rem;
  color: #e0cfa5;
  padding: 0 1rem;
}

/* Botón */
.hero-btn {
  background: #f5e6d3;
  color: #4e342e;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  padding: clamp(12px, 3vw, 16px) clamp(24px, 6vw, 36px);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 1px;
  box-shadow: 0 8px 24px rgba(245, 230, 211, 0.3);
}

.hero-btn:hover {
  background: #a68a6d;
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(245, 230, 211, 0.4);
}

.hero-btn:active {
  transform: translateY(0);
}

/* ========== RESPONSIVE COMPLETO ========== */

/* Mobile Extra Small (320px - 374px) */
@media (max-width: 374px) {
  .hero {
    margin-top: 60px;
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
    margin-top: 65px;
    min-height: 480px;
  }
  
  .hero-content {
    padding: 25px 18px;
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
    margin-top: 70px;
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
    height: 100vh;
    min-height: 750px;
  }
  
  .hero-content {
    max-width: 900px;
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