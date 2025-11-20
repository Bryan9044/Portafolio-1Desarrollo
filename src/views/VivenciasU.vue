<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';


const route = useRoute();



</script>


<template>
    <div class="vivencias-container">


        <h1>Mi inicio en la universidad</h1>
        <img src="/src/assets/perso1png.png" alt="Vivencia 1" class="vivencia-img" />
        <p>Durante mi primer año en la U sentí lo que comunmente se le conoce como el ácido, yo venía de un colegio publico
            y genuinamente cuando hice el examen para entrar al TEC nunca estudie pero aun así la vida me sonrió y logré entrar
            al tecnológico, sin embargo, nunca fue algo que tuve en mente de manera sería, pero una vez dentro escogí la carrera
            que deja a las personas calvas jsjsjs. Yo inicie en virtualidad, matriculando unos 8 cursos lo cuál claramente fue una falla
            rotunda ya que mi nivel academico en el colegio era 0 demandante y cuando comence en la universidad me di cuenta de la 
            realidad, sin embargo, al ver que en mitad de mi primer semestre ya había reprobado varios cursos porque no lograba entender
            nada, decidí tratar de trabajar en lo que pudiera y aprender lo máximo posible sin embargo, de igual manera fracase.
            En mi segundo semestre decidí matricular 5 materias regresando a la presencialidad, realmente no eran tan pesado pero mis
            bases tanto de programación como de matemáticas eran casi que nulas, por lo tanto fue otro semestre en el que fracase,
            sin embargo, ya en mi 3 semestre en la universidad me arme de valor y dije yo no me voy a rendir, seguire avanzando
            y aprendiendo, mi primer reto fue el curso de fundamentos de la organización de computadores. En la sede de Limón se tiene 
            un profesor que era conocido porque sus trabajos eran pesados y que generalmente de 20 o 30 solo pasaban 3 o ninguno,
            pues yo quise matricular el curso con él, para mí primer proyecto tuve que desarrollar en grupo un simón dice con un arduino,
            de manera virtual, fue un proyecto muy divertido sin embargo por mis falencias al inicio en la programación fue un poco dificil
            pero en conjunto con mis compañeros salimos adelante. El segundo fue un proyecto sobre un reloj digital utilizando la herramienta
            logisim, realmente fue un proyecto complicado pero que me enseñó que el esfuerzo y la felicidad que le da a uno después de lograr 
            resolver un problema no tiene precio, fue genial poder pasar de no entender nada a lograr realizar un reloj digital y ver que era
            totalmente funcional. Ya para mi tercer proyecto fue igual realizar una calculadora con el software logisim, donde el usuario
            por medio de pines y botones podía ingresar operaciones a través de la interfaz y ver el resultado directamente en la calculadora.
        </p>

        <img src="/src/assets/perso2.png" alt="Vivencia 2" class="vivencia-img" />
        <p>Otra vivencia que me marcó para bien en la universidad fue un curso que es externo pero que impartieron en la universidad se llama
            Habilidades Blandas y Liderazgo para la Transformación, al principio cuando leí el correo fue meh un curso más del montón que envian
            pero luego me llamo un poco la atención, así que para no ir solo le dije a un amigo en ese entonces, el cual también accedio a llevarlo,
            en si al inicio estaba muy nervioso porque habían personas de todas las carreras y era un grupo relativamente grande, además de eso
            a todos nos tocaban mesas de grupo distintas o sea no me toco ir con mi amigo en ningún momento, al inicio tenía un poco de pena porqe los 
            demás se conocían entre sí pero poco a poco me fui incorporando al grupo, cada semana cambiamos de grupo, así que al final logre conocer muchas
            personas, además de fungir como lider de grupo en otras actividades, lo cual me ayudo a quitarme el miedo de hablar con las personas, aprendí las aptitudes y cualidades
            de un lider y lo más valioso fue poder aprender a trabajar en equipo, ya que en cada actividad nos toco desempeñar distintos roles.
        </p>

        <img src="/src/assets/Persona2-removebg-preview.png" alt="Vivencia 3" class="vivencia-img" />
        <p>
            Anteriormente en mis inicios no le veía mucho sentido a la carrera o los tipos de evaluaciones que realizabamos porque siempre pensaba y esto de que me serviria en un trabajo
            real? a pesar de ese pensamiento logré madurar de una mejor manera ese pensamiento y comprender que realmente en la universidad lo único que aprendemos son pinceladas
            de lo que posiblemente vayamos a realizar en la industría o que ni siquiera está relacionado, sin embargo, lo más importante es la forma en que nos preparan para afrontar
            problemas con un alto porcentaje de complejidad, a sentir en muchos momentos y decir qué rayos hago mal que no estoy llegando a donde tengo que ir,
            gracias a todos los trabajos de este tipo que he tenido he logrado entender que la universidad es un medio o espacio en el cual uno aprende tanto como estudiante como persona
            ya que desarrollamos un pensamiento más crítico, no solo en lo relacionado al software o hardware sino en un panorama general, gracias a la universidad o las situaciones que he tenido
            en esta misma me he desarrollado tanto de manera profesional como personal. 
        </p>
    </div>
</template>


<style scoped>
.vivencias-container {
  background: linear-gradient(135deg, #e0e7ff 0%, #fff 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(89, 92, 255, 0.08);
  padding: 2.5rem 1.5rem;
  max-width: 800px;
  margin: 2rem auto;
}

.vivencias-container h1 {
  color: #595cff;
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.vivencias-container p {
  color: #222;
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: justify;
  background: rgba(255,255,255,0.7);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(89, 92, 255, 0.04);
}


.vivencia-img {
  display: block;
  margin: 1.5rem auto;
  max-width: 90%;
  width: 350px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(89, 92, 255, 0.12);
  object-fit: contain;
  background: #f5f7fa;
  transition: transform 0.2s;
}
.vivencia-img:hover {
  transform: scale(1.04);
}

@media (max-width: 600px) {
  .vivencias-container {
    padding: 1rem 0.5rem;
  }
  .vivencias-container h1 {
    font-size: 1.4rem;
  }
  .vivencias-container p {
    font-size: 1rem;
    padding: 0.7rem;
  }
  .vivencia-img {
    max-width: 95vw;
    margin: 1rem auto;
  }
}


.vivencias-container {
  background: linear-gradient(135deg, #e0e7ff 0%, #fff 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(89, 92, 255, 0.08);
  padding: 2.5rem 1.5rem;
  max-width: 900px;
  margin: 2rem auto;
}

.vivencias-container h1 {
  color: #595cff;
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-align: center;
}

.vivencias-container p {
  color: #222;
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: justify;
  background: rgba(255,255,255,0.7);
border: 1px solid rgba(89, 92, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(89, 92, 255, 0.04);
}

/*  */
@media (max-width: 480px) {
}

/* Celular */
@media (min-width: 481px) and (max-width: 688px) {

}

/* Tablet */
@media (min-width: 689px) and (max-width: 1023px) {

}

/*  desktop */
@media (min-width: 1024px) {

}


</style>