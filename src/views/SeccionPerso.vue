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
        <input type="text" placeholder="Escribe tu nombre o apodo" v-model="nuevoComentario.Nombre" required />
        <input type="text" placeholder="Escribe un comentario" v-model="nuevoComentario.Comentario" required />
        </div>

        <button @click="agregarComentario" class="envio">Enviar</button>

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
    text-align: center;
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
    gap: 20px;
    justify-content: center;
    padding: 40px 20px;
}

.comments p {
    font-size: 1.0rem;
    color: #333;
    margin-top: 20px;
}

.img-gif {
    position: absolute;
    top: 40px;
    right: 78%;
    width: 6%;
    border-radius: 4%;
    height: auto;
}

.img-gif2 {
    position: absolute;
    top: 40px;
    left: 78%;
    width: 6%;
    border-radius: 4%;
    height: auto;
}

.inputs-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 70%;
    max-width: 200px;
    margin: 20px 0;
}

.input-wrapper {
    position: relative;
    width: 100%;
}

input[type="text"] {
    width: 50%;
    padding: 14px 16px;
    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    font-size: 1rem;
    color: #333;
    outline: none;
    transition: all 0.3s ease;
}

input[type="text"]::placeholder {
    color: rgba(51, 51, 51, 0.5);
}

input[type="text"]:focus {
    border-color: #595cff;
    box-shadow: 0 0 0 3px rgba(89, 92, 255, 0.1);
}

input[type="text"]:hover {
    border-color: #595cff;
}

.comments-section {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    margin-top: 2rem;
    width: 100%;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
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

.envio {
    padding: 12px 32px;
    background-color: #1a1a1a;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.envio:hover {
    background-color: #030146;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.envio:active {
    transform: translateY(0);
}


@media (max-width: 480px) {
    .container h2 {
        top: 25%;
        font-size: 1.5rem;
    }

    .container p {
        top: 75%;
        font-size: 0.87rem;
        width: 90%;
    }

    .img-gif,
    .img-gif2 {
        width: 12%;
        top: 20px;
    }

    .img-gif {
        right: 85%;
    }

    .img-gif2 {
        left: 85%;
    }

    .comments p {
        font-size: 0.9rem;
    }

    input[type="text"] {
        width: 90%;
        padding: 12px 12px;
        font-size: 0.95rem;
    }

    .comments-section {
        max-width: 90%;
        padding: 1.5rem 1rem;
        margin: 1rem;
    }

    .envio {
        padding: 10px 24px;
        font-size: 0.9rem;
    }

    .comentario-item {
        gap: 0.75rem;
        padding: 0.75rem;
    }

    .avatar-img {
        width: 40px;
        height: 40px;
        min-width: 40px;
    }

    .comments-section h3 {
        font-size: 1.2rem;
    }
}

/* Tablet pequeña - 481px a 688px */
@media (min-width: 481px) and (max-width: 688px) {
    .container h2 {
        top: 28%;
        font-size: 1.8rem;
    }

    .container p {
        top: 87%;
        font-size: 0.9rem;
        width: 85%;
    }

    .img-gif,
    .img-gif2 {
        width: 10%;
        top: 30px;
    }

    .img-gif {
        right: 80%;
    }

    .img-gif2 {
        left: 80%;
    }

    .comments p {
        font-size: 0.95rem;
    }

    input[type="text"] {
        width: 80%;
        padding: 13px 14px;
    }

    .comments-section {
        max-width: 90%;
        padding: 1.75rem;
        margin: 1.5rem auto;
    }

    .envio {
        padding: 11px 28px;
        font-size: 0.95rem;
    }

    .comentario-item {
        gap: 0.9rem;
        padding: 0.9rem;
    }

    .avatar-img {
        width: 45px;
        height: 45px;
        min-width: 45px;
    }
}

/* Tablet - 689px a 1023px */
@media (min-width: 689px) and (max-width: 1023px) {
    .container h2 {
        top: 29%;
        font-size: 2rem;
    }

    .container p {
        top: 88%;
        font-size: 0.95rem;
        width: 75%;
    }

    .img-gif,
    .img-gif2 {
        width: 8%;
        top: 35px;
    }

    .img-gif {
        right: 80%;
    }

    .img-gif2 {
        left: 80%;
    }

    .comments p {
        font-size: 1rem;
    }

    input[type="text"] {
        width: 70%;
        padding: 13px 15px;
    }

    .comments-section {
        max-width: 600px;
        padding: 2rem;
    }

    .envio {
        padding: 11px 30px;
    }

    .comentario-item {
        gap: 1rem;
    }

    .avatar-img {
        width: 48px;
        height: 48px;
        min-width: 48px;
    }
}

/* Desktop - 1024px en adelante */
@media (min-width: 1024px) {
    .container h2 {
        top: 30%;
        font-size: 2rem;
    }

    .container p {
        top: 90%;
        font-size: 1rem;
        width: 60%;
    }

    .img-gif {
        right: 78%;
    }

    .img-gif2 {
        left: 78%;
    }

    .comments p {
        font-size: 1rem;
    }

    input[type="text"] {
        width: 50%;
        padding: 14px 16px;
    }

    .comments-section {
        max-width: 700px;
    }

    .envio {
        padding: 12px 32px;
        font-size: 1rem;
    }

    .comentario-item {
        gap: 1rem;
        padding: 1rem;
    }

    .avatar-img {
        width: 50px;
        height: 50px;
    }
}
</style>