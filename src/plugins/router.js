import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Detail from '@/components/Detail.vue'
import ContactUs from '@/components/ContactUs.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/product/:id',
        name: 'Detail',
        component: Detail,
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router