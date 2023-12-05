<script setup>
import { computed, reactive } from 'vue'

const author = reactive({
    name: 'Subramanian',
    trainings: [
        'vue',
        'react',
        'java'
    ]
})
//computed Properties:
const TotalTrainings = computed(() => {
    console.log('computed  method')
    return author.trainings.length > 0 ? "Yes" : "No"
})

//computed properties
const TotalTrainingsNormal = () => {
    console.log('TotalTrainingsNormal  method')
    return author.trainings.length > 0 ? "Yes" : "No"
}
</script>
<template>
    {{ TotalTrainings }}
    {{ TotalTrainings }}
    {{ TotalTrainings }}
    <!--  -->
    {{ TotalTrainingsNormal() }}
    {{ TotalTrainingsNormal() }}
    {{ TotalTrainingsNormal() }}
</template>