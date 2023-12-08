import { defineStore } from "pinia";
import { ref, computed } from "vue";

//compostion api and pinia
export const usePhotoDetail = defineStore('photosDetail', () => {
    //state 
    const photo = ref(null)
    const error = ref(null)
    //actions
    async function getPhoto(url) {
        try {
            const response = await fetch(url)
            const photo = await response.json()
            this.photo = photo
        }
        catch (err) {
            this.err = error
        }
    }
    const singlePhoto = computed(() => {
        return photo.value
    })
    return {
        getPhoto, singlePhoto, error, photo
    }

})