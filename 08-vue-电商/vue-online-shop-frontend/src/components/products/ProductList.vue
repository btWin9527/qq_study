<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
      <template v-for="product in products">
        <product-item :product="product" :key="product._id"></product-item>
      </template>
    </div>
  </div>
</template>

<script>
  import ProductItem from "./ProductItem";

  export default {
    name: 'product-list',
    components: {
      'product-item': ProductItem,
    },
    computed: {
      products() {
        return this.$store.state.products;
      }
    },
    created() {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts');
      }
    },
    methods: {
      addToCart(product) {
        this.$store.commit('ADD_TO_CART', {
          product
        });
      }
    }
  }
</script>

<style scoped>
  .product {
    border-bottom: 1px solid black;
  }

</style>
