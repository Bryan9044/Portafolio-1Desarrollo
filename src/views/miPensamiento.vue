<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';

const route = useRoute();
</script>

<template>
  <div class="vivencias-container fade-in">

    <h1>Cómo pienso, cómo trabajo</h1>
    <p class="subtitulo">Mi forma de enfrentar problemas, aprender y colaborar</p>

    <p class="fade-in delay-1">
      Al momento de enfrentarme a un problema me gusta evaluarlo para catalogarlo y entender la magnitud del esfuerzo que será necesario para resolverlo.
      Antes de comenzar, me gusta tener una estrategia clara. Por ejemplo, si me solicitan una función que se conecte a una API y devuelva información,
      lo primero que hago es asegurarme de comprender completamente la necesidad. Si entiendo el problema, ya tengo media solución.
      Cuando es necesario, divido el problema en partes más manejables. Y si no comprendo el requerimiento, investigo: documentación, videos o incluso
      preguntando directamente a quien lo pidió. Prefiero aclarar mis dudas antes de avanzar.
    </p>

    <p class="fade-in delay-2">
      Al aprender cosas nuevas, primero busco entender el panorama general. No me quedo con la primera definición: investigo variaciones, casos especiales
      y aplicaciones reales. Me gusta ver qué aporta lo que estoy aprendiendo, qué problemas resuelve. Los videos son uno de mis recursos favoritos porque
      muestran ejemplos prácticos que facilitan la comprensión.
    </p>

    <p class="fade-in delay-3">
      El trabajo en equipo es una actividad que realmente disfruto. Me gusta compartir ideas, aprender de los demás y mejorar mis relaciones
      interpersonales. Considero que es fundamental tanto en la ingeniería como en la vida. Uno solo ve el problema desde un ángulo, pero trabajando
      con otros se descubren nuevas perspectivas. Creo firmemente que la colaboración y el apoyo mutuo son esenciales para alcanzar grandes objetivos.
    </p>

    <p class="fade-in delay-4">
      Algo que me gustaría destacar de mí es que siempre trato de ser lo más humano posible. Considero que la empatía y la comprensión son esenciales
      para los seres humanos; sin ellas no somos más que seres egoístas. Valores como el respeto, la honestidad y la responsabilidad guían mi día a día.
      Disfruto los pequeños placeres como caminar, compartir con amigos o simplemente admirar la vida. No quiero que la imagen del ingeniero sea la del
      típico profesional frío o parecido a un robot. Me gustaría representar que un ingeniero también puede ser alegre, empático y lleno de vida.
    </p>


    <img src="/src/assets/png-transparent-luffy-smiling (1).png" 
         alt="Imagen de Luffy sonriendo" 
         class="vivencia-img fade-in delay-6" />

  </div>
</template>

<style scoped>
.vivencias-container {
  background: linear-gradient(135deg, #e0e7ff 0%, #ffffff 100%);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(89, 92, 255, 0.08);
  padding: 2.8rem 2rem;
  max-width: 900px;
  margin: 2.5rem auto;
  border-left: 4px solid #595cff;
}

.vivencias-container h1 {
  color: #595cff;
  font-size: 2.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
}

.subtitulo {
  text-align: center;
  font-size: 1.15rem;
  font-weight: 600;
  color: #6b6f8c;
  margin-top: -0.5rem;
  margin-bottom: 2.4rem;
  letter-spacing: 0.3px;
  opacity: 0.9;
}

.vivencias-container p {
  color: #222;
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: justify;

  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(89, 92, 255, 0.12);
  border-radius: 10px;
  padding: 1.25rem;

  box-shadow: 0 2px 10px rgba(89, 92, 255, 0.05);
}

.vivencia-img {
  display: block;
  margin: 2rem auto 1rem;
  max-width: 80%;
  width: 300px;
  height: auto;
  border-radius: 35px;
  box-shadow: 0 2px 12px rgba(89, 92, 255, 0.12);
  background: #f5f7fa;
  transition: transform 0.25s ease;
}
.vivencia-img:hover {
  transform: scale(1.06);
}

.divider {
  border: none;
  height: 2px;
  background: linear-gradient(to right, #595cff, transparent);
  margin: 2rem 0 2.5rem;
  opacity: 0.6;
}

.fade-in {
  opacity: 0;
  transform: translateY(15px);
  animation: fadeInUp 0.7s forwards;
}
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }
.delay-5 { animation-delay: 0.55s; }
.delay-6 { animation-delay: 0.7s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .vivencias-container {
    padding: 1.5rem 1rem;
  }
  .vivencias-container h1 {
    font-size: 1.9rem;
  }
  .vivencias-container p {
    font-size: 1rem;
    padding: 0.9rem;
  }
}
</style>
