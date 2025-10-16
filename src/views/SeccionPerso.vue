<script setup>
import cards3d from '@/components/Cards3dv.vue'
</script>

<template>
<div class="allStyle"> 
<h1>Bienvenido a la sección más interesante</h1>
    <div class="container"> 
        <h2>Mis hobbies</h2> 
        <cards3d class="card-section" />
        <p>Si algo me caracteriza son mis gustos y mi forma de pensar. Entre mis hobbies se 
            encuentran el anime, los videojuegos, la pesca, la agricultura y, por supuesto, 
            la tecnología.Gracias a todas estas pasiones he desarrollado mi forma de ser, 
            pero sobre todo mi amor por la tecnología y el desarrollo de software. Desde niño, 
            al ver animes y videojuegos, sentí una gran curiosidad por entender cómo era posible 
            crear esas acciones o tecnologías que aparecían en pantalla.Esa curiosidad fue el 
            punto de partida que me llevó al mundo de la programación y a estudiar Ingeniería en 
            Computación. Hoy sigo con ese mismo interés: crear soluciones que hagan realidad lo 
            que uno imagina y sueña.
        </p>
    </div>
</div>  
</template>

<style scoped>
.allStyle {

    background: linear-gradient(135deg, #595cff 30%, #c6f8ff 50%);
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.container h2 {
    position: absolute;
    top: 30%;
    font-size: 2rem;
    color: #1a1a1a;
}

.container .card-section {
    position: absolute;
    top: 45%;
}

.container p {
    position: absolute;
    top: 90%;
    font-size: 1.0rem;
    color: #222;
    width: 60%;
    text-align: center;
}

</style>