<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="header">
    <nav id="navigation">
      <ul class="nav-links">  
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/sobre-mi">Sobre mí</RouterLink></li>
        <li><RouterLink to="/proyectos">Proyectos</RouterLink></li>
        <li><RouterLink to="/contacto">Contacto</RouterLink></li>
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
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
}
.header {
  background-color: #4a636c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 85px;
  padding: 5px 10%;
}
.nav-links{
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.header .nav-links li{
  display: inline-block;
  padding: 0 20px;
}

.header .nav-links:hover{
  transform: scale(1.1);

}

.header .nav-links a{
  font-weight: 700;
  color: #eceff1;
  text-decoration: none;}

.header .nav-links li a:hover{
  color: #ffbc0e;

}



.switch{
  height: 50px;
  background-image: linear-gradient(to top, #cff8f7 0%, #5d4b69 100%);
  padding: 0 1.5rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}


.switch .input{
display: none;
}

.switch .rail{
position: relative;
height: 30px;
width: 90px;
background-color: #ffffff;
border-radius: 3rem;
}

.switch .rail .circle {
  display: block;
  width: 36px;
  height: 36px;
  background: radial-gradient(circle at 30% 30%,  #f5f5f5 0%, #d9d9d9 70%, #a6a6a6 100%);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  transition: all 0.4s ease-in-out;
  box-shadow: 0 0 8px #d9d9d9;
}



.switch .indicator{
width: 15px;
height: 15px;
background-color: #fff;
border-radius: 50%;
margin-left: 1.5rem;
transition: 0.4s;
}


.switch .input:checked ~ .rail .circle{
background-image:linear-gradient(to right, #fffacd 0%,#ffe066 40%, #ffb347 70%, #ff7e5f 100%);
transform: translate(54px, -50%);
box-shadow: 0 0 10px #ffec99, 0 0 25px #ffe066, 0 0 40px #ffb347;
}


.switch .input:checked ~ .indicator{
  background-color: #43e97b;

}
/* Responsive */

</style>
