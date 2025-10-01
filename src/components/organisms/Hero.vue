<template>
  <main>
    <section class="hero">
      <div class="hero-content">
        <p>Donde el Tiempo se Detiene y la Magia Comienza</p>
        <hr />
        <h1>Diseñamos el escape perfecto. La naturaleza pone la magia</h1>
        <hr />
        <h2>Bienvenido a SacBej, tu guía personal hacia las maravillas inolvidables de Celestún.</h2>
        <button class="hero-btn">Descúbrelo Ahora</button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  margin-top: 80px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('https://media.istockphoto.com/id/1477565738/photo/mangrove-forest-ria-celestun-biosphere-reserve-mexico.jpg?s=612x612&w=0&k=20&c=d7OfiwhEGdPX1SMAnIIw2DIotLyVGncwWNg9IKfPWTE=') no-repeat center center/cover;
  position: relative;
  color: white;
}

/* opcional: overlay oscuro para contraste */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 20px;
}

.hero h1 {
  font-size: 4.6rem;
  line-height: 1.15;
  font-weight: 300;    
  letter-spacing: -0.5px;
  margin: 0.5rem 0 1rem;       
}


.hero h2 {
  font-size: 1.8rem;
  font-weight: 120;         
  line-height: 1.3;
  letter-spacing: 0.2px;
  margin: 1rem 0 0;
  margin-bottom: 6rem;
}

.hero p {
  font-size: 1.2rem;
  margin: 1rem 0 2rem;
}

.hero hr {
  border: none;
  border-top: 2px solid orange;
  width: 60px;
  margin: 1rem auto;
}

.hero-btn {
  background: #f5e6D3;
  color: #4E342E;
  font-size: 1.2rem;
  padding: 14px 32px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;
}

.hero-btn:hover {
  background: #A68A6D;
}
</style>
