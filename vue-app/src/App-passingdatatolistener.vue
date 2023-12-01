<script setup>
const update = (data, evt) => {
    console.log(data)
    console.log(evt)
}
</script>
<template>
    <button @click="update('hello', $event)">Update</button>
</template>