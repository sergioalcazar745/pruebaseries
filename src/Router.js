import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from './components/Home.vue';
import NuevoPersonaje from './components/NuevoPersonaje.vue';
import ModificarPersonaje from './components/ModificarPersonaje.vue';
import SerieComponent from './components/Serie.vue';
import Personajes from './components/Personajes.vue';

const routes = [

    {
        path: "/", component: HomeComponent
    },

    {
        path: "/nuevo", component: NuevoPersonaje
    },

    {
        path: "/modificar", component: ModificarPersonaje
    },

    {
        path: "/serie/:id", component: SerieComponent
    },

    {
        path: "/personajes/:id", component: Personajes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router