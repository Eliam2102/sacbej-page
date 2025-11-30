<template>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />

  <nav class="nav-header" :class="{ 'nav-hidden': !showBottomNav }">
    <!-- Barra superior con info de contacto -->
    <transition name="fade">
      <div class="info-nav-top" v-show="showTopInfo">
        <div class="info-wrapper">
          <p class="info-item"><font-awesome-icon icon="map-marker-alt" /> {{ ContactInfo.location }}</p>
          <p class="info-item"><font-awesome-icon icon="clock" /> {{ ContactInfo.hours }}</p>
          <p class="info-item"><font-awesome-icon icon="phone" /> {{ ContactInfo.phone }}</p>
          <p class="info-item"><font-awesome-icon icon="envelope" />{{ ContactInfo.email }}</p>
        </div>
      </div>
    </transition>

    <!-- Barra principal con logo y menú -->
    <div class="nav-main">
      <div class="nav-container">
        <!-- Botón hamburguesa (solo móvil/tablet) -->
        <button
          class="hamburger"
          @click="isOpen = !isOpen"
          :aria-expanded="isOpen"
          aria-label="Toggle menu"
        >
          <span class="material-icons">{{ isOpen ? 'close' : 'menu' }}</span>
        </button>

        <!-- Logo -->
        <div class="logo-wrapper">
          <img
            src="/src/assets/logo_sac_bej_celestun_transparente.png"
            class="logo"
            alt="Sac Bej Celestún"
          />
        </div>

        <!-- Menú desktop -->
        <nav class="menu-desktop">
          <a
            v-for="link in MenuLinks"
            :key="link.href"
            :href="link.href"
            class="menu-link"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Botón reserva (solo desktop) -->
        <a href="#experiencias" class="btn-reserva btn-desktop">Reserva</a>
      </div>
    </div>

    <!-- Menú móvil/tablet (drawer) -->
    <transition name="slide">
      <div class="menu-mobile-overlay" v-show="isOpen">
        <div class="menu-mobile-header">
          <img
            src="/src/assets/logo_sac_bej_celestun_transparente.png"
            class="logo-mobile"
            alt="Sac Bej Celestún"
          />
          <button
            class="close-button"
            @click="closeMenu"
            aria-label="Cerrar menú"
          >
            <span class="material-icons">close</span>
          </button>
        </div>
        <div class="menu-mobile-content">
          <a
            v-for="link in MenuLinks"
            :key="link.href"
            :href="link.href"
            class="menu-mobile-link"
            @click="handleNavigation($event, link.href)"
          >
            {{ link.label }}
          </a>
          <button class="btn-reserva btn-mobile" @click="closeMenu">Reserva</button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { ContactInfo, MenuLinks } from "../../constants/content";

library.add(faMapMarkerAlt, faClock, faPhone, faEnvelope);

const showTopInfo = ref(true);
const showBottomNav = ref(true);
const isOpen = ref(false);
let lastScrollY = 0;
let hideTimeout: ReturnType<typeof setTimeout> | null = null;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 50) {
    showTopInfo.value = false;

    // Si hace scroll hacia arriba, mostramos la barra
    if (currentScroll < lastScrollY) {
      showBottomNav.value = true;

      if (hideTimeout) clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        if (window.scrollY > 100) showBottomNav.value = false;
      }, 1000);
    } else {
      // Si hace scroll hacia abajo, ocultamos
      showBottomNav.value = false;
    }
  } else {
    // Cuando está arriba, siempre visible
    showTopInfo.value = true;
    showBottomNav.value = true;
  }

  lastScrollY = currentScroll;
};

const closeMenu = () => {
  isOpen.value = false;
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isOpen.value = false;
  }
};

const handleNavigation = async (e: Event, href: string) => {
  e.preventDefault();
  closeMenu();
  
  // Esperar a que el DOM se actualice y el scroll se desbloquee
  await nextTick();
  
  // Pequeño delay para asegurar que el navegador procese el cambio de estilo
  setTimeout(() => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Actualizar URL sin saltar
      history.pushState(null, '', href);
    }
  }, 100);
};

// Bloquear scroll cuando el menú está abierto
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
  document.body.classList.remove('no-scroll');
  document.documentElement.classList.remove('no-scroll');
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap');

/* ==================== PALETA / TOKENS ==================== */
:root {
  --nav-bg: rgba(15, 23, 42, 0.82);      /* fondo oscuro vidrioso */
  --nav-bg-soft: rgba(15, 23, 42, 0.9);
  --accent-main: #f5e6d3;                /* beige sacbej para acentos */
  --accent-soft: #a68a6d;
  --text-dark: #f9fafb;                  /* texto claro */
  --text-muted: #e5e7eb;

  --shadow-sm: 0 6px 18px rgba(0, 0, 0, 0.35);
  --shadow-md: 0 18px 40px rgba(0, 0, 0, 0.55);
  --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ==================== NAVBAR PRINCIPAL ==================== */
.nav-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  background: transparent;
  box-shadow: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.nav-header.nav-hidden {
  transform: translateY(-100%);
}

/* ==================== BARRA SUPERIOR INFO ==================== */
.info-nav-top {
  background: rgba(15, 23, 42, 0.398);
  color: #fff;
  padding: 0.45rem 1rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.35);
  backdrop-filter: blur(10px);
}

.info-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 0.35rem;
}

.info-item {
  font-family: 'Poppins', sans-serif;
  font-size: 0.78rem;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0;
  color: #fff;
  white-space: nowrap;
  opacity: 0.95;
}
.info-item :deep(svg) {
  color: #f5e6d3 !important;
}

/* ==================== BARRA PRINCIPAL ==================== */
.nav-main {
  background: linear-gradient(
    180deg,
    var(--nav-bg-soft) 0%,
    var(--nav-bg) 100%
  );
  border-bottom: 1px solid rgba(148, 163, 184, 0.35);
  box-shadow: var(--shadow-md);
  padding: 0.6rem 1rem;
  backdrop-filter: blur(18px);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
}

/* ==================== LOGO ==================== */
.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 58px;
  width: auto;
  object-fit: contain;
  /* 🔹 volvemos el logo café en blanco sobre el fondo oscuro */
  filter: brightness(0) invert(1) drop-shadow(0 6px 16px rgba(0, 0, 0, 0.9));
  transition: transform 0.25s ease, filter 0.25s ease;
}

.logo-wrapper:hover .logo {
  transform: translateY(-1px) scale(1.02);
}

.logo-mobile {
  height: 70px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1) drop-shadow(0 6px 16px rgba(0, 0, 0, 0.9));
}

/* ==================== HAMBURGER ==================== */
.hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  border-radius: 999px;
  cursor: pointer;
  transition: var(--transition);
}

.hamburger:hover {
  background: rgba(148, 163, 184, 0.25);
}

.hamburger .material-icons {
  font-size: 26px;
  color: #f9fafb;
}

/* ==================== MENÚ DESKTOP ==================== */
.menu-desktop {
  display: none;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

.menu-link {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.14em;
  color: #f9fafb;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  padding: 0.35rem 0;
  transition: color 0.25s ease;
}

.menu-link::after {
  content: '';
  position: absolute;
  bottom: -0.15rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  border-radius: 999px;
  background: var(--accent-main);
  transition: width 0.25s ease;
}

.menu-link:hover {
  color: var(--accent-main);
}

.menu-link:hover::after {
  width: 70%;
}

/* ==================== BOTÓN RESERVA ==================== */
.btn-reserva {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.65rem 1.8rem;
  border-radius: 999px;
  border: 2px solid #a68a6d;
  background: var(--accent-main);
  color: #f5e6d3;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.6);
  transition: var(--transition);
  text-shadow: 
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
}

.btn-reserva:hover {
  background: transparent;
  color: #a68a6d;
  box-shadow: var(--shadow-md);
}

.btn-desktop {
  display: none;
}

.btn-mobile {
  width: 100%;
  margin-top: 1.2rem;
}

/* ==================== MENÚ MÓVIL (FULLSCREEN) ==================== */
.menu-mobile-overlay {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at top, rgba(148, 163, 184, 0.18), transparent 55%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.98) 0%, rgba(15, 23, 42, 0.95) 60%);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.menu-mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 1.5rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(14px);
}

.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  border-radius: 999px;
  cursor: pointer;
  transition: var(--transition);
}

.close-button:hover {
  background: rgba(148, 163, 184, 0.25);
}

.close-button .material-icons {
  font-size: 28px;
  color: #f9fafb;
}

.menu-mobile-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1.75rem 2.5rem;
  gap: 0.75rem;
}

.menu-mobile-link {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.16em;
  color: #f9fafb;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  transition: var(--transition);
}

.menu-mobile-link:hover,
.menu-mobile-link:active {
  background: rgba(249, 250, 251, 0.06);
  color: var(--accent-main);
}

/* ==================== TRANSICIONES ==================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* ==================== RESPONSIVE ==================== */

/* Móvil muy pequeño */
@media (max-width: 374px) {
  .info-item {
    font-size: 0.65rem;
    gap: 0.3rem;
  }

  .info-wrapper {
    column-gap: 0.75rem;
  }

  .info-nav-top {
    padding-inline: 0.75rem;
  }

  .nav-main {
    padding-inline: 0.75rem;
  }

  .logo {
    height: 70px;
  }

  .logo-mobile {
    height: 68px;
  }
}

/* Móvil (375px - 639px) */
@media (min-width: 375px) and (max-width: 639px) {
  .info-item {
    font-size: 0.7rem;
  }

  .info-wrapper {
    column-gap: 1.1rem;
  }

  .logo {
    height: 76px;
    margin-right: 31px;
  }

  .logo-mobile {
    height: 86px;
  }

  .menu-mobile-link {
    font-size: 1.5rem;
  }
}

/* Móvil grande / Tablet pequeña (640px - 767px) */
@media (min-width: 640px) and (max-width: 767px) {
  .info-item {
    font-size: 0.75rem;
  }

  .logo {
    height: 78px;
  }

  .logo-mobile {
    height: 80px;
  }

  .hamburger {
    width: 44px;
    height: 44px;
  }

  .menu-mobile-link {
    font-size: 1.7rem;
    padding: 1.1rem;
  }

  .menu-mobile-content {
    padding-inline: 2.25rem;
  }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .info-nav-top {
    padding-inline: 1.5rem;
  }

  .info-item {
    font-size: 0.8rem;
  }

  .info-wrapper {
    column-gap: 1.5rem;
  }

  .nav-main {
    padding-inline: 1.75rem;
  }

  .logo {
    height: 82px;
  }

  .logo-mobile {
    height: 82px;
  }

  .menu-mobile-header {
    padding-inline: 2rem;
  }

  .menu-mobile-content {
    padding-inline: 3rem;
  }

  .menu-mobile-link {
    font-size: 2rem;
    padding-block: 1.25rem;
  }

  .btn-mobile {
    font-size: 1.02rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .info-item {
    font-size: 0.85rem;
  }

  .nav-main {
    padding: 1rem 2.25rem;
  }

  .logo {
    height: 88px;
  }

  .hamburger {
    display: none;
  }

  .menu-desktop {
    display: flex;
  }

  .menu-link {
    font-size: 1.3rem;
  }

  .btn-desktop {
    display: inline-flex;
  }

  .menu-mobile-overlay {
    display: none !important;
  }
}

/* Desktop grande (1280px+) */
@media (min-width: 1280px) {
  .info-nav-top {
    padding-inline: 2.25rem;
  }

  .info-wrapper {
    column-gap: 2.25rem;
  }

  .logo {
    height: 96px;
  }

  .menu-desktop {
    gap: 2.8rem;
  }

  .menu-link {
    font-size: 1.45rem;
  }

  .btn-reserva {
    font-size: 1rem;
    padding-inline: 2.2rem;
  }
}

/* Desktop extra grande (1536px+) */
@media (min-width: 1536px) {
  .logo {
    height: 120px;
  }

  .menu-desktop {
    gap: 3.1rem;
  }

  .menu-link {
    font-size: 1.55rem;
  }

  .btn-reserva {
    padding-inline: 2.4rem;
  }
}

/* Desktop ultra grande (1920px+) */
@media (min-width: 1920px) {
  .info-nav-top {
    padding-inline: 3rem;
  }

  .nav-main {
    padding-inline: 3rem;
  }

  .logo {
    height: 130px;
  }

  .menu-link {
    font-size: 1.65rem;
  }
}
</style>
