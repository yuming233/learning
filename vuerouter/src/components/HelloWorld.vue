<template>
  <div>
    <h2>我是hello</h2>
    <p>我是首页嗷</p>
    <!-- 这个to要写绝对路径，hello没有写/的话默认是上一级 -->
    <router-link to="/hello/new">新闻 </router-link>
    <router-link to="/hello/Mgs">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Hello",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
