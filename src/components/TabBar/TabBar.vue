<template>
    <div>
      <ul class="tabBar">
        <li @click="switchTo('/home')" :class="{isActive:'/home' === $route.path}">
          <van-icon name="home-o" size="20px"/>
          <p>首页</p>
        </li>
        <li  @click="switchTo('/search')" :class="{isActive:'/search' === $route.path}">
          <van-icon name="search" size="20px"/>
          <p>搜索</p>
        </li>
        <li @click="switchTo('/order')" :class="{isActive:'/order' === $route.path}">
          <van-icon name="orders-o" size="20px"/>
          <p>订单</p>
        </li>
        <li  @click="switchTo('/personal')" :class="{isActive:'/personal' === $route.path}">
          <van-icon name="user-o" size="20px"/>
          <p>我的</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  methods: {
    switchTo (router) {
      return this.$router.replace(router)
    }
  }
}
</script>

<style scoped lang="less">

</style>
