<script>
export default {
    data() {
        return {
            productNo: 2
        }
    },
    computed: {
        product() {
            return `Your Product No is ${this.productNo}`
        }
    }
}
</script>
<template>
    <h1>{{ product }}</h1>
</template>