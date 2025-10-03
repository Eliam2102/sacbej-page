<template>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  <nav class="nav-header" :class="{ hidden: !showBottomNav }">
    <!-- Solo se muestra si estamos en el inicio -->
    <div class="info-nav-top" v-show="showTopInfo">
      <p>
        <font-awesome-icon icon="map-marker-alt" /> 97367 Celestun, Yucatán México.
      </p>
      <p><font-awesome-icon icon="clock" /> Horario: 9:00 am a 6:00 pm</p>
      <p><font-awesome-icon icon="phone" /> Tel: +52 999 123 4567</p>
      <p>
        <font-awesome-icon icon="envelope" /> Email: sacbejatencion@sacbej.com
      </p>
    </div>

    <!-- Barra principal -->
    <div class="info-nav-bottom">
      <!-- Logo -->
      <img
        src="/src/assets/logo_sac_bej_celestun_transparente.png"
        class="logo-nav"
        alt="logosacbej"
      />

      <!-- Menú centrado -->
      <ul class="menu-nav">
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Experiencias</li>
        <li>Contactatanos</li>
        <li>Opiniones</li>
      </ul>

      <!-- Botón a la derecha -->
      <div class="btn-contacto">Reserva</div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
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
let lastScrollY = 0;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  // Mostrar info-nav-top solo cuando estamos en el inicio
  showTopInfo.value = currentScroll < 50;

  if (currentScroll > lastScrollY && currentScroll > 50) {
    // Bajando → ocultar bottom nav
    showBottomNav.value = false;
  } else {
    // Subiendo → mostrar bottom nav
    showBottomNav.value = true;
  }

  lastScrollY = currentScroll;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');

.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.nav-header.hidden {
  transform: translateY(-100%);
  opacity: 0;
}

/* barra superior solo visible al inicio */
.info-nav-top {
  background: #a68a6d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  font-size: 13px;
  padding: 8px;
}
.info-nav-top p {
  margin: 0;
  font-family: 'Google Sans Code', monospace;
  padding: 0;
}

/* barra principal */
.info-nav-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between; /* logo - menú - botón */
  padding: 12px 40px;
}

.menu-nav {
  flex: 1; /* ocupa espacio entre logo y botón */
  display: flex;
  justify-content: center; /* centra los li dentro */
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.menu-nav li {
  font-family: "Bebas Neue", monospace;
  cursor: pointer;
  font-weight: 370;
  font-size: 1.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.menu-nav li:hover {
  color: #4caf50;
}

.btn-contacto {
  background-color: transparent; 
  color: #4caf50;
  border: 2px solid #4caf50; 
  padding: 12px 24px;    
  border-radius: 8px;       
  font-size: 18px;       
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-contacto:hover {
  background-color: #4caf50; 
  color: #fff;               
  transform: translateX(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}


.logo-nav {
  height: 120px;
  width: 120px;
  transform: scale(1.6);
  transform-origin: center;
}
</style>
