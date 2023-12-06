<script setup>
import SchopedSlot from './components/slots/SchopedSlot.vue';


</script>
<template>
    <SchopedSlot v-slot="slotProps">
        {{ slotProps.message }}
    </SchopedSlot>
</template>