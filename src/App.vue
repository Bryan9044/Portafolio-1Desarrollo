<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useRoute } from 'vue-router'
import logoProgramador from '@/assets/iconoProgramador.png'
import { ref, watch  } from 'vue'


const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const route = useRoute()
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})
</script>

<template>
  <header class="header">
    <nav id="navigation">
      <img :src="logoProgramador" alt="icono de un programador" class="logo-header" />
     <button 
        class="hamburger-btn" 
        :class="{ 'active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul :class="['nav-links', { 'nav-open': isMenuOpen }]">  
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/sobre-mi">Sobre mí</RouterLink></li>
        <li><RouterLink to="/proyectos">Proyectos</RouterLink></li>
        <li><RouterLink to="/contacto">Contacto</RouterLink></li>
        <li><RouterLink to="/personal">Sección Personal</RouterLink></li>
      </ul>
      <label for="switch-toggle" class="switch">
        <input id="switch-toggle" type="checkbox" class="input">
        <div class="rail">
          <span class="circle"></span>
        </div>
        <span class="indicator"></span>
      </label> 
    </nav>
  </header>

  <RouterView :key="$route.fullPath" />



</template>

<style scoped>
.header {
  text-align: center;
}


/* Aqui va todo lo relacionado al footer*/ 
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
body { line-height: 1.5; font-family: 'Poppins', sans-serif; }
* { margin:0; padding:0; box-sizing: border-box; }
.container { max-width: 100%; height: auto; }
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

#navigation {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
}

.header {
background: linear-gradient(135deg, #888e90 0%, #667eea 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 5px 2rem;
  position: relative;
}

/* Botón hamburguesa */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-btn span {
  width: 100%;
  height: 3px;
  background-color: #eceff1;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Navegación */
.nav-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  display: inline-block;
}

.nav-links a {
  font-weight: 700;
  color: #eceff1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ffbc0e;
}

/* Switch efecto */
.switch {
  height: clamp(40px, 6vw, 50px);
  background-image: linear-gradient(to top, #cff8f7 0%, #5d4b69 100%);
  padding: 0 clamp(1rem, 2vw, 1.5rem);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.switch .input {
  display: none;
}

.switch .rail {
  position: relative;
  height: clamp(24px, 4vw, 30px);
  width: clamp(70px, 12vw, 90px);
  background-color: #ffffff;
  border-radius: 3rem;
  transition: all 0.3s ease;
}

.switch .rail .circle {
  display: block;
  width: clamp(28px, 5vw, 36px);
  height: clamp(28px, 5vw, 36px);
  background: radial-gradient(circle at 30% 30%, #f5f5f5 0%, #d9d9d9 70%, #a6a6a6 100%);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 8px #d9d9d9;
}

.switch .indicator {
  width: clamp(12px, 2vw, 15px);
  height: clamp(12px, 2vw, 15px);
  background-color: #fff;
  border-radius: 50%;
  margin-left: clamp(1rem, 2vw, 1.5rem);
  transition: 0.4s;
}

.switch .input:checked ~ .rail .circle {
  background-image: linear-gradient(to right, #fffacd 0%, #ffe066 40%, #ffb347 70%, #ff7e5f 100%);
  transform: translate(clamp(42px, 7vw, 54px), -50%);
  box-shadow: 0 0 10px #ffec99, 0 0 25px #ffe066, 0 0 40px #ffb347;
}

.switch .input:checked ~ .indicator {
  background-color: #43e97b;
}

.logo-header {
  width: clamp(40px, 5vw, 80px);
  height: auto;
  object-fit: contain;
}

/* celular */
@media (max-width: 480px) {
  .hamburger-btn {
    display: flex;
    z-index: 1001;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background-color: #4a636c;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.3s ease;
    z-index: 1000;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  }

  .nav-links.nav-open {
    right: 0;
  }

  .nav-links li {
    width: 100%;
    text-align: center;
  }

  .nav-links a {
    display: block;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(236, 239, 241, 0.1);
  }

  .switch {
    position: absolute;
    top: 50%;
    right: 4rem;
    transform: translateY(-50%) scale(0.9);
  }

  .header {
    height: auto;
    padding: 1rem 2rem;
  }

  .logo-header {
    display: none;
  }
  


}



/* Tablet*/
@media (min-width: 769px) and (max-width: 1023px) {
  .nav-links {
    gap: 16px;
  }

  .logo-header {
    width: 60px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .nav-links {
    gap: 24px;
  }

  .logo-header {
    width: 70px;
  }
}
</style>
