<template>
  <section class="premios-section">
    <!-- Hero de Premios -->
    <div class="premios-hero">
      <div class="hero-badge">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill="#4E342E" stroke="#4E342E" stroke-width="1.5"/>
        </svg>
      </div>
      <h2 class="premios-titulo-principal" v-html="AwardsContent.title"></h2>
      <p class="premios-descripcion">{{ AwardsContent.description }}</p>
      <div class="stats-row">
        <template v-for="(stat, index) in AwardsContent.stats" :key="index">
          <div class="stat-item">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
          <div v-if="index < AwardsContent.stats.length - 1" class="stat-divider"></div>
        </template>
      </div>
    </div>

    <!-- Cards de Premios -->
    <div class="premios-cards-container">
      <article
        v-for="premio in AwardsData"
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
          <img 
            :src="premio.image" 
            :alt="premio.title" 
            class="card-image" 
            :class="{ 'img-galardon': premio.id === 'galardon' }"
          />
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AwardsContent, AwardsData } from '../../constants/content'

// Definimos la interfaz localmente o podríamos exportarla de un archivo de tipos
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

const selectedPremio = ref<Premio | null>(null)
const hoveredCard = ref<string | null>(null)

const openModal = (premio: any) => {
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

/* ==================== SECCIÓN PREMIOS ==================== */

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

.premios-titulo-principal :deep(.highlight) {
  color: #4E342E;
  position: relative;
  display: inline-block;
}

.premios-titulo-principal :deep(.highlight::after) {
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
  min-height: 320px;
}

.card-image {
  width: 100%;
  max-width: 200px;
  height: 200px;
  object-fit: contain;
  transition: transform 0.4s ease;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
}

.img-galardon {
  max-width: 340px; /* Significantly larger */
  height: auto !important; /* Override fixed height to let width drive size */
  max-height: 280px;
  transform: scale(1.25); /* Zoom it in further */
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

  .card-image-wrapper {
    min-height: 280px;
  }

  .card-image {
    max-width: 240px;
    height: 240px;
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
  .premios-section {
    padding: 4rem 1.5rem;
  }

  .premios-cards-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .card-image-wrapper {
    min-height: 300px;
  }

  .card-image {
    max-width: 260px;
    height: 260px;
  }

  .modal-body {
    padding: 2.5rem 2rem;
  }
}

/* Móvil grande / Tablet pequeña (480px - 639px) */
@media (min-width: 480px) and (max-width: 639px) {
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
  .premios-cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 3.5rem;
  }
}

/* Desktop grande (1400px - 1599px) */
@media (min-width: 1400px) and (max-width: 1599px) {
  .premios-cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
}

/* Desktop extra grande (>= 1600px) */
@media (min-width: 1600px) {
  .premios-cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
}

/* Landscape móviles */
@media (max-height: 500px) and (orientation: landscape) {
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
</style>
