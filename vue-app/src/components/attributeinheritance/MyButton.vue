<!-- <script setup>
import { useAttrs } from 'vue';

const props = defineProps(['title'])
const attrs = useAttrs()
console.log(attrs)
</script>
<template>
     <button>{{ title }}</button> -->
    <!-- <span>{{ $attrs }}</span> -->
    <!-- <span>{{ attrs }}</span>
</template>
<style></style> --> 

<script setup>
const props = defineProps(['title'])
defineOptions({
    inheritAttrs: false
})
</script>
<template>
    <!-- <div style="background-color: ;">
        <button v-bind="$attrs">{{ title }}</button>
    </div>
    <button v-bind="$attrs">{{ title }}</button>
    <button v-bind="$attrs">{{ title }}</button> -->
    <button>{{ title }}</button>
</template>
<style scoped>
.fancy-btn {
    background-color: #4c56af;
}
</style> 