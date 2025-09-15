<script setup>
import { useRoute } from 'vue-router';
import cursos from '@/data/cursos.js';
import Cartucho from '@/assets/Cartucho.png'

const route = useRoute();
const curso = cursos.find(c => c.id === route.params.id);
</script>

<template>
  <section v-if="curso" class="SectionCursos">
    <div class="curso-container">
      <img :src="curso.image" alt="Curso" />
      <div class="curso-overlay"> 
        <h2>{{ curso.nombre }}</h2>
        <p>{{ curso.description }}</p>
      </div>
    </div>

    <section class="evaluaciones">
      <h3>Evaluaciones del curso</h3>
      <div class="items-grid"> 
        <section 
          v-for="(item, index) in curso.items" 
          :key="index" 
          class="item-card"
        >
          <div class="image-container">
            <img :src="Cartucho" alt="Cartucho" class="cartucho-img" />
          </div>
          <div class="item-content">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <p><strong>Tipo:</strong> {{ item.typeEvaluation }}</p>
            <p><strong>Entrega:</strong> {{ item.deliveryDate }}</p>
            <p><strong>Tecnologías:</strong> {{ item.technologiesInvolved }}</p>
            <a :href="item.linkRepo">Repositorio</a> |
            <a :href="item.linkDeploy">Deploy</a>
          </div>
        </section>
      </div>
    </section>
  </section>

  <p v-else>Curso no encontrado</p>
  <RouterLink to="/" class="volver-btn">← Volver al inicio</RouterLink>
</template>


<style scoped>

.volver-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #d9b8da;
  color: #000;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}
.volver-btn:hover {
  background-color: #c49ac4;
}

.evaluaciones {
  width: 100%;
  margin: 0 auto; /* centrado */
  padding: 0 20px;
}



.curso-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.curso-container img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}

.curso-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(0, 0, 0);
  padding: 20px;
  border-radius: 12px;
}

.curso-overlay h2 {
  color: rgb(255, 235, 226);       
  font-size: 1.4rem;
  max-width: 100%;
  width: 80%;
}

.curso-overlay p {
  color: rgb(0, 0, 0);        
  font-size: 0.9rem;
  width: 48%;
  max-width: 100%;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px; /* Más espacio para el glow */
}




.item-card {
  position: relative;
  border-radius: 12px;
  overflow: visible; /* Esto elimina el recuadro blanco */
  width: 100%;
  height: auto;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  /* Agregamos margen para que el glow no se corte */
  margin: 20px;
}




.cartucho-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  object-fit: cover;
  transition: transform 0.3s ease;
  background: transparent;
  border: none;
  outline: none;
  
  /* Usar clip-path para controlar la forma sin afectar el glow */
  clip-path: inset(0 round 12px);
  

  animation: glowPulse 2s infinite;
}




.item-card:hover .cartucho-img {
  transform: scale(1.05);
  /* Solo intensificar el filter */
  filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.8));
  border-radius: 12px;
}

/* Contenido encima de la imagen */
.item-content {
  position: absolute;
  top: 34%;
  left: 39%;
  transform: translateY(-50%);
  width: 40%;
  padding: 12px;
  color: #fff;
  border-radius: 8px;
  z-index: 1;
  text-shadow: 0 1px 4px rgba(0,0,0,0.7);
  /* Asegurar que el contenido no tenga fondo */
  background: transparent;
}


.item-content p {
  font-size: 12px;
}


.item-content a {
  font-size: 12px;
  color: rgb(69, 69, 69);
}

/*  
@media (max-width: 1024px) {
  .items-grid {
    grid-template-columns: repeat(2, 1fr);;
  }
}

@media (max-width: 767px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
}

¨*/


@keyframes glowPulse {
  0% { box-shadow: 0 0 10px rgba(255,0,255,0.4); }
  50% { box-shadow: 0 0 25px rgba(255,0,255,0.8); }
  100% { box-shadow: 0 0 10px rgba(255,0,255,0.4); }
}


</style>