<script setup>
import { ref } from 'vue'
//convert counter into reactive
let counter = ref(0)

const onIncrementBy = (payload, event) => {
    counter.value += payload
}
</script>
<template>
    <div>
        <h1>State Mutation-Composition api using Setup function</h1>
        <h2>Counter : {{ counter }}</h2>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
        <button @click="onIncrementBy(5, $event)">IncrementBy</button>

    </div>
</template>