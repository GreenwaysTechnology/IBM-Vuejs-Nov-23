<script setup>
const OnMouseEnter = () => {
    console.log('onMouse Enter')
}
const OnMouseLeave = () => {
    console.log('onMouse Leave')
}
</script>
<template>
    <div>
        <div v-on="{ mouseenter: OnMouseEnter, mouseleave: OnMouseLeave }">Touch</div>
    </div>
</template>