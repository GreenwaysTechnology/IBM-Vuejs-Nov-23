<script setup>
defineProps({
    counter: {
        type: Number
    }
})
</script>
<template>
    <h1>Counter Child</h1>
    <h2>Counter : {{ counter }}</h2>
</template>