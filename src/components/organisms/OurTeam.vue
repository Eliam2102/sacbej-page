<template>
  <main>
    <section class="equipo-section">
      <!-- Sección de imágenes -->
      <div class="equipo-imagenes">
        <div class="imagen-principal">
          <img src="/src/assets/IMagen.jpeg" alt="Integrantes del equipo SacBej-Celestún">
        </div>
        <div class="decor-pattern"></div>
        <div class="imagen-secundaria">
          <img src="/src/assets/torusitas-tour.jpeg" alt="Turistas disfrutando">
        </div>
        <img src="/src/assets/logo_transparente_beige.png" alt="logo SacBej-Celestun" class="logo-sacbej">
      </div>

      <!-- Sección de texto -->
      <div class="equipo-texto">
        <p class="subtitulo">VIVE LA AVENTURA, RESERVA CON NOSOTROS</p>
        <div class="separador"></div>
        <h1 class="titulo">Nuestro equipo</h1>
        <p class="descripcion">
          Nos enorgullece contar con un equipo apasionado y dedicado que hace posible 
          que tus sueños de viaje se conviertan en experiencias inolvidables. 
          Nos destacamos por la atención al detalle, la amabilidad genuina 
          y el compromiso con la sostenibilidad. Cada integrante contribuye 
          de manera única para crear el ambiente acogedor y profesional que nos distingue.
        </p>
        <h3 class="bienvenida">Bienvenido a tu próxima aventura</h3>
        <button class="btn-contacto">CONTÁCTANOS YA</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,opsz,wght@0,300..900;1,300..900&family=Cormorant+Garamond:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');

/* ==================== RESET ==================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ==================== SECCIÓN PRINCIPAL ==================== */
.equipo-section {
  background: linear-gradient(135deg, #A68A6D 0%, #B89A7D 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  min-height: 100vh;
  padding: 4rem 5%;
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
}

/* ==================== CONTENEDOR DE IMÁGENES ==================== */
.equipo-imagenes {
  position: relative;
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  min-height: 500px;
}

/* Imagen principal */
.imagen-principal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.imagen-principal img {
  width: 100%;
  max-width: 550px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 15px 40px rgba(76, 175, 79, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 8px solid rgba(245, 230, 211, 0.3);
}

.imagen-principal img:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 50px rgba(76, 175, 79, 0.4);
}

/* Imagen secundaria */
.imagen-secundaria {
  position: absolute;
  bottom: -30px;
  right: -30px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 3;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 6px solid rgba(245, 230, 211, 0.5);
}

.imagen-secundaria img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  display: block;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.imagen-secundaria img:hover {
  transform: scale(1.1) rotate(5deg);
}

/* Logo SacBej */
.logo-sacbej {
  position: absolute;
  top: -100px;
  left: -100px;
  width: 250px;
  height: auto;
  opacity: 0.9;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.logo-sacbej:hover {
  opacity: 1;
}

/* Patrón decorativo */
.decor-pattern {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(46, 77, 60, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  z-index: 0;
}

/* ==================== SECCIÓN DE TEXTO ==================== */
.equipo-texto {
  flex: 1 1 45%;
  font-family: "Merriweather", serif;
  text-align: left;
  color: #F5E6D3;
  max-width: 600px;
}

.subtitulo {
  letter-spacing: 3px;
  font-size: clamp(0.75rem, 1.5vw, 1rem);
  color: #F5E6D3;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.separador {
  width: 100%;
  max-width: 480px;
  height: 3px;
  background: linear-gradient(to right, #2E4D3C, transparent);
  margin: 1.2rem 0;
}

.titulo {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #1B3B2F;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  font-weight: 700;
}

.descripcion {
  color: #F5E6D3;
  line-height: 1.8;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  margin-bottom: 2rem;
  text-align: justify;
}

.bienvenida {
  font-family: 'Playfair Display', serif;
  color: #2E4D3C;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* ==================== BOTÓN ==================== */
.btn-contacto {
  background: transparent;
  border: 2px solid #4E342E;
  color: #4E342E;
  padding: 0.9rem 2.2rem;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  text-transform: uppercase;
}

.btn-contacto:hover {
  background-color: #4E342E;
  color: #F5E6D3;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(78, 52, 46, 0.3);
}

.btn-contacto:active {
  transform: translateY(-1px);
}

/* ==================== RESPONSIVE ==================== */

/* Móvil pequeño (< 375px) */
@media (max-width: 374px) {
  .equipo-section {
    flex-direction: column;
    padding: 3rem 1rem;
    gap: 2rem;
    text-align: center;
  }

  .equipo-imagenes {
    order: 1;
    min-height: 320px;
    margin-bottom: 1rem;
  }

  .imagen-principal img {
    max-width: 280px;
  }

  .imagen-secundaria {
    bottom: -20px;
    right: -20px;
  }

  .imagen-secundaria img {
    width: 150px;
    height: 150px;
  }

  .logo-sacbej {
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
  }

  .equipo-texto {
    order: 2;
    text-align: center;
  }

  .separador {
    margin-left: auto;
    margin-right: auto;
    max-width: 280px;
  }

  .descripcion {
    text-align: center;
  }

  .btn-contacto {
    width: 100%;
    max-width: 300px;
  }
}

/* Móvil (375px - 479px) */
@media (min-width: 375px) and (max-width: 479px) {
  .equipo-section {
    flex-direction: column;
    padding: 3rem 1.5rem;
    gap: 2.5rem;
    text-align: center;
  }

  .equipo-imagenes {
    order: 1;
    min-height: 350px;
  }

  .imagen-principal img {
    max-width: 320px;
  }

  .imagen-secundaria {
    bottom: -25px;
    right: -25px;
  }

  .imagen-secundaria img {
    width: 170px;
    height: 170px;
  }

  .logo-sacbej {
    top: -70px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
  }

  .equipo-texto {
    order: 2;
    text-align: center;
  }

  .separador {
    margin-left: auto;
    margin-right: auto;
    max-width: 320px;
  }

  .descripcion {
    text-align: center;
  }
}

/* Móvil grande / Tablet pequeña (480px - 639px) */
@media (min-width: 480px) and (max-width: 639px) {
  .equipo-section {
    flex-direction: column;
    padding: 3.5rem 2rem;
    gap: 3rem;
  }

  .equipo-imagenes {
    order: 1;
    min-height: 380px;
  }

  .imagen-principal img {
    max-width: 360px;
  }

  .imagen-secundaria {
    bottom: -30px;
    right: -30px;
  }

  .imagen-secundaria img {
    width: 190px;
    height: 190px;
  }

  .logo-sacbej {
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
  }

  .equipo-texto {
    order: 2;
    text-align: center;
  }

  .separador {
    margin-left: auto;
    margin-right: auto;
  }

  .descripcion {
    text-align: center;
  }
}

/* Tablet vertical (640px - 767px) */
@media (min-width: 640px) and (max-width: 767px) {
  .equipo-section {
    flex-direction: column;
    padding: 4rem 2.5rem;
    gap: 3.5rem;
  }

  .equipo-imagenes {
    order: 1;
    min-height: 420px;
  }

  .imagen-principal img {
    max-width: 400px;
  }

  .imagen-secundaria img {
    width: 210px;
    height: 210px;
  }

  .logo-sacbej {
    top: -90px;
    left: 50%;
    transform: translateX(-50%);
    width: 230px;
  }

  .equipo-texto {
    order: 2;
    text-align: center;
  }

  .separador {
    margin-left: auto;
    margin-right: auto;
  }

  .descripcion {
    text-align: center;
  }
}

/* Tablet horizontal (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .equipo-section {
    flex-direction: column;
    padding: 4.5rem 3rem;
    gap: 4rem;
  }

  .equipo-imagenes {
    order: 1;
    min-height: 480px;
  }

  .imagen-principal img {
    max-width: 450px;
  }

  .imagen-secundaria {
    bottom: -35px;
    right: -35px;
  }

  .imagen-secundaria img {
    width: 230px;
    height: 230px;
  }

  .logo-sacbej {
    top: -95px;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
  }

  .equipo-texto {
    order: 2;
    text-align: center;
    max-width: 700px;
  }

  .separador {
    margin-left: auto;
    margin-right: auto;
  }

  .descripcion {
    text-align: center;
  }
}

/* Desktop pequeño (1024px - 1199px) */
@media (min-width: 1024px) and (max-width: 1199px) {
  .equipo-section {
    flex-direction: row;
    padding: 5rem 4%;
    gap: 3rem;
  }

  .equipo-imagenes {
    order: 0;
    min-height: 500px;
  }

  .imagen-principal img {
    max-width: 450px;
  }

  .imagen-secundaria {
    bottom: -30px;
    right: -30px;
  }

  .imagen-secundaria img {
    width: 220px;
    height: 220px;
  }

  .logo-sacbej {
    top: -90px;
    left: -90px;
    transform: none;
  }

  .equipo-texto {
    text-align: left;
  }

  .separador {
    margin-left: 0;
    margin-right: 0;
  }

  .descripcion {
    text-align: justify;
  }
}

/* Desktop (1200px - 1399px) */
@media (min-width: 1200px) and (max-width: 1399px) {
  .equipo-section {
    padding: 6rem 5%;
    gap: 4rem;
  }

  .equipo-imagenes {
    min-height: 550px;
  }

  .imagen-principal img {
    max-width: 500px;
  }

  .imagen-secundaria img {
    width: 240px;
    height: 240px;
  }

  .logo-sacbej {
    top: -95px;
    left: -95px;
    width: 240px;
  }
}

/* Desktop grande (1400px - 1599px) */
@media (min-width: 1400px) and (max-width: 1599px) {
  .equipo-section {
    padding: 6rem 6%;
    gap: 5rem;
  }

  .equipo-imagenes {
    min-height: 600px;
  }

  .imagen-principal img {
    max-width: 550px;
  }

  .imagen-secundaria img {
    width: 250px;
    height: 250px;
  }

  .logo-sacbej {
    top: -100px;
    left: -100px;
    width: 250px;
  }
}

/* Desktop extra grande (>= 1600px) */
@media (min-width: 1600px) {
  .equipo-section {
    padding: 7rem 8%;
    gap: 6rem;
  }

  .equipo-imagenes {
    min-height: 650px;
    max-width: 750px;
  }

  .imagen-principal img {
    max-width: 600px;
  }

  .imagen-secundaria {
    bottom: -40px;
    right: -40px;
  }

  .imagen-secundaria img {
    width: 280px;
    height: 280px;
  }

  .logo-sacbej {
    top: -110px;
    left: -110px;
    width: 280px;
  }

  .equipo-texto {
    max-width: 650px;
  }

  .separador {
    max-width: 520px;
  }

  .btn-contacto {
    padding: 1rem 2.5rem;
  }
}

/* Landscape móviles */
@media (max-height: 500px) and (orientation: landscape) {
  .equipo-section {
    flex-direction: row;
    padding: 2rem 3%;
    gap: 2rem;
    min-height: auto;
  }

  .equipo-imagenes {
    min-height: 350px;
  }

  .imagen-principal img {
    max-width: 300px;
  }

  .imagen-secundaria {
    bottom: -15px;
    right: -15px;
  }

  .imagen-secundaria img {
    width: 140px;
    height: 140px;
  }

  .logo-sacbej {
    top: -50px;
    left: -50px;
    width: 150px;
  }

  .equipo-texto {
    max-width: 500px;
  }

  .titulo {
    margin-bottom: 0.5rem;
  }

  .descripcion {
    margin-bottom: 1rem;
  }

  .bienvenida {
    margin-bottom: 1rem;
  }
}
</style>