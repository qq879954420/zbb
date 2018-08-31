<template>
  <div class="electronic-account">
    <!--<Header></Header>-->
    <div class="content">
      <div class="card">
        <div class="card-details">
          <div class="card-number">
            <div class="num-c">6236</div>
            <div class="num-c">4309</div>
            <div class="num-c">5555</div>
            <div class="num-c">4444</div>
            <div class="num-c">333</div>
          </div>
          <div class="mes-user">
            <div class="money">
              <span class="m-left">账户余额</span>
              <span class="m-number">751.66</span>
              <span class="m-right">元</span>
            </div>
            <div class="user-name">王某某</div>
          </div>
        </div>
        <div class="operation vux-1px-t">
          <div class="recharge vux-1px-r" @click="pay()">充值</div>
          <div class="withdraw vux-1px-l">提现</div>
        </div>
      </div>
      <div class="list">
        <div class="account list-item vux-1px-b" @click="goPage(1)">
          <img src="../../../static/images/bill.png" alt="" class="img-left">
          <span class="span-center">账单记录</span>
          <img class="img-right" src="../../../static/images/ic_right.png" alt="">
        </div>
        <div class="bind-card list-item vux-1px-b">
          <img src="../../../static/images/bank_card.png" alt="" class="img-left">
          <span class="span-center">绑定银行卡</span>
          <div class="bank-mes">
            <span>中国农业银行</span>
            <span>(2772)</span>
          </div>
          <img class="img-right" src="../../../static/images/ic_right.png" alt="">
        </div>
        <div class="intro list-item">
          <img src="../../../static/images/introduction.png" alt="" class="img-left">
          <span class="span-center">电子账户简介</span>
          <img class="img-right" src="../../../static/images/ic_right.png" alt="">
        </div>
      </div>
    </div>
    <div v-show="showPayWindow" class="bg"></div>
    <div v-show="showPayWindow" class="box">
      <div class="box-c1 box-c">
        <div class="left">1.</div>
        <div class="right">复制您的电子账户号；</div>
      </div>
      <div class="box-c2 box-c">
        <div class="number">
          <div>5555</div>
          <div>4444</div>
          <div>3333</div>
          <div>2222</div>
          <div>666</div>
        </div>
        <div class="copy" @click="copyNum">复制账户号</div>
      </div>
      <div class="box-c3 box-c">
        <div class="left">2.</div>
        <div class="right">登录绑定卡开户行中国农业银行的网银或手机银行app，用转账功能转入金额；</div>
      </div>
      <div class="box-c4 box-c">
        <div class="left">3.</div>
        <div class="right">您还可以通过绑定卡银行的线下网点完成转账；</div>
      </div>
      <div class="box-c5 box-c">
        <div class="left">4.</div>
        <div class="right">充值时资金到账若有延迟，请关注电子账户资金变化，如未到账，请联系银行客服。</div>
      </div>
      <div class="box-c6 box-c">
        <span class="vux-close" @click="closePayWindow()"></span>
      </div>
    </div>
    <div class="window-intro">

    </div>
  </div>
</template>

<script>
  import Header from '../header'
export default {
  data() {
    return {
      showPayWindow: false,
      showIntroWindow: false,
      cardNum: 5555666644443333
    }
  },
  componments: {
    Header
  },
  methods: {
    goPage(num) {
      this.$router.push({
        name: 'AccountList'
      })
    },
    // 关闭充值窗口
    closePayWindow() {
      this.showPayWindow = false
    },
    // 充值
    pay() {
      this.showPayWindow = true
    },
    // 复制卡号
    copyNum() {
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.setAttribute('value', this.cardNum)
      input.select()
      if (document.execCommand('copy')) {
        document.execCommand('copy')
      }
      document.body.removeChild(input)
    }
  }
}
</script>

<style lang='less' scoped>
.electronicaccount {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card {
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
 .card-details {
   width: 6.9rem;
   height: 4rem;
   margin-top: 0.3rem;
   margin-bottom: 0.41rem;
   display: flex;
   flex-direction: column;
   background: url("../../../static/images/bank_zb.png") center center no-repeat;
   background-size: 100%;
   align-items: center;
   .bank {
     widht: 1.98rem;
     height: 0.48rem;
   }
   .card-number {
     display: flex;
     width: 85%;
     height: 0.35rem;
     line-height: 0.35rem;
     font-size: 0.46rem;
     color: #ffffff;
     margin-top: 1.82rem;
     justify-content: space-between;
   }
   .mes-user {
     display: flex;
     width: 85%;
     height: 0.25rem;
     line-height: 0.25rem;
     font-size: 0.24rem;
     margin-top: 0.39rem;
     color: #f9b5b5;
     justify-content: space-between;
     .money {
       .m-number {
         width: 0.81rem;
         font-size: 0.28rem;
         color: #ffffff;
       }
     }
   }
 }

  .operation {
    width: 100%;
    height: 1rem;
    border-color: #e8e8e8;
    display: flex;
    font-size: 0.36rem;
    align-items: center;
    div {
      height: 0.6rem;
      line-height: 0.6rem;
      flex:1;
      border-color: #e8e8e8;
    }
    .recharge {
      text-align: center;
      color: #f03d3d;
    }
  }

  .list {
    width: 100%;
    margin-top: 0.24rem;
    background: #ffffff;
    .list-item {
      display: flex;
      align-items: center;
      height: 1rem;
      width: 100%;
      .img-left {
        display: block;
        width: 0.36rem;
        margin-right: 0.21rem;
        margin-left: 0.32rem;
      }
      .span-center {
        flex-grow: 1;
        font-size: 0.28rem;
        color: #666666;
        text-align: left;
      }
      .img-right {
        width: 0.35rem;
        height: 0.35rem;
        margin-left: auto;
        margin-right: 0.3rem;
      }
      .bank-mes {
        display: flex;
        align-items: center;
        font-size: 0.26rem;
        color: #666666;
        margin-left: auto;
        margin-right: 0.29rem;
      }
    }
  }

  .bg {
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    opacity: 0.5;
  }

  .box {
    width: 6.4rem;
    height: 8.8rem;
    background-color: #ffffff;
    box-shadow: 0rem 0.04rem 0.3rem 0rem
    rgba(34, 34, 34, 0.4);
    border-radius: 0.1rem;
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    margin-top: -4.4rem;
    margin-left: -3.2rem;
    padding: 0.7rem 0.6rem;
    font-size: 0.32rem;
    text-align: left;
    color: #333333;
    .box-c {
      display: flex;
      margin-bottom: 0.21rem;
    }
    .box-c2 {
      width: 5.18rem;
      height: 1.4rem;
      background-color: #fff4f4;
      border-radius: 0.06rem;
      border:1px solid rgba(240, 61, 61, 0.3);
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 0.06rem;
      .number {
        margin-top: 0.39rem;
        display: flex;
        width: 90%;
        justify-content: space-between;
        font-size: 0.38rem;
        color: #f03d3d;
        height: 0.29rem;
        line-height: 0.29rem;
      }
      .copy {
        width: 30%;
        text-align: center;
        height: 0.23rem;
        line-height: 0.23rem;
        font-size: 0.24rem;
        color: #f03d3d;
        margin-top: 0.23rem;
      }
    }
    .box-c6 {
      margin-top: 0.54rem;
      display: flex;
      justify-content: center;
    }
  }
</style>
