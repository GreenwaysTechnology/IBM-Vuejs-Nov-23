<script>
import { ref, watch } from 'vue';

export default {
    setup() {
        const counter = ref(0)

        //watcher 
        watch(counter, (newValue, oldValue) => {
            console.log(`Old value=>`, oldValue, 'newValue=>', newValue)
        })

        return {
            counter
        }
    }
}
</script>
<template>
    <div>
        <h1>Counter {{ counter }}</h1>
        <button @click="counter++">+</button>
    </div>
</template>