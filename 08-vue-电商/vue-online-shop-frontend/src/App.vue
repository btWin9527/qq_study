<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav_left">
          <!-- 商品展示列表 （Home.vue） -->
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <!-- 后台管理页面 （Admin.vue） -->
          <li>
            <router-link to="/admin">Admin</router-link>
          </li>
          <!-- 购物车（Cart.vue） -->
          <li>
            <router-link to="/cart">Cart</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<!--
 PS: 当组件中涉及的代码较多时，我们需要把 script 和 style 抽成独立的 .js 和 .css 文件
 <script src="./app.js"></script>
 <style src="./app.css"></style>
 -->
<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
