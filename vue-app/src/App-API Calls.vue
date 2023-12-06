<script setup>
import { onMounted, ref } from 'vue';

const data = ref(null)
const error = ref(null)

//function to fetch data
const fetchData = async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`
    try {
        const response = await fetch(url)
        const todos = await response.json()
        //update reactive state 
        data.value = todos
    }
    catch (err) {
        error.value = err
    }
}
//life cycle method 
onMounted(() => {
    // setTimeout(()=>{
    //     fetchData()
    // },5000)
    fetchData()
})

</script>
<template>
    <div>
        <h1>Web Service Call</h1>
        <div v-if="error">{{ error.message }}</div>
        <div v-else-if="data">
            <ul>
                <li v-for="todo of data">
                    {{ todo.title }}
                </li>
            </ul>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>