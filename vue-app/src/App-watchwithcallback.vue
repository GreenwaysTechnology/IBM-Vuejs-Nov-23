<script setup>
import { reactive, watch } from 'vue';
const comments = reactive({
    like: 0, dislike: 0, recommend: {
        rating: {
            value: 0
        }
    }
})
//To watch all properties including nested properties
// watch(comments, (newValue, oldValue) => {
//     console.log(`Old Value=>`, oldValue.recommend.rating.value)
//     console.log(`new Value=>`, newValue.recommend.rating.value)

// })
// //To disable to watch all nested properties
// watch(comments, (newValue, oldValue) => {
//     console.log(`Old Value=>`, oldValue.recommend.rating.value)
//     console.log(`new Value=>`, newValue.recommend.rating.value)
//     // console.log(`Old Value=>`, oldValue)
//     // console.log(`new Value=>`, newValue)
// }, {
//     deep: false
// })

// to watch properies once if it is loaded into page
watch(comments, (newValue, oldValue) => {
    // console.log(`Old Value=>`, oldValue.recommend.rating.value)
    // console.log(`new Value=>`, newValue.recommend.rating.value)
    console.log(`Old Value=>`, oldValue)
    console.log(`new Value=>`, newValue)
}, {
    immediate: true
})
</script>
<template>
    <div>
        <h1>Reactive State Nested Object</h1>
        <h1>Like {{ comments.like }} Dislike {{ comments.dislike }} Rating {{ comments.recommend.rating.value }}</h1>
        <button @click="comments.like++">Like</button>
        <button @click="comments.dislike++">Dislike</button>
        <button @click="comments.recommend.rating.value++">Rating</button>
    </div>
</template>