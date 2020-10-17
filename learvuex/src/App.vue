<template>
  <div id="app">
    <h2>---------APP---------</h2>
    <h2>{{ $store.state.counter }}</h2>

    <button @click="add">+1</button>
    <button @click="sub">-1</button>

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
  },
};
</script>

<style>
</style>
