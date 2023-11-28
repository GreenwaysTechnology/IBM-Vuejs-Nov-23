<script>
import Hello from './components/Hello.vue';
import Hai from './components/Hai.vue'

//compostion api: setup function
export default {
    // Registring components/ tell to vue engine to create component
    components: {
        //Hello: Hello
        Hello,
        Hai
    },
    setup() {

    }
}

</script>
<template>
    <h1>Application</h1>
    <Hello />
    <Hai />
</template>
<style></style>