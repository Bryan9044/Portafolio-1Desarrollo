<script setup>
import { useRoute } from 'vue-router';
import cursos from '@/data/cursos.js';

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
      <section v-for="(item, index) in curso.items" :key="index" class="item-card">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
        <p><strong>Tipo:</strong> {{ item.typeEvaluation }}</p>
        <p><strong>Entrega:</strong> {{ item.deliveryDate }}</p>
        <p><strong>Tecnologías:</strong> {{ item.technologiesInvolved }}</p>
        <a :href="item.linkRepo">Repositorio</a> |
        <a :href="item.linkDeploy">Deploy</a>
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
  color: white;
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
  color: white;        
  font-size: 0.9rem;
  width: 48%;
  max-width: 100%;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 16px;
}

.item-card {
  position: relative;
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
  color: #ececec;
}
.item-card > * {
  position: relative; 
  z-index: 1;          
}


.item-card::before{
  content: '';
  position: absolute;
  background-image: linear-gradient(180deg,rgb(0, 183, 255), rgb(255, 48, 255));
  width: 200%;
  height: 200%;
  animation: rotBGimg 8s linear infinite;
  transition: all 0.3s linear;
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);
  }
  
}

.item-card::after{
  content: "";
  position: absolute;
  background: #0a1f3d;
  inset: 5px;
  border-radius: 15px;
}
</style>