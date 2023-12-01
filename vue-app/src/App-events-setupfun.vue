<script>
export default {
    setup() {
        //listeners
        const onIncrement = (evt) => {
            console.log('Button is click')
        }
        //must be returned 
        return {
            onIncrement
        }
    }
}
</script>
<template>
    <div>
        <h1>Event handling With Setup Function</h1>
        <button @click="onIncrement">Update</button>
    </div>
</template>