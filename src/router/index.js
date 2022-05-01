import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import Projects from "@/pages/Projects/Index";
import MobileApps from "@/pages/Projects/MobileApps";
import Websites from "@/pages/Projects/Websites";
import ProjectsCategory from "@/pages/Projects/ProjectsCategory";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/mobile-applications', component: MobileApps },
    { path: '/websites', component: Websites },
    { path: '/projects/:id', component: ProjectsCategory },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
