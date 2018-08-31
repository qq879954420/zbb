<template>
<div class="trading-details">
  <!--<Header></Header>-->
  <div class="top">
    <div class="money">
      <span class="">+</span>
      <span class="num">100</span>
    </div>
    <div class="status">交易成功</div>
  </div>
  <div class="information">
    <div class="product-name information-item vux-1px-b">
      <div class="left">产品名称</div>
      <div class="right">产品</div>
    </div>
    <div class="bank-name information-item vux-1px-b">
      <div class="left">银行名称</div>
      <div class="right">众邦银行</div>
    </div>
    <div class="order-money information-item vux-1px-b">
      <div class="left">订单金额</div>
      <div class="right">50.00</div>
    </div>
    <div class="transition-time information-item vux-1px-b">
      <div class="left">交易时间</div>
      <div class="right">2018-10-10 8:00</div>
    </div>
    <div class="order-number information-item vux-1px-b">
      <div class="left">订单号</div>
      <div class="right">555555555</div>
    </div>
  </div>
</div>
</template>

<script>
  import Header from '../header'

  export default {
        name: "trading-details",
      data () {
          return {

          }
      },
      components: {
        Header
      },
      methods: {

      }
    }
</script>

<style lang="less" scoped>
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.4rem;
  background-image: url("../../../static/images/bg01.png");
  .money {
    font-size: 0.9rem;
    color: #ffffff;
    display: flex;
    height: 0.67rem;
    line-height: 0.67rem;
  }
  .status {
    font-size: 0.27rem;
    color: #f9b1b1;
    margin-top: 0.28rem;
  }
}

  .information {
    display: flex;
    flex-direction: column;
    .information-item {
      display: flex;
      height: 1rem;
      line-height: 1rem;
      font-size: 0.28rem;
      background-color: #ffffff;
      border-color: #e8e8e8;
      .left {
        width: 1.9rem;
        margin-left: 0.3rem;
        text-align: left;
        color: #999999;
      }
      .right {
        color: #333333;
      }
    }
  }
</style>
