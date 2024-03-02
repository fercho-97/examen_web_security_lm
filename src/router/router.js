import { createRouter, createWebHashHistory } from "vue-router";    


const routes =[

    {
        path: '/generar',
        component: () => import('../pages/GenerarTokenPage.vue')
    },
    {
        path: '/estudiante',
        component: () => import('../pages/GuardarPage.vue')
    },


]

const router = createRouter({history: createWebHashHistory(), routes })

export default router