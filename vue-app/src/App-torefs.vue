<script setup>
import { reactive, toRefs } from 'vue';

//destructuring with toRef or toRefs
const { like, dislike, recommend } = toRefs(reactive({
    like: 0, dislike: 0, recommend: {
        rating: {
            value: 0
        }
    }
}))
const onDislike = () => {
    dislike.value++
}

</script>
<template>
    <div>
        <h1>Reactive State Nested Object</h1>
        <h1>Like {{ like }} Dislike {{ dislike }} Rating {{ recommend.rating.value }}</h1>
        <button @click="like++">Like</button>
        <button @click="onDislike">Dislike</button>
        <button @click="recommend.rating.value++">Rating</button>

    </div>
</template>