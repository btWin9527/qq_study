<template>
  <div>
    <product-detail :product="product"></product-detail>
  </div>
</template>

<script>
  import ProductDetail from "../components/products/ProductDetail";

  export default {
    components: {
      'product-detail': ProductDetail,
    },
    computed: {
      product() {
        return this.$store.getters.productById(this.$route.params['id']);
      }
    },
    created(){
      // 跳转到详情页时，如果本地状态里面不存在此商品，则从后端获取此商品
      const {name} = this.product;
      if(!name){
        this.$store.dispatch('productById',{
          productId: this.$route.params['id']
        });
      }
    },
  }
</script>

<style scoped>

</style>
