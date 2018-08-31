<template>
  <div id="app">
    <Header></Header>
    <router-view class="content-wrapper"/>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
*{
  box-sizing: border-box
}
// 去除移动端点击出现短暂灰色背景色
html,body{
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 100%;
}
body{
  background-color: #F2F3F8;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 7.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  // margin-top: 60px;
}
// .content-wrapper{
//   position: absolute;
//   width: 100%;
//   transition: all .8s ease;
//   top: 0px;
// }
</style>
