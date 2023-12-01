<script setup>
import { ref } from 'vue'
//convert counter into reactive
let counter = ref(0)
//listener 
const onIncrement = () => {
    console.log('onIncrement')
    counter.value++
}
const onDecrement = () => {
    console.log('onDecrement')
    counter.value--
}
const onIncrementBy = (payload, event) => {
    counter.value += payload
}
</script>
<template>
    <div>
        <h1>State Mutation-Composition api using Setup function</h1>
        <h2>Counter : {{ counter }}</h2>
        <button @click="onIncrement">+</button>
        <button @click="onDecrement">-</button>
        <button @click="onIncrementBy(5, $event)">IncrementBy</button>

    </div>
</template>