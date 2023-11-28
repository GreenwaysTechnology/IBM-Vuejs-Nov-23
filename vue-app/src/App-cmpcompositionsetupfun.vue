<script>
import Hello from './components/Hello.vue';
import Hai from './components/Hai.vue'

// options api 
export default {
    // Registring components/ tell to vue engine to create component
    components: {
        //Hello: Hello
        Hello,
        Hai
    }
}

</script>
<template>
    <h1>Application</h1>
    <Hello />
    <Hai />
</template>
<style></style>