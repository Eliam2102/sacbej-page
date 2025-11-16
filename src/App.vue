<script setup lang="ts">
import { ref, onMounted } from 'vue'

import NavBar from './components/base/NavBar.vue'
import Footer from './components/base/Footer.vue'
import Hero from './components/organisms/Hero.vue'
import About from './components/organisms/About.vue'
import Experiences from './components/organisms/Experiences.vue'
import OurTeam from './components/organisms/OurTeam.vue'
import ContactUs from './components/organisms/ContactUs.vue'
import Store from './components/organisms/Store.vue'

/* ======================
   LOADER GLOBAL
====================== */

const loading = ref(true)

// Imágenes que deben precargarse
const preloadImages = [
  '/src/assets/IMagen.jpeg',
  '/src/assets/torusitas-tour.jpeg',
  '/src/assets/logo_transparente_beige.png',
  '/src/assets/premio-dorado-1.png',
  '/src/assets/premio-dorado-2.png'
]

function loadImages(list: string[]) {
  const promises = list.map(
    src =>
      new Promise(resolve => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = resolve
      })
  )
  return Promise.all(promises)
}

onMounted(async () => {
  await loadImages(preloadImages)
  setTimeout(() => {
    loading.value = false
  }, 450)
})
</script>

<template>
  <!-- ==================== TRANSITION DEL LOADER ==================== -->
  <transition name="fade">
    <!-- LOADER -->
    <div v-if="loading" class="loader-screen">
      <div class="loader-circle"></div>
      <p class="loader-text">Cargando experiencia...</p>
    </div>

    <!-- CONTENIDO REAL (v-else ADYACENTE → SIN ERROR) -->
    <div v-else>
      <header>
        <NavBar />
      </header>

      <main>
        <section id="inicio" class="section"><Hero /></section>
        <section id="nosotros" class="section"><About /></section>
        <section id="experiencias" class="section"><Experiences /></section>
        <section id="equipo" class="section"><OurTeam /></section>
        <section id="contacto" class="section"><ContactUs /></section>
        <section id="opiniones" class="section"><Store /></section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  </transition>
</template>

<style scoped>
/* ==================== LOADER ==================== */
.loader-screen {
  position: fixed;
  inset: 0;
  background: #F5E6D3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999999;
}

.loader-circle {
  width: 70px;
  height: 70px;
  border: 6px solid #A68A6D;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: 1.2rem;
}

.loader-text {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.25rem;
  color: #4E342E;
  letter-spacing: 1px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Fade animación */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.45s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


/* ==================== TU CSS ORIGINAL ==================== */

:root{
  --nav-height: 100px;
}

html { scroll-behavior: smooth; }


.section {
  margin: 0;
  padding: 0;
  border: 0;
}

.section > *:first-child { margin-top: 0 !important; }
.section > *:last-child  { margin-bottom: 0 !important; }

.section :where(h1,h2,h3,h4,h5,h6,p) {
  margin-block-start: 0;
  margin-block-end: 1;
}

.section :where(.container) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.section + .section {
  margin-top: 0;
  border-top: 0;
}

.section img, 
.section iframe {
  display: block;
}

body { background: #fff; }
.section { background: #fff; }

</style>
