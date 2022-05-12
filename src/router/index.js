import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import Projects from "@/pages/projects/Index";
import MobileApps from "@/pages/projects/MobileApps";
import Websites from "@/pages/projects/Websites";
import ProjectsCategory from "@/pages/projects/ProjectsCategory";
import JoinUs from "@/pages/JoinUs";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import MobileApp from "@/pages/projects/MobileApp";
import Website from "@/pages/projects/Website";
import MotionGraphic from "@/pages/projects/MotionGraphic";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/join-us', component: JoinUs },
    { path: '/contact', component: Contact },
    { path: '/team', component: Team },
    { path: '/projects', component: Projects },
    { path: '/mobile-applications', component: MobileApps },
    { path: '/mobile-application/:id', component: MobileApp },
    { path: '/websites', component: Websites },
    { path: '/website/:id', component: Website },
    { path: '/projects/:id', component: ProjectsCategory },
    { path: '/motion-graphic', component: MotionGraphic },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
