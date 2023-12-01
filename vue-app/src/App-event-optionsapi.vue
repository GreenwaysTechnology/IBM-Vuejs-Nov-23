<script>
export default {
    //listener
    methods: {
        onIncrement(evt) {
            console.log('Click')
        }
    }
}
</script>
<template>
    <div>
        <h1>Event Handling in Options Api</h1>
        <button v-on:click="onIncrement">Click</button>
        <button @click="onIncrement">Click</button>
    </div>
</template>