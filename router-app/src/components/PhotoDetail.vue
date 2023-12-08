<script setup>
import { onMounted } from 'vue';
import { usePhotoDetail } from '../stores/photodetailstore'
const params = defineProps(['id'])
// make api call to get particular photo.
const photoDetailStore = usePhotoDetail()

onMounted(() => {
    photoDetailStore.getPhoto(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
})
</script>

<template>
    <div style="margin: auto;">
        <div v-if="photoDetailStore.error">{{ photoDetailStore.error.message }}</div>
        <div v-else-if="photoDetailStore.photo">
            <h1>Id {{ photoDetailStore.singlePhoto.id }}</h1>
            <img :src="photoDetailStore.singlePhoto.url" height="500" width="500" />
            <h3>{{ photoDetailStore.singlePhoto.title }}</h3>
        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>