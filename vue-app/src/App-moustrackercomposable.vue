<script setup>
import { useMouseTracker } from './composables/mousetracker'
const { x, y } = useMouseTracker()
</script>
<template>
    <h1>Mouse Positions are at X:{{ x }} And Y {{ y }}</h1>
</template>