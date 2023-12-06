import { onMounted, ref, watchEffect, toValue } from "vue"

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    watchEffect(() => {
        data.value = null
        error.value = null
        async function init() {
            try {
                //we cant pass reactive variable directly into fetch function 
                //we need to convert into string 
                const response = await fetch(toValue(url))
                const items = await response.json()
                //update state 
                data.value = items;
            }
            catch (err) {
                error.value = err
            }
        }
        init()

    })
    return {
        data, error
    }

}