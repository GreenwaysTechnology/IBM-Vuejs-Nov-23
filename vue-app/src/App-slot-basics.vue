<script setup>
import ChildSlot from './components/slots/ChildSlot.vue';

</script>
<template>
    <div class="container">
        <h1>Parent</h1>
        <ChildSlot>
            <!-- PASS DOM element as Prop -->
            <h1>DOM Element as Prop</h1>
        </ChildSlot>

        <ChildSlot>
            <!-- Here no element is passed -->
        </ChildSlot>
    </div>
</template>