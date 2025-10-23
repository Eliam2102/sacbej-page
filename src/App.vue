<script setup lang="ts">
import NavBar from './components/base/NavBar.vue'
import Footer from './components/base/Footer.vue'
import Hero from './components/organisms/Hero.vue'
import About from './components/organisms/About.vue'
import Experiences from './components/organisms/Experiences.vue'
import OurTeam from './components/organisms/OurTeam.vue'
import ContactUs from './components/organisms/ContactUs.vue'
import Store from './components/organisms/Store.vue'
</script>

<template>
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
    <Footer/>
  </footer>
</template>

<style scoped>
:root{
  /* alto aproximado del navbar fijo (ajústalo a tu diseño) */
  --nav-height: 100px;
}

/* activa smooth scroll nativo */
html { scroll-behavior: smooth; }

/* IMPORTANTE: aquí tenías un typo "187x" -> debe ser "px" */
main {
  margin-top: 178px; /* deja espacio para el navbar fijo */
}

/* 1) Las secciones no aportan espacio extra */
.section {
  margin: 0;                /* quita márgenes */
  padding: 0;               /* quita relleno si lo tuvieras */
  border: 0;                /* por si alguna tiene borde superior/inferior */
}

/* 2) Evita el “colapso de márgenes” de los hijos (h1, p, etc.) */
.section > *:first-child { margin-top: 0 !important; }
.section > *:last-child  { margin-bottom: 0 !important; }

/* 3) Normaliza títulos y párrafos dentro de la sección */
.section :where(h1,h2,h3,h4,h5,h6,p) {
  margin-block-start: 0;
  margin-block-end: 0;
}

/* 4) Si dentro usas un .container con padding vertical, elimínalo */
.section :where(.container) {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

/* 5) Asegura que dos secciones consecutivas no tengan “línea” entre ellas */
.section + .section {
  margin-top: 0;
  border-top: 0;
}

/* 6) Evita pequeños espacios por imágenes inline o iframes */
.section img, 
.section iframe {
  display: block;       /* quita el espacio de baseline */
}

/* 7) Si usas fondos distintos, asegúrate que body y secciones empalmen bien */
body { background: #fff; }
.section { background: #fff; } /* o el color que corresponda */

</style>
