// import './assets/main.css'
import { createApp } from 'vue'
import StatusBar from './components/StatusBar.vue'

import App from './App.vue'

// // createApp(App).mount('#app')
// const app = createApp(App)

// //Global Components
// app.component('StatusBar', StatusBar)

// app.mount('#app')

//chainining pattern 
createApp(App).component('StatusBar', StatusBar).mount('#app')