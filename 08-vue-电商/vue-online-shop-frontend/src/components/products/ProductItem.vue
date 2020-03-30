<template>
  <div :key="product._id" class="product">
    <router-link :to="'/detail/'+product._id" class="product-link">
      <p class="product__name">产品名称：{{product.name}}</p>
      <p class="product__description">介绍：{{product.description}}</p>
      <p class="product__price">价格：{{product.manufacturer.name}}</p>
      <p class="product__manufacturer">生产厂商：{{product.manufacturer.name}}</p>
      <img :src="product.image" alt="" class="product__image">
    </router-link>
    <product-button :product="product"></product-button>
  </div>
</template>

<script>
  import ProductButton from "./ProductButton";

  export default {
    name: 'product-item',
    props: ['product'],
    components: {
      'product-button': ProductButton,
    },
    computed: {
      products() {
        return this.$store.getters.allProducts;
      }
    }
  }
</script>

<style scoped>
  .product__image {
    width: 100px;
    height: 100px;
  }
</style>
