<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="header">
    <h1>Mi Portafolio</h1>
    <nav id="navigation">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/sobre-mi">Sobre mí</RouterLink>
      <RouterLink to="/proyectos">Proyectos</RouterLink>
      <RouterLink to="/contacto">Contacto</RouterLink>
    </nav>
  </header>

  <RouterView :key="$route.fullPath" />

  <footer class="footer">
     <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>Acerca de mí</h4>
          <ul>
            <li><a href="#">Sobre mí</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">watch</a></li>
            <li><a href="#">bag</a></li>
            <li><a href="#">shoes</a></li>
            <li><a href="#">dress</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Mis redes</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
     </div>
  </footer>

</template>

<style scoped>
.header {
  text-align: center;
}
#navigation {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 16px 0;
}
#navigation a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}
#navigation a:hover {
  background-color: #d9b8da;
  color: #000;
  transform: scale(1.05);
}

/* Aqui va todo lo relacionado al footer*/ 
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
body { line-height: 1.5; font-family: 'Poppins', sans-serif; }
* { margin:0; padding:0; box-sizing: border-box; }
.container { max-width: 1170px; margin:auto; }
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


/* Responsive */

</style>
