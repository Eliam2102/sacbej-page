<script setup lang="ts">
import { ref, computed } from 'vue';
import { Experience } from '../interfaces/Experience';
import { Icon } from '@iconify/vue'

// CONFIGURACIÓN - REEMPLAZA CON TU URL DE GOOGLE APPS SCRIPT
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxFReYtFFkq7BQqHC491qXSU6UIax2QUQTbkjDviUUwv7RoRXOqinIa5RTENRGVLL7q4w/exec';



const experiences: Experience[] = [
  {
    id: 1,
<<<<<<< HEAD
    title: "Sac Bej – Camino Blanco",
    pricePerPerson: 1250,
    img: "https://i.postimg.cc/C1s5JJr8/5.png",
    badge: "popular",
    shortDescription: "Recorre la zona sur de la Reserva Ría Celestún en tuc tuc: salinas rosas, bosque petrificado y flamencos.",
    fullDescription: `¡Bienvenidos a una experiencia única de conexión con la naturaleza! Te invitamos a disfrutar de un recorrido exclusivo por la parte sur de la Reserva de la Biosfera Ría Celestún, conocido como Sac Bej (“Camino Blanco” en lengua maya).
    Durante una hora y media a dos horas en tuc tuc explorarás el puerto de pescadores, las charcas de sal rosa, el bosque petrificado, la ex hacienda Real de Salinas y, de diciembre a marzo, la zona de flamencos rosados.
    Ideal para quienes buscan historia, paisajes y contacto directo con la naturaleza.`,
    images: [
      "https://i.postimg.cc/Jn50KKYH/6.png",
      "https://i.postimg.cc/RFLhGGpH/7.png",
      "https://i.postimg.cc/76nhXXtG/9.png"
    ],
    duration: "1.5 a 2 horas",
    included: [
      "Transporte en tuc tuc",
      "Guía certificado bilingüe (NOM 09 TUR 2002)",
      "Servicio de pick-up en hoteles de Celestún",
      "Descuentos para adulto mayor y personas con discapacidad"
    ]
  },
  {
    id: 2,
    title: "Surf Casting – Pesca en el Golfo",
    pricePerPerson: 3500,
    img: "https://i.postimg.cc/B6Wzgfj6/surf.jpg",
    shortDescription: "Pesca deportiva en el Golfo de México: corvina, robalo, jurel, pargo y más.",
    fullDescription: `Disfruta una jornada de pesca inolvidable en las aguas color verde esmeralda del Golfo de México. Captura especies como corvina, robalo o pargo mientras disfrutas del mar y un ceviche fresco estilo ribereño. Ideal para grupos de amigos o familias.`,
    images: [
      "https://i.postimg.cc/W3MHYYZv/sruf-2.jpg",
      "https://i.postimg.cc/gJvTtthd/surf3.jpg",
      "https://i.postimg.cc/zBnc22hN/surf4.jpg"
    ],
    duration: "5 horas",
    included: [
      "Embarcación privada (hasta 4 personas)",
      "Guía y equipo de pesca",
      "Ceviche fresco estilo ribereño",
      "Salida recomendada 6:30 a.m."
    ]
  },
  {
    id: 3,
    title: "Kayak en el Corazón del Manglar",
    pricePerPerson: 1550,
    img: "https://i.postimg.cc/dVYm4QBn/Chat-GPT-Image-Oct-18-2025-07-24-00-PM.png",
    badge: "popular",
    shortDescription: "Remo entre manglares al amanecer o al anochecer, rodeado de aves, flamencos y luciérnagas.",
    fullDescription: `Vive una experiencia única dentro de la gran reserva Ría Celestún. Navega entre manglares hasta el corazón del humedal, donde descubrirás aves como el martín pescador enano y los flamencos rosados al amanecer.  
    También puedes elegir la versión nocturna: “Kayak de noche”, donde el cocodrilo es el anfitrión y las luciérnagas iluminan el camino.`,
    images: [
      "https://i.postimg.cc/1X04tSNT/Chat-GPT-Image-Oct-18-2025-07-27-34-PM.png",
      "https://i.postimg.cc/h4MBShJD/Chat-GPT-Image-Oct-18-2025-07-31-17-PM.png",
      "https://i.postimg.cc/XqNXphcK/Chat-GPT-Image-Oct-18-2025-07-42-58-PM.png",
    ],
    duration: "2 horas",
    included: [
      "Kayak doble (2 personas)",
      "Guía certificado bilingüe",
      "Lámparas para recorrido nocturno",
      "Transporte en tuc tuc (si aplica)"
    ]
  },
  {
    id: 4,
    title: "Birdwatching – Observación de Aves",
    pricePerPerson: 1450,
    img: "https://i.postimg.cc/9Ff85YqW/Chat-GPT-Image-Oct-18-2025-08-17-33-PM.png",
    shortDescription: "Más de 200 especies de aves en la Ría Celestún con guía experto y equipo óptico.",
    fullDescription: `Es de mañana, binoculares en mano y olor a café... Es hora de ver aves.  
    Disfruta observando más de 200 especies, muchas endémicas de Yucatán como el colibrí tijereta mexicano o la matraca yucateca. Nuestro guía certificado te ayudará a encontrarlas en su hábitat natural.`,
    images: [
      "https://i.postimg.cc/hPtW5gtG/Chat-GPT-Image-Oct-18-2025-07-55-03-PM.png",
      "https://i.postimg.cc/Fs5NWwJ8/Chat-GPT-Image-Oct-18-2025-07-48-32-PM.png",
      "https://i.postimg.cc/BQXHpLHc/Chat-GPT-Image-Oct-18-2025-07-51-54-PM.png"
    ],
    duration: "4.5 horas",
    included: [
      "Guía federal NOM 09-TUR-2002",
      "Transportación terrestre en tuc tuc",
      "Equipo óptico básico",
      "Salida recomendada: 6:00 a.m."
    ]
  },
  {
    id: 5,
    title: "Ría Celestún – Flamingo Tour",
    pricePerPerson: 4100,
    img: "https://i.postimg.cc/6QbggbMs/Chat-GPT-Image-Oct-18-2025-08-12-03-PM.png",
    badge: "oferta",
    shortDescription: "Tour en lancha por la Ría Celestún: flamencos, túnel de manglar, isla de aves y ojo de agua.",
    fullDescription: `Descubre la magia de la Ría Celestún en una aventura que combina observación de flamencos, navegación por manglares y baño en el ojo de agua.  
Incluye visita a la isla de aves, túnel de manglar y observación de cocodrilos.  
Una experiencia imperdible para amantes de la naturaleza.`,
    images: [
      "https://i.postimg.cc/d3Hyjv5D/491518218-18006243275739535-6303338094946747857-n.jpg",
      "https://i.postimg.cc/kg70bmkM/491499260-18006243257739535-4895587472905209765-n.jpg",
      "https://i.postimg.cc/52Fsyktj/486561792-1223155886478538-1220087316864002473-n.jpg",
      "https://i.postimg.cc/rFTxXVdC/Chat-GPT-Image-Oct-18-2025-08-09-28-PM.png"
    ],
    duration: "1 hora 20 min",
    included: [
      "Guía certificado NOM 09-TUR-2003",
      "Guía bilingüe",
      "Embarcación (1 a 6 personas)",
      "Pago de acceso al parque",
      "Estacionamiento y W.C."
    ]
  },
  {
    id: 6,
    title: "Moonlight Safari – Tour Nocturno en la Ría",
    pricePerPerson: 5600,
    img: "/src/assets/Ceremonia y Tour Nocturno-08.jpg",
    shortDescription: "Avistamiento de cocodrilos y luciérnagas bajo la luz de la luna.",
    fullDescription: `Únete a nuestro exclusivo tour nocturno en la Reserva de la Biosfera Ría Celestún.  
    Observa cocodrilos en su hábitat natural, aves durmiendo entre los manglares y el mágico espectáculo de las luciérnagas.  
    Una experiencia para verdaderos aventureros.`,
    images: [
      "https://i.postimg.cc/1RwvHFKG/Ceremonia-y-Tour-Nocturno-02.jpg",
      "https://i.postimg.cc/xTLBc77n/Ceremonia-y-Tour-Nocturno-16.jpg",
      "https://i.postimg.cc/zXT4VMMD/coco-pos.jpg"
    ],
    duration: "2 horas",
    included: [
      "Embarcación privada (1 a 5 personas)",
      "Guía certificado NOM 09-TUR-2002",
      "Equipo de iluminación nocturna",
      "Reserva con 50% de anticipo"
    ]
  },
  {
    id: 7,
    title: "Ceremonia XUKULEM – Conexión Espiritual al Atardecer",
    pricePerPerson: 2400,
    img: "https://i.postimg.cc/5tVDVMmf/Ceremonia-y-Tour-Nocturno-22.jpg",
    shortDescription: "Ceremonia maya guiada frente al mar para agradecer y renovar tu energía.",
    fullDescription: `Vive una experiencia espiritual guiada por el fuego, el copal y la sabiduría maya.  
    Una ceremonia sagrada para cerrar ciclos y recibir el mensaje de la naturaleza.  
    Incluye limpia energética y ofrendas a los cuatro vientos.`,
    images: [
      "https://i.postimg.cc/3NRPcCFD/Ceremonia-y-Tour-Nocturno-24.jpg",
      "https://i.postimg.cc/k5mLmdyd/Ceremonia-y-Tour-Nocturno-25.jpg",
      "https://i.postimg.cc/9Xg3qKcy/Ceremonia-y-Tour-Nocturno-26.jpg",
      "https://i.postimg.cc/J0G2q7Rs/Ceremonia-y-Tour-Nocturno-33.jpg"
    ],
    duration: "40 minutos",
    included: [
      "Ceremonia guiada al atardecer frente al mar",
      "Ofrendas y limpia con copal",
      "Mensaje ritual personalizado",
      "Hasta 10 personas por grupo"
    ]
  },
  {
    id: 8,
    title: "Biking Tour: Pueblo Fantasma",
    pricePerPerson: 350,
    img: "https://i.postimg.cc/g02qRSzy/Whats-App-Image-2024-10-19-at-2-19-56-PM.jpg",
    shortDescription: "Recorre en bicicleta la selva nocturna rumbo a un pueblo fantasma lleno de leyendas.",
    fullDescription: `Atrévete a pedalear bajo la luna por la Reserva de la Biosfera Ría Celestún.  
    Viaja hacia un pueblo fantasma y conoce sus relatos más misteriosos.  
    Una mezcla perfecta de historia, adrenalina y misticismo.`,
    images: [
      "https://i.postimg.cc/Y9g4mYWn/Whats-App-Image-2024-10-19-at-2-19-55-PM-1-1.jpg",
      "https://i.postimg.cc/nz7sQBDd/Whats-App-Image-2024-10-19-at-2-19-55-PM.jpg",
      "https://i.postimg.cc/WzvdmzGC/IMG-0467.jpg",
      "https://i.postimg.cc/sxrMPxYb/IMG-0443.jpg"
    ],
    duration: "2 a 2.5 horas",
    included: [
      "Guía certificado federal",
      "Bicicleta y equipo nocturno",
      "Iluminación de seguridad",
      "Relatos y leyendas locales"
    ]
  }
];


=======
    title: "Aventura en Cenotes",
    pricePerPerson: 1200,
    img: "https://picsum.photos/400?random=1",
    badge: "popular",
    shortDescription: "Explora los místicos cenotes de la región con guía experto",
    fullDescription: "Sumérgete en la magia de los cenotes sagrados mayas. Esta experiencia incluye visita a 3 cenotes diferentes, equipo de snorkel, guía certificado y transporte. Descubre la belleza natural y la historia ancestral de estos lugares únicos.",
    images: ["https://picsum.photos/400?random=1", "https://picsum.photos/400?random=11", "https://picsum.photos/400?random=21"],
    duration: "6 horas",
    included: ["Transporte", "Guía certificado", "Equipo de snorkel", "Comida"]
  },
  {
    id: 2,
    title: "Tour Arqueológico Maya",
    pricePerPerson: 1800,
    img: "https://picsum.photos/400?random=2",
    badge: "oferta",
    shortDescription: "Descubre las antiguas ciudades mayas con arqueólogos expertos",
    fullDescription: "Viaja en el tiempo visitando las ruinas más impresionantes de la civilización maya. Incluye Chichén Itzá y Ek Balam con explicaciones detalladas de arqueólogos profesionales. Transporte, comida y entradas incluidas.",
    images: ["https://picsum.photos/400?random=2", "https://picsum.photos/400?random=12", "https://picsum.photos/400?random=22"],
    duration: "8 horas",
    included: ["Transporte privado", "Arqueólogo guía", "Entradas", "Comida típica"]
  },
  {
    id: 3,
    title: "Experiencia Gastronómica",
    pricePerPerson: 950,
    img: "https://picsum.photos/400?random=3",
    shortDescription: "Saborea la auténtica cocina yucateca en un tour culinario único",
    fullDescription: "Disfruta de una experiencia gastronómica completa visitando mercados locales, aprendiendo a cocinar platillos tradicionales y degustando los mejores sabores de Yucatán. Incluye clase de cocina, degustaciones y recetas para llevar.",
    images: ["https://picsum.photos/400?random=3", "https://picsum.photos/400?random=13", "https://picsum.photos/400?random=23"],
    duration: "5 horas",
    included: ["Chef profesional", "Ingredientes", "Degustaciones", "Recetario"]
  },
  {
    id: 4,
    title: "Kayak y Flamencos",
    pricePerPerson: 1100,
    img: "https://picsum.photos/400?random=4",
    badge: "popular",
    shortDescription: "Navega en kayak por manglares y observa flamencos rosados",
    fullDescription: "Una experiencia única navegando por los manglares de Celestún o Río Lagartos, hogar de miles de flamencos rosados. Incluye kayak, guía naturalista, avistamiento de aves y fauna local. Ideal para amantes de la naturaleza.",
    images: ["https://picsum.photos/400?random=4", "https://picsum.photos/400?random=14", "https://picsum.photos/400?random=24"],
    duration: "7 horas",
    included: ["Kayak y equipo", "Guía naturalista", "Transporte", "Box lunch"]
  },
  {
    id: 5,
    title: "Noche de Leyendas",
    pricePerPerson: 750,
    img: "https://picsum.photos/400?random=5",
    badge: "oferta",
    shortDescription: "Recorrido nocturno por el centro histórico con cuentos y leyendas",
    fullDescription: "Descubre el lado místico de Mérida en un recorrido nocturno lleno de leyendas, historias y misterios. Visita lugares emblemáticos bajo la luz de la luna mientras escuchas relatos fascinantes. Incluye bebida tradicional.",
    images: ["https://picsum.photos/400?random=5", "https://picsum.photos/400?random=15", "https://picsum.photos/400?random=25"],
    duration: "3 horas",
    included: ["Guía narrador", "Bebida típica", "Entrada a sitios"]
  },
  {
    id: 6,
    title: "Hacienda y Spa",
    pricePerPerson: 2200,
    img: "https://picsum.photos/400?random=6",
    shortDescription: "Relájate en una hacienda histórica con spa y comida gourmet",
    fullDescription: "Pasa un día de lujo en una hacienda henequenera restaurada. Incluye tour por la hacienda, masaje relajante, acceso a spa, piscina y comida gourmet de tres tiempos. La experiencia perfecta para desconectar.",
    images: ["https://picsum.photos/400?random=6", "https://picsum.photos/400?random=16", "https://picsum.photos/400?random=26"],
    duration: "8 horas",
    included: ["Spa completo", "Masaje", "Comida gourmet", "Alberca"]
  }
];

>>>>>>> 56f13d2f231dec018fa25590f89d926496f87baa
const searchQuery = ref('');
const selectedExperience = ref<Experience | null>(null);
const currentImageIndex = ref(0);
const isSubmitting = ref(false);
const bookingSuccess = ref(false);
const bookingResult = ref<any>(null);

// Datos del formulario
const bookingData = ref({
  fullName: '',
  phone: '',
  email: '',
  numberOfPeople: 1,
  selectedDate: '',
  selectedTime: '09:00',
  comments: ''
});

const filteredExperiences = computed(() => {
  return experiences.filter(e => 
    e.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const totalAmount = computed(() => {
  if (!selectedExperience.value) return 0;
  return selectedExperience.value.pricePerPerson * bookingData.value.numberOfPeople;
});

const depositAmount = computed(() => {
  return Math.round(totalAmount.value * 0.4);
});

const openModal = (experience: Experience) => {
  selectedExperience.value = experience;
  currentImageIndex.value = 0;
  bookingSuccess.value = false;
  bookingResult.value = null;
  // Reset form
  bookingData.value = {
    fullName: '',
    phone: '',
    email: '',
    numberOfPeople: 1,
    selectedDate: '',
    selectedTime: '09:00',
    comments: ''
  };
};

const closeModal = () => {
  selectedExperience.value = null;
  bookingSuccess.value = false;
};

const changeImage = (index: number) => {
  currentImageIndex.value = index;
};
</script>

<template>
  <div class="catalog-view">
    <main class="main-content">
      <!-- <h4 class="section-subtitle">El secreto rosado de Yucatán.</h4> -->
      <h2 class="section-title">Aventura Salvaje en el Corazón de la costa Yucateca</h2>
      <hr class="hero-divider" />
      <p class="section-subtitle">Olvida los tours convencionales. Te ofrecemos aventuras exclusivas en Celestún: desde un místico baño de arcilla maya hasta la exploración de un bosque petrificado y las fascinantes charcas de sal rosada. Descubre un Celestún que pocos conocen.</p>
      
      <div class="products-grid">
        <div 
          v-for="experience in filteredExperiences" 
          :key="experience.id"
          class="product-card"
          @click="openModal(experience)"
        >
          <div class="product-image-wrapper">
            <img :src="experience.img" :alt="experience.title" class="product-image" />
            <span v-if="experience.badge" class="badge" :class="experience.badge">
              {{ experience.badge }}
            </span>
            <div class="overlay">
              <button class="btn-overlay">Ver Detalles</button>
            </div>
          </div>
          <div class="product-info">
            <h3 class="product-title">{{ experience.title }}</h3>
            <p class="product-description">{{ experience.shortDescription }}</p>
          </div>
        </div>
      </div>
    </main>

    <!-- MODAL -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedExperience" class="modal-overlay" @click="closeModal">
          <div class="modal-content" @click.stop>
            <button class="modal-close" @click="closeModal">&times;</button>

            <div class="modal-grid">
              <!-- GALERÍA -->
              <div class="modal-gallery">
                <img 
                  :src="selectedExperience.images[currentImageIndex]" 
                  :alt="selectedExperience.title" 
                  class="modal-main-image"
                />
                <div class="image-thumbnails">
                  <img 
                    v-for="(img, index) in selectedExperience.images"
                    :key="index"
                    :src="img"
                    class="thumbnail"
                    :class="{ active: currentImageIndex === index }"
                    @click="changeImage(index)"
                  />
                </div>
              </div>

              <!-- INFORMACIÓN -->
              <div class="modal-details">
                <span 
                  v-if="selectedExperience.badge" 
                  class="modal-badge" 
                  :class="selectedExperience.badge"
                >
                  {{ selectedExperience.badge }}
                </span>

                <h2 class="modal-title">{{ selectedExperience.title }}</h2>

                <div class="info-chip">
                  <span class="info-label"><Icon icon="mdi:schedule" width="16"/> Duración:</span>
                  {{ selectedExperience.duration }}
                </div>

                <p class="modal-description">
                  {{ selectedExperience.fullDescription }}
                </p>

                <div class="included-section">
                  <h4 class="included-title"><Icon icon="mdi:check-circle-outline" width="20"/> Incluye:</h4>
                  <ul class="included-list">
                    <li v-for="item in selectedExperience.included" :key="item">{{ item }}</li>
                  </ul>
                </div>

                <div class="price-section">
<<<<<<< HEAD
                  <p class="price-label">Precio</p>
=======
                  <p class="price-label">Precio por persona:</p>
>>>>>>> 56f13d2f231dec018fa25590f89d926496f87baa
                  <p class="modal-price">
                    ${{ selectedExperience.pricePerPerson.toLocaleString() }} MXN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div> 
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');

.catalog-view {
  font-family: "Cormorant Garamond", sans-serif;
  background-color: #F5E6D3;
  min-height: 11vh;
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.section-title {
  font-size: 4rem;
  font-weight: 700;
  color: #1B3B2F;
  text-align: center;
  margin-bottom: 0.5rem;
}
/* Separador decorativo */
.hero-divider {
  border: none;
  border-top: 3px solid #4caf50; /* verde para estilo natural */
  width: 100px;
  margin: 2rem auto; /* más separación */
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #4E342E;
  font-family: "Merriweather", serif !important;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  animation: fadeIn 0.6s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card {
  background-color: #A68A6D;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  animation: slideUp 0.5s ease backwards;
}

.product-card:nth-child(1) { animation-delay: 0.1s; }
.product-card:nth-child(2) { animation-delay: 0.2s; }
.product-card:nth-child(3) { animation-delay: 0.3s; }
.product-card:nth-child(4) { animation-delay: 0.4s; }
.product-card:nth-child(5) { animation-delay: 0.5s; }
.product-card:nth-child(6) { animation-delay: 0.6s; }

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.product-image-wrapper {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/3;
  background-color: #F5F5F5;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover .product-image {
  transform: scale(1.08);
}

.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.badge.popular {
  background: linear-gradient(135deg, #1DA851 0%, #25D366 100%);
  color: #FFFFFF;
}

.badge.oferta {
  background: linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%);
  color: #FFFFFF;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 50%, transparent 100%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.product-card:hover .overlay {
  opacity: 1;
}

.btn-overlay {
  padding: 0.75rem 2rem;
  border: 2px solid #F5E6D3;
  background-color: #f5e6d3f5;
  color: #1B3B2F;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "Bebas Neue", sans-serif;
  backdrop-filter: blur(10px);
}

.btn-overlay:hover {
  background-color: #4CAF50 ;
  border-color: #1B3B2F;;
  color: #F5E6D3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(14, 165, 34, 0.4);
}

.product-info {
  padding: 1.5rem;
}

.product-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: "Bebas Neue", sans-serif;
  margin-bottom: 0.75rem;
  color: #4E342E;
}

.product-description {
  font-size: 0.95rem;
  font-family: 'Merriweather', sans-serif;
  line-height: 1.6;
  color: #F5E6D3;
  font-weight: bold;
}

/* --- MODAL MINIMALISTA PROFESIONAL --- */

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  overflow-y: auto;
}

.modal-content {
  background-color: #F5E6D3;
  border-radius: 16px;
  max-width: 1100px;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  margin: auto;
  transition: all 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 36px;
  height: 36px;
  border: none;
  background-color: #FFFFFF;
  color: #4E342E;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.25s ease;
  line-height: 1;
}

.modal-close:hover {
  background-color: #4E342E;
  color: #FFFFFF;
  transform: rotate(45deg) scale(1.05);
}

.modal-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 2rem;
}

.modal-gallery {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 0;
}

.modal-main-image {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
<<<<<<< HEAD
  margin-top: 135px;
=======
>>>>>>> 56f13d2f231dec018fa25590f89d926496f87baa
  border-radius: 12px;
  background-color: #F5F5F5;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.image-thumbnails {
  display: flex;
  gap: 0.5rem;
}

.thumbnail {
  min-width: 70px;
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.25s ease;
  border: 2px solid transparent;
}

.thumbnail:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.thumbnail.active {
  opacity: 1;
  border-color: #25D366;
}

.modal-details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.modal-badge {
  display: inline-block;
  padding: 0.4rem 1.1rem;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
}

.modal-badge.popular {
  background: linear-gradient(135deg, #1DA851 0%, #25D366 100%);
  color: #FFFFFF;
}

.modal-badge.oferta {
  background: linear-gradient(135deg, #FF6B6B 0%, #EE5A6F 100%);
  color: #FFFFFF;
}

.modal-title {
  font-size: 1.8rem;
  font-weight: 700;
  font-family: "Bebas Neue", sans-serif;
  color: #4E342E;
  line-height: 1.3;
}

.info-chip {
  display: inline-flex;
  align-items: center;
  font-family: "Merriweather", serif;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.95rem;
  width: fit-content;
  background-color: rgba(245, 230, 211, 0.3);
}

.info-label {
  font-weight: 600;
  color: #1A1A1A;
}

.modal-description {
  font-size: 0.975rem;
  font-weight: bold;
  font-family: "Merriweather", serif;
  line-height: 1.65;
  color: #2C2C2C;
}

.included-section {
  padding: 1rem;
  border-radius: 10px;
  background-color: rgba(245, 230, 211, 0.2);
}

.included-title {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Bebas Neue", sans-serif;
  color: #4E342E;
  margin-bottom: 0.75rem;
}

.included-list {
  list-style: none;
  font-family: "Merriweather", serif;
  display: grid;
  gap: 0.5rem;
}

.included-list li {
  padding-left: 1.5rem;
  position: relative;
  color: #2C2C2C;
  font-size: 0.95rem;
}

.included-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #25D366;
  font-weight: bold;
}

.price-section {
  background: linear-gradient(135deg, #1B3B2F  0%, #1DA851 100%);
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

.price-label {
  font-size: 0.9rem;
  opacity: 0.95;
  font-family: "Bebas Neue", sans-serif;
  margin-bottom: 0.25rem;
}

.modal-price {
  font-size: 1.75rem;
  font-weight: 700;
  font-family: "Bebas Neue", sans-serif;
  color: #FFFFFF;
}

<<<<<<< HEAD

=======
>>>>>>> 56f13d2f231dec018fa25590f89d926496f87baa
/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .modal-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .modal-main-image {
    border-radius: 10px;
  }

  .thumbnail {
    min-width: 60px;
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-price {
    font-size: 1.5rem;
  }

  .info-chip {
    padding: 0.4rem 0.8rem;
  }

  .included-title {
    font-size: 1.25rem;
  }
}
<<<<<<< HEAD
.price-section {
  background: linear-gradient(135deg, #1B3B2F 0%, #1DA851 100%);
  padding: 0.25rem 0.5rem; /* 🔹 menos espacio */
  border-radius: 8px;
  text-align: center;
  font-size: 0.8rem;       /* 🔹 texto más pequeño */
  font-weight: 400;
  color: white;
  display: inline-block;   /* 🔹 evita ocupar todo el ancho */
}

=======
>>>>>>> 56f13d2f231dec018fa25590f89d926496f87baa


@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .modal-content {
    padding: 1.5rem;
    border-radius: 16px;
  }

  .modal-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .modal-gallery {
    position: static;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .modal-price {
    font-size: 1.75rem;
  }

  .form-row.two-cols {
    grid-template-columns: 1fr;
  }

  .booking-form {
    padding: 1.5rem;
  }

  .form-title {
    font-size: 1.25rem;
  }

  .btn-book {
    font-size: 1rem;
  }

  .success-message {
    padding: 2rem 1rem;
  }

  .success-icon {
    font-size: 3rem;
  }

  .success-title {
    font-size: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .modal-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1025px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1400px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>