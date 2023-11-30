<!-- Props with Options api
<script>
import ProductDetails from './ProductDetails.vue'
export default {
    components: {
        ProductDetails
    },
    //product data 
    data() {
        return {
            product: {
                id: 1,
                name: 'Phone',
                category: 'Apple',
                qty: 100,
                model: 'IPHONE 15 plus',
                price: 94000,
                inStock: true
            }
        }
    }
}
</script>
<template>
    <h1>Product Master</h1>
    <ProductDetails  title="Product Details Page" :product="product" />
</template>
<style></style> -->

<!-- Props with Compostion api with setup function -->
<!-- <script>
import ProductDetails from './ProductDetails.vue'
export default {
    components: {
        ProductDetails
    },
    setup() {
        const product = {
            id: 1,
            name: 'Phone',
            category: 'Apple',
            qty: 100,
            model: 'IPHONE 15 plus',
            price: 94000,
            inStock: true
        }
        return {
            product
        }
    }
}
</script>
<template>
    <h1>Product Master</h1>
    <ProductDetails title="Product Details Page" :product="product" />
</template>
<style></style> -->

<!-- compostion api with setup attribute -->
<script setup>
import ProductDetails from './ProductDetails.vue'
const product = {
    id: 1,
    name: 'Phone',
    category: 'Apple',
    qty: 100,
    model: 'IPHONE 15 plus',
    price: 94000,
    inStock: true
}
</script>
<template>
    <h1>Product Master</h1>
    <ProductDetails title="Product Details Page" :product="product" />
</template>
<style></style>