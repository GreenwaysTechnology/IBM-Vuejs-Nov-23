<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <h1>Movies Page</h1>
    <ul>
        <li>
            <RouterLink to="/movies/action">
                Action
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/movies/dramma">
                Dramma
            </RouterLink>
        </li>
    </ul>
    <RouterView />
</template>