<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { shopify } from '../../services/shopify'

// -----------------------------
// Reviews (estáticos)
// -----------------------------
const REVIEWS = Object.freeze([
  { src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flccamara.celis%2Fposts%2Fpfbid0d5gPfWrkN87s4yY5AH7aaBA63Wfnx1C3xVXrZNrHPoP4HoVvpu3GaWYwpXwhExrLl&width=200&show_text=true&height=551&appId", height: "551" },
  { src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0Yaa9JncbhcEiCQXkeFj79CAzDPm5uf6RmXFcHeXecj9JqrMFPQTqMGAuUinbfd4Kl%26id%3D100063497890923&show_text=true&height=551&appId", height: "551" },
  { src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fanaid.lopez.737%2Fposts%2Fpfbid02ShPJ2abWyNLy5xxK8nfDpGsNFKPgrahAPEjPuFZCTk4Vj3aAWJHMEGBbipfoRzpwl&width=250&show_text=true&height=706&appId", height: "706" },
  { src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjuan.sarmientosantiago%2Fposts%2Fpfbid028qrYGtCWB16qEB42z8pr3esfqRSzCMgi1F4jJfbLViipB4XmLZ2ZL3nWAXRjZkg4l&width=250&show_text=true&height=402&appId", height: "402" },
  { src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdiana.tamayo.964404%2Fposts%2Fpfbid0fjZG35HCSQv2RMkYz4gJmktRruNRepfqxMnhHvqSUYK8bkmkefoTXi1Gf7SRj3pcl&width=250&show_text=true&height=745&appId", height: "745" },
  { src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Framiro.paradagranados%2Fposts%2Fpfbid02fdzA3WtXfA67morRJmoYkQt4e8WaTTTQgZKk5GFCHqgyuwjd7iZuuC2ikPoSpH73l&width=250&show_text=true&height=611&appId", height: "611" },
  { src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmegd478%2Fposts%2Fpfbid0UdevTP16cFg7Y9xG4uCUot57F88M7By4TG7z4ZQWe8sJjCP2zcui6hpELcjjxaiXl&width=250&show_text=true&height=585&appId", height: "585" },
  { src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcecy.ochoa.54%2Fposts%2Fpfbid02Ar47aXEhxbgNyFr911Jm7EU5HLXSN1YVjZocExW9eLuZhLi38xgtgm2sWDt5Qr1Nl&width=250&show_text=true&height=611&appId", height: "611" },
  { src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flula.rubalcava.2025%2Fposts%2Fpfbid02h1i7VTr1NKMQQM9B47ZBN8KFSuAKnKo7JyH4R17zChzkHz8nqE89YGcP27pcY4bvl&width=250&show_text=true&height=546&appId", height: "546" },
])

const showAll = ref(false)
const displayedReviews = computed(() => showAll.value ? REVIEWS : REVIEWS.slice(0, 3))
const toggleReviews = () => { showAll.value = !showAll.value }

// Lazy load de iframes
const loaded = ref<{ [key: number]: boolean }>({})

const loadIframe = (index: number) => {
  if (!loaded.value[index]) {
    loaded.value[index] = true
  }
}

// Directiva de IntersectionObserver para cargar solo cuando se vea
const vIntersection = {
  mounted(el: Element, binding: any) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          binding.value()
          observer.disconnect()
        }
      },
      {
        root: null,
        threshold: 0.2,
      }
    )
    observer.observe(el)
  },
}

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
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
            <span>Reseñas verificadas</span>
          </div>
          <h2 class="section-title">Lo que dicen nuestros visitantes</h2>
          <p class="section-description">
            Historias reales de personas que han vivido la experiencia Celestún
          </p>
        </div>

        <div class="reviews-grid" :class="{ masonry: showAll }">
          <div
            v-for="(review, index) in displayedReviews"
            :key="index"
            class="review-card"
            v-intersection="() => loadIframe(index)"
          >
            <!-- Skeleton mientras no se ha cargado el iframe -->
            <div v-if="!loaded[index]" class="review-skeleton">
              <div class="skeleton-box"></div>
            </div>

            <!-- Iframe real solo cuando entra al viewport -->
            <iframe
              v-else
              :src="review.src"
              width="100%"
              :height="review.height"
              class="fb-iframe"
              style="border:none;overflow:hidden;"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allowtransparency="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

        <div class="action-buttons">
          <button @click="toggleReviews" class="btn-toggle">
            {{ showAll ? 'Ver menos' : 'Ver todas las reseñas' }}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :class="{ rotated: showAll }"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <a
            href="https://www.facebook.com/profile.php?id=61557688476803"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-facebook"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 
                5.373-12 12c0 5.99 4.388 10.954 10.125 
                11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
                1.792-4.669 4.533-4.669 1.312 0 2.686.235 
                2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 
                1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
                23.027 24 18.062 24 12.073z"
              />
            </svg>
            Ver en Facebook
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
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
  padding-bottom: clamp(4rem, 8vw, 6rem);
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.reviews-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: clamp(2.5rem, 5vw, 3.5rem);
  transition: all 0.5s ease;
}

.reviews-grid.masonry {
  display: block;
  column-count: 3;
  column-gap: clamp(1.5rem, 3vw, 2rem);
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

/* Skeleton para iframes */
.review-skeleton {
  width: 100%;
  height: 500px;
  background: #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
}

.skeleton-box {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%);
  background-size: 400% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.fb-iframe {
  display: block;
  background: transparent !important;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* ACCIONES */
.action-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-toggle,
.btn-facebook {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-toggle {
  background: #0f172a;
  color: #fff;
  border: none;
}

.btn-toggle:hover {
  background: #1e293b;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.2);
}

.btn-toggle svg {
  transition: transform 0.3s ease;
}

.btn-toggle svg.rotated {
  transform: rotate(180deg);
}

.btn-facebook {
  background: #1877f2;
  color: #fff;
  border: none;
}

.btn-facebook:hover {
  background: #0c63d4;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(24, 119, 242, 0.3);
}

/* CATÁLOGO */
.catalog-section {
  background: #fff;
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
