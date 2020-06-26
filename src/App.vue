<template>
  <div id="app">
      <router-view class="router_view"/>
      <TabBar />
  </div>
</template>
<script>
import TabBar from './components/TabBar/TabBar'
export default {
  methods: {

  },
  components: {
    TabBar
  }
}
</script>
<style lang="less">
  .isActive{
    color: #4cd96f;
  }
  #app{
    width:100%;
    height: 100%;
    position:relative;
    .router_view{
      position:absolute;
      left: 0;
      top: 0;
      height: 90%;
      width: 100%;
    }
    .tabBar{
      position: fixed;
      bottom: 0;
      left: 0;
      height: 10%;
      width: 100%;
      display:flex;
      li{
        border-top: 1px solid #eee;
        flex: 1;
        list-style: none;
        font-size:26px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        a{
          text-decoration: none;
        }
        p{
          margin-top: 6px;
        }
      }
    }
  }
</style>
