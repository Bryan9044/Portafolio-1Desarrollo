
<template> 
<div class="slider">
    <span style="--i:1;"><img src="@/assets/Hob1.jpg" alt="Anime Evangelion"></span>
    <span style="--i:2;"><img src="@/assets/Hob2.jpg" alt="Imagen de pesca"></span>
    <span style="--i:3;"><img src="@/assets/Hob3.jpg" alt="Granja con vacas y cerdos"></span>
    <span style="--i:4;"><img src="@/assets/Hob4.jpeg" alt="videojuego Call of duty ghost"></span>
    <span style="--i:5;"><img src="@/assets/Hob5.jpeg" alt="Granja con vacas y cerdos"></span>
    <span style="--i:6;"><img src="@/assets/Hob6.jpeg" alt="videojuego Call of duty ghost"></span>
    <span style="--i:7;"><img src="@/assets/Hob7.jpg" alt="Granja con vacas y cerdos"></span>
    <span style="--i:8;"><img src="@/assets/Hob8.png" alt="videojuego Call of duty ghost"></span>


</div>

</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.slider {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: rotar 20s linear infinite;
}

.slider:hover {
  animation-play-state: paused;
}


@keyframes rotar {
    0%{
        transform: perspective(1000px) rotateY(0deg);
    }

    100%{
        transform: perspective(1000px) rotateY(360deg);
    }

}

.slider span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 45deg)) translateZ(350px);

    
}

.slider span img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    object-fit: cover;
    transition: 2s;
}


.slider span:hover img{
    transform: translateY(-50px) scale(1.2);

}


</style>