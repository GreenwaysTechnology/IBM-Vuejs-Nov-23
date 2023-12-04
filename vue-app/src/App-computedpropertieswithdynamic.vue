<script>
export default {
    data() {
        return {
            number: 2,
            status: true
        }
    },
    computed: {
        doubleIt() {
            return this.number * 2
        },
        toggle() {
            if (this.status) {
                return true
            } else {
                return false
            }

        }

    }
}
</script>
<template>
    <h1>Value {{ doubleIt }}</h1>
    <button @click="number++">{{ number }}</button>
    <button @click="status = !status">{{ status }}</button>
</template>