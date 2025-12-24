<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faChevronDown, faChevronUp, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faArrowLeft, faChevronDown, faChevronUp, faQuestionCircle);

onMounted(() => {
  window.scrollTo(0, 0);
});

const goHome = () => {
  window.location.hash = '';
};

// FAQ Data
const faqs = ref([
  {
    question: "¿Cuál es la mejor temporada para ver fenicópteros (flamencos)?",
    answer: "Los flamencos son aves residentes, por lo que se pueden observar todo el año. Sin embargo, la mayor concentración y actividad suele darse durante los meses de invierno y primavera (de noviembre a abril), cuando llegan colonias para alimentarse y reproducirse.",
    isOpen: true
  },
  {
    question: "¿Qué duración tienen los tours?",
    answer: "Nuestros tours estándar tienen una duración aproximada de 1 hora y 30 minutos a 2 horas. Esto incluye el paseo en lancha por la ría, avistamiento de aves, túnel de manglares y visita a los ojos de agua. Ofrecemos también experiencias personalizadas que pueden durar más tiempo.",
    isOpen: false
  },
  {
    question: "¿Es necesario reservar con anticipación?",
    answer: "Recomendamos encarecidamente reservar con al menos 24-48 horas de antelación, especialmente en temporada alta (vacaciones, fines de semana). Esto garantiza la disponibilidad de lanchas y guías certificados para tu grupo.",
    isOpen: false
  },
  {
    question: "¿Los tours son aptos para niños y adultos mayores?",
    answer: "¡Sí! Nuestras lanchas son seguras y cómodas. El recorrido es tranquilo y apto para toda la familia. Si requieres asistencia especial, por favor avísanos al momento de reservar para brindarte la mejor atención.",
    isOpen: false
  },
  {
    question: "¿Qué debo llevar al tour?",
    answer: "Te recomendamos llevar ropa fresca y cómoda, gorra o sombrero, lentes de sol y bloqueador solar biodegradable (para proteger el ecosistema). No olvides tu cámara y agua para mantenerte hidratado.",
    isOpen: false
  },
  {
    question: "¿Se permiten mascotas?",
    answer: "Por regulaciones de la Reserva de la Biosfera Ría Celestún y para proteger la fauna local, generalmente no se permite el ingreso de mascotas en las lanchas turísticas. Agradecemos tu comprensión.",
    isOpen: false
  },
  {
    question: "¿Aceptan tarjetas de crédito/débito?",
    answer: "Sí, aceptamos pagos con tarjeta y efectivo. Sin embargo, la señal en Celestún a veces puede ser inestable, por lo que recomendamos traer algo de efectivo por cualquier eventualidad.",
    isOpen: false
  },
  {
    question: "¿Cuentan con estacionamiento?",
    answer: "Sí, contamos con un área segura para estacionar tu vehículo mientras disfrutas del tour.",
    isOpen: false
  }
]);

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>

<template>
  <div class="faq-page">
    <!-- Floating Back Button -->
    <button @click="goHome" class="back-btn" aria-label="Volver al inicio">
      <FontAwesomeIcon icon="arrow-left" />
      <span>Volver al Inicio</span>
    </button>

    <!-- HERO SECTION -->
    <div class="faq-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <img 
          src="/src/assets/logo_sac_bej_celestun_transparente.png" 
          alt="Sac Bej Logo" 
          class="hero-logo"
        />
        <h1 class="hero-title">Preguntas Frecuentes</h1>
        <p class="hero-subtitle">Todo lo que necesitas saber para tu visita a Celestún</p>
      </div>
    </div>

    <!-- MAIN CONTAINER -->
    <div class="container faq-container">
      
      <div class="faq-intro">
        <p>
          En <strong>Sac-Bej Ecoturismo</strong> queremos que tu experiencia sea inolvidable y sin preocupaciones. 
          Aquí hemos recopilado las dudas más comunes de nuestros visitantes.
        </p>
      </div>

      <div class="faq-list">
        <div 
          v-for="(item, index) in faqs" 
          :key="index" 
          class="faq-item" 
          :class="{ 'is-open': item.isOpen }"
        >
          <button class="faq-question" @click="toggleFaq(index)">
            <div class="q-content">
              <span class="q-icon"><FontAwesomeIcon icon="question-circle" /></span>
              <h3>{{ item.question }}</h3>
            </div>
            <span class="chevron">
              <FontAwesomeIcon :icon="item.isOpen ? 'chevron-up' : 'chevron-down'" />
            </span>
          </button>
          
          <div class="faq-answer-wrapper" :style="{ maxHeight: item.isOpen ? '500px' : '0' }">
            <div class="faq-answer">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- STILL HAVE QUESTIONS -->
      <div class="contact-box">
        <h3>¿Tienes más preguntas?</h3>
        <p>No dudes en contactarnos directamente. Estamos aquí para ayudarte.</p>
        <a href="https://wa.me/529998270891" target="_blank" class="contact-btn">
          Enviar WhatsApp
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');

.faq-page {
  background-color: #FDFBF7;
  min-height: 100vh;
  padding-bottom: 5rem;
  font-family: 'Lato', sans-serif;
  color: #2D3748;
  animation: fadeIn 0.8s ease;
}

/* HERO */
.faq-hero {
  position: relative;
  height: 40vh;
  min-height: 350px;
  background-color: #1A202C;
  /* Fallback or reuse typical mangrove image */
  background-image: linear-gradient(rgba(26, 32, 44, 0.7), rgba(26, 32, 44, 0.85)), url('/src/assets/ria-celest-opt.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #F7FAFC;
  padding: 0 1.5rem;
}

.hero-logo {
  height: 120px;
  width: auto;
  margin-bottom: 1.5rem;
  filter: brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  opacity: 0.95;
  transition: transform 0.3s ease;
}

.hero-logo:hover {
  transform: scale(1.05);
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.hero-subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.9;
  letter-spacing: 0.5px;
}

/* CONTAINER */
.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.faq-intro {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4A5568;
}

/* FAQ LIST */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.04);
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  border: 1px solid #EDF2F7;
}

.faq-item:hover {
  box-shadow: 0 10px 15px rgba(0,0,0,0.08);
}

.faq-item.is-open {
  border-color: #A68A6D;
  box-shadow: 0 10px 20px rgba(166, 138, 109, 0.15);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s;
}

.faq-question:hover {
  background-color: #FAFAFA;
}

.q-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.q-icon {
  color: #A68A6D;
  font-size: 1.2rem;
}

.faq-question h3 {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #2D3748;
}

.chevron {
  color: #A68A6D;
  font-size: 0.9rem;
  transition: transform 0.3s ease;
}

.is-open .chevron {
  transform: rotate(180deg);
}

.faq-answer-wrapper {
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem 3.8rem; /* aligned with text title */
  color: #4A5568;
  line-height: 1.7;
}

/* CONTACT BOX */
.contact-box {
  margin-top: 4rem;
  text-align: center;
  padding: 3rem;
  background: rgba(166, 138, 109, 0.08);
  border-radius: 16px;
}

.contact-box h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #2D3748;
}

.contact-box p {
  color: #4A5568;
  margin-bottom: 1.5rem;
}

.contact-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #A68A6D;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(166, 138, 109, 0.3);
}

.contact-btn:hover {
  background: #8C7358;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(166, 138, 109, 0.5);
}

/* ANIMATION */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* BACK BUTTON */
.back-btn {
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid #E2E8F0;
  border-radius: 50px;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: #2D3748;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #A68A6D;
  color: #fff;
  transform: translateX(-5px);
  box-shadow: 0 6px 16px rgba(166, 138, 109, 0.4);
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.2rem; }
  .faq-container { padding: 0 1.5rem; }
  .faq-answer { padding: 0 1rem 1.5rem 1rem; }
  
  .back-btn {
    top: 1rem;
    left: 1rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
