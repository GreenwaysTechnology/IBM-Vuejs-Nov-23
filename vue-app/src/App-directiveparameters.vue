<script setup>
import { ref } from 'vue';

const color = ref('pink')
</script>
<template>
    <input v-focus />
    <h1 v-highlight.value="color">Highlight Me</h1>

    <h1 v-highlight>Highlight Me</h1>
</template>