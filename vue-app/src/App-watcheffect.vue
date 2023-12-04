<script setup>
import { ref, watch, watchEffect } from 'vue';
const counter = ref(0)

//watch function
// watch(counter, (newValue, oldValue) => {
//     console.log(`oldvalue`, oldValue, 'newValue', newValue)
// })
//watch effect
watchEffect(() => {
    console.log("Watching...", counter.value)
})
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button @click="counter++">+</button>
    </div>
</template>