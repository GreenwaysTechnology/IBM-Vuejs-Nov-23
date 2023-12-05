<!-- Child Component -->
<script setup>
import { ref } from 'vue';

const counter = ref(0)
const emit = defineEmits(['onReqest'])

const onSend = () => {
    counter.value++
    emit('onRequest', counter.value)
}

</script>
<template>
    <h1>Child Component -Counter</h1>
    <button @click="onSend">SendToParent</button>
</template>