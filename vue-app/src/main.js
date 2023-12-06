// import './assets/main.css'
// import './assets/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import StatusBar from './components/StatusBar.vue'

import App from './App.vue'

// // createApp(App).mount('#app')
// const app = createApp(App)

// //Global Components
// app.component('StatusBar', StatusBar)

// app.mount('#app')

//chainining pattern 
createApp(App)
.component('StatusBar', StatusBar)
.provide('company','vue organization')
.mount('#app')