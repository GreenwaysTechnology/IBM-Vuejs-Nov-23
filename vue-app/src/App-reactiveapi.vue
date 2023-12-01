<script setup>
import { reactive } from 'vue';
const counter = reactive({ count: 0 })
const onIncrement = () => {
    counter.count++
}
</script>
<template>
    <h1 @click="onIncrement">Counter : {{ counter.count }}</h1>
</template>