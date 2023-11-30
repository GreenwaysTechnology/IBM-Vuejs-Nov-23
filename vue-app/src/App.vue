<script setup>
import User from './components/props/User.vue';
const name = 'Subramanian'
const someno = 1
const status = true 
</script>
<template>
    <h1>Prop Validation</h1>
    <User :name="name" />
    <!-- App.vue?t=1701327351439:36 [Vue warn]: Invalid prop: type check failed for prop "name". Expected String with value "1", got Number with value 1. 
      at <User name=1 > 
      at <App> -->
    <!-- <User :name="someno" />
        -->
    <User :status="status" />
    <User status />
    <User />
</template>