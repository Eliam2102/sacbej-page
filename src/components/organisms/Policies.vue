<script setup lang="ts">
import { onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faShieldAlt, faFileContract, faGavel, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faEnvelope, faShieldAlt, faFileContract, faGavel, faArrowLeft);

onMounted(() => {
  window.scrollTo(0, 0);
});

const goHome = () => {
  window.location.hash = '';
  // Force scroll top if needed, though App.vue should handle view switch
};
</script>

<template>
  <div class="policies-page">
    <!-- Floating Back Button -->
    <button @click="goHome" class="back-btn" aria-label="Volver al inicio">
      <FontAwesomeIcon icon="arrow-left" />
      <span>Volver al Inicio</span>
    </button>

    <!-- HERO SECTION -->
    <div class="policies-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <img 
          src="/src/assets/logo_sac_bej_celestun_transparente.png" 
          alt="Sac Bej Logo" 
          class="hero-logo"
        />
        <h1 class="hero-title">Marco Legal y Políticas</h1>
        <p class="hero-subtitle">Transparencia y claridad para tu experiencia</p>
      </div>
    </div>

    <div class="container policies-container">
      
      <!-- CANCELACIÓN -->
      <section id="cancelacion" class="policy-section">
        <div class="section-header">
          <div class="icon-wrapper">
             <FontAwesomeIcon icon="file-contract" />
          </div>
          <h2>Políticas de Reserva y Cancelación</h2>
        </div>
        
        <div class="policy-block">
          <h3>1. Reservas y Garantía</h3>
          <p>Para garantizar su reserva, es indispensable cubrir un <strong>anticipo del 50%</strong> del costo total del tour. Las reservaciones quedan confirmadas únicamente tras la recepción de dicho anticipo y el envío del comprobante correspondiente por parte del cliente.</p>
        </div>

        <div class="policy-block">
          <h3>2. Logística y Puntualidad</h3>
          <p><strong>Ecoturismo Sac Bej</strong> proporciona servicio de recogida en hoteles dentro de la zona urbana de Celestún sin costo adicional.</p>
          <p class="note-text">Nota: Para alojamientos fuera del perímetro urbano, pueden aplicar restricciones y cargos adicionales según la distancia.</p>
          <p>Es responsabilidad del cliente estar listo en el punto de encuentro a la hora acordada. Se otorga una <strong>tolerancia máxima de 10 minutos</strong>, tras lo cual se considerará "No Show".</p>
        </div>

        <div class="policy-block">
          <h3>3. Esquema de Cancelaciones</h3>
          <div class="cancellation-table">
            <div class="c-row">
              <div class="c-col time">48 horas o más de anticipación</div>
              <div class="c-col refund">Reembolso del 100% del anticipo</div>
            </div>
            <div class="c-row">
              <div class="c-col time">Entre 24 y 48 horas antes</div>
              <div class="c-col refund">Reembolso del 50% del anticipo</div>
            </div>
            <div class="c-row">
              <div class="c-col time">Menos de 24 horas / No Show</div>
              <div class="c-col refund">Sin reembolso</div>
            </div>
          </div>
        </div>

        <div class="policy-block">
          <h3>4. Cancelación por Operatividad</h3>
          <p>Si <strong>Ecoturismo Sac Bej</strong> cancela el tour debido a condiciones climáticas adversas, seguridad o causas operativas, el cliente podrá optar por:</p>
          <ul class="clean-list">
            <li>Reprogramar la actividad sin costo adicional.</li>
            <li>Recibir el reembolso íntegro (100%) del anticipo en un lapso de 5 a 10 días hábiles.</li>
          </ul>
        </div>
      </section>

      <div class="divider"></div>

      <!-- TÉRMINOS Y CONDICIONES -->
      <section id="terms" class="policy-section">
        <div class="section-header">
          <div class="icon-wrapper">
            <FontAwesomeIcon icon="gavel" />
          </div>
          <h2>Términos y Condiciones</h2>
        </div>

        <div class="policy-block">
          <h3>Responsabilidad</h3>
          <p>Ecoturismo Sac Bej actúa como operador de tours ecoturísticos. No nos hacemos responsables por pérdidas de objetos personales durante el recorrido, ni por incidentes derivados de no seguir las instrucciones de seguridad proporcionadas por nuestros guías.</p>
        </div>

        <div class="policy-block">
          <h3>Conducta y Seguridad</h3>
          <p>Nos reservamos el derecho de admisión o de suspender el servicio a cualquier persona que muestre comportamiento inadecuado, estado de ebriedad o que ponga en riesgo la seguridad del grupo o la integridad del ecosistema.</p>
        </div>

        <div class="policy-block">
          <h3>Cuidado del Ecosistema</h3>
          <p>Al visitar áreas protegidas de la Reserva de la Biosfera Ría Celestún, todos los visitantes deben adherirse estrictamente a las normas de conservación: no tirar basura, no extraer flora o fauna, y respetar la vida silvestre.</p>
        </div>
      </section>

      <div class="divider"></div>

      <!-- PRIVACIDAD -->
      <section id="privacidad" class="policy-section">
        <div class="section-header">
          <div class="icon-wrapper">
             <FontAwesomeIcon icon="shield-alt" />
          </div>
          <h2>Política de Privacidad</h2>
        </div>

        <div class="policy-block">
          <p>En <strong>Ecoturismo Sac Bej</strong>, valoramos su privacidad. Esta política detalla el manejo de su información personal.</p>
          
          <h4 class="sub-title">Recopilación y Uso de Datos</h4>
          <p>Solicitamos únicamente la información necesaria (nombre, contacto, hospedaje) para la gestión operativa de su reserva. Sus datos son utilizados exclusivamente para fines de servicio y comunicación interna.</p>

          <h4 class="sub-title">Confidencialidad</h4>
          <p>No compartimos, vendemos ni alquilamos su información personal a terceros, salvo requerimiento legal expreso.</p>

          <div class="contact-footer">
            <p>Para cualquier consulta legal o aclaración, contáctenos en: <span class="email">ecoturismo.sac.bej@gmail.com</span></p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Lato:wght@300;400;700&display=swap');

.policies-page {
  background-color: #FDFBF7; /* Crema muy suave */
  min-height: 100vh;
  padding-bottom: 5rem;
  font-family: 'Lato', sans-serif;
  color: #2D3748;
  animation: fadeIn 0.8s ease;
}

/* HERO */
.policies-hero {
  position: relative;
  height: 40vh;
  min-height: 350px;
  background-color: #1A202C;
  background-image: linear-gradient(rgba(26, 32, 44, 0.8), rgba(26, 32, 44, 0.9)), url('/src/assets/hero-bg-mangrove.jpg');
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
  height: 140px;
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
  opacity: 0.8;
  letter-spacing: 0.5px;
}

/* CONTAINER */
.policies-container {
  max-width: 850px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* SECTIONS */
.policy-section {
  margin-bottom: 3rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #E2E8F0;
}

.icon-wrapper {
  color: #A68A6D;
  font-size: 1.8rem;
}

.section-header h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #1A202C;
  margin: 0;
}

/* BLOCKS */
.policy-block {
  margin-bottom: 2rem;
}

.policy-block h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  color: #2D3748;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.policy-block p {
  line-height: 1.7;
  color: #4A5568;
  margin-bottom: 0.8rem;
}

.note-text {
  font-style: italic;
  color: #718096;
  font-size: 0.95rem;
  padding-left: 1rem;
  border-left: 3px solid #CBD5E0;
}

.clean-list {
  list-style: square;
  padding-left: 1.5rem;
  color: #4A5568;
  line-height: 1.7;
}

.sub-title {
  font-weight: 700;
  color: #2D3748;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

/* TABLE STYLE FOR CANCELLATION */
.cancellation-table {
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1rem;
}

.c-row {
  display: flex;
  border-bottom: 1px solid #E2E8F0;
}

.c-row:last-child {
  border-bottom: none;
}

.c-col {
  padding: 1rem 1.5rem;
  font-size: 0.95rem;
}

.c-col.time {
  background-color: #F7FAFC;
  width: 40%;
  font-weight: 600;
  color: #4A5568;
  border-right: 1px solid #E2E8F0;
}

.c-col.refund {
  background-color: #fff;
  width: 60%;
  color: #2D3748;
}

.divider {
  height: 1px;
  background-color: #E2E8F0;
  margin: 4rem 0;
}

.contact-footer {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #718096;
}

.email {
  color: #A68A6D;
  font-weight: 600;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero-title { font-size: 2.2rem; }
  .section-header h2 { font-size: 1.6rem; }
  .policies-container { padding: 0 1.5rem; }
  
  .c-row { flex-direction: column; }
  .c-col.time { width: 100%; border-right: none; border-bottom: 1px solid #E2E8F0; }
  .c-col.refund { width: 100%; padding-top: 0.5rem; }
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
  .back-btn {
    top: 1rem;
    left: 1rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}
</style>
