<template>
  <div>
    <h2>我是文档</h2>
    <p>{{ $route.query.name }}</p>
    <p>{{ $route.query.age }}</p>
    <p>{{ $route.query.height }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style></style>
