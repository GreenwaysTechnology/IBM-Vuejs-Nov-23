<!-- Composition api using setup attribute  -->
<script setup>
const firstName = 'Subramanian'
const lastName = 'Murugan'
const status = true
const address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
const points = 100
</script>
<template>
    <h1>Your name is {{ firstName }} {{ lastName }}</h1>
    <h2>Status {{ status ? "Available" : "Not Available" }}</h2>
    <h2>Address {{ address.city }} {{ address.state }}</h2>
    <h3>Points {{ points }}
    </h3>
</template>