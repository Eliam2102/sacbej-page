<template>
  <main>
    <section class="hero">
      <div class="hero-content">
        <!-- frase introductoria ligera -->
        <!-- <p class="hero-intro">Donde el Tiempo se Detiene y la Magia Comienza</p>

        <!-- separador decorativo <hr class="hero-divider" /> -->

        <!-- frase principal / título -->
        <h1 class="hero-title">
          Diseñamos el escape perfecto.<br/>
          La naturaleza pone la magia
        </h1>

        <hr class="hero-divider" />

        <!-- subtítulo explicativo -->
        <h2 class="hero-subtitle">
          Bienvenido a <strong>SacBej</strong>, tu guía personal hacia las maravillas inolvidables de <strong>Celestún</strong>.
        </h2>

        <!-- botón de acción -->
        <button class="hero-btn">Descúbrelo Ahora</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');


/* HERO SECTION */
.hero {
  margin-top: 80px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('https://media.istockphoto.com/id/1477565738/photo/mangrove-forest-ria-celestun-biosphere-reserve-mexico.jpg?s=612x612&w=0&k=20&c=d7OfiwhEGdPX1SMAnIIw2DIotLyVGncwWNg9IKfPWTE=') no-repeat center center/cover;
  position: relative;
  color: white;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5); /* overlay para contraste */
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  padding: 40px 20px; /* más aire lateral y vertical */
}

/* Frase introductoria (ligera) */
.hero-intro {
  font-family: "Merriweather", monospace;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem; /* más separación */
  letter-spacing: 0.5px;
  color: #f5e6d3;
}

/* Separador decorativo */
.hero-divider {
  border: none;
  border-top: 3px solid #4caf50; /* verde para estilo natural */
  width: 100px;
  margin: 2rem auto; /* más separación */
  border-radius: 2px;
}

/* Frase principal / título */
.hero-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: 3.5rem; /* tamaño más impactante */
  line-height: 1.2;
  font-weight: 300;
  letter-spacing: -0.5px;
  margin: 2rem 0 2.5rem; /* más espacio arriba y abajo */
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: clip;
  color: #f5e6d3;
}

/* Subtítulo explicativo */
.hero-subtitle {
  font-family: "Merriweather", monospace;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.3px;
  margin: 2rem 0 4rem;
  color: #e0cfa5; /* color más suave que el título */
}

/* Botón */
.hero-btn {
  background: #f5e6D3;
  color: #4E342E;
  font-size: 1.3rem;
  padding: 16px 36px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;
}

.hero-btn:hover {
  background: #A68A6D;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  .hero-subtitle {
    font-size: 1.3rem;
  }
  .hero-intro {
    font-size: 1.1rem;
  }
  .hero-btn {
    padding: 12px 24px;
    font-size: 1.1rem;
  }
}
</style>
