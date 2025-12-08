<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { shopify } from '../../services/shopify'

// -----------------------------
// Reviews (Datos Estáticos)
// -----------------------------
const REVIEWS = [
  { 
    author: "Geraline Amisadai Blanco Lopez", 
    date: "Hace 3 meses",
    text: "Eternamente agradecidos con el Sr. Enrique Can, por habernos llevado a conocer lugares mágicos en Celestún, por compartir con nosotros su AMPLIO CONOCIMIENTO. El tour fue nuestra mejor elección, la experiencia es frente a frente, poder palpar y experimentar en carne propia no tiene precio. Si hay alguien que sabe de Celestún y su cultura es don Enrique. 🌟",
    href: "https://www.google.com/maps/contrib/114966847833682973121/reviews"
  },
  { 
    author: "Deicy Antolinez", 
    date: "Hace 3 meses",
    text: "Más que un recorrido, es una oportunidad para mirar el lugar desde una perspectiva ecológica, sensible y consciente. Se siente el amor que Eduardo tiene por su tierra y su dedicación a preservarla. Al participar, también estás apoyando la economía local y a las personas que cuidan este ecosistema con respeto y compromiso. 💚 Si llegas hasta aquí, regálate esta experiencia.",
    href: "https://www.google.com/maps/contrib/112675971553818610740/reviews"
  },
  { 
    author: "Ariana NAVA GARDUÑO", 
    date: "Hace 11 meses",
    text: "Tours guiados por la reserva de la biosfera ría celestún, flamencos, manglares, aguas rosas, bosque petrificado, ex hacienda. Paseos en lanchas, mototaxis, canoas, senderismo en bicicleta y más. Excelente servicio.",
    href: "https://www.google.com/maps/contrib/108396347320297964175/reviews"
  },
  { 
    author: "Laura Camara", 
    date: "Hace 2 meses",
    text: "¡Una experiencia inolvidable! El recorrido por los manglares fue mágico y ver a los flamingos tan cerca fue espectacular. Los guías son muy amables y conocedores. Súper recomendado.",
    href: "https://www.facebook.com/lccamara.celis"
  },
  { 
    author: "Juan Sarmiento", 
    date: "Hace 1 mes",
    text: "Excelente servicio. Nos explicaron todo sobre la flora y fauna del lugar. Se nota el amor que tienen por su tierra. Sin duda volveremos.",
    href: "https://www.facebook.com/juan.sarmientosantiago"
  },
]

// -----------------------------
// Shopify
// -----------------------------
const products = ref<any[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const toArray = (maybeCollection: any) => {
  if (Array.isArray(maybeCollection)) return maybeCollection
  if (maybeCollection?.models) return maybeCollection.models
  if (maybeCollection?.edges) return maybeCollection.edges.map((e: any) => e.node)
  return []
}

const normalizeProducts = (fetched: any[]) => {
  return fetched.map(product => {
    const imagesRaw = toArray(product.images)
    const variantsRaw = toArray(product.variants)

    const images = imagesRaw
      .map((img: any) => {
        let src = img.src ?? img.url ?? img?.image?.src ?? null

        // FIX: Generar URL optimizada de Shopify (600px)
        if (src?.includes("cdn.shopify.com")) {
          const hasQuery = src.includes("?")
          src = hasQuery ? src + "&width=600" : src + "?width=600"
        }

        return {
          id: img.id ?? img?.image?.id ?? crypto.randomUUID(),
          src,
          altText: img.altText ?? "",
        }
      })
      .filter((i: any) => !!i.src)

    const variants = variantsRaw.map((v: any) => ({
      id: v.id,
      title: v.title,
      price: Number(v.price?.amount ?? v.price ?? 0),
      currency: v.price?.currencyCode ?? "MXN",
      image: v.image?.src ?? null,
    }))

    return {
      id: product.id,
      title: product.title,
      description: product.description,
      onlineStoreUrl: product.onlineStoreUrl,
      images,
      variants,
      firstImage: images[0]?.src ?? null,
      price: variants[0]?.price ?? null,
      currency: variants[0]?.currency ?? "MXN",
      available: product.availableForSale ?? true,
    }
  })
}

onMounted(async () => {
  try {
    loading.value = true
    error.value = null
    const fetchedProducts = await shopify.product.fetchAll()
    products.value = normalizeProducts(fetchedProducts)
  } catch (err) {
    console.error('Shopify error:', err)
    error.value = 'No se pudieron cargar los productos.'
  } finally {
    loading.value = false
  }
})

// -----------------------------
// Utils
// -----------------------------
const formatPrice = (value: number | string | null, currency = 'MXN') => {
  const num = typeof value === 'string' ? Number(value) : value
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency }).format(num || 0)
}
</script>

<template>
  <div class="page-wrapper">
    <!-- RESEÑAS -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <div class="header-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
            <span>Opiniones Reales</span>
          </div>
          <h2 class="section-title">Lo que dicen nuestros visitantes</h2>
          <p class="section-description">
            Historias reales de personas que han vivido la experiencia Celestún
          </p>
        </div>

        <div class="reviews-grid">
          <div
            v-for="(review, index) in REVIEWS"
            :key="index"
            class="review-card"
          >
            <div class="review-content">
              <div class="review-header">
                <div class="reviewer-avatar">
                  <span>{{ review.author.charAt(0) }}</span>
                </div>
                <div class="reviewer-info">
                  <h3 class="reviewer-name">{{ review.author }}</h3>
                  <span class="review-date">{{ review.date }}</span>
                </div>
              </div>
              
              <div class="review-rating">
                <svg v-for="i in 5" :key="i" width="16" height="16" viewBox="0 0 24 24" fill="#FACC15">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>

              <p class="review-text">"{{ review.text }}"</p>
            </div>
          </div>
        </div>

        <div class="action-buttons">
           <!-- BOTÓN GOOGLE -->
          <a
            href="https://www.google.com/search?sca_esv=433c76685208b106&sxsrf=AE3TifOI0zTwOJiovfeeYYzslQFPJV8VXA:1765164886812&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-B8csZhWD2nWgw_IyZ23ehsl8yCPa_HjMed0OJy8PDJ8TvntAAAFMiPMBkwLv7HzV0TizrCY42wuVbh9Tnkz-sQms2-lezRNfh7LggMTv2OvsNRRA%3D%3D&q=Eco+Turismo+Sac+Bej+Celest%C3%BAn+Opiniones&sa=X&ved=2ahUKEwjeqLHQh62RAxVeH0QIHfDDC9QQ0bkNegQIUBAE&biw=1680&bih=898&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-social btn-google"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
               <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
            </svg>
            Ver reseñas en Google
          </a>

          <!-- BOTÓN FACEBOOK -->
          <a
            href="https://www.facebook.com/profile.php?id=100063497890923&sk=reviews"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-social btn-facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Ver reseñas en Facebook
          </a>
        </div>
      </div>
    </section>

    <!-- CATÁLOGO -->
    <section class="catalog-section">
      <div class="container">
        <div class="section-header">
          <div class="header-badge catalog-badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span>Tienda oficial</span>
          </div>
          <h2 class="section-title">Nuestros productos</h2>
          <p class="section-description">
            Descubre artesanías locales y recuerdos únicos de Celestún
          </p>
        </div>

        <div class="catalog-wrapper">
          <div v-if="loading" class="loading-state">
            <div class="spinner" />
            <p>Cargando productos…</p>
          </div>

          <div v-else-if="error" class="error-state">
            <h3>Ups, algo pasó</h3>
            <p>{{ error }}</p>
          </div>

          <div v-else-if="!products.length" class="empty-state">
            <h3>Sin productos por ahora</h3>
            <p>Vuelve más tarde.</p>
          </div>

          <div v-else class="product-grid">
            <article v-for="p in products" :key="p.id" class="product-card">
              <div class="product-image-wrapper">
                <img
                  :src="p.firstImage || 'https://via.placeholder.com/600x600?text=Sin+Imagen'"
                  :alt="p.title"
                  class="product-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div class="product-info">
                <h3 class="product-title" :title="p.title">{{ p.title }}</h3>

                <p v-if="p.price != null" class="price">
                  {{ formatPrice(p.price, p.currency) }}
                </p>
                <p v-else class="price">Precio no disponible</p>

                <a
                  v-if="p.onlineStoreUrl"
                  :href="p.onlineStoreUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="buy-button"
                >
                  Ver producto
                </a>
                <button v-else class="buy-button disabled" disabled>No disponible</button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Lora:wght@500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page-wrapper {
  width: 100%;
  background: #fff;
}

/* CONTENEDOR */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 4vw, 2.5rem);
}

/* ENCABEZADO */
.section-header {
  text-align: center;
  padding: clamp(4rem, 8vw, 6rem) 0 clamp(3rem, 6vw, 4rem);
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f0fdf4;
  color: #16a34a;
  font-family: 'Poppins', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  margin-bottom: 1.5rem;
}

.catalog-badge {
  background: #fef3c7;
  color: #b45309;
}

.section-title {
  font-family: 'Lora', serif;
  font-size: clamp(2.25rem, 5vw, 3rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-description {
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 400;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* RESEÑAS */
.reviews-section {
  background: #fff; /* Fondo blanco limpio */
  padding-bottom: clamp(4rem, 8vw, 6rem);
  position: relative;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3.5rem;
  width: 100%;
}

.reviews-grid.masonry {
  /* En modo "ver todas", mantenemos el grid para uniformidad */
  display: grid; 
  column-count: auto;
}

.review-card {
  background: #fff;
  border-radius: 12px;
  padding: 0;
  width: 350px;
  max-width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
  height: fit-content;
  flex-shrink: 0;
}

.reviews-grid.masonry .review-card {
  width: 100%;
  break-inside: avoid;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  display: inline-block;
}

.review-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  border-color: #cbd5e1;
}

/* Estilos de Tarjeta de Reseña */
/* Estilos de Tarjeta de Reseña (Premium / Glassmorphism) */
.review-card {
  width: 100%; /* Ocupa celda del grid */
  height: 100%; /* Estira al alto de la fila */
  display: flex; /* Para alinear contenido si fuera necesario */
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px -5px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.review-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.98);
  border-color: rgba(255, 255, 255, 0.9);
  z-index: 10;
}

.review-content {
  display: flex;
  flex-direction: column;
  padding: 2.2rem;
  position: relative;
  z-index: 2;
  flex: 1; /* Empuja el contenido para llenar */
  height: 100%;
}

/* Watermark de comillas */
.review-content::before {
  content: "“";
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-family: 'Lora', serif;
  font-size: 8rem;
  line-height: 1;
  color: #A68A6D;
  opacity: 0.08;
  pointer-events: none;
  z-index: -1;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.reviewer-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 2px solid #fff;
}

.reviewer-info {
  flex: 1;
}

.reviewer-name {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
  margin-bottom: 0.15rem;
}

.review-date {
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
  display: block;
}

.review-rating {
  display: flex;
  gap: 3px;
  margin-bottom: 1.25rem;
}

.review-text {
  font-family: 'Lora', serif;
  font-size: 1.05rem;
  color: #334155;
  line-height: 1.7;
  font-style: italic;
  position: relative;
}

/* ACCIONES */
.action-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.btn-social {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid transparent;
}

.btn-google {
  background: #fff;
  color: #3c4043;
  border-color: #dadce0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.btn-google:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-color: #d2e3fc;
}

.btn-facebook {
  background: #1877f2;
  color: #fff;
  box-shadow: 0 4px 10px rgba(24, 119, 242, 0.2);
}

.btn-facebook:hover {
  background: #166fe5;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(24, 119, 242, 0.3);
}

/* CATÁLOGO */
.catalog-section {
  background: #F5E6D3;
  padding-bottom: clamp(4rem, 8vw, 6rem);
}

.catalog-wrapper {
  width: 100%;
  min-height: 400px;
  background: #f8fafc;
  border-radius: 12px;
  overflow: auto;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* ESTADOS */
.loading-state,
.error-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 400px;
}

.loading-state p,
.error-state p,
.empty-state p {
  font-family: 'Poppins', sans-serif;
  color: #64748b;
  margin-top: 1rem;
  font-size: 1rem;
}

.error-state h3,
.empty-state h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: #0f172a;
  margin: 1rem 0 0.5rem;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e2e8f0;
  border-top-color: #facc15;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* GRID */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.product-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  contain: content;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.product-image-wrapper {
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: #f1f5f9;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  background: transparent;
}

.product-card:hover .product-img {
  transform: scale(1.05);
}

.product-info {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.price {
  font-family: 'Poppins', sans-serif;
  color: #475569;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.buy-button {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  background: #facc15;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  color: #1e293b;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  transition: all 0.2s ease;
  cursor: pointer;
  margin-top: auto;
}

.buy-button:hover {
  background: #eab308;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(250, 204, 21, 0.3);
}

.buy-button.disabled {
  background: #e2e8f0;
  color: #94a3b8;
  cursor: not-allowed;
}

.buy-button.disabled:hover {
  transform: none;
  box-shadow: none;
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .reviews-grid:not(.masonry) {
    flex-wrap: wrap;
  }
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .reviews-grid {
    flex-direction: column;
    align-items: center;
  }

  .reviews-grid.masonry {
    column-count: 2;
  }

  .review-card {
    width: 100%;
    max-width: 500px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn-toggle,
  .btn-facebook {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
    padding: 1.5rem;
  }
}

@media (max-width: 540px) {
  .reviews-grid.masonry {
    column-count: 1;
  }

  .review-card {
    width: 100%;
    max-width: 100%;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
