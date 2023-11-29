<!-- Composition api using setup function  -->
<script>
export default {
    setup() {
        const firstName = 'Subramanian'
        const lastName = 'Murugan'
        const status = true
        const address = {
            city: 'Coimbatore',
            state: 'Tamil Nadu'
        }
        const points = 100
        return {
            // firstName: firstName,
            // lastName: lastName,
            // status: true,
            // address: address,
            // points: points
            firstName, lastName, status, address, points
        }
    }
}
</script>
<template>
    <h1>Your name is {{ firstName }} {{ lastName }}</h1>
    <h2>Status {{ status ? "Available" : "Not Available" }}</h2>
    <h2>Address {{ address.city }} {{ address.state }}</h2>
    <h3>Points {{ points }}
    </h3>
</template>