<script setup>
import { useRoute } from 'vue-router';
import PhotoDetails from '../components/PhotoDetail.vue'
const route = useRoute()
</script>
<template>
    <PhotoDetails :id="route.params.id" />
</template>