<script setup>
const vHighlight = {
    mounted: (element) => {
        //dom listener
        element.addEventListener('mousemove', evt => {
            highlight('yellow', 'x-large')
        })
        element.addEventListener('mouseleave', evt => {
            highlight(null, null)
        })

        const highlight = (color, size) => {
            element.style.backgroundColor = color
            element.style.fontSize = size
        }
    }
}
</script>
<template>
    <div class="container" style="margin-top: 50px;">
        <h1 v-highlight>Hightlight Me</h1>
    </div>
</template>