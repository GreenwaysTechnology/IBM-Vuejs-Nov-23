<script setup>
const imgUrl = "/src/assets/logo.svg"
const isEnabled = false
const isHidden = false
</script>
<template>
    <h1>Bind directives</h1>
    <div>
        <h1>Static binding</h1>
        <img src="./assets/logo.svg" height="100" width="100">
    </div>
    <div>
        <h1>Dynamic binding</h1>
        <img v-bind:src="imgUrl" height="100" width="100">
    </div>
    <div>
        <h1>Dynamic binding with enabled and disabled</h1>
        <button v-bind:disabled="isEnabled">Click</button>
    </div>
    <div>
        <h1>Dynamic binding with show and hide</h1>
        <article v-bind:hidden="isHidden">This is article</article>
    </div>

    <h1>Vbind short cut :we dont need to use v-bind every time rather we can use :attribute</h1>

    <div>
        <h1>Dynamic binding</h1>
        <img :src="imgUrl" height="100" width="100">
    </div>
    <div>
        <h1>Dynamic binding with enabled and disabled</h1>
        <button :disabled="isEnabled">Click</button>
    </div>
    <div>
        <h1>Dynamic binding with show and hide</h1>
        <article :hidden="isHidden">This is article</article>
    </div>
</template>
<style></style>