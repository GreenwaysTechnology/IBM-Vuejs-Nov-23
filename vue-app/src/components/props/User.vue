<script setup>
const props = defineProps({
    // name: String
    name: {
        type: String,
        default: 'Your name'
    },
    status: {
        type: Boolean,
        // default: false
    }
})
props.name = 'Foo'
</script>
<template>
    <h1>User</h1>
    <h1>Name {{ name }} </h1>
    <h3>Status {{ status }}</h3>
</template>