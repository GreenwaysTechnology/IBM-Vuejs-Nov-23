<script setup>
//listeners
const onIncrement = (evt) => {
    console.log('Button is click')
}
</script>
<template>
    <div>
        <h1>Event handling With Setup Attribute</h1>
        <button @click="onIncrement">Update</button>
    </div>
</template>