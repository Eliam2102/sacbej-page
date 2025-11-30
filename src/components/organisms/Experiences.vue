<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import { Icon } from "@iconify/vue";

interface Experience {
  id: number;
  title: string;
  pricePerPerson: number;
  img: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  duration: string;
  included: string[];
  category?: string;
  difficulty?: string;
}

/* ================== DATOS ================== */
const experiences: Experience[] = [
  {
    id: 1,
    title: "Sac Bej – Camino Blanco",
    pricePerPerson: 1250,
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/sacbej.JPG",
    badge: "popular",
    category: "Aventura Terrestre",
    difficulty: "Fácil",
    shortDescription:
      "Recorre la zona sur de la Reserva Ría Celestún: salinas rosas, bosque petrificado y flamencos.",
    fullDescription:
      "Disfruta de un recorrido único en tuc tuc por la parte sur de la Reserva de la Biosfera Ría Celestún. Explora salinas rosas, bosque petrificado y ex haciendas, mientras descubres la historia natural de este lugar mágico.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/sacbej.JPG",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/sacbej-1.jpeg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/sacbej2.jpeg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/sacbej3.jpg",
    ],
    duration: "1.5 a 2 horas",
    included: [
      "Transporte en tuc tuc",
      "Guía certificado bilingüe",
      "Servicio de pick-up",
    ],
  },
  {
    id: 2,
    title: "Surf Casting – Pesca en el Golfo",
    pricePerPerson: 3500,
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/surf-cast3.jpeg",
    category: "Pesca Deportiva",
    difficulty: "Moderado",
    shortDescription:
      "Pesca deportiva en el Golfo: corvina, robalo, jurel, pargo y más.",
    fullDescription:
      "Vive la pesca deportiva en las aguas del Golfo de México. Disfruta el amanecer, pesca especies locales y saborea un ceviche fresco estilo ribereño.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/surf-cast3.jpeg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/surf-cast1.jpeg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/surf-cast2.jpeg",
    ],
    duration: "5 horas",
    included: ["Embarcación privada", "Guía y equipo de pesca", "Ceviche fresco"],
  },
  {
    id: 3,
    title: "Kayak en el Corazón del Manglar",
    pricePerPerson: 1550,
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/kayak-manglar1.png",
    badge: "popular",
    category: "Aventura Acuática",
    difficulty: "Fácil",
    shortDescription:
      "Remo entre manglares al amanecer o anochecer, rodeado de aves y luciérnagas.",
    fullDescription:
      "Navega entre manglares hasta el corazón del humedal. Observa aves y flamencos al amanecer o el espectáculo de luciérnagas al anochecer.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/kayak2.png",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/kayak3.png",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/manglares4.jpg",
    ],
    duration: "2 horas",
    included: [
      "Kayak doble",
      "Guía bilingüe",
      "Lámparas nocturnas",
      "Transporte tuc tuc",
    ],
  },
  {
    id: 4,
    title: "Birdwatching – Observación de Aves",
    pricePerPerson: 1450,
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/aves1.jpg",
    category: "Naturaleza",
    difficulty: "Fácil",
    shortDescription:
      "Más de 200 especies en la Ría Celestún con guía experto y equipo óptico.",
    fullDescription:
      "Descubre aves endémicas como el colibrí tijereta mexicano. Ideal para amantes de la fotografía y la naturaleza.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/aves1.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/aves2.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/aves3.JPG",
    ],
    duration: "4.5 horas",
    included: ["Guía NOM 09-TUR-2002", "Tuc tuc", "Equipo óptico básico"],
  },
  {
    id: 5,
    title: "Ría Celestún – Flamingo Tour",
    pricePerPerson: 4100,
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/flamingo-celest3.jpeg",
    badge: "oferta",
    category: "Tour Acuático",
    difficulty: "Fácil",
    shortDescription:
      "Tour en lancha: flamencos, túnel de manglar, isla de aves y ojo de agua.",
    fullDescription:
      "Aventura mágica navegando por manglares y observando flamencos rosados. Incluye baño en ojo de agua.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/flamingo-celest3.jpeg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/flamingo-celest2.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/flamingo-celest.jpg",
    ],
    duration: "1 hora 20 min",
    included: ["Guía bilingüe", "Lancha privada", "Acceso al parque"],
  },
  {
    id: 6,
    title: "Moonlight Safari – Tour Nocturno",
    pricePerPerson: 5600,
    img: "https://i.postimg.cc/1RwvHFKG/Ceremonia-y-Tour-Nocturno-02.jpg",
    category: "Experiencia Nocturna",
    difficulty: "Fácil",
    shortDescription:
      "Avistamiento de cocodrilos y luciérnagas bajo la luz de la luna.",
    fullDescription:
      "Tour nocturno en lancha: cocodrilos, aves dormidas y el brillo natural de las luciérnagas. Una experiencia mágica y segura.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/moonlight.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/Ceremonia%20y%20Tour%20Nocturno-11.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/moonlight2.jpg",
    ],
    duration: "2 horas",
    included: ["Guía certificado", "Equipo de iluminación", "Lancha privada"],
  },
  {
    id: 7,
    title: "Ceremonia XUKULEM – Conexión Espiritual",
    pricePerPerson: 2400,
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/xukulem3.jpg",
    category: "Experiencia Cultural",
    difficulty: "Fácil",
    shortDescription:
      "Ceremonia maya guiada frente al mar para agradecer y renovar tu energía.",
    fullDescription:
      "Una experiencia espiritual guiada por fuego, copal y sabiduría maya. Limpia energética y ofrendas al mar.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/xukulem1.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/ceremonia2.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/ceremonia2.jpg",
    ],
    duration: "40 minutos",
    included: ["Ceremonia frente al mar", "Ofrendas", "Guía espiritual"],
  },
  {
    id: 8,
    title: "Biking Tour – Pueblo Fantasma",
    pricePerPerson: 350,
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/biking-tour1.jpg",
    category: "Aventura Nocturna",
    difficulty: "Moderado",
    shortDescription:
      "Recorre en bicicleta la selva nocturna hacia un pueblo fantasma lleno de leyendas.",
    fullDescription:
      "Pedalea bajo la luna y descubre las historias ocultas del bosque y el antiguo pueblo.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/bikingtour2.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/bikingtour3.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/nocturno-1.jpeg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/nocturno%202.jpeg",
    ],
    duration: "2 a 2.5 horas",
    included: ["Guía federal", "Bicicleta", "Equipo nocturno"],
  },
];

/* ================== UTILIDADES ================== */
const formatMXN = (n: number) =>
  n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

/* ============= Estado catálogo + paginación ============= */
const currentPage = ref(1);
const perPage = 8;
const totalPages = computed(() => Math.ceil(experiences.length / perPage));
const paginatedExperiences = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return experiences.slice(start, start + perPage);
});
function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

/* ================== Modal Mejorado + Wizard de Reserva ================== */
const selectedExperience = ref<Experience | null>(null);
const currentImageIndex = ref(0);
const imageLoaded = ref(false);
const modalRef = ref<HTMLElement | null>(null);

// Estados del wizard de reserva (3 pasos)
const reservationStep = ref(0); // 0 = cerrado, 1 = paso 1, 2 = paso 2, 3 = paso 3
const showGalleryFullscreen = ref(false);

// Secciones colapsables
const showIncluded = ref(true);
const showDetails = ref(false);

/* abrir/cerrar modal */
async function openModal(exp: Experience) {
  selectedExperience.value = exp;
  currentImageIndex.value = 0;
  imageLoaded.value = false;
  reservationStep.value = 0;
  showIncluded.value = true;
  showDetails.value = false;
  resetReserva();

  await nextTick();
  modalRef.value?.focus();
}

function closeModal() {
  selectedExperience.value = null;
  reservationStep.value = 0;
  showGalleryFullscreen.value = false;
}

function onMainImageLoad() {
  imageLoaded.value = true;
}

function nextImage() {
  if (!selectedExperience.value) return;
  imageLoaded.value = false;
  currentImageIndex.value =
    (currentImageIndex.value + 1) % selectedExperience.value.images.length;
}

function prevImage() {
  if (!selectedExperience.value) return;
  imageLoaded.value = false;
  currentImageIndex.value =
    (currentImageIndex.value - 1 + selectedExperience.value.images.length) %
    selectedExperience.value.images.length;
}

function goToImage(i: number) {
  if (!selectedExperience.value) return;
  imageLoaded.value = false;
  currentImageIndex.value = i;
}

/* ============= Bloqueo de scroll cuando modal está abierto ============= */
const originalBodyOverflow = ref<string>("");
watch(selectedExperience, (val) => {
  if (typeof document === "undefined") return;
  if (val) {
    originalBodyOverflow.value = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = originalBodyOverflow.value || "";
  }
});

/* ============= Accesibilidad y atajos (Esc, ←, →) ============= */
function onKeydown(e: KeyboardEvent) {
  if (!selectedExperience.value) return;
  if (e.key === "Escape") {
    if (showGalleryFullscreen.value) {
      showGalleryFullscreen.value = false;
    } else {
      closeModal();
    }
  }
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
}
onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  if (typeof document !== "undefined") {
    document.body.style.overflow = originalBodyOverflow.value || "";
  }
});

/* ================== WIZARD DE RESERVA (3 PASOS) ================== */
// Paso 1: Fecha y personas
const reservaFecha = ref("");
const reservaPersonas = ref(1);

// Paso 2: Información personal
const reservaNombre = ref("");
const reservaTelefono = ref("");
const reservaEmail = ref("");

// Paso 3: Confirmación y nota
const reservaNota = ref("");

const WHATSAPP_NUMBER = "5219998270891";

const totalReserva = computed(() =>
  selectedExperience.value
    ? selectedExperience.value.pricePerPerson * reservaPersonas.value
    : 0
);

const formErrors = ref<{ [k: string]: string }>({});

function resetReserva() {
  reservaNombre.value = "";
  reservaTelefono.value = "";
  reservaEmail.value = "";
  reservaFecha.value = "";
  reservaPersonas.value = 1;
  reservaNota.value = "";
  formErrors.value = {};
}

function validateStep1() {
  const errs: { [k: string]: string } = {};
  if (!reservaFecha.value) errs.fecha = "Selecciona una fecha.";
  if (reservaPersonas.value < 1) errs.personas = "Mínimo 1 persona.";
  formErrors.value = errs;
  return Object.keys(errs).length === 0;
}

function validateStep2() {
  const errs: { [k: string]: string } = {};
  if (!reservaNombre.value.trim()) errs.nombre = "Escribe tu nombre.";
  if (!reservaTelefono.value.trim()) errs.telefono = "Escribe tu WhatsApp.";
  formErrors.value = errs;
  return Object.keys(errs).length === 0;
}

function nextStep() {
  if (reservationStep.value === 1 && !validateStep1()) return;
  if (reservationStep.value === 2 && !validateStep2()) return;
  if (reservationStep.value < 3) reservationStep.value++;
}

function prevStep() {
  if (reservationStep.value > 1) reservationStep.value--;
}

function startReservation() {
  reservationStep.value = 1;
  formErrors.value = {};
}

function enviarReservaWhatsApp() {
  if (!selectedExperience.value) return;
  if (!validateStep2()) return;

  const exp = selectedExperience.value;

  const msg = `
¡Hola! Me gustaría reservar una experiencia 🌿

*Experiencia:* ${exp.title}
*Fecha:* ${reservaFecha.value}
*Personas:* ${reservaPersonas.value}
*Precio por persona:* ${formatMXN(exp.pricePerPerson)}
*Total estimado:* ${formatMXN(totalReserva.value)}

*Mi información:*
- Nombre: ${reservaNombre.value}
- Teléfono: ${reservaTelefono.value}
${reservaEmail.value ? `- Email: ${reservaEmail.value}` : ""}
${reservaNota.value ? `- Nota: ${reservaNota.value}` : ""}

¿Está disponible esta fecha?
  `.trim();

  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function onCardThumbLoad(e: Event) {
  const img = e.target as HTMLImageElement | null;
  if (img) img.classList.add("is-loaded");
}
</script>

<template>
  <section class="catalog">
    <header class="hero">
      <div class="hero-content">
        <span class="hero-badge">Experiencias Únicas</span>
        <h2 class="hero-title">Descubre la Magia de Celestún</h2>
        <p class="hero-subtitle">
          Aventuras auténticas diseñadas para conectarte con la naturaleza, cultura y esencia de Yucatán
        </p>
      </div>
    </header>

    <!-- GRID -->
    <div class="experiences-grid" role="list">
      <article
        v-for="exp in paginatedExperiences"
        :key="exp.id"
        class="experience-card"
        role="listitem"
      >
        <button
          class="card-inner"
          @click="openModal(exp)"
          :aria-label="`Ver detalles de ${exp.title}`"
        >
          <!-- Imagen -->
          <div class="card-image-wrapper">
            <div class="image-skeleton"></div>
            <img
              :src="exp.img"
              class="card-image"
              loading="lazy"
              decoding="async"
              :alt="exp.title"
              @load="onCardThumbLoad"
            />
            
            <!-- Badges -->
            <div class="card-badges">
              <span v-if="exp.badge" class="card-badge" :data-type="exp.badge">
                {{ exp.badge }}
              </span>
              <span v-if="exp.category" class="card-category">
                {{ exp.category }}
              </span>
            </div>

            <!-- Quick info overlay -->
            <div class="quick-info">
              <div class="info-item">
                <Icon icon="mdi:clock-outline" width="16" />
                <span>{{ exp.duration }}</span>
              </div>
              <div class="info-item" v-if="exp.difficulty">
                <Icon icon="mdi:chart-line" width="16" />
                <span>{{ exp.difficulty }}</span>
              </div>
            </div>
          </div>

          <!-- Contenido -->
          <div class="card-body">
            <h3 class="card-title">{{ exp.title }}</h3>
            <p class="card-description">{{ exp.shortDescription }}</p>

            <div class="card-footer-content">
              <div class="price-tag">
                <span class="price-amount">
                  {{ exp.pricePerPerson > 0 ? formatMXN(exp.pricePerPerson) : "Personalizado" }}
                </span>
                <span class="price-label" v-if="exp.pricePerPerson > 0">por persona</span>
              </div>

              <div class="cta-link">
                <span>Ver experiencia</span>
                <Icon icon="mdi:arrow-right" width="20" />
              </div>
            </div>
          </div>
        </button>
      </article>
    </div>

    <!-- Paginación -->
    <nav class="pagination" v-if="totalPages > 1" aria-label="Paginación">
      <button class="pagination-btn" @click="prevPage" :disabled="currentPage === 1">
        <Icon icon="mdi:chevron-left" width="20" />
        Anterior
      </button>
      <div class="pagination-info">
        <span class="current-page">{{ currentPage }}</span>
        <span class="separator">/</span>
        <span class="total-pages">{{ totalPages }}</span>
      </div>
      <button class="pagination-btn" @click="nextPage" :disabled="currentPage === totalPages">
        Siguiente
        <Icon icon="mdi:chevron-right" width="20" />
      </button>
    </nav>

    <!-- MODAL REDISEÑADO -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="selectedExperience" class="modal-backdrop" @click.self="closeModal">
          <Transition name="modal-slide">
            <div
              v-if="selectedExperience"
              class="modal-container"
              role="dialog"
              aria-modal="true"
              :aria-label="selectedExperience.title"
              ref="modalRef"
              tabindex="-1"
            >
              <!-- Close Button -->
              <button class="modal-close" @click="closeModal" aria-label="Cerrar">
                <Icon icon="mdi:close" width="24" />
              </button>

              <!-- Hero Section with Gallery -->
              <div class="modal-hero">
                <div class="hero-gallery">
                  <div class="main-gallery-image">
                    <transition name="image-fade" mode="out-in">
                      <img
                        v-if="selectedExperience.images[currentImageIndex]"
                        :key="currentImageIndex"
                        :src="selectedExperience.images[currentImageIndex]"
                        class="gallery-img"
                        :class="{ 'is-loaded': imageLoaded }"
                        :alt="selectedExperience.title"
                        loading="lazy"
                        @load="onMainImageLoad"
                      />
                    </transition>

                    <!-- Navigation -->
                    <button class="gallery-nav prev" @click.stop="prevImage" aria-label="Anterior">
                      <Icon icon="mdi:chevron-left" width="28" />
                    </button>
                    <button class="gallery-nav next" @click.stop="nextImage" aria-label="Siguiente">
                      <Icon icon="mdi:chevron-right" width="28" />
                    </button>

                    <!-- Counter -->
                    <div class="gallery-counter">
                      {{ currentImageIndex + 1 }} / {{ selectedExperience.images.length }}
                    </div>

                    <!-- Fullscreen button -->
                    <button class="fullscreen-btn" @click="showGalleryFullscreen = true">
                      <Icon icon="mdi:fullscreen" width="20" />
                    </button>
                  </div>

                  <!-- Thumbnails -->
                  <div class="gallery-thumbnails">
                    <button
                      v-for="(img, i) in selectedExperience.images"
                      :key="i"
                      class="thumbnail-btn"
                      :class="{ active: i === currentImageIndex }"
                      @click="goToImage(i)"
                    >
                      <img :src="img" :alt="`Imagen ${i + 1}`" loading="lazy" />
                    </button>
                  </div>
                </div>

                <!-- Info Overlay on Hero -->
                <div class="hero-info-overlay">
                  <div class="hero-tags">
                    <span class="hero-badge" v-if="selectedExperience.badge">
                      {{ selectedExperience.badge }}
                    </span>
                  </div>
                  <h1 class="hero-experience-title">{{ selectedExperience.title }}</h1>
                </div>
              </div>

              <!-- Content Section -->
              <div class="modal-content">
                <!-- Quick Stats -->
                <div class="quick-stats">
                  <div class="stat-card">
                    <Icon icon="mdi:clock-outline" width="24" />
                    <div class="stat-info">
                      <span class="stat-label">Duración</span>
                      <span class="stat-value">{{ selectedExperience.duration }}</span>
                    </div>
                  </div>
                  <div class="stat-card">
                    <Icon icon="mdi:account-group-outline" width="24" />
                    <div class="stat-info">
                      <span class="stat-label">Grupo</span>
                      <span class="stat-value">Privado</span>
                    </div>
                  </div>
                  <div class="stat-card" v-if="selectedExperience.difficulty">
                    <Icon icon="mdi:chart-line" width="24" />
                    <div class="stat-info">
                      <span class="stat-label">Dificultad</span>
                      <span class="stat-value">{{ selectedExperience.difficulty }}</span>
                    </div>
                  </div>
                </div>

                <!-- Description -->
                <div class="content-section">
                  <h2 class="section-title">Sobre esta experiencia</h2>
                  <p class="experience-description">{{ selectedExperience.fullDescription }}</p>
                </div>

                <!-- Included - Collapsible -->
                <div class="content-section collapsible-section">
                  <button
                    class="section-header"
                    @click="showIncluded = !showIncluded"
                    :aria-expanded="showIncluded"
                  >
                    <div class="header-left">
                      <Icon icon="mdi:check-circle-outline" width="24" />
                      <h3 class="section-title-inline">Qué incluye</h3>
                    </div>
                    <Icon
                      :icon="showIncluded ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                      width="24"
                      class="chevron-icon"
                    />
                  </button>
                  <Transition name="expand">
                    <ul v-if="showIncluded" class="included-list">
                      <li v-for="item in selectedExperience.included" :key="item">
                        <Icon icon="mdi:check" width="20" class="check-icon" />
                        <span>{{ item }}</span>
                      </li>
                    </ul>
                  </Transition>
                </div>

                <!-- Price Section -->
                <div class="price-section">
                  <div class="price-card">
                    <div class="price-header">
                      <span class="price-label">Precio por persona</span>
                      <div class="price-main">
                        {{
                          selectedExperience.pricePerPerson > 0
                            ? formatMXN(selectedExperience.pricePerPerson)
                            : "Personalizado"
                        }}
                      </div>
                    </div>
                    
                    <!-- CTA Principal -->
                    <button
                      v-if="reservationStep === 0"
                      class="primary-cta-btn"
                      @click="startReservation"
                    >
                      <Icon icon="mdi:calendar-check" width="22" />
                      <span>Reservar ahora</span>
                    </button>
                  </div>
                </div>

                <!-- WIZARD DE RESERVA -->
                <Transition name="wizard-reveal">
                  <div v-if="reservationStep > 0" class="reservation-wizard">
                    <!-- Progress Indicator -->
                    <div class="wizard-progress">
                      <div
                        class="progress-step"
                        :class="{ active: reservationStep >= 1, completed: reservationStep > 1 }"
                      >
                        <div class="step-circle">
                          <Icon v-if="reservationStep > 1" icon="mdi:check" width="16" />
                          <span v-else>1</span>
                        </div>
                        <span class="step-label">Fecha</span>
                      </div>
                      <div class="progress-line" :class="{ filled: reservationStep >= 2 }"></div>
                      <div
                        class="progress-step"
                        :class="{ active: reservationStep >= 2, completed: reservationStep > 2 }"
                      >
                        <div class="step-circle">
                          <Icon v-if="reservationStep > 2" icon="mdi:check" width="16" />
                          <span v-else>2</span>
                        </div>
                        <span class="step-label">Datos</span>
                      </div>
                      <div class="progress-line" :class="{ filled: reservationStep >= 3 }"></div>
                      <div
                        class="progress-step"
                        :class="{ active: reservationStep >= 3 }"
                      >
                        <div class="step-circle">
                          <span>3</span>
                        </div>
                        <span class="step-label">Confirmar</span>
                      </div>
                    </div>

                    <!-- Step 1: Fecha y Personas -->
                    <Transition name="step-fade" mode="out-in">
                      <div v-if="reservationStep === 1" class="wizard-step" key="step1">
                        <h3 class="wizard-step-title">¿Cuándo quieres vivir esta experiencia?</h3>
                        
                        <div class="form-grid">
                          <div class="form-field full-width">
                            <label>Fecha de tu experiencia</label>
                            <input
                              v-model="reservaFecha"
                              type="date"
                              class="form-input"
                              :class="{ error: formErrors.fecha }"
                              :min="new Date().toISOString().split('T')[0]"
                            />
                            <span v-if="formErrors.fecha" class="error-message">
                              {{ formErrors.fecha }}
                            </span>
                          </div>

                          <div class="form-field full-width">
                            <label>Número de personas</label>
                            <div class="number-stepper">
                              <button
                                type="button"
                                class="stepper-btn"
                                @click="reservaPersonas = Math.max(1, reservaPersonas - 1)"
                              >
                                <Icon icon="mdi:minus" width="20" />
                              </button>
                              <input
                                v-model="reservaPersonas"
                                type="number"
                                min="1"
                                class="stepper-input"
                                readonly
                              />
                              <button
                                type="button"
                                class="stepper-btn"
                                @click="reservaPersonas++"
                              >
                                <Icon icon="mdi:plus" width="20" />
                              </button>
                            </div>
                            <span v-if="formErrors.personas" class="error-message">
                              {{ formErrors.personas }}
                            </span>
                          </div>

                          <!-- Resumen parcial -->
                          <div class="step-summary">
                            <div class="summary-row">
                              <span>{{ formatMXN(selectedExperience.pricePerPerson) }} × {{ reservaPersonas }}</span>
                              <strong>{{ formatMXN(totalReserva) }}</strong>
                            </div>
                          </div>
                        </div>

                        <div class="wizard-actions">
                          <button class="wizard-btn secondary" @click="reservationStep = 0">
                            Cancelar
                          </button>
                          <button class="wizard-btn primary" @click="nextStep">
                            Continuar
                            <Icon icon="mdi:arrow-right" width="20" />
                          </button>
                        </div>
                      </div>
                    </Transition>

                    <!-- Step 2: Información Personal -->
                    <Transition name="step-fade" mode="out-in">
                      <div v-if="reservationStep === 2" class="wizard-step" key="step2">
                        <h3 class="wizard-step-title">Cuéntanos sobre ti</h3>
                        
                        <div class="form-grid">
                          <div class="form-field full-width">
                            <label>Nombre completo</label>
                            <input
                              v-model="reservaNombre"
                              type="text"
                              class="form-input"
                              :class="{ error: formErrors.nombre }"
                              placeholder="Ej. María González"
                            />
                            <span v-if="formErrors.nombre" class="error-message">
                              {{ formErrors.nombre }}
                            </span>
                          </div>

                          <div class="form-field">
                            <label>Teléfono / WhatsApp</label>
                            <input
                              v-model="reservaTelefono"
                              type="tel"
                              class="form-input"
                              :class="{ error: formErrors.telefono }"
                              placeholder="999 123 4567"
                            />
                            <span v-if="formErrors.telefono" class="error-message">
                              {{ formErrors.telefono }}
                            </span>
                          </div>

                          <div class="form-field">
                            <label>Email (opcional)</label>
                            <input
                              v-model="reservaEmail"
                              type="email"
                              class="form-input"
                              placeholder="tu@email.com"
                            />
                          </div>
                        </div>

                        <div class="wizard-actions">
                          <button class="wizard-btn secondary" @click="prevStep">
                            <Icon icon="mdi:arrow-left" width="20" />
                            Atrás
                          </button>
                          <button class="wizard-btn primary" @click="nextStep">
                            Continuar
                            <Icon icon="mdi:arrow-right" width="20" />
                          </button>
                        </div>
                      </div>
                    </Transition>

                    <!-- Step 3: Confirmación -->
                    <Transition name="step-fade" mode="out-in">
                      <div v-if="reservationStep === 3" class="wizard-step" key="step3">
                        <h3 class="wizard-step-title">Confirma tu reserva</h3>
                        
                        <!-- Resumen completo -->
                        <div class="reservation-summary">
                          <div class="summary-header">
                            <Icon icon="mdi:calendar-check" width="24" />
                            <h4>Detalles de tu experiencia</h4>
                          </div>

                          <div class="summary-content">
                            <div class="summary-item">
                              <span class="item-label">Experiencia</span>
                              <span class="item-value">{{ selectedExperience.title }}</span>
                            </div>
                            <div class="summary-item">
                              <span class="item-label">Fecha</span>
                              <span class="item-value">{{ reservaFecha }}</span>
                            </div>
                            <div class="summary-item">
                              <span class="item-label">Personas</span>
                              <span class="item-value">{{ reservaPersonas }}</span>
                            </div>
                            <div class="summary-item">
                              <span class="item-label">Nombre</span>
                              <span class="item-value">{{ reservaNombre }}</span>
                            </div>
                            <div class="summary-item">
                              <span class="item-label">Contacto</span>
                              <span class="item-value">{{ reservaTelefono }}</span>
                            </div>
                            
                            <div class="summary-divider"></div>
                            
                            <div class="summary-total">
                              <span class="total-label">Total estimado</span>
                              <span class="total-value">{{ formatMXN(totalReserva) }}</span>
                            </div>
                          </div>

                          <div class="form-field full-width">
                            <label>Nota adicional (opcional)</label>
                            <textarea
                              v-model="reservaNota"
                              class="form-textarea"
                              rows="3"
                              placeholder="Ej. Preferencia de horario, necesidades especiales..."
                            ></textarea>
                          </div>
                        </div>

                        <div class="wizard-actions">
                          <button class="wizard-btn secondary" @click="prevStep">
                            <Icon icon="mdi:arrow-left" width="20" />
                            Atrás
                          </button>
                          <button class="wizard-btn whatsapp" @click="enviarReservaWhatsApp">
                            <Icon icon="mdi:whatsapp" width="22" />
                            Enviar por WhatsApp
                          </button>
                        </div>

                        <p class="wizard-note">
                          <Icon icon="mdi:information-outline" width="16" />
                          Te contactaremos para confirmar disponibilidad
                        </p>
                      </div>
                    </Transition>
                  </div>
                </Transition>
              </div>

              <!-- Mobile Sticky CTA -->
              <div class="mobile-sticky-cta" v-if="reservationStep === 0">
                <div class="sticky-price">
                  <span class="sticky-amount">
                    {{ selectedExperience.pricePerPerson > 0 ? formatMXN(selectedExperience.pricePerPerson) : "Personalizado" }}
                  </span>
                  <span class="sticky-label" v-if="selectedExperience.pricePerPerson > 0">por persona</span>
                </div>
                <button class="sticky-btn" @click="startReservation">
                  Reservar
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>

    <!-- Galería Fullscreen -->
    <Teleport to="body">
      <Transition name="fullscreen-fade">
        <div v-if="showGalleryFullscreen && selectedExperience" class="fullscreen-gallery" @click.self="showGalleryFullscreen = false">
          <button class="fullscreen-close" @click="showGalleryFullscreen = false">
            <Icon icon="mdi:close" width="28" />
          </button>
          
          <div class="fullscreen-content">
            <transition name="image-fade" mode="out-in">
              <img
                :key="currentImageIndex"
                :src="selectedExperience.images[currentImageIndex]"
                :alt="selectedExperience.title"
              />
            </transition>
          </div>

          <button class="fullscreen-nav prev" @click.stop="prevImage">
            <Icon icon="mdi:chevron-left" width="32" />
          </button>
          <button class="fullscreen-nav next" @click.stop="nextImage">
            <Icon icon="mdi:chevron-right" width="32" />
          </button>

          <div class="fullscreen-counter">
            {{ currentImageIndex + 1 }} / {{ selectedExperience.images.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Merriweather:wght@300;400;700;900&family=Inter:wght@400;500;600;700;800;900&display=swap');

/* ==================== BASE ==================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.catalog {
  min-height: 100vh;
  padding: clamp(3rem, 5vw, 5rem) clamp(1.5rem, 4vw, 3rem);
  font-family: "Merriweather", serif;
  color: #1b3b2f;
  
  background-image: url('/src/assets/background-selva.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  isolation: isolate;
}

.catalog::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 1200px 600px at 50% 0%, rgba(255, 255, 255, 0.6), transparent 70%),
    linear-gradient(to bottom, rgba(27, 59, 47, 0.4), rgba(27, 59, 47, 0.2), rgba(27, 59, 47, 0.4));
  z-index: -1;
  pointer-events: none;
}

/* ==================== HERO ==================== */
.hero {
  max-width: 1000px;
  margin: 0 auto 4rem;
  text-align: center;
}

.hero-content {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 252, 246, 0.9));
  backdrop-filter: blur(20px);
  border: 1px solid #e8e3d7;
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
}

.hero-badge {
  display: inline-block;
  background: linear-gradient(135deg, #1da851, #159541);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(29, 168, 81, 0.3);
}

.hero-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  background: linear-gradient(135deg, #1b3b2f, #1da851);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  max-width: 720px;
  margin: 0 auto;
  color: #4a382e;
  font-size: clamp(1rem, 1.5vw, 1.125rem);
  line-height: 1.7;
  font-weight: 400;
}

/* ==================== GRID DE EXPERIENCIAS ==================== */
.experiences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
  max-width: 1400px;
  margin: 0 auto;
}

/* ==================== TARJETA DE EXPERIENCIA ==================== */
.experience-card {
  container-type: inline-size;
}

.card-inner {
  width: 100%;
  height: 100%;
  background: white;
  border: 1px solid #e8e3d7;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
}

.card-inner:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.24);
  border-color: #d0c5b5;
}

.card-inner:focus-visible {
  outline: 3px solid rgba(29, 168, 81, 0.4);
  outline-offset: 4px;
}

/* Imagen */
.card-image-wrapper {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #e7e1d4;
}

.image-skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    #e6e1d5 0%,
    #f2efe8 50%,
    #e6e1d5 100%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s ease-in-out infinite;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.1);
  filter: blur(10px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-image.is-loaded {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}

.card-inner:hover .card-image.is-loaded {
  transform: scale(1.05);
}

/* Badges */
.card-badges {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 2;
}

.card-badge {
  display: inline-block;
  background: #1da851;
  color: white;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.card-badge[data-type="oferta"] {
  background: #1b3b2f;
}

.card-category {
  display: inline-block;
  background: rgba(255, 255, 255, 0.95);
  color: #1b3b2f;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Quick info overlay */
.quick-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  gap: 0.75rem;
  z-index: 2;
}

.info-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  backdrop-filter: blur(5px);
}

/* Card Body */
.card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.card-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.75rem;
  color: #1b3b2f;
  line-height: 1.2;
  letter-spacing: 0.5px;
}

.card-description {
  font-size: 0.95rem;
  color: #4a382e;
  line-height: 1.6;
  flex: 1;
}

.card-footer-content {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e8e3d7;
}

.price-tag {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.price-amount {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 900;
  color: #1b3b2f;
}

.price-label {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #4a382e;
}

.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #1da851;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  font-weight: 800;
  white-space: nowrap;
  transition: gap 0.2s ease;
}

.card-inner:hover .cta-link {
  gap: 0.75rem;
}

/* ==================== PAGINACIÓN ==================== */
.pagination {
  max-width: 600px;
  margin: 3rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid #e8e3d7;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.pagination-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #1b3b2f;
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-btn:hover:not(:disabled) {
  background: #1da851;
  transform: translateY(-2px);
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  color: #1b3b2f;
}

.separator {
  color: #e8e3d7;
}

/* ==================== MODAL BACKDROP ==================== */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(7, 25, 18, 0.815);
  backdrop-filter: blur(10px);
  z-index: 10000;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.modal-container {
  position: relative;
  background: #fffcf6;
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 24px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  outline: none;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 48px;
  height: 48px;
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.2s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
}

.modal-close:hover {
  background: #1da851;
  color: white;
  border-color: #1da851;
  transform: scale(1.1) rotate(90deg);
}

/* ==================== MODAL HERO & GALLERY ==================== */
.modal-hero {
  position: relative;
  background: #1b3b2faf;
}

.hero-gallery {
  display: grid;
  gap: 0.75rem;
  padding: 0.75rem;
}

.main-gallery-image {
  position: relative;
  aspect-ratio: 16 / 10;
  background: #4a382e;
  border-radius: 16px;
  overflow: hidden;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  filter: blur(20px) brightness(0.7);
  transform: scale(1.05);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-img.is-loaded {
  opacity: 1;
  filter: blur(0) brightness(1);
  transform: scale(1);
}

.gallery-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.gallery-nav:hover {
  background: #1da851;
  color: white;
  border-color: #1da851;
  transform: translateY(-50%) scale(1.1);
}

.gallery-nav.prev { left: 1rem; }
.gallery-nav.next { right: 1rem; }

.gallery-counter {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: white;
  color: #1b3b2f;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  border: 2px solid #e8e3d7;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.fullscreen-btn {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  top: 14px;
  width: 40px;
  height: 40px;
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 12px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.fullscreen-btn:hover {
  background: #1da851;
  color: white;
  border-color: #1da851;
  transform: scale(1.1);
}

/* Thumbnails */
.gallery-thumbnails {
  display: none;
  grid-auto-flow: column;
  grid-auto-columns: minmax(100px, 1fr);
  gap: 0.75rem;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #1da851 #e8e3d7;
  padding-bottom: 0.5rem;
}

.gallery-thumbnails::-webkit-scrollbar {
  height: 6px;
}

.gallery-thumbnails::-webkit-scrollbar-track {
  background: #e8e3d7;
  border-radius: 999px;
}

.gallery-thumbnails::-webkit-scrollbar-thumb {
  background: #1da851;
  border-radius: 999px;
}

.thumbnail-btn {
  border: 3px solid #e8e3d7;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

.thumbnail-btn:hover {
  border-color: #1da851;
}

.thumbnail-btn.active {
  border-color: #1da851;
  box-shadow: 0 0 0 2px #1da851;
}

.thumbnail-btn img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  display: block;
}

/* Hero Info Overlay */
.hero-info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1.5rem;
  background: linear-gradient(to top, rgba(27, 59, 47, 0.95), rgba(27, 59, 47, 0.7), transparent);
  z-index: 5;
}

.hero-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.hero-badge {
  background: #1da851;
  color: white;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.hero-category {
  background: white;
  color: #1b3b2f;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  border: 2px solid #e8e3d7;
}

.hero-experience-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(1.75rem, 4vw, 3rem);
  color: white;
  line-height: 1.2;
  letter-spacing: 1px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
}

/* ==================== MODAL CONTENT ==================== */
.modal-content {
  flex: 1;
  overflow-y: auto;
  padding: clamp(1.5rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: #fffcf6;
}

/* Quick Stats */
.quick-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}

.stat-card {
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 16px;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s ease;
}

.stat-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
  border-color: #1da851;
}

.stat-card svg {
  color: #1da851;
  flex-shrink: 0;
}

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-label {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #4a382e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #1b3b2f;
}

/* Content Section */
.content-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.75rem;
  color: #1b3b2f;
  letter-spacing: 0.5px;
}

.experience-description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #4a382e;
}

/* Collapsible Section */
.collapsible-section {
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 16px;
  overflow: hidden;
}

.section-header {
  width: 100%;
  padding: 1.25rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.2s ease;
}

.section-header:hover {
  background: #f7f7f2;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-left svg {
  color: #1da851;
}

.section-title-inline {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.5rem;
  color: #1b3b2f;
  letter-spacing: 0.5px;
  margin: 0;
}

.chevron-icon {
  color: #1b3b2f;
  transition: transform 0.3s ease;
}

.included-list {
  list-style: none;
  padding: 0 1.25rem 1.25rem;
  display: grid;
  gap: 0.75rem;
}

.included-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: #1b3b2f;
  font-family: "Inter", sans-serif;
  font-weight: 500;
}

.check-icon {
  color: #1da851;
  flex-shrink: 0;
}

/* Price Section */
.price-section {
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.price-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.price-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.price-label {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #4a382e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.price-main {
  font-family: "Bebas Neue", sans-serif;
  font-size: 2.5rem;
  color: #1b3b2f;
  line-height: 1;
}

.primary-cta-btn {
  width: 100%;
  padding: 1.25rem;
  background: linear-gradient(135deg, #1da851, #159541);
  color: white;
  border: none;
  border-radius: 16px;
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  font-weight: 800;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(29, 168, 81, 0.3);
}

.primary-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(29, 168, 81, 0.4);
}

.primary-cta-btn:active {
  transform: translateY(0);
}

/* ==================== WIZARD DE RESERVA ==================== */
.reservation-wizard {
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
}

/* Progress Indicator */
.wizard-progress {
  display: grid;
  grid-template-columns: auto 1fr auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  gap: 0.5rem;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8e3d7;
  color: #4a382e;
  display: grid;
  place-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  transition: all 0.3s ease;
  border: 3px solid #e8e3d7;
}

.progress-step.active .step-circle,
.progress-step.completed .step-circle {
  background: #1da851;
  color: white;
  border-color: #1da851;
  box-shadow: 0 4px 12px rgba(29, 168, 81, 0.3);
}

.step-label {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #4a382e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.progress-step.active .step-label {
  color: #1b3b2f;
}

.progress-line {
  height: 3px;
  background: #e8e3d7;
  border-radius: 999px;
  transition: all 0.3s ease;
}

.progress-line.filled {
  background: #1da851;
}

/* Wizard Steps */
.wizard-step {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.wizard-step-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.75rem;
  color: #1b3b2f;
  letter-spacing: 0.5px;
  text-align: center;
}

.form-grid {
  display: grid;
  gap: 1.25rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field.full-width {
  grid-column: 1 / -1;
}

.form-field label {
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #1b3b2f;
}

.form-input,
.form-textarea,
.stepper-input {
  padding: 0.875rem 1rem;
  border: 2px solid #e8e3d7;
  border-radius: 12px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #1b3b2f;
  background: white;
  transition: all 0.2s ease;
}

.form-input:focus,
.form-textarea:focus,
.stepper-input:focus {
  outline: none;
  border-color: #1da851;
  box-shadow: 0 0 0 4px rgba(29, 168, 81, 0.1);
}

.form-input.error,
.form-textarea.error {
  border-color: #dc2626;
}

.error-message {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #dc2626;
}

/* Number Stepper */
.number-stepper {
  display: grid;
  grid-template-columns: 48px 1fr 48px;
  gap: 0.75rem;
  align-items: center;
}

.stepper-btn {
  height: 48px;
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 12px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #1b3b2f;
}

.stepper-btn:hover {
  background: #f7f7f2;
  border-color: #1da851;
  color: #1da851;
}

.stepper-input {
  text-align: center;
  font-weight: 800;
}

/* Step Summary */
.step-summary {
  background: #f7f7f2;
  border: 2px solid #e8e3d7;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: 1rem;
}

.summary-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Inter", sans-serif;
  color: #1b3b2f;
  font-weight: 600;
}

/* Wizard Actions */
.wizard-actions {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.wizard-btn {
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 16px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.wizard-btn.secondary {
  background: white;
  color: #1b3b2f;
  border: 2px solid #e8e3d7;
}

.wizard-btn.secondary:hover {
  background: #f7f7f2;
  border-color: #1b3b2f;
}

.wizard-btn.primary {
  background: #1da851;
  color: white;
  box-shadow: 0 4px 12px rgba(29, 168, 81, 0.3);
}

.wizard-btn.primary:hover {
  background: #159541;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(29, 168, 81, 0.4);
}

.wizard-btn.whatsapp {
  background: #25D366;
  color: white;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.wizard-btn.whatsapp:hover {
  background: #20BA5A;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.4);
}

/* Reservation Summary (Step 3) */
.reservation-summary {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.summary-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e8e3d7;
}

.summary-header svg {
  color: #1da851;
}

.summary-header h4 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.5rem;
  color: #1b3b2f;
  letter-spacing: 0.5px;
}

.summary-content {
  display: grid;
  gap: 1rem;
}

.summary-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e8e3d7;
}

.item-label {
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #4a382e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.item-value {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1b3b2f;
}

.summary-divider {
  height: 2px;
  background: #e8e3d7;
  margin: 0.5rem 0;
}

.summary-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #f7f7f2;
  border-radius: 12px;
  border: 2px solid #e8e3d7;
}

.total-label {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1b3b2f;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.total-value {
  font-family: "Bebas Neue", sans-serif;
  font-size: 2rem;
  color: #1da851;
}

.wizard-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: "Inter", sans-serif;
  font-size: 0.875rem;
  color: #4a382e;
  text-align: center;
  margin-top: 0.5rem;
}

/* ==================== MOBILE STICKY CTA ==================== */
.mobile-sticky-cta {
  display: none;
  padding: 1.25rem;
  background: white;
  border-top: 2px solid #e8e3d7;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);
}

.sticky-price {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.sticky-amount {
  font-family: "Inter", sans-serif;
  font-size: 1.25rem;
  font-weight: 900;
  color: #1b3b2f;
}

.sticky-label {
  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #4a382e;
}

.sticky-btn {
  padding: 1rem 2rem;
  background: #1da851;
  color: white;
  border: none;
  border-radius: 16px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(29, 168, 81, 0.3);
}

.sticky-btn:hover {
  background: #159541;
}

/* ==================== FULLSCREEN GALLERY ==================== */
.fullscreen-gallery {
  position: fixed;
  inset: 0;
 background: rgba(0, 0, 0, 0.780);
  z-index: 11000;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.fullscreen-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.2s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
}

.fullscreen-close:hover {
  background: #1da851;
  color: white;
  border-color: #1da851;
  transform: scale(1.1) rotate(90deg);
}

.fullscreen-content {
  max-width: 90vw;
  max-height: 85vh;
  display: grid;
  place-items: center;
}

.fullscreen-content img {
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.24);
}

.fullscreen-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background: white;
  border: 2px solid #e8e3d7;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.2s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
}

.fullscreen-nav:hover {
  background: #1da851;
  color: white;
  border-color: #1da851;
  transform: translateY(-50%) scale(1.1);
}

.fullscreen-nav.prev { left: 2rem; }
.fullscreen-nav.next { right: 2rem; }

.fullscreen-counter {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: #1b3b2f;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  border: 2px solid #e8e3d7;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
}

/* ==================== RESPONSIVE ==================== */
/* ==================== RESPONSIVE ==================== */

/* Móvil pequeño (< 375px) */
@media (max-width: 374px) {
  .catalog {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .experiences-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .modal-content {
    padding: 1.5rem 1rem;
  }

  .modal-hero {
    height: 300px;
  }

  .hero-experience-title {
    font-size: 1.8rem;
  }

  .quick-stats {
    grid-template-columns: 1fr;
  }
}

/* Móvil (375px - 639px) */
@media (min-width: 375px) and (max-width: 639px) {
  .catalog {
    padding: 3rem 1.5rem;
  }

  .experiences-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .modal-hero {
    height: 350px;
  }

  .quick-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablet vertical (640px - 767px) */
@media (min-width: 640px) and (max-width: 767px) {
  .catalog {
    padding: 4rem 2rem;
  }

  .experiences-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .modal-container {
    width: 95%;
    height: 90vh;
  }

  .modal-hero {
    height: 380px;
  }
}

/* Tablet horizontal (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .catalog {
    padding: 4.5rem 2.5rem;
  }

  .experiences-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .modal-container {
    width: 90%;
    max-width: 800px;
    height: 85vh;
  }

  .modal-hero {
    height: 400px;
  }
}

/* Desktop pequeño (1024px - 1199px) */
@media (min-width: 1024px) and (max-width: 1199px) {
  .catalog {
    padding: 5rem 3rem;
  }

  .experiences-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .modal-container {
    width: 85%;
    max-width: 1000px;
    flex-direction: row;
  }

  .modal-hero {
    width: 45%;
    height: auto;
  }

  .modal-content {
    width: 55%;
  }
}

/* Desktop (1200px - 1399px) */
@media (min-width: 1200px) and (max-width: 1399px) {
  .catalog {
    padding: 6rem 4rem;
  }

  .experiences-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  .modal-container {
    max-width: 1100px;
    flex-direction: row;
  }

  .modal-hero {
    width: 50%;
  }

  .modal-content {
    width: 50%;
  }
}

/* Desktop grande (1400px+) */
@media (min-width: 1400px) {
  .catalog {
    padding: 7rem 5rem;
  }

  .experiences-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }

  .modal-container {
    max-width: 1200px;
    flex-direction: row;
  }

  .modal-hero {
    width: 50%;
  }

  .modal-content {
    width: 50%;
  }
}



@media (max-width: 768px) {
  .modal-container {
    margin: 0;
    border-radius: 0;
    max-width: 100%;
    max-height: 100vh;
  }

  .modal-close {
    top: 0.75rem;
    right: 0.75rem;
    width: 40px;
    height: 40px;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .quick-stats {
    grid-template-columns: 1fr;
  }

  .wizard-progress {
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 0.75rem;
  }

  .progress-line {
    display: none;
  }

  .step-label {
    font-size: 0.65rem;
  }

  .wizard-actions {
    grid-template-columns: 1fr;
  }

  .mobile-sticky-cta {
    display: flex;
  }

  .summary-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .hero-experience-title {
    font-size: 1.5rem;
  }

  .hero-info-overlay {
    padding: 1.5rem 1rem;
  }

  .gallery-nav {
    width: 40px;
    height: 40px;
  }

  .gallery-nav.prev { left: 0.5rem; }
  .gallery-nav.next { right: 0.5rem; }

  .fullscreen-nav {
    width: 48px;
    height: 48px;
  }

  .fullscreen-nav.prev { left: 1rem; }
  .fullscreen-nav.next { right: 1rem; }

  .fullscreen-close {
    top: 1rem;
    right: 1rem;
    width: 48px;
    height: 48px;
  }

  .price-main {
    font-size: 2rem;
  }

  .total-value {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .stat-card {
    padding: 1rem;
  }

  .price-card {
    padding: 1.5rem;
  }

  .reservation-wizard {
    padding: 1.5rem;
  }

  .wizard-step-title {
    font-size: 1.5rem;
  }
}

/* ==================== TRANSICIONES ==================== */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-slide-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-slide-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.modal-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
}

.modal-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.image-fade-enter-active,
.image-fade-leave-active {
  transition: opacity 0.3s ease;
}

.image-fade-enter-from,
.image-fade-leave-to {
  opacity: 0;
}

.wizard-reveal-enter-active,
.wizard-reveal-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.wizard-reveal-enter-from {
  opacity: 0;
  transform: translateY(-20px);
  max-height: 0;
}

.wizard-reveal-enter-to {
  opacity: 1;
  transform: translateY(0);
  max-height: 2000px;
}

.wizard-reveal-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.step-fade-enter-active,
.step-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.step-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}

.fullscreen-fade-enter-active,
.fullscreen-fade-leave-active {
  transition: opacity 0.3s ease;
}

.fullscreen-fade-enter-from,
.fullscreen-fade-leave-to {
  opacity: 0;
}
</style>