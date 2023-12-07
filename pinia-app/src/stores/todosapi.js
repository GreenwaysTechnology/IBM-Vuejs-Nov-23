import { defineStore } from "pinia";
import { ref, computed } from "vue";

//options api
// export const useTodoStore = defineStore('todos', {
//     state: () => {
//         return {
//             todos: null,
//             error: null
//         }
//     },
//     actions: {
//         async getTodos(url) {
//             try {
//                 const response = await fetch(url)
//                 const todos = await response.json()
//                 this.todos = todos
//             }
//             catch (err) {
//                 this.err = err
//             }
//         }
//     },
//     getters: {
//         todolist: state => state.todos
//     }
// })

//compostion api and pinia
export const useTodoStore = defineStore('todos', () => {
    //state 
    const todos = ref(null)
    const error = ref(null)
    //actions
    async function getTodos(url) {
        try {
            const response = await fetch(url)
            const todos = await response.json()
            this.todos = todos
        }
        catch (err) {
            this.err = error
        }
    }
    const todolist = computed(() => {
        return todos.value
    })
    return {
        getTodos, todolist, error, todos
    }

})