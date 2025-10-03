<template>
  <main>
    <!-- Sección principal -->
    <section class="about">
      <!-- Decoraciones de fondo -->
      <div class="bg-decoration left-decoration">
        <svg viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg">
          <!-- Hojas tropicales -->
          <path d="M20,50 Q40,30 60,50 T100,50" fill="#A68A6D" opacity="0.15"/>
          <ellipse cx="50" cy="100" rx="30" ry="50" fill="#2E4D3C" opacity="0.1"/>
          <circle cx="40" cy="150" r="35" fill="#00bcd4" opacity="0.08"/>
          
          <!-- Formas geométricas -->
          <rect x="10" y="250" width="60" height="60" rx="10" fill="#4E342E" opacity="0.1"/>
          <polygon points="70,350 90,380 50,380" fill="#A68A6D" opacity="0.15"/>
          
          <!-- Círculos decorativos -->
          <circle cx="60" cy="450" r="25" fill="#00bcd4" opacity="0.1"/>
          <circle cx="30" cy="500" r="15" fill="#2E4D3C" opacity="0.12"/>
        </svg>
      </div>

      <div class="bg-decoration right-decoration">
        <svg viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg">
          <!-- Hojas y elementos naturales -->
          <path d="M180,50 Q160,30 140,50 T100,50" fill="#A68A6D" opacity="0.15"/>
          <ellipse cx="150" cy="120" rx="35" ry="55" fill="#2E4D3C" opacity="0.1"/>
          <circle cx="160" cy="200" r="40" fill="#00bcd4" opacity="0.08"/>
          
          <!-- Formas abstractas -->
          <rect x="130" y="280" width="55" height="55" rx="10" fill="#4E342E" opacity="0.1"/>
          <polygon points="130,380 150,410 110,410" fill="#A68A6D" opacity="0.15"/>
          
          <!-- Elementos decorativos -->
          <circle cx="140" cy="480" r="28" fill="#00bcd4" opacity="0.1"/>
          <circle cx="170" cy="530" r="18" fill="#2E4D3C" opacity="0.12"/>
        </svg>
      </div>

      <!-- Encabezado -->
      <div class="about-header">
        <h2 class="subtitle">La Emoción de Explorar. La Paz de Estar en Manos Expertas.</h2>
        <hr class="hero-divider" />
        <h1 class="title">Guías Certificados</h1>
      </div>

      <!-- Grid principal mejorado -->
      <div class="about-grid">
        <!-- Columna izquierda - Cards -->
        <div class="cards-column left-cards">
          <div class="card animate-on-scroll">
            <div class="card-content">
              <div class="icon"><img src="/src/assets/credibilidad.png" alt=""></div>
              <div class="card-text">
                <h3>Seguridad y Profesionalismo</h3>
                <ul>
                  <li>Guías certificados en Primeros Auxilios y RCP</li>
                  <li>Vehículos y equipo revisados rigurosamente</li>
                  <li>Cumplimiento de estándares de seguridad</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card animate-on-scroll">
            <div class="card-content">
              <div class="icon"><img src="/src/assets/aprendiendo.png" alt=""></div>
              <div class="card-text">
                <h3>Conocimiento Profundo y Especializado</h3>
                <ul>
                  <li>Guías apasionados y narradores</li>
                  <li>Expertos en historia, cultura y naturaleza</li>
                  <li>Experiencias educativas y memorables</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Imagen central con overlay -->
        <div class="center-section animate-on-scroll">
          <div class="image-wrapper">
            <img src="/src/assets/credencial.png" alt="Guía turístico" />
            <div class="image-overlay">
              <div class="overlay-badge">
                <span class="badge-icon">✓</span>
                <p>Certificación Oficial</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha - Cards -->
        <div class="cards-column right-cards">
          <div class="card animate-on-scroll">
            <div class="card-content">
              <div class="card-text">
                <h3>Credibilidad y Respaldo Oficial</h3>
                <ul>
                  <li>Certificación oficial por parta de SECTUR</li>
                  <li>Acreditación Y certififación por la NOM 09 TUR 2002</li>
                  <li>Experiencia legal y de calidad que te mereces</li>
                </ul>
              </div>
              <div class="icon"><img src="/src/assets/insignia.png" alt=""></div>
            </div>
          </div>

          <div class="card animate-on-scroll">
            <div class="card-content">
              <div class="card-text">
                <h3>Habilidades de Servicio y Comunicación</h3>
                <ul>
                  <li>Dominio de idiomas para hacer aún mejor tu experiencia</li>
                  <li>Adaptación de tours según tus necesidades</li>
                  <li>Viajes fluidos y excepcionales </li>
                </ul>
              </div>
               <div class="icon"><img src="/src/assets/servicio-de-consultoria.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Sección de estadísticas -->
      <div class="stats-section animate-on-scroll">
        <div class="stat-item">
          <h3>{{ tours }}</h3>
          <p>Tours Realizados</p>
        </div>
        <div class="stat-item">
          <h3>{{ years }}</h3>
          <p>Años de Experiencia</p>
        </div>
        <div class="stat-item">
          <h3>{{ satisfaction }}%</h3>
          <p>Satisfacción Cliente</p>
        </div>
        <div class="stat-item">
          <h3>{{ guides }}</h3>
          <p>Guías Certificados</p>
        </div>
      </div>
    </section>
    <!-- Sección storytelling -->
    <section class="story animate-on-scroll">
      <!-- Decoraciones para story -->
      <div class="story-decoration left-story-decoration">
        <svg viewBox="0 0 150 500" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="80" r="30" fill="#00bcd4" opacity="0.15"/>
          <rect x="20" y="150" width="50" height="50" rx="8" fill="#F5E6D3" opacity="0.1"/>
          <polygon points="60,250 80,280 40,280" fill="#00bcd4" opacity="0.12"/>
          <ellipse cx="45" cy="350" rx="25" ry="40" fill="#F5E6D3" opacity="0.08"/>
        </svg>
      </div>
      <div class="story-decoration right-story-decoration">
        <svg viewBox="0 0 150 500" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="80" r="30" fill="#00bcd4" opacity="0.15"/>
          <rect x="80" y="150" width="50" height="50" rx="8" fill="#F5E6D3" opacity="0.1"/>
          <polygon points="90,250 110,280 70,280" fill="#00bcd4" opacity="0.12"/>
          <ellipse cx="105" cy="350" rx="25" ry="40" fill="#F5E6D3" opacity="0.08"/>
        </svg>
      </div>
      <div class="story-content">
        <div class="text-block">
          <h2>Experiencias únicas con nosotros</h2>
          <hr class="hero-divider" />
          <p>
            Nuestros recorridos están meticulosamente diseñados para ser mucho más que simples viajes; son una inmersión completa en la esencia de cada destino. Combinamos estratégicamente cultura, aventura y naturaleza para crear una narrativa de viaje única que te conectará profundamente con el lugar.
          </p>
          <button class="hero-btn">Conoce más ahora!</button>
        </div>
        <div class="image-block">
          <div class="slideshow-container">
            <div
              v-for="(slide, idx) in slides"
              :key="idx"
              class="mySlides fade"
              :style="{ display: slideIndex === idx ? 'block' : 'none' }"
            >
              <div class="numbertext">{{ idx + 1 }} / {{ slides.length }}</div>
              <img :src="slide.src" alt="">
              <div class="text">{{ slide.text }}</div>
            </div>
            <a class="prev" @click="prevSlide">&#10094;</a>
            <a class="next" @click="nextSlide">&#10095;</a>
          </div>
          <div style="text-align:center; margin-top: 1rem;">
            <span
              v-for="(slide, idx) in slides"
              :key="idx"
              class="dot"
              :class="{ active: slideIndex === idx }"
              @click="setSlide(idx)"
            ></span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

/* --------------------------
   Animaciones on scroll
--------------------------- */
onMounted(() => {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  elements.forEach((el) => observer.observe(el));
});

/* --------------------------
   Slider
--------------------------- */
const slides = [
  { src: "/src/assets/lancha.jpg", text: "Día de observación de aves" },
  { src: "/src/assets/fotografia-expedition.jpg", text: "Aventura fotográfica" },
  { src: "/src/assets/muelle-ceelestun.jpg", text: "Paseos en lancha" },
  { src: "/src/assets/lancha-niños.jpg", text: "Logo SACBEJ" },
  { src: "/src/assets/image-prueba.jpg", text: "Paisajes naturales" },
];

const slideIndex = ref(0);
let slideTimeout: number | undefined;

function nextSlide() {
  slideIndex.value = (slideIndex.value + 1) % slides.length;
}

function prevSlide() {
  slideIndex.value = (slideIndex.value - 1 + slides.length) % slides.length;
}

function setSlide(idx: number) {
  slideIndex.value = idx;
  startAutoSlide();
}

function startAutoSlide() {
  clearTimeout(slideTimeout);
  slideTimeout = window.setTimeout(() => {
    nextSlide();
    startAutoSlide();
  }, 3000);
}

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  clearTimeout(slideTimeout);
});

/* --------------------------
   Stats con efecto ruleta 🎰
--------------------------- */
const tours = ref(0);
const years = ref(0);
const satisfaction = ref(0);
const guides = ref(0);

const targetValues = {
  tours: 500,
  years: 15,
  satisfaction: 98,
  guides: 10,
};

function rouletteEffect(refValue: any, target: number, duration = 2000) {
  const startTime = performance.now();
  function step(now: number) {
    const elapsed = now - startTime;
    if (elapsed < duration) {
      // valores aleatorios que "ruletan"
      refValue.value = Math.floor(Math.random() * target * 1.5);
      requestAnimationFrame(step);
    } else {
      // fijamos el valor final
      refValue.value = target;
    }
  }
  requestAnimationFrame(step);
}

onMounted(() => {
  const stats = document.querySelector(".stats-section");
  if (stats) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          rouletteEffect(tours, targetValues.tours);
          rouletteEffect(years, targetValues.years);
          rouletteEffect(satisfaction, targetValues.satisfaction);
          rouletteEffect(guides, targetValues.guides);
          observer.disconnect(); // solo una vez
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(stats);
  }
});
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,wght@0,300..900;1,300..900&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

.about {
  background: linear-gradient(135deg, #F5E6D3 0%, #EDE0C7 100%);
  padding: 5rem 2rem;
  position: relative;
}

/* Decoraciones de fondo */
.bg-decoration {
  position: absolute;
  top: 0;
  height: 100%;
  width: 200px;
  pointer-events: none;
  z-index: 1;
}

.left-decoration {
  left: 0;
  animation: floatLeft 20s ease-in-out infinite;
}

.right-decoration {
  right: 0;
  animation: floatRight 20s ease-in-out infinite;
}

@keyframes floatLeft {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-20px) translateX(10px); }
}

@keyframes floatRight {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-20px) translateX(-10px); }
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to top, 
    rgba(245, 230, 211, 1) 0%,
    rgba(237, 224, 199, 0.6) 40%,
    transparent 100%
  );
  pointer-events: none;
  transform: translateY(-100%);
  z-index: 2;
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 10;
}

.about-header .subtitle {
  font-size: 1.2rem;
  font-weight: 400;
  color: #4E342E;
  font-family: "Merriweather", serif;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
}

.about-header .hero-divider {
  border: none;
  border-top: 4px solid #00bcd4;
  width: 120px;
  margin: 1rem auto;
  border-radius: 2px;
}

.about-header {
  font-size: 3.5rem;
  font-weight: 700;
  font-family: "Bebas Neue", sans-serif;
  color: #2E4D3C;
  margin-top: 1rem;
  line-height: 1.2;
  letter-spacing: 2px;
}
.title {
  font-size: 4rem;
  font-weight: 700;
  font-family: "Bebas Neue", sans-serif;
  color: #2E4D3C;
  margin-top: 1rem;
  line-height: 1.2;
  letter-spacing: 2px;
}



/* Grid principal mejorado */
.about-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto 4rem;
  align-items: start;
  position: relative;
  z-index: 10;
}

/* Columnas de cards */
.cards-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* Cards mejoradas */
.card {
  /* background: rgba(255, 255, 255, 0.5); */
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  /* box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3); */
  transition: all 0.3s ease;
  opacity: 0;
  height: 100%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
}

/* .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
} */

.card-content {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  flex: 1;
}

.card .icon {
  background: linear-gradient(135deg, #2E4D3C 0%, #1a2e23 100%);
  border-radius: 16px;
  width: 80px;
  height: 80px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.card .icon:hover {
  transform: scale(1.1) rotate(5deg);
}

.card .icon img {
  width: 60px;
  height: 60px;
  filter: brightness(0) invert(1);
}
.icon {
 animation: shake 6s infinite;
 display: inline-block;   /* Para animacion cada dos segundos */
}

@keyframes shake {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(-60deg); }
  20% { transform: rotate(60deg); }
  30% { transform: rotate(-6deg); }
  40% { transform: rotate(6deg); }
  50% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.card-text {
  flex: 1;
  text-align: left;
}

.card h3 {
  font-size: 1.5rem;
  color: #2E4D3C;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.card ul {
  list-style: none;
  padding: 0;
}

.card ul li {
  font-size: 0.95rem;
  color: #4E342E;
  font-family: "Merriweather", serif;
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
}

.card ul li::before {
  content: "✓";
  color: #4CAF50;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Sección central con imagen */
.center-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.image-wrapper {
  position: relative;
  width: 380px;
  height: 500px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-badge {
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.badge-icon {
  background: #4CAF50;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.overlay-badge p {
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.1rem;
  color: #2E4D3C;
  letter-spacing: 1px;
}

/* Sección de estadísticas */
.stats-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  opacity: 0;
  position: relative;
  z-index: 10;
}

.stat-item {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.8);
}

.stat-item h3 {
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
  color: #4CAF50;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
}

.stat-item p {
  font-size: 1rem;
  font-family: "Merriweather", serif;
  font-weight: bold;
  color: #4E342E;
}

/* Sección story */
.story {
  padding: 6rem 2rem;
  opacity: 0;
  background: linear-gradient(135deg, #2E4D3C 0%, #1a2e23 100%);
  position: relative;
  overflow: hidden;
}

/* Decoraciones story */
.story-decoration {
  position: absolute;
  top: 0;
  height: 100%;
  width: 150px;
  pointer-events: none;
  z-index: 1;
}

.left-story-decoration {
  left: 0;
  animation: floatLeft 18s ease-in-out infinite;
}

.right-story-decoration {
  right: 0;
  animation: floatRight 18s ease-in-out infinite;
}

.story::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to top, 
    rgba(46, 77, 60, 1) 0%,
    rgba(46, 77, 60, 0.6) 40%,
    transparent 100%
  );
  pointer-events: none;
  transform: translateY(-100%);
  z-index: 2;
}

.story::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, 
    rgba(46, 77, 60, 1) 0%,
    rgba(46, 77, 60, 0.6) 40%,
    transparent 100%
  );
  pointer-events: none;
  transform: translateY(100%);
  z-index: 2;
}

.story-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
  position: relative;
  z-index: 10;
}

.text-block h2 {
  font-size: 3rem;
  color: #F5E6D3;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  transform: scaleY(1.3);
}

.text-block .hero-divider {
  border: none;
  border-top: 3px solid #00bcd4;
  width: 200px;
  margin: 1.5rem 0;
}

.text-block p {
  font-size: 1.1rem;
  color: #EDE0C7;
  font-family: "Merriweather", serif;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.hero-btn {
  background: #EDE0C7;
  color: #4E342E;
  font-size: 1.1rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.hero-btn:hover {
  background: #4E342E;
  color: #EDE0C7;
}

/* Slideshow */
.slideshow-container {
  max-width: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.mySlides {
  display: none;
}

.mySlides img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.3s ease;
  border-radius: 50%;
  user-select: none;
  background: rgba(0, 0, 0, 0.5);
}

.next {
  right: 10px;
}

.prev {
  left: 10px;
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  color: #f2f2f2;
  font-size: 1.1rem;
  font-family: "Merriweather", serif;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.dot {
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  display: inline-block;
  transition: all 0.3s ease;
}

.active, .dot:hover {
  background-color: #00bcd4;
  transform: scale(1.2);
}

/* Animaciones */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.left-cards .card:nth-child(1).visible {
  animation: slideInLeft 0.8s ease forwards;
}

.left-cards .card:nth-child(2).visible {
  animation: slideInLeft 0.8s ease 0.2s forwards;
}

.right-cards .card:nth-child(1).visible {
  animation: slideInRight 0.8s ease forwards;
}

.right-cards .card:nth-child(2).visible {
  animation: slideInRight 0.8s ease 0.2s forwards;
}

.center-section.visible {
  animation: fadeIn 1s ease forwards;
}

.stats-section.visible {
  animation: fadeInUp 0.8s ease forwards;
}

.story.visible {
  animation: fadeIn 1s ease forwards;
}

.fade {
  animation-name: fade;
  animation-duration: 1s;
}

@keyframes fade {
  from { opacity: 0.6; }
  to { opacity: 1; }
}

/* Responsive */
@media (max-width: 1200px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .center-section {
    order: -1;
  }
  
  .stats-section {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .story-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .bg-decoration,
  .story-decoration {
    display: none;
  }
}

@media (max-width: 768px) {
  .about-header .title {
    font-size: 2.5rem;
  }
  
  .about-header .subtitle {
    font-size: 1rem;
  }
  
  .card-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .card-text {
    text-align: center;
  }
  
  .card ul li {
    padding-left: 0;
    padding-top: 0.5rem;
  }
  
  .card ul li::before {
    position: static;
    margin-right: 0.5rem;
  }
  
  .image-wrapper {
    width: 100%;
    height: 400px;
  }
  
  .stats-section {
    grid-template-columns: 1fr;
  }
  
  .stat-item h3 {
    font-size: 2.5rem;
  }
  
  .text-block h2 {
    font-size: 2rem;
  }
  
  .mySlides img {
    height: 300px;
  }
}
</style>