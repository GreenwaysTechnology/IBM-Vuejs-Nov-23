<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div>
    <h1>Router app</h1>
    <hr />
    <nav>
      <ul>
        <li>
          <RouterLink to="/home">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/review">Review</RouterLink>
        </li>
        <li>
          <RouterLink to="/photo">Photos</RouterLink>
        </li>
        <li>
          <RouterLink to="/movies">Movies</RouterLink>
        </li>
      </ul>
    </nav>
    <hr />
    <!-- Place holder which display View -->
    <RouterView />
  </div>
</template>