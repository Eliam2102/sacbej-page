<template>
  <main class="contacto-page">
    <!-- Hero Background -->
    <div class="hero-background">
      <div class="hero-image"></div>
      <div class="hero-overlay"></div>
      <svg class="hero-waves" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,213.3C672,213,768,203,864,181.3C960,160,1056,128,1152,138.7C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
      </svg>
    </div>

    <div class="contenido-principal">
      <div class="container-max">
        
        <!-- Header -->
        <header class="encabezado-principal">
          <h1 class="titulo-hero">¿TIENES DUDAS?</h1>
          <div class="linea-decorativa"></div>
          <p class="subtitulo-hero">
            Si tienes alguna pregunta o necesitas más información sobre nuestros tours, 
            no dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
        </header>

        <!-- Grid Principal -->
        <div class="grid-principal">
          
          <!-- Formulario de Contacto -->
          <div class="col-formulario">
            <div class="tarjeta-glass">
              <h2 class="titulo-seccion">CONTÁCTANOS</h2>
              <p class="descripcion-seccion">
                Completa el formulario y te responderemos pronto
              </p>

              <form @submit.prevent="enviarFormulario" class="formulario" novalidate>
                <div class="campo-grupo">
                  <label for="nombre" class="etiqueta-campo">
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    v-model="formData.nombre"
                    type="text"
                    required
                    placeholder="Juan Pérez García"
                    class="campo-input"
                    autocomplete="name"
                  />
                </div>

                <div class="campo-grupo">
                  <label for="email" class="etiqueta-campo">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    class="campo-input"
                    autocomplete="email"
                  />
                </div>

                <div class="campo-grupo">
                  <label for="mensaje" class="etiqueta-campo">
                    Tu mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    v-model="formData.mensaje"
                    required
                    rows="5"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    class="campo-textarea"
                  ></textarea>
                </div>

                <button type="submit" class="boton-enviar" :class="{ 'enviado': enviado }">
                  <Icon v-if="enviado" icon="mdi:check" width="28" />
                  <Icon v-else icon="mdi:send" width="28" />
                  <span>{{ enviado ? 'MENSAJE ENVIADO' : 'RESERVAR CONSULTA' }}</span>
                  <div class="boton-brillo"></div>
                </button>

                <div class="insignias-confianza">
                  <span class="insignia">
                    <Icon icon="mdi:check-circle" width="16" />
                    Atención certificada
                  </span>
                  <span class="insignia">
                    <Icon icon="mdi:clock-fast" width="16" />
                    Respuesta en 24h
                  </span>
                  <span class="insignia">
                    <Icon icon="mdi:shield-check" width="16" />
                    Pagos seguros
                  </span>
                </div>
              </form>
            </div>
          </div>

          <!-- Logo y Marca -->
          <div class="col-logo">
            <div class="tarjeta-glass tarjeta-centrada">
              <img
                src="/src/assets/logo_sac_bej_celestun_transparente.png"
                alt="Logo Cooperativa Sacbej Celestún"
                class="logo-principal"
                loading="lazy"
              />
              <h3 class="titulo-marca">EXPERIENCIAS AUTÉNTICAS</h3>
              <p class="subtitulo-marca">En Celestún, Yucatán</p>
            </div>
          </div>
        </div>

        <!-- Sección de Mapa -->
        <section class="seccion-mapa">
          <div class="tarjeta-glass">
            <div class="grid-mapa">
              
              <!-- Mapa -->
              <div class="contenedor-mapa">
                <div class="marco-mapa">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.01753716865576!2d-90.39926344244076!3d20.860737526835145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f8c54e98ceceaf%3A0xd965a5fb34debf73!2sEco%20Turismo%20Sac%20Bej%20Celest%C3%BAn!5e0!3m2!1ses-419!2smx!4v1760819024538!5m2!1ses-419!2smx"
                    width="100%"
                    height="100%"
                    style="border:0;"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Ubicación en Celestún, Yucatán"
                  ></iframe>
                  <div class="sello-postal">CELESTÚN</div>
                </div>
              </div>

              <!-- Información de Contacto -->
              <div class="contenedor-direccion">
                <h2 class="titulo-seccion">VISÍTANOS</h2>
                
                <div class="info-contacto">
                  <div class="item-contacto">
                    <Icon icon="mdi:map-marker" width="24" class="icono-contacto" />
                    <p class="texto-contacto">
                      C. 10 x 11 y 13, Centro<br />
                      97367 Celestún, Yucatán
                    </p>
                  </div>
                  
                  <div class="item-contacto">
                    <Icon icon="mdi:phone" width="24" class="icono-contacto" />
                    <a href="tel:+529991234567" class="enlace-contacto">
                      +52 999 123 4567
                    </a>
                  </div>
                  
                  <div class="item-contacto">
                    <Icon icon="mdi:email" width="24" class="icono-contacto" />
                    <a href="mailto:sacbejcelestun@gmail.com" class="enlace-contacto">
                      sacbejcelestun@gmail.com
                    </a>
                  </div>
                </div>

                <a href="#" class="boton-disponibilidad">
                  VER DISPONIBILIDAD
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

    <!-- Redes Sociales - Desktop -->
    <div class="redes-fijas-desktop">
      <div class="contenedor-redes">
        <a href="#" class="icono-red facebook" aria-label="Facebook">
          <Icon icon="mdi:facebook" width="22" />
        </a>
        <a href="#" class="icono-red instagram" aria-label="Instagram">
          <Icon icon="mdi:instagram" width="22" />
        </a>
        <a href="#" class="icono-red twitter" aria-label="Twitter">
          <Icon icon="mdi:twitter" width="22" />
        </a>
      </div>
    </div> 
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const formData = ref({
  nombre: '',
  email: '',
  mensaje: ''
})

const enviado = ref(false)

const enviarFormulario = () => {
  enviado.value = true
  setTimeout(() => {
    enviado.value = false
    formData.value = { nombre: '', email: '', mensaje: '' }
  }, 3000)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

/* ========== RESET Y BASE ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ========== LAYOUT PRINCIPAL ========== */
.contacto-page {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

/* ========== HERO BACKGROUND ========== */
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-image {
  position: absolute;
  inset: 0;
  background-image: url('https://yucatan.travel/wp-content/uploads/2019/12/Celest%C3%BAn.jpg');
  background-size: cover;
  background-position: center;
  filter: saturate(1.1) brightness(0.75);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.4), rgba(248, 250, 252, 1));
}

.hero-waves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  color: #B4977A;
}

.hero-waves path {
  fill: currentColor;
}

/* ========== CONTENIDO PRINCIPAL ========== */
.contenido-principal {
  position: relative;
  z-index: 10;
  padding: 3rem 1rem 2rem;
}

.container-max {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

/* ========== ENCABEZADO ========== */
.encabezado-principal {
  text-align: center;
  margin-bottom: 3rem;
}

.titulo-hero {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.5rem, 12vw, 9rem);
  color: white;
  margin-top: -30px;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
  line-height: 0.95;
  text-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  font-weight: 400;
}

.linea-decorativa {
  width: min(14rem, 42%);
  height: 4px;
  background: linear-gradient(90deg, var(--amber-400), white, var(--amber-400));
  border-radius: 999px;
  margin: 0 auto 2rem;
  opacity: 0.9;
}

.subtitulo-hero {
  font-family: 'Merriweather', serif;
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  color: #fff;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.7;
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  padding: 0 1rem;
}

/* ========== GRID PRINCIPAL ========== */
.grid-principal {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .grid-principal {
    grid-template-columns: 1.8fr 1.2fr;
    gap: 2rem;
  }
  
  .encabezado-principal {
    margin-bottom: 4rem;
  }
  
  .contenido-principal {
    padding: 4rem 2rem 3rem;
  }
}

/* ========== TARJETAS GLASS ========== */
.tarjeta-glass {
  background: #F5E6D3;
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: 2.5rem;
  box-shadow: 
    0 28px 60px rgba(15, 23, 42, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.6) inset;
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.tarjeta-centrada {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
}

/* ========== TÍTULOS Y TEXTOS ========== */
.titulo-seccion {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: var(--slate-800);
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  line-height: 1;
  font-weight: 400;
}

.descripcion-seccion {
  font-family: 'Merriweather', serif;
  color: var(--slate-600);
  margin-bottom: 2rem;
  font-size: clamp(0.95rem, 2vw, 1.125rem);
  line-height: 1.6;
}

/* ========== FORMULARIO ========== */
.formulario {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.campo-grupo {
  display: flex;
  flex-direction: column;
}

.etiqueta-campo {
  font-family: 'Merriweather', serif;
  font-weight: 600;
  color: var(--slate-700);
  margin-bottom: 0.5rem;
  font-size: clamp(0.875rem, 2vw, 1rem);
}

.campo-input,
.campo-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  color: var(--slate-800);
  border: 2px solid rgba(226, 232, 240, 1);
  border-radius: 1rem;
  background: rgba(248, 250, 252, 0.5);
  font-family: 'Merriweather', serif;
  transition: all 0.2s ease;
}

.campo-input::placeholder,
.campo-textarea::placeholder {
  color: rgba(148, 163, 184, 1);
}

.campo-input:focus,
.campo-textarea:focus {
  outline: none;
  border-color: var(--cyan-600);
  box-shadow: 0 0 0 4px rgba(8, 145, 178, 0.1);
  background: white;
}

.campo-textarea {
  resize: vertical;
  min-height: 120px;
}

/* ========== BOTÓN ENVIAR ========== */
.boton-enviar {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: none;
  border-radius: 1rem;
  background: #A68A6D;
  color: white;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  letter-spacing: 0.05em;
  cursor: pointer;

  transition: all 0.2s ease;
}

.boton-enviar:hover {
  background: #F5E6D3;
  color: #4E342E;
  border: 3px solid #4E342E ;
  box-shadow:  #2e4d3cac;
}


.boton-enviar.enviado {
  background: linear-gradient(180deg, #22c55e, #16a34a);
}

.boton-brillo {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.boton-enviar:hover .boton-brillo {
  transform: translateX(100%);
}

/* ========== INSIGNIAS DE CONFIANZA ========== */
.insignias-confianza {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.insignia {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--cyan-50);
  border: 2px dashed #22c55e;
  border-radius: 999px;
  color: var(--cyan-800);
  font-family: 'Merriweather', serif;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  font-weight: 600;
}

/* ========== LOGO Y MARCA ========== */
.logo-principal {
  width: 100%;
  max-width: 24rem;
  height: auto;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.12));
}

.titulo-marca {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--slate-800);
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.subtitulo-marca {
  font-family: 'Merriweather', serif;
  color: var(--slate-600);
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.6;
}

/* ========== SECCIÓN DE MAPA ========== */
.seccion-mapa {
  width: 100%;
}

.grid-mapa {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: stretch;
}

@media (min-width: 1024px) {
  .grid-mapa {
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
}

/* ========== MAPA ========== */
.contenedor-mapa {
  order: 2;
}

@media (min-width: 1024px) {
  .contenedor-mapa {
    order: 1;
  }
}

.marco-mapa {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.14);
}

@media (min-width: 1024px) {
  .marco-mapa {
    height: 100%;
    min-height: 500px;
  }
}

.marco-mapa iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: saturate(1.05) contrast(1.02);
}

.sello-postal {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(15, 23, 42, 0.1);
  border-radius: 0.75rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 0.1em;
  color: var(--cyan-700);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  transform: rotate(2deg);
  z-index: 10;
}

/* ========== DIRECCIÓN ========== */
.contenedor-direccion {
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (min-width: 1024px) {
  .contenedor-direccion {
    order: 2;
  }
}

.info-contacto {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.item-contacto {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.icono-contacto {
  color: var(--cyan-600);
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.texto-contacto {
  font-family: 'Merriweather', serif;
  color: var(--slate-700);
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
}

.enlace-contacto {
  font-family: 'Merriweather', serif;
  color: var(--cyan-700);
  font-weight: 600;
  font-size: clamp(0.9rem, 2vw, 1rem);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.enlace-contacto:hover {
  color: var(--cyan-800);
  border-bottom-color: var(--cyan-600);
}

/* ========== BOTÓN DISPONIBILIDAD ========== */
.boton-disponibilidad {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  background: linear-gradient(180deg, var(--amber-400), var(--amber-600));
  color: var(--slate-900);
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  letter-spacing: 0.05em;
  text-decoration: none;
  border-radius: 0.875rem;
  box-shadow: 0 10px 20px #4E342E;
  transition: all 0.2s ease;
}

.boton-disponibilidad:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px #4E342E;
  background: linear-gradient(180deg, var(--amber-500), var(--amber-600));
}

/* ========== REDES SOCIALES DESKTOP ========== */
.redes-fijas-desktop {
  position: fixed;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: none;
}

@media (min-width: 640px) {
  .redes-fijas-desktop {
    display: block;
  }
}

.contenedor-redes {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(226, 232, 240, 1);
  border-radius: 999px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
}

.icono-red {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--cyan-50);
  color: var(--cyan-600);
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.12);
}

.icono-red:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2);
}

.icono-red.facebook:hover {
  background: #1877f2;
  color: white;
}

.icono-red.instagram:hover {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  color: white;
}

.icono-red.twitter:hover {
  background: #1da1f2;
  color: white;
}

/* ========== REDES SOCIALES MOBILE ========== */
.redes-fijas-mobile {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 50;
  display: block;
}

@media (min-width: 640px) {
  .redes-fijas-mobile {
    display: none;
  }
}

.contenedor-redes-mobile {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(226, 232, 240, 1);
  border-radius: 999px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
}

.icono-red-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--cyan-50);
  color: var(--cyan-600);
  transition: all 0.2s ease;
}

.icono-red-mobile:active {
  transform: scale(0.95);
}



/* ========== RESPONSIVE ADICIONAL ========== */
@media (min-width: 768px) {
  .titulo-hero {
    margin-bottom: 2rem;
  }
  
  .linea-decorativa {
    margin-bottom: 2.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>