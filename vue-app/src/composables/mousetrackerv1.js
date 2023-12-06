import { ref, onMounted, onUnmounted } from "vue";


export function useMouseTracker() {
    const x = ref(0)
    const y = ref(0)
    const update = evt => {
        x.value = evt.pageX
        y.value = evt.pageY
    }
    onMounted(() => {
        //add dom listener 
        window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update)
    })
    //export x and y value so that we can use outside 
    return {
        x, y
    }
}