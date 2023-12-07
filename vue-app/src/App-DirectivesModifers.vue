<script setup>
import { ref } from 'vue';
const color = ref('pink')
</script>
<template>
    <h1 v-highlight.value="color">Highlight Me</h1>
    <!-- Directive modifie -->
    <h2 v-highlight:foo.bar="color">Highlight with Modifer</h2>
</template>