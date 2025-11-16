<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
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
}

/* ================== DATOS ================== */
const experiences: Experience[] = [
  {
    id: 1,
    title: "Sac Bej – Camino Blanco",
    pricePerPerson: 1250,
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/sacbej.JPG",
    badge: "popular",
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
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/Ceremonia%20y%20Tour%20Nocturno-24.jpg",
    shortDescription:
      "Ceremonia maya guiada frente al mar para agradecer y renovar tu energía.",
    fullDescription:
      "Una experiencia espiritual guiada por fuego, copal y sabiduría maya. Limpia energética y ofrendas al mar.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/Ceremonia%20y%20Tour%20Nocturno-24.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/ceremonia2.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/ceremonia-3.jpg",
    ],
    duration: "40 minutos",
    included: ["Ceremonia frente al mar", "Ofrendas", "Guía espiritual"],
  },
  {
    id: 8,
    title: "Biking Tour – Pueblo Fantasma",
    pricePerPerson: 350,
    img: "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/biking-tour1.jpg",
    shortDescription:
      "Recorre en bicicleta la selva nocturna hacia un pueblo fantasma lleno de leyendas.",
    fullDescription:
      "Pedalea bajo la luna y descubre las historias ocultas del bosque y el antiguo pueblo.",
    images: [
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/bikingtour2.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/bikingtour3.jpg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/nocturno-1.jpeg",
      "https://uvjwsdeyhuaievbeddql.supabase.co/storage/v1/object/public/sacbej/experiencias/nocturno%202.jpeg"
    ],
    duration: "2 a 2.5 horas",
    included: ["Guía federal", "Bicicleta", "Equipo nocturno"],
  },
];

/* ============= Estado catálogo (4x2 desktop, 1 móvil) + paginación ============= */
const currentPage = ref(1);
const perPage = 8; // 4 arriba + 4 abajo
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

/* ================== Modal + Galería ================== */
const selectedExperience = ref<Experience | null>(null);
const currentImageIndex = ref(0);
const imageLoaded = ref(false);

// estado de carga por thumbnail del modal
const thumbsLoaded = ref<boolean[]>([]);

function openModal(exp: Experience) {
  selectedExperience.value = exp;
  currentImageIndex.value = 0;
  imageLoaded.value = false;
  thumbsLoaded.value = exp.images.map(() => false);
}

function closeModal() {
  selectedExperience.value = null;
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

/* skeleton / blur-up para las cards del grid */
function onCardThumbLoad(e: Event) {
  const img = e.target as HTMLImageElement | null;
  if (img) {
    img.classList.add("is-loaded");
  }
}

/* ============= Bloqueo de scroll del body cuando el modal está abierto ============= */
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
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
}
onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = originalBodyOverflow.value || "";
});
</script>

<template>
  <section class="catalog">
    <h2 class="title">Explora experiencias únicas</h2>
    <p class="subtitle">
      Aventuras exclusivas en la costa yucateca. Vive naturaleza, cultura y magia.
    </p>

    <!-- GRID 4 x 2 en desktop | 1 col en móvil -->
    <div class="grid">
      <div
        v-for="exp in paginatedExperiences"
        :key="exp.id"
        class="card"
        @click="openModal(exp)"
        role="button"
        tabindex="0"
        @keyup.enter="openModal(exp)"
        aria-label="Abrir detalle de experiencia"
      >
        <div class="thumb-wrap">
          <!-- Skeleton blur-up -->
          <div class="thumb-skeleton"></div>
          <img
            :src="exp.img"
            class="thumb"
            loading="lazy"
            decoding="async"
            :alt="exp.title"
            @load="onCardThumbLoad"
          />
          <span v-if="exp.badge" class="badge">{{ exp.badge }}</span>
        </div>
        <div class="card-content">
          <h3>{{ exp.title }}</h3>
          <p>{{ exp.shortDescription }}</p>
          <span class="price">
            {{ exp.pricePerPerson > 0 ? `$${exp.pricePerPerson} MXN` : "Personalizado" }}
          </span>
        </div>
      </div>
    </div>

    <!-- Paginación -->
    <div class="pagination" v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">← Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Siguiente →
      </button>
    </div>

    <!-- MODAL -->
    <Teleport to="body">
      <Transition name="fade-overlay">
        <div
          v-if="selectedExperience"
          class="overlay"
          @click.self="closeModal"
          aria-modal="true"
          role="dialog"
        >
          <Transition name="scale-in">
            <div v-if="selectedExperience" class="modal" role="document">
              <!-- Header -->
              <div class="modal-header">
                <h2 class="modal-title">{{ selectedExperience.title }}</h2>
                <button class="icon-btn" @click="closeModal" aria-label="Cerrar">
                  ×
                </button>
              </div>

              <!-- Cuerpo -->
              <div class="modal-body">
                <!-- Galería -->
                <div class="gallery">
                  <div class="main-image">
                    <!-- Imagen principal con fade + blur-up + zoom hover -->
                    <transition name="fade-img" mode="out-in">
                      <img
                        v-if="selectedExperience && selectedExperience.images[currentImageIndex]"
                        :key="currentImageIndex"
                        :src="selectedExperience.images[currentImageIndex]"
                        class="active-img"
                        :class="{ 'is-loaded': imageLoaded }"
                        :alt="selectedExperience.title"
                        loading="lazy"
                        decoding="async"
                        @load="onMainImageLoad"
                      />
                    </transition>
                    <button class="nav prev" @click.stop="prevImage" aria-label="Anterior">
                      ‹
                    </button>
                    <button class="nav next" @click.stop="nextImage" aria-label="Siguiente">
                      ›
                    </button>
                    <div class="counter">
                      {{ currentImageIndex + 1 }} /
                      {{ selectedExperience.images.length }}
                    </div>
                  </div>

                  <div class="thumbs" aria-label="Miniaturas">
                    <button
                      v-for="(img, i) in selectedExperience.images"
                      :key="i"
                      class="thumb-btn"
                      :class="{ active: i === currentImageIndex }"
                      @click="goToImage(i)"
                    >
                      <img :src="img" alt="" />
                    </button>
                  </div>
                </div>

                <!-- Detalles -->
                <div class="details">
                  <p class="full-desc">{{ selectedExperience.fullDescription }}</p>

                  <div class="meta">
                    <Icon icon="mdi:clock-outline" width="18" />
                    <span>{{ selectedExperience.duration }}</span>
                  </div>

                  <ul class="included">
                    <li v-for="i in selectedExperience.included" :key="i">
                      {{ i }}
                    </li>
                  </ul>

                  <div class="price-box">
                    {{
                      selectedExperience.pricePerPerson > 0
                        ? `$${selectedExperience.pricePerPerson} MXN por persona`
                        : "Servicio personalizado – cotiza con nosotros"
                    }}
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* ====== Base catálogo ====== */
.catalog {
  padding: 3rem 2rem;
  font-family: "Merriweather", serif;
  text-align: center;

  /*  FONDO SELVÁTICO HUMEDO */
  background-image: url('/src/assets/background-selva.png'); /* cambia el nombre si lo guardaste distinto */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* Overlay suave para que no opaque las cards */
  position: relative;
  color: #1b3b2f;
}

.catalog::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
      rgba(15, 30, 20, 0.45),
      rgba(15, 30, 20, 0.35),
      rgba(15, 30, 20, 0.50)
  );
  pointer-events: none;
  z-index: 0;
}

.catalog > * {
  position: relative;
  z-index: 2; /* Hace que todo el contenido quede arriba del overlay */
}

.title {
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(2.2rem, 4vw, 3rem);
  letter-spacing: 1px;
}
.subtitle {
  max-width: 700px;
  margin: 0.5rem auto 2rem;
  color: #4e342e;
}

/* Grid 4x2 desktop, 1 col móvil */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.8rem;
}
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* Tarjeta */
.card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
  will-change: transform;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

/* Blur-up + skeleton card */
.thumb-wrap {
  position: relative;
  overflow: hidden;
  background: #e0ded6;
}
.thumb-skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #e0ded6, #f5e6d3, #e0ded6);
  background-size: 200% 100%;
  animation: loading-skeleton 1.2s linear infinite;
}
@keyframes loading-skeleton {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
.thumb {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  opacity: 0;
  transform: scale(1.04);
  filter: blur(10px);
  transition: opacity 0.4s ease, transform 0.6s ease, filter 0.6s ease;
  will-change: transform, filter, opacity;
}
.thumb.is-loaded {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}
.card:hover .thumb.is-loaded {
  transform: scale(1.05);
}

/* Badge */
.badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #1da851;
  color: #fff;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Contenido card */
.card-content {
  padding: 1rem 1rem 1.2rem;
}
.card-content h3 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.6rem;
  color: #1b3b2f;
  line-height: 1.1;
  margin-bottom: 0.25rem;
}
.card-content p {
  font-size: 0.95rem;
  color: #4e342e;
  margin: 0 0 0.6rem;
}
.price {
  color: #1b3b2f;
  font-weight: 700;
}

/* Paginación */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
  margin-top: 2rem;
  font-family: "Bebas Neue", sans-serif;
}
.pagination button {
  background: #1b3b2f;
  color: #fff;
  border: none;
  padding: 0.55rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s ease, transform 0.1s ease;
}
.pagination button:hover:not(:disabled) {
  background: #1da851;
}
.pagination button:active:not(:disabled) {
  transform: translateY(1px);
}
.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ====== Modal ====== */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(14, 20, 17, 0.72);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 9999;
  overscroll-behavior: contain;
}

.modal {
  background: #fffdf8;
  border-radius: 20px;
  width: min(100%, 1040px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
}

/* Header modal */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #ffffff 0%, #fffaf3 100%);
}
.modal-title {
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(1.4rem, 2.2vw, 2rem);
  color: #1b3b2f;
  letter-spacing: 1px;
}
.icon-btn {
  appearance: none;
  background: #f0efe9;
  border: none;
  color: #1b3b2f;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  font-size: 22px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.08s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.icon-btn:hover {
  background: #e7e5dc;
}
.icon-btn:active {
  transform: translateY(1px);
}

/* Body modal: dos columnas con scroll propio */
.modal-body {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.2rem;
  padding: 1.2rem;
  overflow: auto;
}

/* Galería */
.gallery {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.main-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  overflow: hidden;

}
.main-skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #e0ded6, #f5e6d3, #e0ded6);
  background-size: 200% 100%;
  animation: loading-skeleton 1.2s linear infinite;
}

/* Imagen principal: fade + blur-up + hover zoom */
.active-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  filter: blur(12px);
  transition: opacity 0.4s ease, transform 0.6s ease, filter 0.6s ease;
  will-change: transform, filter, opacity;
}
.active-img.is-loaded {
  opacity: 1;
  transform: scale(1.01);
  filter: blur(0);
}
.main-image:hover .active-img.is-loaded {
  transform: scale(1.06);
}

/* Transición fade entre imágenes */
.fade-img-enter-active,
.fade-img-leave-active {
  transition: opacity 0.3s ease;
}
.fade-img-enter-from,
.fade-img-leave-to {
  opacity: 0;
}

/* Botones navegación de imagen */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.08s ease;
}
.nav:hover {
  background: rgba(0, 0, 0, 0.6);
}
.nav:active {
  transform: translateY(-50%) scale(0.98);
}
.nav.prev {
  left: 10px;
}
.nav.next {
  right: 10px;
}

.counter {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 999px;
}

/* Thumbnails modal */
.thumbs {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(72px, 1fr);
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.2rem;
  scrollbar-width: thin;
}
.thumb-btn {
  padding: 0;
  border: 2px solid transparent;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  transition: border-color 0.15s ease, transform 0.08s ease;
  position: relative;
  overflow: hidden;
}
.thumb-btn:hover {
  transform: translateY(-1px);
}
.thumb-btn.active {
  border-color: #1b3b2f;
}
.thumb-btn img {
  width: 100%;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
}

/* Detalles */
.details {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  color: #1b3b2f;
  font-size: 0.98rem;
}
.full-desc {
  color: #4e342e;
  line-height: 1.65;
}
.meta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #1b3b2f;
  font-weight: 600;
}
.included {
  list-style: none;
  padding: 0;
  margin: 0.2rem 0 0;
  display: grid;
  gap: 0.4rem;
}
.included li::before {
  content: "✓";
  color: #1da851;
  margin-right: 0.5rem;
  font-weight: 700;
}
.price-box {
  margin-top: 0.4rem;
  background: linear-gradient(135deg, #1b3b2f, #1da851);
  color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
}

/* Responsive modal */
@media (max-width: 920px) {
  .modal-body {
    grid-template-columns: 1fr;
  }
  .main-image {
    aspect-ratio: 16 / 11;
  }
}

/* Animaciones overlay / modal (apertura suave, ayuda a Lighthouse) */
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.18s ease;
}
.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}
.scale-in-enter-active,
.scale-in-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.scale-in-enter-from,
.scale-in-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
