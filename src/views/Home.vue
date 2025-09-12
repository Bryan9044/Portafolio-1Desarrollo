<script setup>
import cursos from '@/data/cursos.js';
import { RouterLink } from 'vue-router';
</script>

<template>
<section class="introduccion">
  <img src="@/assets/Chill.png" alt="logo de la página" class="logoChill"></img>
  <h2>Bienvenid@ a mi portafolio creado en Vue</h2>
  <p>Mi nombre es Bryan Londoño Marchena soy estudiante de ingeniería en computación y esta es mi primera vez creando un portafolio.</p>
  <h2>Propósito del portafolio</h2>
  <p>El portafolio busca desarrollar las habilidades aprendidas durante el curso para crear una pagina capaz de superar los estandares con creces</p>
</section>

  <!-- Grid de cursos -->
<div class="cursos-grid">
  <RouterLink v-for="(curso, index) in cursos" 
     :key="index" 
     :to="`/curso/${curso.id}`"
     class="curso-box">
     
    <!-- Imagen real -->
      <img :src="curso.image" alt="Curso" class="curso-img" />

      <!-- Overlay con texto -->
      <div class="curso-overlay">
        <h3>{{ curso.nombre }}</h3>
        <p>{{ curso.description }}</p>
      </div>
  </RouterLink>
</div>
</template>

<style scoped>
.header { text-align: center; }
#navigation { display: flex; justify-content: center; gap: 20px; margin: 16px 0; }
#navigation a { text-decoration: none; color: #333; font-weight: 500; padding: 8px 16px; border-radius: 8px; transition: all 0.3s ease; }
#navigation a:hover { background-color: #d9b8da; color: #000; transform: scale(1.05); }
.introduccion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
}


.logoChill {
  width: 20%;
  height: auto;
  object-fit: cover;
  margin-bottom: 12px;
}

.cursos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* dos columnas */
  grid-template-rows: 1fr 1fr;    /* dos filas */
  gap: 20px;
}

/* Primer curso: arriba izquierda */
.cursos-grid a:nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

/* Segundo curso: abajo derecha */
.cursos-grid a:nth-child(2) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.curso-box {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}

.curso-box:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 16px rgba(0,0,0,0.25);
}

.curso-img {
  width: 100%;
  height: auto;  /* Mantiene proporción */
  display: block;
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
  padding: 10px;
}

.curso-box:hover { transform: scale(1.02); box-shadow: 0 6px 16px rgba(0,0,0,0.25); }




.curso-overlay h3 {
  color: rgb(255, 235, 226);       
  font-size: 1.3rem;
  max-width: 100%;
  width: 40%;
}

.curso-overlay p {
  color: white;        
  font-size: 0.8rem;
  width: 40%;
  max-width: 100%;
}

.curso-detalles { margin-top: 12px; padding: 12px; background-color: #fff; border-left: 4px solid #a01818; border-radius: 0 0 12px 12px; }

/* Footer */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
body { line-height: 1.5; font-family: 'Poppins', sans-serif; }
* { margin:0; padding:0; box-sizing: border-box; }
.container { max-width: 1170px; margin:auto; }
.row { display: flex; flex-wrap: wrap; }
ul { list-style: none; }
.footer { background-color: #24262b; padding: 70px 0; }
.footer-col { width: 25%; padding: 0 15px; }
.footer-col h4 { font-size: 18px; color: #ffffff; text-transform: capitalize; margin-bottom: 35px; font-weight: 500; position: relative; }
.footer-col h4::before { content: ''; position: absolute; left:0; bottom: -10px; background-color: #e91e63; height: 2px; width: 50px; }
.footer-col ul li:not(:last-child){ margin-bottom: 10px; }
.footer-col ul li a { font-size: 16px; color: #bbbbbb; text-decoration: none; font-weight: 300; display: block; transition: all 0.3s ease; }
.footer-col ul li a:hover { color: #ffffff; padding-left: 8px; }
.footer-col .social-links a { display: inline-block; height: 40px; width: 40px; background-color: rgba(255,255,255,0.2); margin:0 10px 10px 0; text-align: center; line-height: 40px; border-radius: 50%; color: #ffffff; transition: all 0.5s ease; }
.footer-col .social-links a:hover { color: #24262b; background-color: #ffffff; }

/* Responsive */
@media(max-width: 767px){ .footer-col{ width: 50%; margin-bottom: 30px; } }
@media(max-width: 574px){ .footer-col{ width: 100%; } }</style>
