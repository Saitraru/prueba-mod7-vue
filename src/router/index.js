import { createRouter, createWebHistory } from "vue-router"; // Importa las funciones necesarias de vue-router
import HomeView from "../views/HomeView.vue"; // Importa el componente de la vista Home
import AboutView from "../views/AboutView.vue"; // Importa el componente de la vista About

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView, // Define la ruta para el componente HomeView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView, // Define la ruta para el componente AboutView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Configura el modo de historial para el enrutador
  routes, // Asigna las rutas definidas anteriormente
});

export default router; // Exporta el enrutador para que pueda ser usado en la aplicación
