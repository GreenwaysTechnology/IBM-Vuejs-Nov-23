<script setup>
import { provide, ref, readonly } from 'vue';
import Child1 from './components/propsdrilling/Child1.vue'
const message = ref('Hello')
const counter = ref(10)
provide("message", readonly(message))
provide('counter', counter)
</script>
<template>
    <Child1></Child1>
</template>