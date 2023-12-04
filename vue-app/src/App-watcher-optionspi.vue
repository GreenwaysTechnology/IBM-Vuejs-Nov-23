<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counter(newValue, oldValue) {
            console.log(`Old value=>`, oldValue, 'newValue=>', newValue)
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