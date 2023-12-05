<!-- Parent which receives events from child -->
<script setup>
import { ref } from 'vue';
import Counter from './components/eventsemitter/Counter.vue';

const childValue = ref(0)
const getChildData = data => {
    childValue.value = data
}
</script>
<template>
    <div class="container">
        <h1>Parent Counter {{ childValue }}</h1>
        <Counter @on-request="getChildData" />
    </div>
</template>
<style>

</style>