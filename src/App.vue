<script setup lang="ts">
import NavBar from './components/base/NavBar.vue'
import Section from './components/control/Section.vue'
import Footer from './components/base/Footer.vue'
import Hero from './components/organisms/Hero.vue'
import About from './components/organisms/About.vue'
import Experiences from './components/organisms/Experiences.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <!-- Contenido principal -->
  <main>
    <!-- Seccion Hero -->
    <Hero/>
    <!-- Sección acerca de nosotros -->
    <About/>

    <Experiences/>
    <Section class="section section4">
      <h1>Sección 4</h1>
      <p>Contenido de la tercera sección</p>
    </Section>
    <Section class="section section5">
      <h1>Sección 6</h1>
      <p>Contenido de la tercera sección</p>
    </Section>
    <Section class="section section6">
      <h1>Sección 7</h1>
      <p>Contenido de la tercera sección</p>
    </Section>
  </main>
  <footer>
    <Footer/>
  </footer>
</template>

<style scoped>
main {
  margin-top: 187x; /* deja espacio para el navbar */
}

/* Hacemos que cada sección ocupe toda la pantalla */
.section {
  min-height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;   
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
}

/* Colores de fondo distintos para diferenciar secciones */
.section1, .section2,  .section3, .section4, .section5, .section6{
  background-color: #E5E0D3;
  width: 100%;
}


/* Para que los títulos se vean bien */
.section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section p {
  font-size: 1.5rem;
  max-width: 600px;
}
</style>
