<script setup>
import { ref } from 'vue';
const counter = ref({ count: 0 })
console.log(counter)
const onIncrement = () => {
    counter.value.count++
}
</script>
<template>
    <h1>Counter : {{ counter.count }}</h1>
    <button @click="onIncrement">+</button>
</template>