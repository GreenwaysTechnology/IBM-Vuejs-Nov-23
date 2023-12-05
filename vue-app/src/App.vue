<script setup>
import { ref } from 'vue';
import Layout from './components/slots/Layout.vue';

const header = ref('header')
</script>
<!-- <template>
    <h1>Vue Application</h1>
    <Layout>
        <template v-slot:header>
            <h1>Header</h1>
        </template>
        <template v-slot:body>
            <h1>Body</h1>
        </template>
        <template v-slot:footer>
            <h1>Footer</h1>
        </template>
    </Layout>
</template> -->
<!-- 
<template>
    <h1>Vue Application</h1>
    <Layout>
        <template #header>
            <h1>Header</h1>
        </template> -->
        <!-- <template #default>
            <h1>Header</h1>
        </template>
        <template #body>
            <h1>Body</h1>
        </template>
        <template #footer>
            <h1>Footer</h1>
        </template>
    </Layout> -->
<!-- </template> --> 

<template>
    <h1>Vue Application</h1>
    <Layout>
        <template #[header]>
            <h1>Header</h1>
        </template>
        <template #default>
            <h1>Header</h1>
        </template>
        <template #body>
            <h1>Body</h1>
        </template>
        <template #footer>
            <h1>Footer</h1>
        </template>
    </Layout>
</template>
