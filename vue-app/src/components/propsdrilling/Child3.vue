<script setup>
import { inject } from 'vue';

const message = inject('message')
const counter = inject('counter', 0)
let company = inject('company')
console.log(message)
message.value = 'Hai'
</script>
<template>
    <h1>Child 3</h1>
    <h2>{{ message }}</h2>
    <h4>{{ counter }}</h4>
    <h2>{{ company }}</h2>
</template>