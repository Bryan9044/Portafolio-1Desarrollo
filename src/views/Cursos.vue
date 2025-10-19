<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import cursos from '@/data/cursos.js';
import Cartucho from '@/assets/Cartucho.png';

const route = useRoute();

const curso = cursos.find(c => c.id === route.params.id);

const filtroTipo = ref('');
const filtroTecnologia = ref('');
const filtroFecha = ref('');
const filtroFechaF = ref('');



const cambioFecha = (fecha) => {
  const [dia, mes, año] = fecha.split('/');
  return new Date(`${año}-${mes}-${dia}`); 
}


const limpiarFiltros = () => {
  filtroTipo.value = '';
  filtroTecnologia.value = '';
  filtroFecha.value = '';
  filtroFechaF.value = '';
}

const cursosFiltrados = computed(() => {
  if (!curso) return [];

  const fechaInicioFiltro = filtroFecha.value ? cambioFecha(filtroFecha.value) : null;
  const fechaFinFiltro = filtroFechaF.value ? cambioFecha(filtroFechaF.value) : null;

  return curso.items.filter(item => {
    const coincideTipo =
      !filtroTipo.value || item.typeEvaluation === filtroTipo.value;

    const tecnologiasArray = item.technologiesInvolved
      .split(/,| y /)
      .map(t => t.trim().toLowerCase());

    const coincideTecnologia =
      !filtroTecnologia.value ||
      tecnologiasArray.includes(filtroTecnologia.value.toLowerCase());
    const fechaItem = cambioFecha(item.deliveryDate);
    let coincideRango = true;
    if (fechaInicioFiltro && fechaItem < fechaInicioFiltro) coincideRango = false;
    if (fechaFinFiltro && fechaItem > fechaFinFiltro) coincideRango = false;

    return coincideTipo && coincideTecnologia && coincideRango;
  });
});

const tiposDisponibles = curso
  ? [...new Set(curso.items.map(i => i.typeEvaluation))]
  : [];

const cursoTecDisponibles = curso
  ? [
      ...new Set(
        curso.items.flatMap(i =>
          i.technologiesInvolved.split(/,| y /).map(t => t.trim())
        )
      )
    ]
  : [];
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

    <div class="filtros">
      <label>
        Tipo de evaluación:
        <select v-model="filtroTipo">
          <option value="">Todos</option>
          <option v-for="tipo in tiposDisponibles" :key="tipo" :value="tipo">
            {{ tipo }}
          </option>
        </select>
      </label>

      <label>
        Tecnología:
        <select v-model="filtroTecnologia">
          <option value="">Todas</option>
          <option v-for="tec in cursoTecDisponibles" :key="tec" :value="tec">
            {{ tec }}
          </option>
        </select>
      </label>

      <label>
        Fecha inicio (dd/mm/yyyy, mes o año):
        <input type="date" v-model="filtroFecha" placeholder="Ej: 08/2025 o 2025" />
      </label>

      <label>
        Fecha final (dd/mm/yyyy, mes o año):
        <input type="date" v-model="filtroFechaF" placeholder="Ej: 08/2025 o 2025" />
      </label>

      <button @click="limpiarFiltros" class="limpiaF">Limpiar filtros</button>
    </div>

    <section class="evaluaciones">
      <h3>Evaluaciones del curso</h3>
      <div class="items-grid"> 
        <section 
          v-for="(item, index) in cursosFiltrados" 
          :key="index" 
          class="item-card"
        >
          <div class="image-container">
            <img :src="Cartucho" alt="Cartucho" class="cartucho-img" />
          </div>
          <div class="item-content">
            <h4>{{ item.title }}</h4>
            <p class="pr">{{ item.description }}</p>
            <p class="pr"><strong>Tipo:</strong> {{ item.typeEvaluation }}</p>
            <p class="pr"><strong>Entrega:</strong> {{ item.deliveryDate }}</p>
            <p class="pr"><strong>Tecnologías:</strong> {{ item.technologiesInvolved }}</p>
            <a 
            v-if="item.linkRepo && item.linkRepo.trim() !== ''"
            :href="item.linkRepo" 
            class="enlaces"
            target="_blank"
            rel="noopener noreferrer"
            >Repositorio</a> 
            <a 
            v-if="item.linkDeploy && item.linkDeploy.trim() !== ''"
            :href="item.linkDeploy" 
            class="enlaces"
            target="_blank"
            rel="noopener noreferrer"
            >Deploy</a>
          </div>
        </section>
      </div>
    </section>
  </section>
</template>


<style scoped>


.SectionCursos {
  background: linear-gradient(to bottom right, #e0f7fa, #fce4ec);
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  margin: auto;
}

.filtros {
  display: flex;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
  justify-content: center;
}

.filtros label {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 0.9rem;
}

.filtros select,
.filtros input {
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #aaa;
}



.evaluaciones {
  width: 100%;
  margin: 0 auto; 
  padding: 0 20px;
}

.evaluaciones h3 {
  text-align: center;
  font-size: clamp(1rem, 2.5vw, 2rem);
  font-family: 'Courier New', monospace;
  color: #6e5d5d;
  text-shadow: 0 0 6px rgba(163, 158, 251, 0.6);
  margin: 40px 0 20px;
  letter-spacing: 1px;
  position: relative;
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
  color: rgb(255, 255, 255);       
  font-size: 1.4rem;
  max-width: 100%;
  width: 80%;
}

.curso-overlay p {
  color: rgb(255, 255, 255);        
  font-size: 0.9rem;
  width: 48%;
  max-width: 100%;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px; 
}




.item-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: auto;
}






.cartucho-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 12px;
  z-index: 0;
}





.item-card:hover .cartucho-img {
  transform: scale(1.05);
  filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.8));
  border-radius: 12px;
}

.item-content {
  position: absolute;
  inset: 13% 20% 35% 40%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;

}


.item-content h4 {
  font-size: clamp(0.6rem, 1.5vw, 0.9rem);
}

.item-content p,
.item-content a {
  font-size: clamp(0.85rem, 1.2vw, 0.8rem);
}


.limpiaF {
  margin-top: 24px;
  padding: 8px 16px;
  background-color: #c64444;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  
}

.limpiaF:hover {
  background-color: #f10707;
  transform: scale(1.05);
}


@keyframes glowPulse {
  0% { box-shadow: 0 0 10px rgba(255,0,255,0.4); }
  50% { box-shadow: 0 0 25px rgba(255,0,255,0.8); }
  100% { box-shadow: 0 0 10px rgba(255,0,255,0.4); }
}


/* celular */
@media (max-width: 480px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
  
  .item-content {
    inset: 13% 21% 35% 39%;
  }
  
  .item-content h4 {
    font-size: clamp(0.4rem, 2.5vw, 0.8rem);
  }
  
  .item-content p,
  .item-content a {
    font-size: clamp(0.35rem, 2.5vw, 0.7rem);
  }

  .SectionCursos h2 {
    font-size: 0.5rem;
  }

  .SectionCursos p {
    font-size: 0.4rem;
  }
}

/* Celular */
@media (min-width: 481px) and (max-width: 688px) {
  .items-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .item-content h4 {
    font-size: 12px !important; /* Forzar con !important temporalmente */
  }

  .pr {
    font-size: 8px !important; /* Era 1px, muy pequeño */
  }

  .SectionCursos h2 {
    font-size: clamp(0.69rem, 2vw, 1.4rem) !important;
    font-weight: bold;
  }

  .SectionCursos p {
    font-size: 0.7rem !important;
  }
}

/* Tablet */
@media (min-width: 689px) and (max-width: 1023px) {
  .items-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .item-content h4 {
    font-size: clamp(0.5rem, 1.2vw, 0.9rem);
  }

  .item-content p,
  .item-content a {
    font-size: clamp(0.45rem, 1vw, 0.75rem);
  }

  .SectionCursos h2 {
    font-size: clamp(0.69rem, 2vw, 1.4rem);
    font-weight: bold;
  }

  .SectionCursos p {
    font-size: 0.7rem;
  }
}

/*  desktop */
@media (min-width: 1024px) {
  .items-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .item-content {
    inset: 13% 21% 35% 39%;
  }
  
  .item-content h4 {
    font-size: clamp(0.6rem, 0.9vw, 0.9rem);
  }

  .item-content p,
  .item-content a {
    font-size: clamp(0.60rem, 0.8vw, 0.75rem);
  }
  .SectionCursos h2 {
    font-size: clamp(0.5rem, 2vw, 1rem);
    font-weight: bold;
  }

  .SectionCursos p {
    font-size: 0.8rem;
  }
}


</style>