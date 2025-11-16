<template>
  <main>
    <!-- ==================== SECCIÓN EQUIPO ==================== -->
    <section class="equipo-section">
      <!-- Sección de imágenes -->
      <div class="equipo-imagenes">
        <div class="imagen-principal">
          <img src="https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/grupal-sacbej.jpeg" alt="Integrantes del equipo SacBej-Celestún" />
        </div>
        <div class="decor-pattern"></div>
        <div class="imagen-secundaria">
          <img src="https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/grupal2-sacbej.jpeg" alt="Turistas disfrutando" />
        </div>
        <img
          src="/src/assets/logo_transparente_beige.png"
          alt="logo SacBej-Celestun"
          class="logo-sacbej"
        />
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
        <a href="#contacto" class="btn-contacto">CONTÁCTANOS YA</a>
      </div>
    </section>

    <!-- ==================== SECCIÓN PREMIOS REDISEÑADA ==================== -->
    <section class="premios-section">
      <!-- Hero de Premios -->
      <div class="premios-hero">
        <div class="hero-badge">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                  fill="#4E342E" stroke="#4E342E" stroke-width="1.5"/>
          </svg>
        </div>
        <h2 class="premios-titulo-principal">
          Reconocimientos que <span class="highlight">avalan</span> nuestra excelencia
        </h2>
        <p class="premios-descripcion">
          Nuestro compromiso con la calidad, la sostenibilidad y la experiencia excepcional 
          del cliente nos ha valido el reconocimiento de las instituciones más prestigiosas 
          del sector turístico en Yucatán.
        </p>
        <div class="stats-row">
          <div class="stat-item">
            <span class="stat-number">2</span>
            <span class="stat-label">Reconocimientos</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">2025</span>
            <span class="stat-label">Año actual</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Certificados</span>
          </div>
        </div>
      </div>

      <!-- Cards de Premios -->
      <div class="premios-cards-container">
        <article
          v-for="premio in premios"
          :key="premio.id"
          class="premio-card"
          @click="openModal(premio)"
          @mouseenter="hoveredCard = premio.id"
          @mouseleave="hoveredCard = null"
        >
          <div class="card-shine"></div>
          <div class="card-badge">
            <span>{{ premio.year }}</span>
          </div>
          
          <div class="card-image-wrapper">
            <img :src="premio.image" :alt="premio.title" class="card-image" />
          </div>
          
          <div class="card-content">
            <div class="card-category">{{ premio.category }}</div>
            <h3 class="card-title">{{ premio.title }}</h3>
            <p class="card-description">{{ premio.shortDescription }}</p>
            
            <div class="card-meta">
              <div class="meta-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" 
                        fill="currentColor"/>
                  <path d="M12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill="currentColor"/>
                </svg>
                <span>{{ premio.issuer }}</span>
              </div>
            </div>
            
            <button class="card-cta">
              <span>Ver detalles</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </article>
      </div>

      <!-- Modal -->
      <Teleport to="body">
        <Transition name="modal">
          <div v-if="selectedPremio" class="modal-overlay" @click="closeModal">
            <div class="modal-container" @click.stop>
              <button class="modal-close" @click="closeModal" aria-label="Cerrar modal">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-badge-year">{{ selectedPremio.year }}</div>
                  <div class="modal-image-wrapper">
                    <img :src="selectedPremio.image" :alt="selectedPremio.title" />
                  </div>
                </div>
                
                <div class="modal-body">
                  <div class="modal-category">{{ selectedPremio.category }}</div>
                  <h3 class="modal-title">{{ selectedPremio.title }}</h3>
                  <p class="modal-description">{{ selectedPremio.fullDescription }}</p>
                  
                  <div class="modal-details">
                    <div class="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="currentColor"/>
                        <path d="M7 7H17V9H7V7ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z" fill="currentColor"/>
                      </svg>
                      <div>
                        <span class="detail-label">Otorgado por</span>
                        <span class="detail-value">{{ selectedPremio.issuer }}</span>
                      </div>
                    </div>
                    
                    <div class="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z" fill="currentColor"/>
                        <path d="M7 12H17V14H7V12Z" fill="currentColor"/>
                      </svg>
                      <div>
                        <span class="detail-label">Año de reconocimiento</span>
                        <span class="detail-value">{{ selectedPremio.year }}</span>
                      </div>
                    </div>
                    
                    <div class="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                              fill="currentColor"/>
                      </svg>
                      <div>
                        <span class="detail-label">Categoría</span>
                        <span class="detail-value">{{ selectedPremio.category }}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="modal-highlights">
                    <h4 class="highlights-title">Criterios de evaluación</h4>
                    <ul class="highlights-list">
                      <li v-for="highlight in selectedPremio.highlights" :key="highlight">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#4CAF50"/>
                        </svg>
                        <span>{{ highlight }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Premio {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  category: string
  issuer: string
  year: string
  highlights: string[]
}

const premios = ref<Premio[]>([
  {
    id: 'galardon',
    title: 'Galardón Estatal de Turismo',
    shortDescription: 'Reconocimiento por experiencias turísticas excepcionales y servicio de alta calidad.',
    fullDescription: 'Este prestigioso galardón reconoce nuestro compromiso excepcional con la calidad del servicio turístico, la innovación en experiencias eco-turísticas y la calidez humana que caracteriza cada interacción con nuestros visitantes. Representa el más alto honor otorgado por la Secretaría de Turismo del Estado de Yucatán.',
    image: 'https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/galardon_jaguar_4k_transparent.png',
    category: 'Excelencia en Turismo',
    issuer: 'Secretaría de Turismo del Estado',
    year: '2025',
    highlights: [
      'Calidad excepcional en el servicio al cliente',
      'Innovación en experiencias eco-turísticas sostenibles',
      'Compromiso con la preservación del medio ambiente',
      'Contribución al desarrollo turístico regional'
    ]
  },
  {
    id: 'distintivo',
    title: 'Distintivo Yucatán',
    shortDescription: 'Certificación oficial que avala nuestros estándares de calidad y hospitalidad.',
    fullDescription: 'El Distintivo Yucatán es una certificación de prestigio que garantiza el cumplimiento de los más altos estándares en calidad de servicio, sostenibilidad ambiental y hospitalidad auténtica. Este reconocimiento nos posiciona como líderes en turismo responsable en la región.',
    image: 'https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/DISTINTIVOYUC-LOGO_COLOR-SINFONDO.png',
    category: 'Calidad y Sostenibilidad',
    issuer: 'Gobierno del Estado de Yucatán',
    year: '2025',
    highlights: [
      'Cumplimiento de estándares de calidad certificados',
      'Prácticas sostenibles y responsables con el entorno',
      'Hospitalidad auténtica y cálida yucateca',
      'Compromiso con la comunidad local'
    ]
  }
])

const selectedPremio = ref<Premio | null>(null)
const hoveredCard = ref<string | null>(null)

const openModal = (premio: Premio) => {
  selectedPremio.value = premio
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedPremio.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Cormorant+Garamond:wght@400;600;700&family=Playfair+Display:wght@400;600;700;800&display=swap');

/* ==================== RESET ==================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ==================== SECCIÓN PRINCIPAL (EQUIPO) ==================== */
.equipo-section {
  background: linear-gradient(135deg, #4E342E 0%, #B89A7D 100%);
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

.equipo-imagenes {
  position: relative;
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  min-height: 500px;
}

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
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 8px solid rgba(245, 230, 211, 0.3);
}

.imagen-principal img:hover {
  transform: scale(1.05);
}

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
  transform: scale(1.05);
}

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
  margin-bottom: 4rem;
  font-weight: 600;
}

.btn-contacto {
  text-decoration: none;
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
  display: inline-block;
}

.btn-contacto:hover {
  background-color: #4E342E;
  color: #F5E6D3;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(78, 52, 46, 0.3);
}

/* ==================== SECCIÓN PREMIOS REDISEÑADA ==================== */

.premios-section {
  background: #F5E6D3;
  padding: 6rem 5%;
  position: relative;
  overflow: hidden;
}

.premios-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #4E342E 50%, transparent);
}

/* Hero de Premios */
.premios-hero {
  max-width: 900px;
  margin: 0 auto 5rem;
  text-align: center;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hero-badge svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 8px rgba(166, 138, 109, 0.3));
}

.premios-titulo-principal {
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #1B3B2F;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.premios-titulo-principal .highlight {
  color: #4E342E;
  position: relative;
  display: inline-block;
}

.premios-titulo-principal .highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #4E342E, transparent);
}

.premios-descripcion {
  font-family: "Merriweather", serif;
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: #4E342E;
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.stats-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}

.stat-number {
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #4E342E;
  line-height: 1;
}

.stat-label {
  font-family: "Merriweather", serif;
  font-size: clamp(0.85rem, 1.5vw, 0.95rem);
  color: #4E342E;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 2px;
  height: 50px;
  background: linear-gradient(180deg, transparent, #4E342E, transparent);
}

/* Cards Container */
.premios-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.premio-card {
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  animation: fadeInScale 0.6s ease-out backwards;
}

.premio-card:nth-child(1) { animation-delay: 0.1s; }
.premio-card:nth-child(2) { animation-delay: 0.2s; }

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.premio-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
  pointer-events: none;
  z-index: 1;
}

.premio-card:hover .card-shine {
  left: 100%;
}

.card-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #4E342E;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 0.9rem;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(166, 138, 109, 0.4);
}

.card-image-wrapper {
  padding: 3rem 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F5E6D3 0%, #ffffff 100%);
  min-height: 280px;
}

.card-image {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
}

.premio-card:hover .card-image {
  transform: scale(1.08) rotate(2deg);
}

.card-content {
  padding: 2rem;
  background: #ffffff;
}

.card-category {
  display: inline-block;
  font-family: "Merriweather", serif;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #4E342E;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.card-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  color: #1B3B2F;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.card-description {
  font-family: "Merriweather", serif;
  font-size: 0.95rem;
  color: #4E342E;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.card-meta {
  padding: 1rem 0;
  border-top: 1px solid rgba(166, 138, 109, 0.2);
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #4E342E;
  font-size: 0.9rem;
}

.meta-item svg {
  width: 18px;
  height: 18px;
  color: #4E342E;
}

.card-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.9rem;
  background: transparent;
  border: 2px solid #4E342E;
  border-radius: 12px;
  color: #4E342E;
  font-family: "Merriweather", serif;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-cta:hover {
  background: #4E342E;
  color: #ffffff;
  transform: translateX(4px);
}

.card-cta svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.card-cta:hover svg {
  transform: translateX(4px);
}

/* ==================== MODAL ==================== */

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(14, 29, 24, 0.624);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  overflow-y: auto;
}

.modal-container {
  position: relative;
  background: #ffffff;
  border-radius: 28px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(245, 230, 211, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.modal-close:hover {
  background: #4E342E;
  transform: rotate(90deg);
}

.modal-close svg {
  width: 24px;
  height: 24px;
  color: #4E342E;
}

.modal-close:hover svg {
  color: #ffffff;
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-header {
  position: relative;
  background: linear-gradient(135deg, #F5E6D3 0%, #ffffff 100%);
  padding: 4rem 3rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 28px 28px 0 0;
}

.modal-badge-year {
  position: absolute;
  top: 30px;
  left: 30px;
  background: #4E342E;
  color: #ffffff;
  padding: 0.6rem 1.3rem;
  border-radius: 50px;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(166, 138, 109, 0.4);
}

.modal-image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image-wrapper img {
  max-width: 280px;
  max-height: 280px;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15));
  animation: modalImageZoom 0.5s ease-out;
}

@keyframes modalImageZoom {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-body {
  padding: 3rem;
}

.modal-category {
  display: inline-block;
  font-family: "Merriweather", serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #4E342E;
  font-weight: 700;
  margin-bottom: 1rem;
}

.modal-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: #1B3B2F;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

.modal-description {
  font-family: "Merriweather", serif;
  font-size: 1.05rem;
  color: #4E342E;
  line-height: 1.9;
  margin-bottom: 2.5rem;
}

.modal-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding: 2rem;
  background: #F5E6D3;
  border-radius: 16px;
  border-left: 4px solid #4E342E;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.detail-item svg {
  width: 24px;
  height: 24px;
  color: #4E342E;
  flex-shrink: 0;
  margin-top: 2px;
}

.detail-item > div {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.detail-label {
  font-family: "Merriweather", serif;
  font-size: 0.85rem;
  color: #4E342E;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-family: "Merriweather", serif;
  font-size: 1rem;
  color: #1B3B2F;
  font-weight: 400;
}

.modal-highlights {
  padding-top: 2rem;
  border-top: 1px solid rgba(166, 138, 109, 0.3);
}

.highlights-title {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.5rem;
  color: #1B3B2F;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.highlights-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlights-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-family: "Merriweather", serif;
  font-size: 0.95rem;
  color: #4E342E;
  line-height: 1.6;
}

.highlights-list li svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9);
  opacity: 0;
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

  .premios-section {
    padding: 3rem 1rem;
  }

  .premios-hero {
    margin-bottom: 3rem;
  }

  .stats-row {
    gap: 1rem;
  }

  .stat-divider {
    height: 40px;
  }

  .premios-cards-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0;
  }

  .modal-header {
    padding: 3rem 1.5rem 2rem;
  }

  .modal-badge-year {
    top: 20px;
    left: 20px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .modal-body {
    padding: 2rem 1.5rem;
  }

  .modal-details {
    padding: 1.5rem;
  }

  .modal-image-wrapper img {
    max-width: 200px;
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

  .premios-section {
    padding: 4rem 1.5rem;
  }

  .premios-cards-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .modal-body {
    padding: 2.5rem 2rem;
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

  .premios-section {
    padding: 4.5rem 2rem;
  }

  .premios-cards-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
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

  .premios-section {
    padding: 5rem 2.5rem;
  }

  .premios-cards-container {
    grid-template-columns: 1fr;
    gap: 3rem;
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

  .premios-section {
    padding: 5.5rem 3rem;
  }

  .premios-cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
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

  .premios-section {
    padding: 6rem 4%;
  }

  .premios-cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
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

  .premios-cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 3.5rem;
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

  .premios-cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
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

  .premios-cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
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

  .premios-section {
    padding: 3rem 3%;
  }

  .premios-hero {
    margin-bottom: 3rem;
  }

  .modal-container {
    max-height: 95vh;
  }
}

/* Ajustes especiales para modal en móviles */
@media (max-width: 639px) {
  .modal-overlay {
    align-items: flex-start;
    padding: 0;
  }

  .modal-container {
    border-radius: 20px 20px 0 0;
    max-height: 95vh;
    margin-top: 5vh;
  }

  .modal-header {
    border-radius: 20px 20px 0 0;
  }
}
</style>