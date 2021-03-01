import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from "../components/pages/Top.vue"
import Framepage from '../components/pages/Framepage'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "TopPage",
        component: TopPage
    },
    {
        path: "/Framepage",
        name: "Framepage",
        component: Framepage,
    }
]

const router = new VueRouter({
    routes
  })
  
export default router
