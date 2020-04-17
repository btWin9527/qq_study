<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <template v-for="product in cart">
      <product-item :product="product" :key="product._id"></product-item>
    </template>
  </div>
</template>

<script>
  import ProductItem from "../components/products/ProductItem";

  export default {
    name: 'cart',
    data() {
      return {
        msg: 'Welcome to the Cart Page'
      }
    },
    components: {
      'product-item': ProductItem,
    },
    computed: {
      cart() {
        return this.$store.state.cart;
      }
    },
  }
</script>
<style>
  .product {
    border-bottom: 1px solid black;
  }

  .product__image {
    width: 100px;
    height: 100px;
  }
</style>
