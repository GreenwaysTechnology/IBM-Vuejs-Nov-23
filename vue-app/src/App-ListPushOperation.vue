<script setup>
import { reactive } from 'vue';

const todos = reactive([])

const addItem = evt => {
    todos.push({ id: Math.random(), text: 'Learn Vue' })
}

</script>
<template>
    <div>
        <ul>
            <li v-for="todo in todos">
                <span>{{ todo }}</span>
            </li>
        </ul>
        <button @click="addItem">Add Todo</button>
    </div>
</template>