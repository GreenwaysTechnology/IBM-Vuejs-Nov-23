<script>
export default {
    data() {
        //reactive variables
        return {
            counter: 0
        }
    },
    methods: {
        onIncrement() {
            this.counter++
        },
        onDecrement() {
            this.counter--
        }
    }
}
</script>
<template>
    <div>
        <h1>Counter App-Using Options API</h1>
        <h3>Counter : {{ counter }}</h3>
        <button @click="onIncrement">+</button>
        <button @click="onDecrement">-</button>

    </div>
</template>