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
const FAQ = defineAsyncComponent(() => import('./components/organisms/FAQ.vue'))

/* ======================
   ROUTING LOGIC (HASH)
====================== */
const isPoliciesView = ref(false)
const isFaqView = ref(false)

const checkHash = () => {
  const hash = window.location.hash
  if (['#privacy', '#cancelacion', '#politicas', '#terms', '#condiciones'].includes(hash)) {
    isPoliciesView.value = true
    isFaqView.value = false
  } else if (hash === '#faq') {
    isFaqView.value = true
    isPoliciesView.value = false
  } else {
    isPoliciesView.value = false
    isFaqView.value = false
  }
}

/* ======================
   SEO & META TAGS
====================== */
useHead({
  title: computed(() => {
    if (isPoliciesView.value) return 'Políticas y Condiciones'
    if (isFaqView.value) return 'Preguntas Frecuentes'
    return SiteContent.brandName
  }),
  titleTemplate: '%s | Ecoturismo en Celestún - Tours y Experiencias',
  meta: [
    { name: 'description', content: SiteContent.hero.subtitle.replace(/<[^>]*>?/gm, '') },
    { name: 'keywords', content: 'Celestún, Torus, Cooperativa Torus, Sacbej, Tours Celestún, Ecoturismo Yucatán, Flamencos Celestún, Paseo en lancha, Manglares, Turismo Responsable' },
    { name: 'author', content: 'Cooperativa Sac-Bej Torus' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://sacbej-celestun.com/' },
    { property: 'og:title', content: 'Sac-Bej | Tours y Ecoturismo en Celestún' },
    { property: 'og:description', content: 'Descubre la magia de Celestún con la Cooperativa Torus. Tours en lancha, avistamiento de flamencos y experiencias inolvidables en la naturaleza.' },
    { property: 'og:image', content: '/src/assets/logo_sac_bej_celestun_transparente.png' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sac-Bej | Tours en Celestún' },
    { name: 'twitter:description', content: 'Vive la naturaleza de Celestún con los mejores guías locales.' },
    { name: 'twitter:image', content: '/src/assets/logo_sac_bej_celestun_transparente.png' },
  ],
  link: [
    { rel: 'canonical', href: 'https://sacbej-celestun.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Sac-Bej Ecoturismo (Cooperativa Torus)",
        "image": "https://sacbej-celestun.com/src/assets/logo_sac_bej_celestun_transparente.png",
        "@id": "https://sacbej-celestun.com",
        "url": "https://sacbej-celestun.com",
        "telephone": "+529998270891",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Celestún Centro",
          "addressLocality": "Celestún",
          "addressRegion": "Yucatán",
          "postalCode": "97367",
          "addressCountry": "MX"
        },
        "description": "Cooperativa turística en Celestún especializada en ecoturismo, paseos en lancha y avistamiento de flamencos. Experiencias auténticas y responsables.",
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      })
    }
  ]
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
      <header v-if="!isPoliciesView && !isFaqView">
        <NavBar />
      </header>

      <main>
        <!-- VISTA PRINCIPAL -->
        <div v-show="!isPoliciesView && !isFaqView">
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

        <!-- VISTA FAQ -->
        <div v-if="isFaqView">
           <FAQ />
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
