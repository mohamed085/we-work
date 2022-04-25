import Vue from 'vue'
import VueRouter from 'vue-router'
import ProjectsView from "@/pages/Projects/ProjectsView";
import Home from "@/pages/Home";
import Test from "@/pages/Test";
// import WebsitesView from "@/pages/Projects/WebsitesView";
// import MobileApplicationsView from "@/pages/Projects/MobileApplicationsView";
// import MobileAppView from "@/pages/Projects/MobileAppView";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: ProjectsView },
    { path: '/test', component: Test },
    // { path: '/websites', component: WebsitesView },
    // { path: '/mobile-applications', component: MobileApplicationsView },
    // { path: '/mobile-app/:id', component: MobileAppView },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
