<script setup>
</script>
<template>
    <div>
        <header>
            <!-- <slot name="header">
                <h1>Default Header</h1>
            </slot> -->
            <!-- Default slot -->
            <slot>
                <h1>Default Header</h1>
            </slot>
        </header>
        <main>
            <slot name="body">
                <p>Default main</p>
            </slot>
        </main>
        <footer>
            <slot name="footer">
                <p>Default footer</p>
            </slot>
        </footer>
    </div>
</template>