<template>
  <div>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.pinfang }}</h2>
    <h2>{{ $store.getters.more20 }}</h2>
    <h2>{{ $store.getters.more20Length }}</h2>
    <h2>{{ $store.getters.moreAgeStu(10) }}</h2>
    <h2>-------------------------</h2>
    <h2>{{ $store.state.info }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
};
</script>

<style>
</style>