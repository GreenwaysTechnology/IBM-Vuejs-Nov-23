<script setup>
import { ref } from 'vue';
const name = ref('default')

</script>
<template>
    <div class="container">
        <h1>Forms</h1>
        <h1>Name {{ name }}</h1>
        <input v-model="name" />
    </div>
</template>