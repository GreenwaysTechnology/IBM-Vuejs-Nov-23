<script setup>
import { useLikeStore } from './stores/like'
const likeStore = useLikeStore()
</script>
<template>
    <h1>Like {{ likeStore.like }} double It : {{ likeStore.doubleIt }}</h1>
    <button @click="likeStore.increment">+</button>
</template>