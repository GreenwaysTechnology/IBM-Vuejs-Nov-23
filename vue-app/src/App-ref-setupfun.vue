<script>
import { ref } from 'vue'

export default {
    setup() {
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
        return {
            counter,
            onIncrement,
            onDecrement
        }
    }
}
</script>
<template>
    <div>
        <h1>State Mutation-Composition api using Setup function</h1>
        <h2>Counter : {{ counter }}</h2>
        <button @click="onIncrement">+</button>
        <button @click="onDecrement">-</button>
    </div>
</template>