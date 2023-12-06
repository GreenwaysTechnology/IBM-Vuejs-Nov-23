<script setup>
import { ref } from 'vue';

const name = ref('default')
const getInput = (evt) => {
    const value = evt.target.value
    console.log(value)
    name.value = value
}
</script>
<template>
    <div class="container">
        <h1>Forms</h1>
        <h1>Name {{ name }}</h1>
        <input @input="getInput" :value="name">
    </div>
</template>