<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { useHead } from '@vueuse/head'
import { SiteContent } from './constants/content'

// Critical Components (Above the Fold)
import NavBar from './components/base/NavBar.vue'
import Hero from './components/organisms/Hero.vue'

// Lazy Loaded Components (Below the Fold)
const About = defineAsyncComponent(() => import('./components/organisms/About.vue'))
const Experiences = defineAsyncComponent(() => import('./components/organisms/Experiences.vue'))
const OurTeam = defineAsyncComponent(() => import('./components/organisms/OurTeam.vue'))
const ContactUs = defineAsyncComponent(() => import('./components/organisms/ContactUs.vue'))
const Store = defineAsyncComponent(() => import('./components/organisms/Store.vue'))
const Footer = defineAsyncComponent(() => import('./components/base/Footer.vue'))

/* ======================
3LOADER GLOBAL (solo por tiempo)
====================== */
/* ======================
   SEO & META TAGS
====================== */
useHead({
  title: SiteContent.brandName,
  titleTemplate: '%s | Experiencias Inolvidables',
  meta: [
    { name: 'description', content: SiteContent.hero.subtitle.replace(/<[^>]*>?/gm, '') },
    { property: 'og:title', content: SiteContent.brandName },
    { property: 'og:description', content: SiteContent.hero.subtitle.replace(/<[^>]*>?/gm, '') },
    { property: 'og:image', content: '/src/assets/logo_sac_bej_celestun_transparente.png' },
  ],
})

/* ======================
3LOADER GLOBAL (solo por tiempo)
====================== */
const loading = ref(true)

onMounted(() => {
  // Fallback seguro: siempre quitar el loader después de 1.6s
  setTimeout(() => {
    loading.value = false
  }, 1600)
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
