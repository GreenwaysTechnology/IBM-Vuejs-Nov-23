<script setup>
const vFocus = {
    //define life cycle method
    mounted: (element) => {
        //we can get dom element here on which you attach, then you do dom manipulation
        element.focus()
    }
}
</script>
<template>
    <div class="container" style="margin-top: 50px;">
        <input v-focus />
    </div>
</template>