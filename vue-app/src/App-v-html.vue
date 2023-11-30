<script setup>
const name = 'Subramanian'
</script>
<template>
    <h1>Interpolation using mustache notation</h1>
    <h2>Name {{ name }}</h2>
    <h1>Interpolation using Directive -v-html</h1>
    <h2 v-html="`Name ${name}`"></h2>
    <h1>Interpolation using Directive -v-text</h1>
    <h2 v-text="`Name ${name}`"></h2>
</template>
<style></style>