<template>
  <div id="app">
    <!-- tag可以指定<router-link>之后渲染成什么组件 -->
    <!-- replace不会留下history记录，所以指定replace的情况下后退键返回不能返回到上一个页面中 -->
    <!-- active-class指定active的class不然默认是router-link-active 为了方便也可以直接在路由里面改(index.js) -->
    <!-- <router-link to="/hello" tag="button" replace active-class="change">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="change">关于</router-link> -->

    <!-- <router-link to="/hello" tag="button" replace active-class="change">首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace active-class="change">关于</router-link> -->

    <!-- <button @click="helloClick">hello</button>
    <button @click="aboutClick">about</button> -->

    <router-link to="/hello" active-class="change">首页</router-link>
    <router-link to="/about" :to="'/about/' + aboutId" active-class="change"
      >关于</router-link
    >
    <!-- <router-link to="/Profile">文档</router-link> -->
    <button @click="ProflieClick">文档</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      aboutId: "张三",
    };
  },
  methods: {
    helloClick() {
      // 通过代码的方式修改路由 vue-router
      // push=>pushState
      // this.$router.push('/hello')
      this.$router.replace("/hello");

      console.log("hello");
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace("/about");

      console.log("关于");
    },

    ProflieClick() {
      this.$router.push({
        path: "/profile",
        query: { name: "名字", age: 19, height: 1.88 },
      });
    },
  },
};
</script>

<style>
/* .router-link-active{
  color: blue;
} */

.change {
  color: blue;
}
</style>
