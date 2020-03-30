<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
      <template v-for="product in products">
        <div :key="product._id" class="product">
          <p class="product__name">产品名称：{{product.name}}</p>
          <p class="product__description">介绍：{{product.description}}</p>
          <p class="product__price">价格：{{product.manufacturer.name}}</p>
          <p class="product__manufacturer">生产厂商：{{product.manufacturer.name}}</p>
          <img :src="product.image" alt="" class="product__image">
          <button @click="addToCart(product)"></button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product-list',
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

  .product__image {
    width: 100px;
    height: 100px;
  }
</style>
