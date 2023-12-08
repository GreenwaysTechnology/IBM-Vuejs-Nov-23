<script setup>
import { onMounted } from 'vue';
import { usePhotoStore } from '../stores/photostore'
import { RouterLink } from 'vue-router';

const photosStore = usePhotoStore()
onMounted(() => {
    photosStore.getPhotos('https://jsonplaceholder.typicode.com/photos')
})
</script>

<template>
    <div v-if="photosStore.error">{{ photosStore.error.message }}</div>
    <div v-else-if="photosStore.photos">
        <div v-for="photo of photosStore.photoslist">
            <h1>Album ID {{ photo.albumId }}</h1>
            <RouterLink :to="'/photosdetails/' + photo.id">
                <img :src="photo.url" height="100" width="100" />
            </RouterLink>
            <H3>{{ photo.title }}</H3>

        </div>
    </div>
    <div v-else>
        <h1>Loading...</h1>
    </div>
</template>