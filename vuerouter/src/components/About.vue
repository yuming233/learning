<template>
  <div>
    <h2>我是关于</h2>
    <h2>{{aboutId}}</h2>
  </div>
</template>

<script>

export default {
  name:'About',
  computed:{
    aboutId(){
      return this.$route.params.abc
    }
  }
}

</script>


<style>

</style>