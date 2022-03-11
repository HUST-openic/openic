import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

// 1. Define route components.
// These can be imported from other files
import BasePage from '../components/pages/BasePage.vue'
import Terminal from '../components/Terminal.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: BasePage },
  { path: '/term', component: Terminal },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router;

// // 5. Create and mount the root instance.
// const app = Vue.createApp({})
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router)

// app.mount('#app')

// // Now the app has started!
