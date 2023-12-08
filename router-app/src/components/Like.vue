<script setup>
import { ref } from 'vue';

const like = ref(0)
</script>
<template>
    <div>
        <h1>Likes {{ like }}</h1>
        <button @click="like++">Like</button>
    </div>
</template>