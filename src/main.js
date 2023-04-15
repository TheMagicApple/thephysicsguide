import {createApp} from 'vue'
import {createRouter,createWebHistory} from 'vue-router'
import App from './App.vue'

import Home from "./components/Home"
import Kinematics from "./components/Kinematics"

const router=createRouter({
	history:createWebHistory(),
	routes:[
	{path:"/",component:Home},
	{path:"/kinematics",component:Kinematics}
	]
})

const app=createApp(App)
app.use(router)
app.mount('#app')
