<script setup>
import cards3d from '@/components/Cards3dv.vue'
import gifAnimacion from '@/assets/gif.gif'
import { ref, onMounted } from 'vue'


const comentarios = ref([])


const nuevoComentario = ref({
    Nombre: '',
    Comentario: ''
})

async function CargaComentarios() {
    try {
        const res = await fetch('/.netlify/functions/guardarComentarios')
        const data = await res.json()
        comentarios.value = data.Comentarios
    } catch (error) {
        console.error('Error al cargar los comentarios:', error)
    }

    
}


async function agregarComentario() {
    if (!nuevoComentario.value.Comentario) {
        alert('Por favor escribe un comentario :c')
        return
    }

    try {
        const res = await fetch('/.netlify/functions/guardarcomentario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoComentario.value)
        })

        const data = await res.json()
        console.log('Comentario agregado:', data.mensaje)

        await CargaComentarios()

        nuevoComentario.value.Nombre = ''
        nuevoComentario.value.Comentario = ''   
    } catch (err) {
        console.error('Error al agregar comentario:', err)
    }
}

onMounted(() => {
    CargaComentarios()
})




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
        <div class="comments"> 
        <p>Si gustas puedes dejar un mensaje para mí ya sea de cualquier cosa que quieras mencionar </p>
        <img :src="gifAnimacion" alt="Git de persona con cara divertida con laptop escribiendo" class="img-gif">
        <img :src="gifAnimacion" alt="Git de persona con cara divertida con laptop escribiendo" class="img-gif2">
        <input type="text" placeholder="Escribe aquí..."  v-model="nuevoComentario.Nombre" />
        <input type="text" placeholder="Escribe aquí..."  v-model="nuevoComentario.Comentario" />

        </div>

        <button @click="agregarComentario">Enviar</button>

        <div v-if="comentarios.length > 0" class="comentarios-lista">
            <h3>Comentarios recientes</h3>
            <div v-for="(c, i) in comentarios" :key="i" class="comentario-item">
            <strong>{{ c.Nombre }}</strong>: {{ c.Comentario }}
            </div>
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

.comments {
    width: 100%;
    height: auto;
    background: linear-gradient(135deg, #595cff 30%, #c6f8ff 50%);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
}

.comments p {
    font-size: 1.0rem;
    color: #333;
    margin-bottom: 10px;
    margin-top: 5%;
}


.img-gif {
  position: absolute;
    top: 35px;
    right: 78%;
    width: 6%;
    border-radius: 4%;
    height: auto;
}
.img-gif2 {
    position: absolute;
    top: 35px;
    left: 78%;
    width: 6%;
    border-radius: 4%;
    height: auto;
}

input[type="text"] {
    top: -20px;
    width: 50%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    background-color: white;
}


</style>