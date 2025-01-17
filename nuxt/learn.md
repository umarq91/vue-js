important points 

- components auto imports but if we create folders like components->layout->Navbar , We have to import it like this . <layoutNavbar/> instead of <Navbar/>

# Layouts
    - You enable layouts by adding NuxtLayout in App.ue
    - To set the layouts  , make a default.vue in layouts folder . By default it will be set to al
    - to use other layouts on other pages , add "definePageMeta"  like this 
      definePageMeta({
        layout: 'custom'
    })
    - Or we can set the :name parameter static or dynamically in Nuxtlayout in App.vue

# Composables
  - Composables are like custom Hooks , start it with use , and inside write the logic and methods and return em.