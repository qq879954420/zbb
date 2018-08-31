<template>
  <div class="bankProduct">
  <div class="hd">
    <ul @click="alertBox()">
      <li><img style="" src="../../../static/images/bank01.png" alt=""></li>
    </ul>
    <ul>
      <li>众邦银行（Z-BANK）</li>
      <li>产品数量<span>4</span> </li>
    </ul>
    <ul>
      <li class="vux-1px">电子账户</li>
    </ul>
  </div>
    <div class="main">
      <div class="list">
        <ul >
          <li><i>4</i>.40%</li>
          <li>综合年化利率</li>
        </ul>
        <ul class="vux-1px-l">
          <li >众邦银行 众邦宝（活期）</li>
          <li>活期 | 起投金额100.00元</li>
        </ul>
      </div>
      <div class="list">
        <ul >
          <li><i>4</i>.40%</li>
          <li>综合年化利率</li>
        </ul>
        <ul class="vux-1px-l">
          <li >众邦银行 众邦宝（活期）</li>
          <li>活期 | 起投金额100.00元</li>
        </ul>
      </div>
      <div class="list">
        <ul >
          <li><i>4</i>.40%</li>
          <li>综合年化利率</li>
        </ul>
        <ul class="vux-1px-l">
          <li >众邦银行 众邦宝（活期）</li>
          <li>活期 | 起投金额100.00元</li>
        </ul>
      </div>

    </div>
    <div class="containerBox" v-show="containerBox" >
      <div class="BankIntroduction">
        <div class="pic"></div>
        <div class="introduction">
          武汉众邦银行股份有限公司是由卓尔控股、当代科技、壹网通科技、钰龙集团、奥山投资、法斯克能源等六家民营企业共同发起成立的湖北省首家民营银行。于2016年12月6日获批筹建，2017年4月24日获湖北省银监局批准成立，2017年5月18日正式开业。

        </div>
        <div class="vux-close"  @click="alertBox()"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      containerBox:false
    }
  },

  methods:{
    alertBox:function () {
      this.containerBox= !this.containerBox;
    }
  }
};
</script>

<style lang='less' scoped>
.bankProduct{
  li{ padding:0;margin:0;list-style:none};
  .hd{
    background: url("../../../static/images/bg01.png") no-repeat;
    height:  2.40rem ;
    ul{
      display: inline-block;
      float: left;

      margin-left: .30rem;

    }
    ul:nth-of-type(1){
      margin-top: .56rem;
      li{
        img{
          border-radius: 50%;
          width: 1rem;
          height: 1rem;
        }
      }
    }
    ul:nth-of-type(2){
      margin-top: .70rem;
      li{
        text-align: left;
        color: #ffffff;
      }
      li:nth-of-type(1){
        font-weight: 600;
        font-size: .38rem;

      }
      li:nth-of-type(2){
        font-size: .28rem;

      }
      span{
        color: #fff;
      }
    }
    ul:nth-of-type(3){
      margin-top: .90rem;
          li{
            width: 1.30rem;
            height: .60rem;
            line-height: .60rem;
            background-color: #f04646;
            box-shadow: 0px 4px .20rem 0px
            rgba(180, 32, 32, 0.5);
            border-radius: 0.06rem;
            border-color: rgba(255, 255, 255, 0.4);
            font-size: 0.24rem;
            color: #fff;


          }
    }
  }
  .main{
    width: 7.5rem;
    background: #fff;

    .list{
      margin:  0 0.3rem;
      height: 2rem;
      background-color: #ffffff;
      box-shadow: inset 0px -1px 0px 0px
      #e8e8e8;
      ul{
        float: left;
        margin-top: 0.37rem;
        li{
          text-align: left;
          line-height: 1 !important;
        }
      }
      ul:nth-of-type(1){
        margin-right: 0.34rem;
       li:nth-of-type(1){
         color: #ff4b00;
         font-size: .4rem;

         i{
           color: #ff4b00;
           font-size: .6rem;
           font-style: normal;
         }
       }
        li:nth-of-type(2){
          font-size: .28rem;
          letter-spacing: 0px;
          color: #999999;
        }
      }
      ul:nth-of-type(2){
        padding-left: .43rem;
        li:nth-of-type(1){
          font-size: .34rem;
          letter-spacing: 0px;
          color: #333333;
          margin-bottom: .24rem;
        }
        li:nth-of-type(2){
          font-size: .28rem;
          letter-spacing: 0px;
          color: #999999;

        }
      }
    }
  }
  .containerBox{
    position:fixed;
    z-index :999;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background: rgba(0, 0, 0 ,0.5);
    .pic{
      background: url("../../../static/images/z-logo.png") no-repeat;
      background-size: 2.48rem 0.6rem;
      height: 0.6rem;
      position: relative;
      left: 0.6rem;
      top:.94rem;
      bottom: .52rem;
    }
    .BankIntroduction{
      width: 6.4rem;
      height: 8.4rem;
      background-color: #ffffff;
      box-shadow: 0rem 0.04rem 0.3rem 0rem
      rgba(34, 34, 34, 0.4);
      border-radius: 0.1rem;
      margin: auto;
      margin-top: 35%;
      position: relative;
      .introduction{
        color: #333333;
        font-size: 0.32rem;
        width: 5.17rem;
        margin: auto;
        margin-top: 1.3rem;
      }
      .vux-close{
        position: absolute;
        bottom: 0.7rem;
        left: 50%;
        transform: translateX(-50%);

      }
    }


  }
}
</style>
