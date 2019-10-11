<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="lateral-sliding">
      <div class="lateral-sliding-item" v-for="(item,index) in items" :key="index">
        <div class="each-img"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        items: 10
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .lateral-sliding {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  .lateral-sliding-item {
    display: flex;
    margin-right: 8px;
    background-color: yellow;
  }

  .each-img {
    width: 150px;
    height: 88px;
  }

</style>
