<script setup>
import cursos from '@/data/cursos.js';
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="contenedorP">  
  <section class="introduccion">
    <img src="@/assets/Chill.png" alt="logo de la página" class="logoChill"></img>
    <h2>Bienvenid@ a mi portafolio creado en Vue</h2>
    <p>Mi nombre es Bryan Londoño Marchena soy estudiante de ingeniería en computación y esta es mi primera vez creando un portafolio.</p>
    <h2>Propósito del portafolio</h2>
    <p>El portafolio busca desarrollar las habilidades aprendidas durante el curso para crear una pagina capaz de superar los estandares con creces</p>
  </section>

  <div class="cursos-grid">
    <RouterLink v-for="(curso, index) in cursos" 
      :key="index" 
      :to="`/curso/${curso.id}`"
      class="curso-box">
      
        <img :src="curso.image" alt="Curso" class="curso-img" />

        <div class="curso-overlay">
          <h3>{{ curso.nombre }}</h3>
          <p>{{ curso.description }}</p>
        </div>
    </RouterLink>
  </div>
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

.contenedorP {
    background: linear-gradient(to bottom right, #e0f7fa, #fce4ec);

}

.logoChill {
  width: clamp(80px, 20vw, 160px);
  height: auto;
  object-fit: contain;
  margin-top: 15px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}


.cursos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  row-gap: 0px;
  padding: 0 1rem;
}






.curso-box {
  position: relative;
  overflow: hidden;
}



.curso-img {
  width: 100%;
  height: 350px;
  display: block;
  object-fit: cover;
  max-width: 100%;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.curso-box:hover .curso-img {
  transform: scale(1.05);
  filter: brightness(0.8);
}

.curso-overlay {
  position: absolute;
  inset: 33% 27% 31% 27%; 
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
.curso-overlay::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
}

.curso-overlay > * {
  z-index: 1;
}

.curso-overlay h3,
.curso-overlay p {
  max-width: 100%;
  word-break: break-word;
  overflow-wrap: break-word;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  color: #fff;
}

.curso-overlay h3 {
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  margin-bottom: 4px;
  line-height: 1.2;
}

.curso-overlay p {
  font-size: clamp(0.6rem, 1.5vw, 0.9rem);
  line-height: 1.3;
}

.curso-detalles { margin-top: 12px; padding: 12px; background-color: #fff; border-left: 4px solid #a01818; border-radius: 0 0 12px 12px; }

/* Footer */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
body { line-height: 1.5; font-family: 'Poppins', sans-serif; }
* { margin:0; padding:0; box-sizing: border-box; }
.container { max-width: 100%; margin:auto; }
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

@media(max-width: 767px){ .footer-col{ width: 50%; margin-bottom: 30px; } }
@media(max-width: 574px){ .footer-col{ width: 100%; } }



@media (max-width: 480px) {
  .curso-overlay {
    inset: 29% 27% 31% 27%;
  }

  .curso-overlay h3 {
    font-size: 0.9rem;
  }

  .curso-overlay p {
    font-size: 0.7rem;
  }

  .cursos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    gap: 10px; 
  }


}

@media (min-width: 768px) and (max-width: 1023px) {
  .curso-overlay {
    inset: 31% 27% 31% 27%;
  }

  .curso-overlay h3 {
    font-size: 1rem;
  }

  .curso-overlay p {
    font-size: 0.8rem;
  }

  .cursos-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}


@media (min-width: 1024px) {
  .curso-overlay {
    inset: 31% 27% 31% 27%;
  }

  .curso-overlay h3 {
    font-size: 1.1rem;
  }

  .curso-overlay p {
    font-size: 0.9rem;
  }
}

</style>
