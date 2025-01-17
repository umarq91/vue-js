import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = false;

    if(isLoggedIn){
        return navigateTo(to.fullPath)
    } 

    if(to.fullPath !== "/"){
            if(!isLoggedIn){
                return navigateTo('/')
            }
    }
})