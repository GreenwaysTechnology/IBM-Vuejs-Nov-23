<script setup>
import { onMounted } from 'vue';
import { useTodoStore } from './stores/todosapi'
const todosStore = useTodoStore()
onMounted(() => {
    todosStore.getTodos('https://jsonplaceholder.typicode.com/todos')
})
</script>
<template>
    <div>
        <h1>Todo App using Pinia</h1>
    </div>
    <div v-if="todosStore.error">{{ todosStore.error.message }}</div>
    <div v-else-if="todosStore.todos">
        <ul>
            <li v-for="todo of todosStore.todolist">
                {{ todo.title }}
            </li>
        </ul>
    </div>
    <div v-else>
        <h1>Loading...</h1>
    </div>
</template>