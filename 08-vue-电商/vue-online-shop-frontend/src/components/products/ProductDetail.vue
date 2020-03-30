<template>
  <div class="product-detail">
    <div class="product-details__image">
      <img :src="product.image" alt="" class="image">
    </div>
    <div class="product-details__info">
      <div class="product-details__description">
        <small v-if="product.manufacturer">{{product.manufacturer.name}}</small>
        <h3>{{product.name}}</h3>
        <p>{{product.description}}</p>
      </div>
      <div class="product-details__price-cart">
        <p>{{product.price}}</p>
      </div>
    </div>
  </div>
</template>
<style>
  .product-details__image .image {
    width: 100px;
    height: 100px;
  }
</style>
<script>
  import ProductButton from "./ProductButton";

  export default {
    props: ['product'],
    components: {
      'product-button': ProductButton,
    }
  }
</script>

<style scoped>

</style>
