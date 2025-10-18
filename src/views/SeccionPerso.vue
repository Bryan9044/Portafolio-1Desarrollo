<script setup>
import cards3d from '@/components/Cards3dv.vue'
import gifAnimacion from '@/assets/gif.gif'
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'



const comentarios = ref([])
const nuevoComentario = ref({
    Nombre: '',
    Comentario: ''
})



async function CargaComentarios() {
  let { data, error } = await supabase.from('comentarios').select('*').order('fecha', { ascending: false })
  if (error) console.error(error)
  else comentarios.value = data
}


async function agregarComentario() {
    if (!nuevoComentario.value.Comentario) {
        alert('Escribe un mensaje CARAJO')
        return
    }       

    const { data, error } = await supabase
        .from('comentarios')
        .insert([
            {
                nombre: nuevoComentario.value.Nombre,
                comentario: nuevoComentario.value.Comentario
            }
        ])

    if (error) {
        console.error(error)
        return
    } else {
        nuevoComentario.value.Nombre = ''
        nuevoComentario.value.Comentario = ''
        CargaComentarios()
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
        <input type="text" placeholder="Escribe tu nombre o apodo" v-model="nuevoComentario.Nombre" />
        <input type="text" placeholder="Escribe un comentario" v-model="nuevoComentario.Comentario" />
        </div>

        <button @click="agregarComentario">Enviar</button>

        <div class="comments-section">
        <h3>Comentarios recientes</h3>

        <div v-for="(c, i) in comentarios" :key="i" class="comentario-item">
        <img 
        :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=${c.nombre || i}`" 
        :alt="c.nombre"
        class="avatar-img"
        />
            <strong>{{ c.nombre }}</strong>
            <p>{{ c.comentario }}</p>
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

.comments-section {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    margin-top: 2rem;
    width: 100%;
    max-width: 700px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.comments-section h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: #333;
}

.comentario-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    background-color: #f5f5f5;
    border-left: 4px solid #595cff;
    border-radius: 4px;
    padding: 1rem;
    transition: background-color 0.2s ease;
}

.comentario-item:last-child {
    margin-bottom: 0;
}

.comentario-item:hover {
    background-color: #eaeaea;
}

.comentario-item strong {
    display: block;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
}

.comentario-item p {
    margin: 0;
    color: #666;
    line-height: 1.4;
}

.avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #595cff;
  object-fit: cover;
}


</style>