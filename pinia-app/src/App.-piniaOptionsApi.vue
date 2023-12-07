<script setup>
import { useCounterStore } from './stores/counter';
const counterStore = useCounterStore()

//listener which updates store 
const onIncrement = () => {
  counterStore.increment()
}
</script>
<template>
  <h1>State Management Using Pinia</h1>
  <div>
    <h1>Counter {{ counterStore.count }}</h1>
    <h2>Getters Counter:{{counterStore.value }} Double:{{counterStore.doubleIt }}</h2>
    <button @click="onIncrement">+</button>
  </div>
</template>