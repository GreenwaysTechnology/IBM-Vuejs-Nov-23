<script setup>
import { computed, reactive } from 'vue'

import { TODOS } from './mock-data/todos'

const state = reactive({ todos: TODOS, searchQuery: null })

const resultQuery = computed(() => {
    if (state.searchQuery) {
        //filter logic 
        return state.todos.filter(item => {
            console.log(item)
            return state.searchQuery.toLowerCase().split(" ").every(v => item.title.toLowerCase().includes(v))
        });
    } else {
        return state.todos
    }
});
</script>
<template>
    <input v-model="state.searchQuery" type="text">
    <div v-for="todo in resultQuery" :key="todo.id">
        <p>{{ todo.id }} {{ todo.title }}</p>
    </div>
</template>