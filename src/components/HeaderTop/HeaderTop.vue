<template>
    <div class="headTop">
        <slot name="left"></slot>
        <div class="headTop_title">
            {{title}}
        </div>
       <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
      props:{
        title:String
      }
    }
</script>

<style scoped lang="less">
  .headTop{
    width: 100%;
    height:100px;
    position: relative;
    background:green;
    color:white;
    .headTop_left{
      position:fixed;
      left: 0;
      top: 0;
      width: 20%;
      line-height: 100px;
      padding-left: 20px;
      box-sizing:border-box;
      font-size: 36px;
    }
    .headTop_right{
      position:fixed;
      right: 0;
      top: 0;
      width: 20%;
      background: green;
      line-height: 100px;
      font-size: 25px;
      text-align: center;
    }
    .headTop_title{
      position:fixed;
      left: 20%;
      top: 0;
      width: 60%;
      line-height: 100px;
      white-space: nowrap;
      overflow: hidden;
      font-size: 32px;
      text-overflow: ellipsis;
      text-align: center;
    }
  }
</style>
