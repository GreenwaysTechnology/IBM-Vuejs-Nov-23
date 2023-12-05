<script setup>
import { ref } from 'vue';
import MyButton from './components/attributeinheritance/MyButton.vue'

const title = ref('click')
</script>
<template>
    <div class="container">
        <h1>Parent</h1>
        <MyButton :title="title" class="fancy-btn"></MyButton>
    </div>
</template>
<style>
.fancy-btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline;
    font-size: 16px;
}
</style>