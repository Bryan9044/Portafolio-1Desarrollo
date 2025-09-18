<script setup>
import FotoProfesional from '@/assets/FotoProfesional.jpeg'
import { onMounted } from 'vue'


onMounted(() => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bryan Londoño Marchena",
    "jobTitle": "Estudiante de Ingeniería en Computación",
    "url": "https://tu-portafolio.netlify.app",
    "image": "https://tu-portafolio.netlify.app/assets/FotoProfesional.jpeg",
    "sameAs": [
      "https://www.linkedin.com/in/bryan-londo%C3%B1o-marchena-ba779525b/",
      "https://github.com/Bryan9044"
    ]
  })
  document.head.appendChild(script)
})

</script>


<template>
    <div class="container">
        <h1 class="tittle">Mi nombre es Bryan Londoño Marchena.</h1>

        <h2>¿Quién es realmente Bryan?</h2>
        <img :src="FotoProfesional" alt="Foto de Bryan" class="imgPro"/>
        <section class="info-window">
            <article class="info-personal"> 
                <div class="info-content">  
                    <h3>Sobre mí</h3>
                    <p>Soy un joven adulto nacido en Costa Rica, un país privilegiado que me ha 
                        permitido aprender y disfrutar mucho a lo largo de mi vida. Desde pequeño, 
                        siempre me gustaron los videojuegos y todo lo relacionado con las computadoras. 
                        Esa curiosidad por entender cómo funcionaban las tecnologías que usaba a diario 
                        fue la chispa que me llevó a estudiar Ingeniería en Computación.Mi interés se 
                        consolidó gracias a un primo, quien me explicó que todo eso era posible gracias 
                        a la programación, la herramienta que permite crear entornos virtuales. Por eso 
                        decidí seguir esta carrera, y actualmente soy un estudiante avanzado. Si Dios lo 
                        permite, en un máximo de dos años estaré graduado y listo para aportar mis conocimientos 
                        al mundo de la tecnología.
                    </p>
                </div>
             </article>
            <article class="info-personal"> 
                <div class="info-content">  

                    <h3>Intereses profesionales</h3>
                    <p>Entre mis intereses profesionales se encuentran distintas ramas de la ingeniería en computación,
                        como la inteligencia artificial, la ciberseguridad y el desarrollo full stack. Actualmente 
                        también me interesan temas relacionados con bases de datos y el frontend.
                    </p>
                </div>
            </article>

            <article class="info-personal"> 
                <div class="info-content">  
                    <h3>Objetivos profesionales</h3>
                    <p>Mi principal objetivo profesional es incorporarme a la fuerza laboral y contribuir de manera significativa, 
                        aprendiendo de los demás para aplicar ese conocimiento en la práctica. Además, me gustaría especializarme 
                        en ciberseguridad y, una vez finalizada mi práctica, continuar con mi licenciatura en esta área.
                    </p>
                </div>
            </article>
        </section>
    </div>


</template>


<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
background: linear-gradient(90deg, #0700b8 0%, #00ff88 100%);
}

.tittle {
  font-size: 2em;
  font-family: monospace;
  border-right: 5px solid;
  width: 36ch;
  white-space: nowrap;
  overflow: hidden;
  color: #f0f0f0;
  margin-bottom: 1em;
  animation:
    typing 3s steps(34, end),
    cursor .4s step-end infinite alternate;

}

.imgPro {
    width: 50%;
    max-width: 100%;
    height: auto;
    margin-bottom: 3%;
}

@keyframes cursor {
    50% { border-color: transparent}
}

@keyframes typing {
    from { width: 0; }
}


.container .info-window {
      background-color: transparent;

}

.info-window {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: transparent;
  border-radius: 12px;
  max-width: 100%;
  width: 55%;
  height: auto;
  margin: 0;
  text-align: left;
  align-self: flex-start;
}


.info-personal {
  background-color: transparent;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.info-personal:hover {
  transform: translateY(-5px);
}


.info-content {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  padding-bottom: 1rem;
}

.info-content h3 {
  flex: 0 0 150px; 
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
}

.info-content p {
  flex: 1;
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
}
</style>