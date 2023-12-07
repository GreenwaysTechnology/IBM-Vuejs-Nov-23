// import './assets/main.css'
// import './assets/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import StatusBar from './components/StatusBar.vue'
import uppercasePlugin from './plugins/uppercasePlugin'

import App from './App.vue'

// // createApp(App).mount('#app')
// const app = createApp(App)

// //Global Components
// app.component('StatusBar', StatusBar)

// app.mount('#app')

//chainining pattern 
createApp(App)
    .component('StatusBar', StatusBar)
    .provide('company', 'vue organization')
    .directive('focus', (element, binding) => {
        element.focus()
    })
    .directive('highlight', (element, binding) => {

        //get input from the template 
        console.log(binding)
        let color = binding.value || 'yellow'

        if (binding.modifiers.bar) {
            color = 'green'
        }

        element.addEventListener('mousemove', evt => {
            highlight(color, 'x-large')
        })
        element.addEventListener('mouseleave', evt => {
            highlight(null, null)
        })

        const highlight = (color, size) => {
            element.style.backgroundColor = color
            element.style.fontSize = size
        }
    })
    .use(uppercasePlugin)
    .mount('#app')