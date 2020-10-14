<template>
  <tab-bar>
    <!-- 一个个插槽改就完了 -->
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/首页1.svg" alt="" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/首页.svg" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/Category" activeColor="pink">
      <img slot="item-icon" src="@/assets/img/tabbar/分类1.svg" alt="" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/分类.svg" alt="" />
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/Cart" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/购物车1.svg" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/购物车.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/Profile" activeColor="green">
      <img slot="item-icon" src="@/assets/img/tabbar/我的1.svg" alt="" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/我的.svg" alt="" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/tabber/TabBar";
import TabBarItem from "@/components/tabber/TabBarItem";

export default {
  name: "MianTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>