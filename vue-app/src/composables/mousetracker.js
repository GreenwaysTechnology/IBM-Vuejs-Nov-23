import { ref } from "vue";
import { useEventListener } from "./event";


export function useMouseTracker() {
    const x = ref(0)
    const y = ref(0)
    useEventListener(window, 'mousemove', evt => {
        x.value = evt.pageX
        y.value = evt.pageY
    })
    //export x and y value so that we can use outside 
    return {
        x, y
    }
}