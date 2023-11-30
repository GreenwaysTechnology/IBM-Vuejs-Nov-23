<!-- Props with Compostion api -with setup function
<script>
export default {
    props: ['title', 'product'],
    setup() {

    }
}
</script>
<template>
    <h1>{{ title }}</h1>
    <div>
        <h1>ID {{ product.id }}</h1>
        <h2>{{ product.name }}</h2>
        <p>Category {{ product.category }}</p>
        <p>Qty {{ product.qty }}</p>
        <p>Price {{ product.price }}</p>
        <p>Stock {{ product.inStock ? "Available" : "Not Available" }}</p>
    </div>
</template>
<style></style> -->


<!-- Props with Compostion api -with attribute  -->
<!-- <script setup>
defineProps(['title', 'product'])
</script>
<template>
    <h1>{{ title }}</h1>
    <div>
        <h1>ID {{ product.id }}</h1>
        <h2>{{ product.name }}</h2>
        <p>Category {{ product.category }}</p>
        <p>Qty {{ product.qty }}</p>
        <p>Price {{ product.price }}</p>
        <p>Stock {{ product.inStock ? "Available" : "Not Available" }}</p>
    </div>
</template>
<style></style> -->



<!-- What if i want to access properties with seutp funciton !-->
<!-- <script>
export default {
    props: ['title', 'product'],
    setup(props) {
        console.log(props.title)
    }
}
</script>
<template>
    <h1>{{ title }}</h1>
    <div>
        <h1>ID {{ product.id }}</h1>
        <h2>{{ product.name }}</h2>
        <p>Category {{ product.category }}</p>
        <p>Qty {{ product.qty }}</p>
        <p>Price {{ product.price }}</p>
        <p>Stock {{ product.inStock ? "Available" : "Not Available" }}</p>
    </div>
</template>
<style></style> -->

<script setup>
const props = defineProps(['title', 'product'])
console.log(props.title)
</script>
<template>
    <h1>{{ title }}</h1>
    <div>
        <h1>ID {{ product.id }}</h1>
        <h2>{{ product.name }}</h2>
        <p>Category {{ product.category }}</p>
        <p>Qty {{ product.qty }}</p>
        <p>Price {{ product.price }}</p>
        <p>Stock {{ product.inStock ? "Available" : "Not Available" }}</p>
    </div>
</template>
<style></style>