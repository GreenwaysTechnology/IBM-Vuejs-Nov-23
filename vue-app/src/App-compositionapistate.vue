<!-- State Using Composition  API using setup function -->

<script>
export default {
    setup() {
        return {
            firstName: 'Subramanian',
            lastName: 'Murugan',
            status: true,
            address: {
                city: 'Coimbatore',
                state: 'Tamil Nadu'
            },
            points: 100

        }
    }
}
</script>
<template>
    <h1>Your name is {{ firstName }} {{ lastName }}</h1>
    <h2>Status {{ status ? "Available" : "Not Available" }}</h2>
    <h2>Address {{ address.city }} {{ address.state }}</h2>
    <h3>Points {{ points }}</h3>
</template>