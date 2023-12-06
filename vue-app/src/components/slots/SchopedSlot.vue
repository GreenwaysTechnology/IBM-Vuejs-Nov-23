<script setup>
import { ref } from 'vue';

const message = ref('Hello')
</script>
<template>
    <!-- Send data to the parent -->
    <slot :message="message"></slot>
</template>