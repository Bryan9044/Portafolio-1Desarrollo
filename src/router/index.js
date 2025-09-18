import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Curso from '@/views/Cursos.vue';
import SobreMi from '@/views/AboutMe.vue';
//import Proyectos from '@/views/Proyectos.vue';
//import Contacto from '@/views/Contacto.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/curso/:id', component: Curso },
  { path: '/sobre-mi', component: SobreMi },
 // { path: '/proyectos', component: Proyectos },
 // { path: '/contacto', component: Contacto },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
