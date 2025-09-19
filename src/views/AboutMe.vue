<script setup>
import FotoProfesional from '@/assets/FotoProfesional.jpeg'
import { onMounted, reactive } from 'vue'
import habilidades from '@/data/habilidadesTecnicas'
import github from '@/assets/Github.png'
import linkedIn from'@/assets/Linkedin.png'
import certificados from '@/data/certificaciones.js'


const animatedProgress = reactive({})


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


onMounted(() => {
  Object.values(categorias).flat().forEach(skill => {
    animatedProgress[skill.id] = 0 
    setTimeout(() => {
      animatedProgress[skill.id] = skill.progreso 
    }, 500) 
  })
})

const categorias = habilidades.reduce((acc, item) => {
  if (!acc[item.categoria]) acc[item.categoria] = []
    acc[item.categoria].push(item)
    return acc
  
}, {})




</script>


<template>
    <div class="container">
        <h1 class="tittle">Mi nombre es Bryan Londoño Marchena.</h1>

        <h2>¿Quién es realmente Bryan?</h2>
        <img :src="FotoProfesional" alt="Foto de Bryan" class="imgPro"/>
        <nav class="redes">   
          <a href="https://github.com/Bryan9044" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Bryan" style="--accent-color: #666666;">
            <img :src="github" alt="icono de GitHub" class="icono"/>
            <span data-social = "Github"  class="icon-label"></span>
          </a>
          <a href="https://www.linkedin.com/in/bryan-londo%C3%B1o-marchena-ba779525b/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin de Bryan" style="--accent-color: #0A66C2;">
            <img :src="linkedIn" alt="icono de LinkedIn" class="icono"/>
            <span data-social = "LinkedIn"  class="icon-label"></span>
          </a> 
        </nav>      
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
          <section class="column column--right">
            <article 
              v-for="(skills, categoria) in categorias" 
              :key="categoria" 
              class="card"
            >
              <h2 class="card_title">{{ categoria }}</h2>
              <div class="skills">
                <div 
                  v-for="skill in skills" 
                  :key="skill.id" 
                  class="skills-item"
                >
                  <p class="skills-tech">{{ skill.nombre }}</p>
                  <div class="skills-bar">
                    <div 
                      class="skills-bar-fill" 
                      :style="{ width: animatedProgress[skill.id] + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </article>
          </section>
            <section class="certificaciones-section">
              <h2 class="certificaciones-title">Certificaciones</h2>
              <div class="certificaciones-grid">
                <article 
                  v-for="cert in certificados" 
                  :key="cert.id" 
                  class="certificacion-card"
                >
                  <div class="cert-header">
                    <div class="cert-icon-container">
                      <svg class="cert-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                      <div class="cert-badge">
                        <span class="cert-check">✓</span>
                      </div>
                    </div>
                    <h3 class="cert-name">{{ cert.nombre }}</h3>
                  </div>
                  
                  <div class="cert-body">
                    <p class="cert-description">{{ cert.descripcion }}</p>
                  </div>
                  
                  <div class="cert-footer">
                    <a 
                      :href="cert.enlace" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="cert-link"
                    >
                      <span>Ver Certificado</span>
                      <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </a>
                  </div>
                  
                  <!-- Efecto de brillo -->
                  <div class="cert-shine"></div>
                </article>
              </div>
            </section>
            <section class="info-adicional">
              <h2>Información Adicional</h2>
              <article class="info-item">
                <div class="info-content">
                  <h3>Interés en Ciberseguridad</h3>
                  <p>Mi interés por la ciberseguridad va en la rama de hacking ético, ya que siempre me ha parecido interesante el cómo se pueden vulnerar
                    sistemas, sin embargo, todo esto lo he visto en videos de Youtube porque como tal no hay una guía de objetivos por aprender
                    sino que generalmente se va aprendiendo de poco en poco, hace unos cuantos años me inscribi en un curso de Cisco sobre Hacking 
                    ético sin embargo no logre culminarlo, a pesar de esto es una rama en la que me gustaría trabajar en un futuro. </p>
                </div>
              </article>
              
              <article class="info-item">
                <div class="info-content">
                  <h3>Proyecto de agenda</h3>
                  <p>Actualmente tengo un proyecto en el cual estoy trabajando sobre agendas pero más pensado en citas pero con agendas, la cual creo que es
                    una aplicación la cual podría ayudar mucho a cierto tipo de negocios, en parte la idea ya la había logrado plasmar, sin embargo, lo que 
                    es la parte visual del software es muy básica y no era responsive, por lo cual, al ver que en mi malla curricular abrieron una electiva 
                    sobre desarrollo de páginas web no lo pensé dos veces y me matricule, ya que en parte quiero aprender los fundamentos del diseño para plasmarlos
                    en mi proyecto. 
                  </p>
                </div>
              </article>
            </section>

        

    </div>


</template>


<style scoped>


.container {
  display: flex;
  width: 100%;
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
    width: 30%;
    max-width: 100%;
    height: auto;
    margin-bottom: 5%;
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


.card_title {
  color: #393535;
  font-weight: bold;
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



.column {

  background-color: transparent;
}

.column--right {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas fijas */
  gap: 2em;
  width: 70%;
  justify-items: center; /* centra cada tarjeta en su celda */
}





.skills-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 15%;
}

.skills-tech {
  color: #fff;
  font-weight: bold;
  width: 100px;
}

.skills-bar {
  position: relative;
  width: 175px;
  height: 8px;
  background-color: #444;
  border-radius: 4px;
  overflow: hidden;
}

.skills-bar-fill {
  height: 100%;
  background-color: #00ff88;
  box-shadow: 0 0 8px #00ff88;
  transition: width 1s ease-in-out; 
}



.redes {
  display: flex;
  gap: 2em;
  justify-content: center;
  margin-bottom: 2em;
}

.redes a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  position: relative;
}

/* Ícono circular */
.icono {
  width: 5em;
  height: 5em;
  padding: 1em;
  border-radius: 50%;
  background-color: #ffffff;
  object-fit: contain;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.icono:hover {
  transform: scale(1.05);
}

/* Contenedor invisible para el tooltip */
.icon-label {
  position: relative;
  display: block;
  width: 0;
  height: 0;
}

/* Tooltip flotante */
.icon-label::before {
  content: attr(data-social);
  position: absolute;
  top: -8.5em;
  left: 50%;
  transform: translateX(-50%) scale(0.9);
  background-color: var(--accent-color);
  color: white;
  padding: 0.4em 1em;
  border-radius: 100px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 10;
}

/* Flechita decorativa */
.icon-label::after {
  content: '';
  position: absolute;
  top: -6em;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 10px solid var(--accent-color);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 9;
}

/* Activación del tooltip al hacer hover sobre el ícono */
.redes a:hover .icon-label::before,
.redes a:hover .icon-label::after {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}


.redes a:hover .icono {
  background-color: var(--accent-color);
  transform: scale(1.05);
}


/* Apartado de certificaciones*/

.certificaciones-section {
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.certificaciones-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin-bottom: 3rem;
  position: relative;
}

.certificaciones-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #00ff88, #0700b8);
  border-radius: 2px;
}

.certificaciones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.certificacion-card {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.certificacion-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(7, 0, 184, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.certificacion-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(0, 255, 136, 0.4);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(0, 255, 136, 0.2);
}

.certificacion-card:hover::before {
  opacity: 1;
}

.cert-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.cert-icon-container {
  position: relative;
  flex-shrink: 0;
}

.cert-icon-svg {
  width: 2.5rem;
  height: 2.5rem;
  color: #00ff88;
  filter: drop-shadow(0 0 8px rgba(0, 255, 136, 0.3));
}

.cert-badge {
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 1.2rem;
  height: 1.2rem;
  background: linear-gradient(45deg, #00ff88, #00cc6a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.cert-check {
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
}

.cert-name {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  flex: 1;
}

.cert-body {
  margin-bottom: 1.5rem;
}

.cert-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.cert-footer {
  position: relative;
  z-index: 10;
}

.cert-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00ff88;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 255, 136, 0.3);
  background: rgba(0, 255, 136, 0.1);
  transition: all 0.3s ease;
}

.cert-link:hover {
  background: rgba(0, 255, 136, 0.2);
  border-color: rgba(0, 255, 136, 0.6);
  transform: translateX(3px);
}

.link-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.cert-link:hover .link-icon {
  transform: translateX(3px);
}

/* Efecto de brillo animado */
.cert-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.1), 
    transparent
  );
  transition: left 0.6s ease;
}

.certificacion-card:hover .cert-shine {
  left: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .certificaciones-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .certificaciones-title {
    font-size: 2rem;
  }
  
  .certificacion-card {
    padding: 1.2rem;
  }
}

/* Animación de entrada */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.certificacion-card {
  animation: slideInUp 0.6s ease-out;
}

.certificacion-card:nth-child(1) { animation-delay: 0.1s; }
.certificacion-card:nth-child(2) { animation-delay: 0.2s; }
.certificacion-card:nth-child(3) { animation-delay: 0.3s; }
.certificacion-card:nth-child(4) { animation-delay: 0.4s; }
.certificacion-card:nth-child(5) { animation-delay: 0.5s; }

/*Para las barras */



.info-adicional {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: transparent;
  border-radius: 12px;
  max-width: 100%;
  width: 55%;
  height: auto;
  margin: 4rem 0;
  text-align: left;
  align-self: flex-start;
}

.info-adicional h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
}

.info-item {
  background-color: transparent;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
}
</style>