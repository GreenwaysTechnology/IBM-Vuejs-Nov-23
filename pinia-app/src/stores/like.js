import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLikeStore = defineStore('like', () => {
    //state declaration
    const like = ref(10)

    //actions 
    function increment() {
        like.value++
    }

    //getters 
    const doubleIt = computed(() => {
        return like.value * 2
    })


    //return object which holds initial State 
    return {
        like, increment, doubleIt
    }

})