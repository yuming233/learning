<template>
  <div id="app">
    <h2>---------APP---------</h2>
    <h2>{{ $store.state.counter }}</h2>

    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">加一个人</button>

    <h2>-------------info对象内容是否是响应式--------------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">添加信息</button>
    <button @click="delInfo">删除信息</button>

    <h2>--------------App内容：getters相关信息 平方----------</h2>
    <h2>{{ $store.getters.pinfang }}</h2>
    <h2>{{ $store.getters.more20 }}</h2>
    <h2>{{ $store.getters.more20Length }}</h2>
    <h2>{{ $store.getters.moreAgeStu(30) }}</h2>

    <h2>--------------Hello Vuex-----------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      hello,
    };
  },
  methods: {
    add() {
      this.$store.commit("increment");
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      this.$store.commit("iscrementCount", count);
    },
    addStudent() {
      // 添加一个人
      const stu = { id: 12, name: "as", age: 40 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      this.$store.commit("updateInfo");
    },
    delInfo() {
      this.$store.commit("delInfo");
    },
  },
};
</script>

<style>
</style>
