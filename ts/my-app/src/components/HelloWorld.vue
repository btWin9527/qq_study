<template>
  <div class="blogpost">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <p class="meta">Written by {{post.author}} on {{date}}</p>
  </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    // 对数据进行类型约束
    export interface Post {
        title: string;
        body: string;
        author: string;
        datePosted: Date;
    }

    @Component
    export default class HelloWorld extends Vue {
        @Prop() private post!: Post;

        get date() {
            return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getFullYear()}`;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    text-decoration: underline;
  }

  p.meta {
    font-style: italic;
  }
</style>
