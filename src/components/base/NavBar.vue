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
          <p class="info-item"><font-awesome-icon icon="map-marker-alt" /> Celestun, Yucatán</p>
          <p class="info-item"><font-awesome-icon icon="clock" /> 9:00 am - 6:00 pm</p>
          <p class="info-item"><font-awesome-icon icon="phone" /> +52 999 123 4567</p>
          <p class="info-item"><font-awesome-icon icon="envelope" /> sacbejatencion@sacbej.com</p>
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
          <a href="#inicio" class="menu-link">Inicio</a>
          <a href="#nosotros" class="menu-link">Nosotros</a>
          <a href="#experiencias" class="menu-link">Experiencias</a>
          <a href="#contacto" class="menu-link">Contacto</a>
          <a href="#opiniones" class="menu-link">Opiniones</a>
        </nav>

        <!-- Botón reserva (solo desktop) -->
        <a href="#contacto" class="btn-reserva btn-desktop">Reserva</a>
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
          <a href="#inicio" class="menu-mobile-link" @click="closeMenu">Inicio</a>
          <a href="#nosotros" class="menu-mobile-link" @click="closeMenu">Nosotros</a>
          <a href="#experiencias" class="menu-mobile-link" @click="closeMenu">Experiencias</a>
          <a href="#contacto" class="menu-mobile-link" @click="closeMenu">Contacto</a>
          <a href="#opiniones" class="menu-mobile-link" @click="closeMenu">Opiniones</a>
          <button class="btn-reserva btn-mobile" @click="closeMenu">Reserva</button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMapMarkerAlt, faClock, faPhone, faEnvelope);

const showTopInfo = ref(true);
const showBottomNav = ref(true);
const isOpen = ref(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > 50) {
    showTopInfo.value = false;
    showBottomNav.value = currentScroll < lastScrollY;
  } else {
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

// Bloquear scroll cuando el menú está abierto
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
  document.body.style.overflow = '';
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;500;600;700&display=swap');

/* ==================== VARIABLES ==================== */
:root {
  --primary-color: #4caf50;
  --primary-dark: #45a049;
  --secondary-color: #a68a6d;
  --text-dark: #333;
  --text-light: #fff;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.16);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ==================== NAVBAR PRINCIPAL ==================== */
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: white;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.nav-header.nav-hidden {
  transform: translateY(-100%);
}

/* ==================== BARRA SUPERIOR INFO ==================== */
.info-nav-top {
  background: #c4a57b;
  color: #fff;
  padding: 0.5rem 1rem;
}

.info-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.info-item {
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  white-space: nowrap;
}

/* ==================== BARRA PRINCIPAL ==================== */
.nav-main {
  background: white;
  padding: 0.75rem 1rem;
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
  height: 50px;
  width: auto;
  object-fit: contain;
  transition: var(--transition);
}

.logo-mobile {
  height: 60px;
  width: auto;
  object-fit: contain;
}

/* ==================== HAMBURGER ==================== */
.hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
}

.hamburger:hover {
  background: rgba(0, 0, 0, 0.05);
}

.hamburger .material-icons {
  font-size: 24px;
  color: var(--text-dark);
}

/* ==================== MENÚ DESKTOP ==================== */
.menu-desktop {
  display: none;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.menu-link {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: var(--text-dark);
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  padding: 0.5rem 0;
  transition: var(--transition);
}

.menu-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.menu-link:hover {
  color: var(--primary-color);
}

.menu-link:hover::after {
  width: 100%;
}

/* ==================== BOTÓN RESERVA ==================== */
.btn-reserva {
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.65rem 1.5rem;
  border: 2px solid var(--primary-color);
  background: transparent;
  color: var(--primary-color);
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid #4E342E;
  transition: var(--transition);
  white-space: nowrap;
}
.btn-reserva {
  display: inline-block; /* para que se comporte como botón */
  text-decoration: none; /* elimina subrayado */
}

.btn-reserva:hover {
  background: #45a049;
  color: #4E342E;
  box-shadow: var(--shadow-md);
}

.btn-desktop {
  display: none;
}

.btn-mobile {
  width: 100%;
  margin-top: 1rem;
}

/* ==================== MENÚ MÓVIL (FULLSCREEN) ==================== */
.menu-mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.menu-mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
}

.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: var(--transition);
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.05);
}

.close-button .material-icons {
  font-size: 28px;
  color: var(--text-dark);
}

.menu-mobile-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 1.5rem;
  gap: 0.5rem;
}

.menu-mobile-link {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: var(--text-dark);
  text-decoration: none;
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 8px;
  transition: var(--transition);
  text-align: center;
}

.menu-mobile-link:hover,
.menu-mobile-link:active {
  background: rgba(76, 175, 80, 0.1);
  color: var(--primary-color);
}

/* ==================== TRANSICIONES ==================== */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}

/* ==================== RESPONSIVE ==================== */

/* Móvil pequeño (320px - 374px) */
@media (max-width: 374px) {
  .info-item {
    font-size: 0.65rem;
    gap: 0.3rem;
  }
  
  .info-wrapper {
    gap: 0.5rem;
  }
  
  .logo {
    height: 40px;
  }
  
  .logo-mobile {
    height: 50px;
  }
  
  .hamburger {
    width: 36px;
    height: 36px;
  }
  
  .hamburger .material-icons {
    font-size: 22px;
  }
  
  .menu-mobile-link {
    font-size: 1.3rem;
    padding: 0.85rem;
  }
  
  .menu-mobile-content {
    padding: 1.5rem 1rem;
  }
  
  .btn-mobile {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
}

/* Móvil (375px - 639px) */
@media (min-width: 375px) and (max-width: 639px) {
  .info-item {
    font-size: 0.7rem;
  }
  
  .info-wrapper {
    gap: 0.75rem;
  }
  
  .logo {
    height: 58px;
    margin-right: 29px;
  }
  
  .logo-mobile {
    height: 90px;
  }
  
  .menu-mobile-link {
    font-size: 1.4rem;
    padding: 0.95rem;
  }
}

/* Móvil grande / Tablet pequeña (640px - 767px) */
@media (min-width: 640px) and (max-width: 767px) {
  .info-item {
    font-size: 0.75rem;
  }
  
  .info-wrapper {
    gap: 1rem;
  }
  
  .logo {
    height: 55px;
  }
  
  .logo-mobile {
    height: 65px;
  }
  
  .hamburger {
    width: 42px;
    height: 42px;
  }
  
  .menu-mobile-link {
    font-size: 1.65rem;
    padding: 1.1rem;
  }
  
  .menu-mobile-content {
    padding: 2rem 2rem;
  }
  
  .btn-mobile {
    font-size: 1rem;
  }
}

/* Tablet (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .info-nav-top {
    padding: 0.65rem 1.5rem;
  }
  
  .info-item {
    font-size: 0.8rem;
  }
  
  .info-wrapper {
    gap: 1.25rem;
  }
  
  .nav-main {
    padding: 1rem 1.5rem;
  }
  
  .logo {
    height: 65px;
  }
  
  .logo-mobile {
    height: 70px;
  }
  
  .hamburger {
    width: 44px;
    height: 44px;
  }
  
  .hamburger .material-icons {
    font-size: 26px;
  }
  
  .close-button {
    width: 48px;
    height: 48px;
  }
  
  .close-button .material-icons {
    font-size: 30px;
  }
  
  .menu-mobile-header {
    padding: 1.25rem 2rem;
  }
  
  .menu-mobile-content {
    padding: 2.5rem 3rem;
    gap: 0.75rem;
  }
  
  .menu-mobile-link {
    font-size: 2rem;
    padding: 1.25rem;
  }
  
  .btn-mobile {
    font-size: 1.05rem;
    padding: 0.8rem 2rem;
    margin-top: 1.5rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .info-item {
    font-size: 0.85rem;
    gap: 0.5rem;
  }
  
  .nav-main {
    padding: 1rem 2rem;
  }
  
  .logo {
    height: 80px;
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
    display: block;
  }
  
  .menu-mobile-overlay {
    display: none !important;
  }
}

/* Desktop grande (1280px+) */
@media (min-width: 1280px) {
  .info-nav-top {
    padding: 0.75rem 2rem;
  }
  
  .info-item {
    font-size: 0.9rem;
  }
  
  .info-wrapper {
    gap: 2rem;
  }
  
  .logo {
    height: 90px;
  }
  
  .menu-desktop {
    gap: 2.5rem;
  }
  
  .menu-link {
    font-size: 1.45rem;
  }
  
  .btn-reserva {
    font-size: 1rem;
    padding: 0.75rem 2rem;
  }
}

/* Desktop extra grande (1536px+) */
@media (min-width: 1536px) {
  .logo {
    height: 150px;      /* aumenta directamente la imagen */
    width: auto;
    transform: scale(1.2); /* 🔹 zoom visual sin romper el layout */
    transform-origin: center;
  }
  
  
  .menu-desktop {
    gap: 3rem;
  }
  
  .menu-link {
    font-size: 1.6rem;
  }
  
  .btn-reserva {
    padding: 0.8rem 2.25rem;
  }
}

/* Desktop ultra grande (1920px+) */
@media (min-width: 1920px) {
  .info-nav-top {
    padding: 0.85rem 3rem;
  }
  
  .nav-main {
    padding: 1.25rem 3rem;
  }
  
  .logo {
    height: 110px;
  }
  
  .menu-link {
    font-size: 1.7rem;
  }
}
</style>
