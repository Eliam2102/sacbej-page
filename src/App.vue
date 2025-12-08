<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineAsyncComponent, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { SiteContent } from './constants/content'

// Critical Components (Above the Fold)
import NavBar from './components/base/NavBar.vue'
import Hero from './components/organisms/Hero.vue'

// Core Components (Eager Load for Smooth Scroll)
import About from './components/organisms/About.vue'
import Experiences from './components/organisms/Experiences.vue'
import OurTeam from './components/organisms/OurTeam.vue'
import ContactUs from './components/organisms/ContactUs.vue'
import Store from './components/organisms/Store.vue'
import Footer from './components/base/Footer.vue'

// Lazy Load only separate views
const Policies = defineAsyncComponent(() => import('./components/organisms/Policies.vue'))

/* ======================
   ROUTING LOGIC (HASH)
====================== */
const isPoliciesView = ref(false)

const checkHash = () => {
  const hash = window.location.hash
  if (['#privacy', '#cancelacion', '#politicas', '#terms', '#condiciones'].includes(hash)) {
    isPoliciesView.value = true
  } else {
    isPoliciesView.value = false
  }
}

/* ======================
   SEO & META TAGS
====================== */
useHead({
  title: computed(() => isPoliciesView.value ? 'Políticas y Condiciones' : SiteContent.brandName),
  titleTemplate: '%s | Experiencias Inolvidables',
  meta: [
    { name: 'description', content: SiteContent.hero.subtitle.replace(/<[^>]*>?/gm, '') },
    { property: 'og:title', content: SiteContent.brandName },
    { property: 'og:description', content: SiteContent.hero.subtitle.replace(/<[^>]*>?/gm, '') },
    { property: 'og:image', content: '/src/assets/logo_sac_bej_celestun_transparente.png' },
  ],
})

/* ======================
   LOADER GLOBAL
====================== */
const loading = ref(true)

onMounted(() => {
  checkHash()
  window.addEventListener('hashchange', checkHash)

  // 1. Check if already loaded
  if (document.readyState === 'complete') {
    loading.value = false;
  } else {
    // 2. Wait for full load (images, scripts, styles)
    window.addEventListener('load', () => {
      loading.value = false;
    });
  }

  // 3. Safety Fallback: Force show after 10s if something hangs
  setTimeout(() => {
    loading.value = false;
  }, 10000);
})

onUnmounted(() => {
  window.removeEventListener('hashchange', checkHash)
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
      <header v-if="!isPoliciesView">
        <NavBar />
      </header>

      <main>
        <!-- VISTA PRINCIPAL -->
        <div v-show="!isPoliciesView">
          <section id="inicio" class="section"><Hero /></section>
          <section id="nosotros" class="section"><About /></section>
          <section id="experiencias" class="section"><Experiences /></section>
          <section id="equipo" class="section"><OurTeam /></section>
          <section id="contacto" class="section"><ContactUs /></section>
          <section id="opiniones" class="section"><Store /></section>
        </div>

        <!-- VISTA POLITICAS -->
        <div v-if="isPoliciesView">
           <Policies />
        </div>
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
