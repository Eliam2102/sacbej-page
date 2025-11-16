<template>
  <main>
    <!-- Sección principal -->
    <section class="about">
      <!-- Decoraciones de fondo -->
      <div class="bg-decoration left-decoration">
        <svg viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M20,50 Q40,30 60,50 T100,50" fill="#A68A6D" opacity="0.18" />
          <ellipse cx="50" cy="100" rx="30" ry="50" fill="#00bcd4" opacity="0.12" />
          <circle cx="40" cy="150" r="35" fill="#2E4D3C" opacity="0.18" />
          <rect x="10" y="250" width="60" height="60" rx="10" fill="#F5E6D3" opacity="0.08" />
          <polygon points="70,350 90,380 50,380" fill="#00bcd4" opacity="0.16" />
          <circle cx="60" cy="450" r="25" fill="#2E4D3C" opacity="0.18" />
          <circle cx="30" cy="500" r="15" fill="#F5E6D3" opacity="0.15" />
        </svg>
      </div>

      <div class="bg-decoration right-decoration">
        <svg viewBox="0 0 200 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M180,50 Q160,30 140,50 T100,50" fill="#A68A6D" opacity="0.18" />
          <ellipse cx="150" cy="120" rx="35" ry="55" fill="#00bcd4" opacity="0.12" />
          <circle cx="160" cy="200" r="40" fill="#2E4D3C" opacity="0.18" />
          <rect x="130" y="280" width="55" height="55" rx="10" fill="#F5E6D3" opacity="0.08" />
          <polygon points="130,380 150,410 110,410" fill="#00bcd4" opacity="0.16" />
          <circle cx="140" cy="480" r="28" fill="#2E4D3C" opacity="0.18" />
          <circle cx="170" cy="530" r="18" fill="#F5E6D3" opacity="0.15" />
        </svg>
      </div>

      <!-- Encabezado -->
      <div class="about-header">
        <h2 class="subtitle">
          La Emoción de Explorar. La Paz de Estar en Manos Expertas.
        </h2>
        <hr class="hero-divider" />
        <h1 class="title">Guías Certificados</h1>
      </div>

      <!-- Grid principal -->
      <div class="about-grid">
        <!-- Columna izquierda - Cards -->
        <div class="cards-column left-cards">
          <div class="card animate-on-scroll">
            <div class="card-content">
              <div class="icon">
                <img src="/src/assets/credibilidad.png" alt="" />
              </div>
              <div class="card-text">
                <h3>Seguridad y Profesionalismo</h3>
                <ul>
                  <li>Guías certificados en Primeros Auxilios y RCP</li>
                  <li>Guías certificados en calidad turística Yucatán</li>
                  <li>Cumplimiento de estándares de seguridad</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card animate-on-scroll">
            <div class="card-content">
              <div class="icon">
                <img src="/src/assets/aprendiendo.png" alt="" />
              </div>
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

        <!-- Imagen central -->
        <div class="center-section animate-on-scroll">
          <div class="image-wrapper">
            <img src="/src/assets/credencial.png" alt="Guía turístico" />
            <div class="image-overlay">
              <!-- <div class="overlay-badge">
                <span class="badge-icon">✓</span>
                <p>Certificación Oficial</p>
              </div> -->
            </div>
          </div>
        </div>

        <!-- Columna derecha - Cards -->
        <div class="cards-column right-cards">
          <div class="card animate-on-scroll">
            <div class="card-content">
              <div class="icon">
                <img src="/src/assets/insignia.png" alt="" />
              </div>
              <div class="card-text">
                <h3>Credibilidad y Respaldo Oficial</h3>
                <ul>
                  <li>Certificación oficial por parte de SECTUR</li>
                  <li>Acreditación y certificación por la NOM 09 TUR 2002</li>
                  <li>Experiencia legal y de calidad que te mereces</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card animate-on-scroll">
            <div class="card-content">
              <div class="icon">
                <img src="/src/assets/servicio-de-consultoria.png" alt="" />
              </div>
              <div class="card-text">
                <h3>Habilidades de Servicio y Comunicación</h3>
                <ul>
                  <li>Dominio de idiomas para hacer aún mejor tu experiencia</li>
                  <li>Adaptación de tours según tus necesidades</li>
                  <li>Viajes fluidos y excepcionales</li>
                </ul>
              </div>
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
          <circle cx="50" cy="80" r="30" fill="#00bcd4" opacity="0.2" />
          <rect x="20" y="150" width="50" height="50" rx="8" fill="#F5E6D3" opacity="0.12" />
          <polygon points="60,250 80,280 40,280" fill="#00bcd4" opacity="0.18" />
          <ellipse cx="45" cy="350" rx="25" ry="40" fill="#F5E6D3" opacity="0.1" />
        </svg>
      </div>
      <div class="story-decoration right-story-decoration">
        <svg viewBox="0 0 150 500" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="80" r="30" fill="#00bcd4" opacity="0.2" />
          <rect x="80" y="150" width="50" height="50" rx="8" fill="#F5E6D3" opacity="0.12" />
          <polygon points="90,250 110,280 70,280" fill="#00bcd4" opacity="0.18" />
          <ellipse cx="105" cy="350" rx="25" ry="40" fill="#F5E6D3" opacity="0.1" />
        </svg>
      </div>

      <div class="story-content">
        <div class="text-block">
          <h2>Experiencias únicas con nosotros</h2>
          <hr class="hero-divider" />
          <p>
            Nuestros recorridos están meticulosamente diseñados para ser mucho más que simples viajes; son
            una inmersión completa en la esencia de cada destino. Combinamos estratégicamente cultura, aventura
            y naturaleza para crear una narrativa de viaje única que te conectará profundamente con el lugar.
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
              <img :src="slide.src" :alt="slide.text" />
              <div class="text">{{ slide.text }}</div>
            </div>

            <a class="prev" @click="prevSlide">&#10094;</a>
            <a class="next" @click="nextSlide">&#10095;</a>
          </div>

          <div class="dots-container">
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


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

/* Animaciones on scroll */
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

  // Evita observar el storytelling (se muestra completo)
  elements.forEach((el) => {
    if (!el.classList.contains("story")) {
      observer.observe(el);
    }
  });

  const story = document.querySelector(".story");
  if (story) story.classList.add("visible");
});

/* Slider */
const slides = [
  { src: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/carrusel2.jpg", text: "Día de SurfCast" },
  { src: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/carrusel3.jpg", text: "Atardecer en ceremonía XUKULEM"},
  { src: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/carrusel1.jpg", text: "Paseos en lancha" },
  { src: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/carrusel4.jpg", text: "XUKULEM - Unión con la naturaleza" },
  { src: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/carrusel5.jpg", text: "Paisajes naturales que endulzan en alma" },
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

/* Stats con efecto ruleta */
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
      refValue.value = Math.floor(Math.random() * target * 1.5);
      requestAnimationFrame(step);
    } else {
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
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(stats);
  }
});
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,wght@0,300..900;1,300..900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ==================== SECCIÓN ABOUT (LOOK OSCURO TIPO HERO) ==================== */
.about {
  background-color: #F5E6D3;
  padding: 6rem 2rem 4rem;
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  color: #EDE0C7;
}

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
  animation: floatLeft 22s ease-in-out infinite;
}

.right-decoration {
  right: 0;
  animation: floatRight 22s ease-in-out infinite;
}

@keyframes floatLeft {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-25px) translateX(10px); }
}

@keyframes floatRight {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-25px) translateX(-10px); }
}

/* sutil degradado superior para empalme con hero/nav */
.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(
    to top,
    rgba(7, 18, 13, 1) 0%,
    rgba(7, 18, 13, 0.4) 45%,
    transparent 100%
  );
  pointer-events: none;
  transform: translateY(-100%);
  z-index: 2;
}

/* ==================== HEADER ==================== */
.about-header {
  text-align: center;
  margin-bottom: 4.5rem;
  position: relative;
  z-index: 10;
  padding: 0 1rem;
}

.about-header .subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: 400;
  color: #1c3c2a;
  font-family: "Merriweather", serif;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  letter-spacing: 0.6px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

.about-header .hero-divider {
  border: none;
  border-top: 3px solid #00bcd4;
  width: 150px;
  max-width: 90%;
  margin: 1.2rem auto;
  border-radius: 999px;
}

.title {
  font-size: clamp(2.6rem, 6vw, 3.6rem);
  font-weight: 600;
  font-family: "Bebas Neue", sans-serif;
  color: #2E4D3C;
  margin-top: 1rem;
  line-height: 1.1;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

/* ==================== GRID PRINCIPAL ==================== */
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

.cards-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ==================== CARDS ==================== */
.card {
  backdrop-filter: blur(18px);
  border-radius: 24px;
  padding: 2rem;
  transition: all 0.35s ease;
  opacity: 0;
  height: 100%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at top left, rgba(0, 188, 212, 0.15), transparent 55%),
              linear-gradient(145deg, rgba(7, 24, 17, 0.96), rgba(21, 52, 36, 0.98));
  border: 1px solid rgba(245, 230, 211, 0.12);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.55);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 188, 212, 0.4);
}

.card-content {
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;
  flex: 1;
}

.card .icon {
  background: radial-gradient(circle at 30% 0%, #00bcd4 0%, #2E4D3C 55%, #07120d 100%);
  border-radius: 20px;
  width: 82px;
  height: 82px;
  min-width: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: shake 7s infinite;
}

.card:hover .icon {
  transform: scale(1.06) translateY(-2px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.75);
}

.card .icon img {
  width: 60px;
  height: 60px;
  filter: brightness(0) invert(1);
}

@keyframes shake {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(-4deg); }
  20% { transform: rotate(4deg); }
  30% { transform: rotate(-4deg); }
  40% { transform: rotate(4deg); }
  50% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.card-text {
  flex: 1;
  text-align: left;
}

.card h3 {
  font-size: clamp(1.25rem, 2vw, 1.6rem);
  color: #F5E6D3;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 0.16em;
  margin-bottom: 1.1rem;
  text-transform: uppercase;
}

.card ul {
  list-style: none;
  padding: 0;
}

.card ul li {
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  color: #EDE0C7;
  font-family: "Merriweather", serif;
  line-height: 1.9;
  padding-left: 1.6rem;
  position: relative;
  opacity: 0.95;
}

.card ul li::before {
  content: "✓";
  color: #00e676;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* ==================== IMAGEN CENTRAL ==================== */
.center-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 380px;
  height: 500px;
  border-radius: 36px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(245, 230, 211, 0.2);
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  padding: 2.1rem 2rem 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-badge {
  background: rgba(245, 230, 211, 0.98);
  padding: 0.9rem 2.3rem;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.55);
}

.badge-icon {
  background: #00c853;
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
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* ==================== ESTADÍSTICAS ==================== */
.stats-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0 1rem;
  opacity: 0;
  position: relative;
  z-index: 10;
}

.stat-item {
  background:
    radial-gradient(circle at top, #1c3c2a, transparent 60%),
    linear-gradient(145deg, #12261b, #2E4D3C);
  backdrop-filter: blur(14px);
  padding: 2rem;
  border-radius: 22px;
  text-align: center;
  border: 1px solid rgba(245, 230, 211, 0.18);
  transition: all 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.65);
}

.stat-item:hover {
  background:
    radial-gradient(circle at top, rgba(0, 188, 212, 0.24), transparent 65%),
    linear-gradient(145deg, #091a12, #1c3c2a);
  transform: translateY(-6px);
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.8);
  border-color: rgba(0, 188, 212, 0.5);
}

.stat-item h3 {
  font-size: clamp(2.1rem, 5vw, 3.1rem);
  font-family: "Bebas Neue", sans-serif;
  color: #F5E6D3;
  margin-bottom: 0.4rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.stat-item p {
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  font-family: "Merriweather", serif;
  font-weight: 600;
  color: #EDE0C7;
  opacity: 0.9;
}

/* ==================== SECCIÓN STORY (OSCURA, MATCH HERO) ==================== */
.story {
  padding: 6.5rem 2rem 6rem;
  opacity: 0;
  background:
    radial-gradient(circle at 0% 0%, rgba(0, 188, 212, 0.18) 0, transparent 50%),
    radial-gradient(circle at 100% 0%, rgba(166, 138, 109, 0.2) 0, transparent 55%),
    linear-gradient(135deg, #050b08 0%, #12261b 40%, #050906 100%);
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
}

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
  animation: floatLeft 20s ease-in-out infinite;
}

.right-story-decoration {
  right: 0;
  animation: floatRight 20s ease-in-out infinite;
}

.story::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(
    to top,
    rgba(7, 18, 13, 1) 0%,
    rgba(7, 18, 13, 0.5) 40%,
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
  height: 140px;
  background: linear-gradient(
    to bottom,
    rgba(5, 11, 8, 1) 0%,
    rgba(5, 11, 8, 0.4) 40%,
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
  font-size: clamp(2.1rem, 5vw, 3rem);
  color: #F5E6D3;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 0.22em;
  margin-bottom: 1rem;
  line-height: 1.1;
  text-transform: uppercase;
}

.text-block .hero-divider {
  border: none;
  border-top: 3px solid #00bcd4;
  width: 220px;
  max-width: 100%;
  margin: 1.5rem 0;
  border-radius: 999px;
}

.text-block p {
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #EDE0C7;
  font-family: "Merriweather", serif;
  line-height: 1.9;
  margin-bottom: 2.4rem;
  opacity: 0.95;
}

/* botón estilo hero */
.hero-btn {
  background: #F5E6D3;
  color: #4E342E;
  font-size: clamp(1rem, 2vw, 1.1rem);
  padding: 1rem 2.8rem;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 0.16em;
  transition: all 0.3s ease;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
}

.hero-btn:hover {
  background: #A68A6D;
  color: #F5E6D3;
  transform: translateY(-2px);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.75);
}

/* ==================== SLIDESHOW ==================== */
.slideshow-container {
  max-width: 100%;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(245, 230, 211, 0.18);
}

.mySlides {
  display: none;
}

.mySlides img {
  width: 100%;
  height: 450px;
  object-fit: cover;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 14px;
  color: #F5E6D3;
  font-weight: bold;
  font-size: 20px;
  transition: 0.3s ease;
  border-radius: 50%;
  user-select: none;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7);
}

.next {
  right: 12px;
}

.prev {
  left: 12px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.85);
}

.text {
  color: #f2f2f2;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-family: "Merriweather", serif;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 999px;
}

.dots-container {
  text-align: center;
  margin-top: 1.2rem;
}

.dot {
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  display: inline-block;
  transition: all 0.3s ease;
}

.active,
.dot:hover {
  background-color: #00bcd4;
  transform: scale(1.2);
}

/* ==================== ANIMACIONES ==================== */
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
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

/* ==================== RESPONSIVE ==================== */

/* Móvil pequeño (< 375px) */
@media (max-width: 374px) {
  .about {
    padding: 3.5rem 1rem 3rem;
  }

  .about-header {
    margin-bottom: 2.5rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.7rem;
  }

  .center-section {
    order: -1;
  }

  .image-wrapper {
    height: 350px;
  }

  .card {
    padding: 1.6rem;
    min-height: auto;
  }

  .card-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .card-text {
    text-align: center;
  }

  .card ul li {
    padding-left: 0;
    padding-top: 0.5rem;
    text-align: left;
  }

  .card ul li::before {
    position: static;
    margin-right: 0.5rem;
  }

  .stats-section {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    padding: 2.2rem 0 0.5rem;
  }

  .stat-item {
    padding: 1.6rem;
  }

  .story {
    padding: 4rem 1rem 3.5rem;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .mySlides img {
    height: 250px;
  }

  .prev,
  .next {
    padding: 10px;
    font-size: 16px;
  }
}

/* Móvil (375px - 479px) */
@media (min-width: 375px) and (max-width: 479px) {
  .about {
    padding: 3.8rem 1rem 3.2rem;
  }

  .about-header {
    margin-bottom: 3rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .center-section {
    order: -1;
  }

  .image-wrapper {
    height: 380px;
  }

  .card {
    padding: 1.7rem;
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
    text-align: left;
  }

  .card ul li::before {
    position: static;
    margin-right: 0.5rem;
  }

  .stats-section {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    padding: 2.5rem 0 0.5rem;
  }

  .story {
    padding: 4.3rem 1.5rem 3.8rem;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 2.3rem;
  }

  .mySlides img {
    height: 280px;
  }
}

/* Móvil grande / Tablet pequeña (480px - 639px) */
@media (min-width: 480px) and (max-width: 639px) {
  .about {
    padding: 4.3rem 1.5rem 3.5rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .center-section {
    order: -1;
  }

  .image-wrapper {
    height: 420px;
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
    text-align: left;
  }

  .card ul li::before {
    position: static;
    margin-right: 0.5rem;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
  }

  .story {
    padding: 4.7rem 1.5rem 4rem;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .mySlides img {
    height: 320px;
  }
}

/* Tablet vertical (640px - 767px) */
@media (min-width: 640px) and (max-width: 767px) {
  .about {
    padding: 4.8rem 2rem 3.8rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.2rem;
  }

  .center-section {
    order: -1;
  }

  .image-wrapper {
    max-width: 450px;
    height: 450px;
    margin: 0 auto;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .mySlides img {
    height: 350px;
  }
}

/* Tablet horizontal (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .about {
    padding: 5rem 2rem 4rem;
  }

  .about-header {
    margin-bottom: 3.5rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .center-section {
    order: -1;
  }

  .image-wrapper {
    max-width: 500px;
    height: 480px;
    margin: 0 auto;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }

  .mySlides img {
    height: 380px;
  }

  .bg-decoration,
  .story-decoration {
    display: none;
  }
}

/* Desktop pequeño (1024px - 1199px) */
@media (min-width: 1024px) and (max-width: 1199px) {
  .about {
    padding: 5rem 2rem 4.5rem;
  }

  .about-grid {
    grid-template-columns: 1fr auto 1fr;
    gap: 2.2rem;
  }

  .center-section {
    order: 0;
  }

  .image-wrapper {
    width: 320px;
    height: 450px;
  }

  .card {
    padding: 1.9rem;
  }

  .stats-section {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
  }

  .story-content {
    grid-template-columns: 1fr 1fr;
    gap: 3.2rem;
  }

  .mySlides img {
    height: 400px;
  }
}

/* Desktop (1200px - 1399px) */
@media (min-width: 1200px) and (max-width: 1399px) {
  .about-grid {
    gap: 2.7rem;
  }

  .image-wrapper {
    width: 350px;
    height: 480px;
  }

  .story-content {
    gap: 3.6rem;
  }

  .mySlides img {
    height: 420px;
  }
}

/* Desktop grande (1400px - 1599px) */
@media (min-width: 1400px) and (max-width: 1599px) {
  .about {
    padding: 6rem 3rem 4.5rem;
  }

  .about-grid {
    gap: 3rem;
  }

  .story {
    padding: 7rem 3rem 6rem;
  }

  .story-content {
    gap: 4rem;
  }
}

/* Desktop extra grande (>= 1600px) */
@media (min-width: 1600px) {
  .about {
    padding: 7rem 4rem 5rem;
  }

  .about-header {
    margin-bottom: 5rem;
  }

  .about-grid {
    max-width: 1600px;
    gap: 3.5rem;
  }

  .image-wrapper {
    width: 420px;
    height: 550px;
  }

  .card {
    padding: 2.4rem;
    min-height: 250px;
  }

  .card .icon {
    width: 90px;
    height: 90px;
    min-width: 90px;
  }

  .card .icon img {
    width: 70px;
    height: 70px;
  }

  .stats-section {
    max-width: 1400px;
    gap: 2.4rem;
  }

  .stat-item {
    padding: 2.4rem;
  }

  .story {
    padding: 8rem 4rem 6.5rem;
  }

  .story-content {
    max-width: 1600px;
    gap: 5rem;
  }

  .mySlides img {
    height: 500px;
  }
}

/* Landscape móviles */
@media (max-height: 500px) and (orientation: landscape) {
  .about {
    padding: 3rem 1.5rem 2.5rem;
  }

  .about-header {
    margin-bottom: 2rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .center-section {
    display: none;
  }

  .card {
    padding: 1.6rem;
    min-height: auto;
  }

  .stats-section {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 2rem 0 0.5rem;
  }

  .stat-item {
    padding: 1.3rem;
  }

  .story {
    padding: 3.3rem 1.5rem 2.8rem;
  }

  .story-content {
    grid-template-columns: 1fr;
    gap: 2.2rem;
  }

  .mySlides img {
    height: 250px;
  }
}
</style>
