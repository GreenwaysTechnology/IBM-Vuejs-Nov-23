<script setup>
import { reactive, shallowReactive } from 'vue';


//here i want to update only like and dislike, nested properites like rating,rating.value those properties dont want to change.
//reactive function compares every property by default,
// i dont want to compare nested properties for mutation.
// const comments = reactive({
//     like: 0, dislike: 0, recommend: {
//         rating: {
//             value: 0
//         }
//     }
// })
//shallowReactive will ommit nested property validation
const comments = shallowReactive({
    like: 0, dislike: 0, recommend: {
        rating: {
            value: 0
        }
    }
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