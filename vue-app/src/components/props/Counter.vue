<script setup>
import { ref } from 'vue';
import CounterDisplay from './CounterDisplay.vue';

const counter = ref(0)

</script>
<template>
    <div>
        <h1>Counter Parent</h1>
        <CounterDisplay :counter="counter" />
        <button @click="counter++">+</button>
    </div>
</template>