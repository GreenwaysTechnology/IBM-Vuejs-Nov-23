<script setup>
import { reactive, ref } from 'vue';
const isActive = ref(false)

const classObject = reactive({
    active: false,
    bgcolor: false
})

const highLight = () => {
    if (isActive.value) {
        isActive.value = false
    } else {
        isActive.value = true
    }
}
const clickActive = () => {
    if (classObject.active) {
        classObject.active = false
        classObject.bgcolor = false

    } else {
        classObject.active = true
        classObject.bgcolor = true

    }
}

</script>
<template>
    <div @mousemove="highLight" :class="{ active: isActive, bgcolor: isActive }">
        <h1>Hello</h1>
    </div>

    <div @click="clickActive" :class="classObject">
        <h1>Hello</h1>
    </div>
</template>
<style>
/* Local component specific style */
.active {
    color: red;
}

.bgcolor {
    background-color: aqua;
}
</style>