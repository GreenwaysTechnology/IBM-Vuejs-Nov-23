import { defineStore } from "pinia";
import { ref, computed } from "vue";

//compostion api and pinia
export const usePhotoStore = defineStore('photos', () => {
    //state 
    const photos = ref(null)
    const error = ref(null)
    //actions
    async function getPhotos(url) {
        try {
            const response = await fetch(url)
            const photos = await response.json()
            this.photos = photos
        }
        catch (err) {
            this.err = error
        }
    }
    const photoslist = computed(() => {
        return photos.value
    })
    return {
        getPhotos, photoslist, error, photos
    }

})