<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <template v-for="product in cart">
      <div :key="product._id" class="product">
        <div class="product__name">产品名称：{{product.name}}</div>
        <div class="product__description">介绍：{{product.description}}</div>
        <div class="product__price">价格：{{product.price}}</div>
        <div class="product__manufacturer">生产厂商：{{product.manufacturer}}</div>
        <img :src="product.image" alt="" class="product__image">
        <button @click="removeFromCart(product._id)">从购物车移除</button>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'cart',
    data() {
      return {
        msg: 'Welcome to the Cart Page'
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart;
      }
    },
    methods: {
      removeFromCart(productId) {
        this.$store.commit('REMOVE_FROM_CART', {
          productId
        })
      }
    }
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
