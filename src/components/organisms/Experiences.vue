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
    img: "https://i.postimg.cc/C1s5JJr8/5.png",
    badge: "popular",
    shortDescription:
      "Recorre la zona sur de la Reserva Ría Celestún: salinas rosas, bosque petrificado y flamencos.",
    fullDescription:
      "Disfruta de un recorrido único en tuc tuc por la parte sur de la Reserva de la Biosfera Ría Celestún. Explora salinas rosas, bosque petrificado y ex haciendas, mientras descubres la historia natural de este lugar mágico.",
    images: [
      "https://i.postimg.cc/Jn50KKYH/6.png",
      "https://i.postimg.cc/RFLhGGpH/7.png",
      "https://i.postimg.cc/76nhXXtG/9.png",
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
    img: "https://i.postimg.cc/B6Wzgfj6/surf.jpg",
    shortDescription:
      "Pesca deportiva en el Golfo: corvina, robalo, jurel, pargo y más.",
    fullDescription:
      "Vive la pesca deportiva en las aguas del Golfo de México. Disfruta el amanecer, pesca especies locales y saborea un ceviche fresco estilo ribereño.",
    images: [
      "https://i.postimg.cc/W3MHYYZv/sruf-2.jpg",
      "https://i.postimg.cc/gJvTtthd/surf3.jpg",
      "https://i.postimg.cc/zBnc22hN/surf4.jpg",
    ],
    duration: "5 horas",
    included: ["Embarcación privada", "Guía y equipo de pesca", "Ceviche fresco"],
  },
  {
    id: 3,
    title: "Kayak en el Corazón del Manglar",
    pricePerPerson: 1550,
    img: "https://i.postimg.cc/dVYm4QBn/Chat-GPT-Image-Oct-18-2025-07-24-00-PM.png",
    badge: "popular",
    shortDescription:
      "Remo entre manglares al amanecer o anochecer, rodeado de aves y luciérnagas.",
    fullDescription:
      "Navega entre manglares hasta el corazón del humedal. Observa aves y flamencos al amanecer o el espectáculo de luciérnagas al anochecer.",
    images: [
      "https://i.postimg.cc/1X04tSNT/Chat-GPT-Image-Oct-18-2025-07-27-34-PM.png",
      "https://i.postimg.cc/h4MBShJD/Chat-GPT-Image-Oct-18-2025-07-31-17-PM.png",
      "https://i.postimg.cc/XqNXphcK/Chat-GPT-Image-Oct-18-2025-07-42-58-PM.png",
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
    img: "https://i.postimg.cc/9Ff85YqW/Chat-GPT-Image-Oct-18-2025-08-17-33-PM.png",
    shortDescription:
      "Más de 200 especies en la Ría Celestún con guía experto y equipo óptico.",
    fullDescription:
      "Descubre aves endémicas como el colibrí tijereta mexicano. Ideal para amantes de la fotografía y la naturaleza.",
    images: [
      "https://i.postimg.cc/hPtW5gtG/Chat-GPT-Image-Oct-18-2025-07-55-03-PM.png",
      "https://i.postimg.cc/Fs5NWwJ8/Chat-GPT-Image-Oct-18-2025-07-48-32-PM.png",
      "https://i.postimg.cc/BQXHpLHc/Chat-GPT-Image-Oct-18-2025-07-51-54-PM.png",
    ],
    duration: "4.5 horas",
    included: ["Guía NOM 09-TUR-2002", "Tuc tuc", "Equipo óptico básico"],
  },
  {
    id: 5,
    title: "Ría Celestún – Flamingo Tour",
    pricePerPerson: 4100,
    img: "https://i.postimg.cc/6QbggbMs/Chat-GPT-Image-Oct-18-2025-08-12-03-PM.png",
    badge: "oferta",
    shortDescription:
      "Tour en lancha: flamencos, túnel de manglar, isla de aves y ojo de agua.",
    fullDescription:
      "Aventura mágica navegando por manglares y observando flamencos rosados. Incluye baño en ojo de agua.",
    images: [
      "https://i.postimg.cc/d3Hyjv5D/491518218-18006243275739535-6303338094946747857-n.jpg",
      "https://i.postimg.cc/kg70bmkM/491499260-18006243257739535-4895587472905209765-n.jpg",
      "https://i.postimg.cc/52Fsyktj/486561792-1223155886478538-1220087316864002473-n.jpg",
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
      "https://i.postimg.cc/xTLBc77n/Ceremonia-y-Tour-Nocturno-16.jpg",
      "https://i.postimg.cc/zXT4VMMD/coco-pos.jpg",
      "https://i.postimg.cc/1RwvHFKG/Ceremonia-y-Tour-Nocturno-02.jpg",
    ],
    duration: "2 horas",
    included: ["Guía certificado", "Equipo de iluminación", "Lancha privada"],
  },
  {
    id: 7,
    title: "Ceremonia XUKULEM – Conexión Espiritual",
    pricePerPerson: 2400,
    img: "https://i.postimg.cc/5tVDVMmf/Ceremonia-y-Tour-Nocturno-22.jpg",
    shortDescription:
      "Ceremonia maya guiada frente al mar para agradecer y renovar tu energía.",
    fullDescription:
      "Una experiencia espiritual guiada por fuego, copal y sabiduría maya. Limpia energética y ofrendas al mar.",
    images: [
      "https://i.postimg.cc/3NRPcCFD/Ceremonia-y-Tour-Nocturno-24.jpg",
      "https://i.postimg.cc/k5mLmdyd/Ceremonia-y-Tour-Nocturno-25.jpg",
      "https://i.postimg.cc/9Xg3qKcy/Ceremonia-y-Tour-Nocturno-26.jpg",
    ],
    duration: "40 minutos",
    included: ["Ceremonia frente al mar", "Ofrendas", "Guía espiritual"],
  },
  {
    id: 8,
    title: "Biking Tour – Pueblo Fantasma",
    pricePerPerson: 350,
    img: "https://i.postimg.cc/g02qRSzy/Whats-App-Image-2024-10-19-at-2-19-56-PM.jpg",
    shortDescription:
      "Recorre en bicicleta la selva nocturna hacia un pueblo fantasma lleno de leyendas.",
    fullDescription:
      "Pedalea bajo la luna y descubre las historias ocultas del bosque y el antiguo pueblo.",
    images: [
      "https://i.postimg.cc/Y9g4mYWn/Whats-App-Image-2024-10-19-at-2-19-55-PM-1-1.jpg",
      "https://i.postimg.cc/WzvdmzGC/IMG-0467.jpg",
      "https://i.postimg.cc/sxrMPxYb/IMG-0443.jpg",
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
function nextPage() { if (currentPage.value < totalPages.value) currentPage.value++; }
function prevPage() { if (currentPage.value > 1) currentPage.value--; }

/* ================== Modal + Galería ================== */
const selectedExperience = ref<Experience | null>(null);
const currentImageIndex = ref(0);
const imageLoaded = ref(false);

function openModal(exp: Experience) {
  selectedExperience.value = exp;
  currentImageIndex.value = 0;
  imageLoaded.value = false;
}

function closeModal() {
  selectedExperience.value = null;
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
  // por si desmonta con modal abierto
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
          <img :src="exp.img" class="thumb" loading="lazy" :alt="exp.title" />
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
      <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente →</button>
    </div>

    <!-- MODAL -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="selectedExperience"
          class="overlay"
          @click.self="closeModal"
          aria-modal="true"
          role="dialog"
        >
          <div class="modal" role="document">
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
                  <div v-if="!imageLoaded" class="skeleton"></div>
                  <img
                    v-show="imageLoaded"
                    :src="selectedExperience.images[currentImageIndex]"
                    @load="imageLoaded = true"
                    class="active-img"
                    :alt="selectedExperience.title"
                  />
                  <button class="nav prev" @click="prevImage" aria-label="Anterior">‹</button>
                  <button class="nav next" @click="nextImage" aria-label="Siguiente">›</button>
                  <div class="counter">
                    {{ currentImageIndex + 1 }} / {{ selectedExperience.images.length }}
                  </div>
                </div>

                <div class="thumbs" aria-label="Miniaturas">
                  <button
                    v-for="(img, i) in selectedExperience.images"
                    :key="i"
                    class="thumb-btn"
                    :class="{ active: i === currentImageIndex }"
                    @click="(currentImageIndex = i), (imageLoaded = false)"
                  >
                    <img :src="img" :alt="`${selectedExperience.title} imagen ${i+1}`" loading="lazy" />
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
                  <li v-for="i in selectedExperience.included" :key="i"> {{ i }} </li>
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
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* ====== Base catálogo ====== */
.catalog {
  background: #f5e6d3;
  padding: 3rem 2rem;
  font-family: "Merriweather", serif;
  color: #1b3b2f;
  text-align: center;
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
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: transform .25s ease, box-shadow .25s ease;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0,0,0,.08);
}
.thumb-wrap {
  position: relative;
}
.badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #1b3b2f;
  color: #fff;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: .75rem;
  text-transform: uppercase;
  letter-spacing: .5px;
}
.thumb {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}
.card-content {
  padding: 1rem 1rem 1.2rem;
}
.card-content h3 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.6rem;
  color: #1b3b2f;
  line-height: 1.1;
  margin-bottom: .25rem;
}
.card-content p {
  font-size: .95rem;
  color: #4e342e;
  margin: 0 0 .6rem;
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
  gap: .9rem;
  margin-top: 2rem;
  font-family: "Bebas Neue", sans-serif;
}
.pagination button {
  background: #1b3b2f;
  color: #fff;
  border: none;
  padding: .55rem 1.2rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  transition: background .2s ease, transform .1s ease;
}
.pagination button:hover { background: #1da851; }
.pagination button:active { transform: translateY(1px); }
.pagination button:disabled { opacity: .5; cursor: not-allowed; }

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
  /* aísla el scroll del modal para que no 'empuje' el body */
  overscroll-behavior: contain;
}

.modal {
  background: #fffdf8;
  border-radius: 20px;
  width: min(100%, 1040px);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* importante para que el scroll sea interno */
  box-shadow: 0 30px 80px rgba(0,0,0,.25);
}

/* Header modal */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .9rem 1.2rem .9rem 1.2rem;
  border-bottom: 1px solid rgba(0,0,0,.06);
  background: linear-gradient(180deg,#ffffff 0%, #fffaf3 100%);
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
  width: 36px; height: 36px;
  border-radius: 12px;
  font-size: 22px;
  cursor: pointer;
  transition: background .2s ease, transform .08s ease;
  display: inline-flex; align-items: center; justify-content: center;
}
.icon-btn:hover { background: #e7e5dc; }
.icon-btn:active { transform: translateY(1px); }

/* Body modal: dos columnas con scroll propio */
.modal-body {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.2rem;
  padding: 1.2rem;
  overflow: auto;       /* <- el scroll vive aquí, no en el body */
}

/* Galería */
.gallery {
  display: flex;
  flex-direction: column;
  gap: .8rem;
}
.main-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 14px;
  overflow: hidden;
  background: #eee;
}
.skeleton {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #eee, #f6f6f6, #eee);
  background-size: 200% 100%;
  animation: loading 1.4s infinite linear;
}
@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.active-img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
}

/* Botones navegación de imagen */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 38px; height: 38px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,.45);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  transition: background .2s ease, transform .08s ease;
}
.nav:hover { background: rgba(0,0,0,.6); }
.nav:active { transform: translateY(-50%) scale(.98); }
.nav.prev { left: 10px; }
.nav.next { right: 10px; }

.counter {
  position: absolute;
  bottom: 10px; right: 10px;
  background: rgba(0,0,0,.55);
  color: #fff;
  font-size: .8rem;
  padding: 4px 8px;
  border-radius: 999px;
}

/* Thumbnails */
.thumbs {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(72px, 1fr);
  gap: .5rem;
  overflow-x: auto;
  padding-bottom: .2rem;
  scrollbar-width: thin;
}
.thumb-btn {
  padding: 0;
  border: 2px solid transparent;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  transition: border-color .15s ease, transform .08s ease;
}
.thumb-btn:hover { transform: translateY(-1px); }
.thumb-btn.active { border-color: #1b3b2f; }
.thumb-btn img {
  width: 100%; height: 72px; object-fit: cover; border-radius: 8px; display: block;
}

/* Detalles */
.details {
  display: flex;
  flex-direction: column;
  gap: .9rem;
  color: #1b3b2f;
  font-size: .98rem;
}
.full-desc {
  color: #4e342e;
  line-height: 1.65;
}
.meta {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  color: #1b3b2f;
  font-weight: 600;
}
.included {
  list-style: none;
  padding: 0; margin: .2rem 0 0;
  display: grid; gap: .4rem;
}
.included li::before {
  content: "✓";
  color: #1da851;
  margin-right: .5rem;
  font-weight: 700;
}
.price-box {
  margin-top: .4rem;
  background: linear-gradient(135deg, #1b3b2f, #1da851);
  color: #fff;
  padding: .8rem 1rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
}

/* Responsive modal */
@media (max-width: 920px) {
  .modal-body { grid-template-columns: 1fr; }
  .main-image { aspect-ratio: 16/11; }
}

/* Fade del overlay/modal (no afecta story/scroll) */
.fade-enter-active, .fade-leave-active { transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
