<template>
  <div class="bankProductDet">
    <div class="hd">
      <ul>
        <li>4.10% <i>+0.7%</i></li>
        <li>综合年化利率</li>
        <li>(起存金额 100.00元)</li>
      </ul>
    </div>
    <div class="productDes">
      <ul>
        <li>期限</li>
        <li>30天</li>
      </ul>
      <ul>
        <li>收益</li>
        <li>当日计息</li>
      </ul>
      <ul>
        <li>安全</li>
        <li>银行存款</li>
      </ul>
    </div>
    <div class="addInterests">
      <ul>
        <li  class="tit">加息券</li>
        <li>使用说明：持有产品满期（30天）即可享受0.70%加息奖励，满期综合利率4.80%，提前支取加息券失效。</li>
      </ul>
      <ul>
        <li>+0.70%</li>
        <li>加息</li>
      </ul>

    </div>
    <!--产品介绍-->
    <div class="productPresentation">
      <table>
      <thead>
      <div><i></i>产品介绍</div>
      </thead>
        <tbody>
        <tr>
          <td>产品名称</td>
          <td>众邦宝（30天期）</td>
        </tr>
        <tr>
          <td>产品提供方</td>
          <td>产品提供方</td>
        </tr>
        <tr>
          <td>产品亮点</td>
          <td>众邦宝为众邦银行发行的一款创新
            型存款产品，收益稳健</td>
        </tr>
        <tr>
          <td>计息规则</td>
          <td>众邦宝为众邦银行发行的一款创新
            型存款产品，收益稳健</td>
        </tr>
        <tr>
          <td>支取规则</td>
          <td>到期银行自动兑付，支持提前支取</td>
        </tr>
        <tr>
          <td>收益规则</td>
          <td>持有满期按照4.80%计算收益，其
            中包含基础利率4.10%及加息券奖
            励0.70%；提前支取利率4.10%，
            未提前支取部分满期综合利率不变</td>
        </tr>
        </tbody>
      </table>
    </div>
    <!--存入流程-->
    <div class="depositProcess">
     <div class="main">
       <div class="tit"><i></i>存入流程</div>
       <ul>
         <li>1</li>
         <li></li>
         <li>2</li>
         <li></li>
         <li>3</li>
       </ul>
       <ul>
         <li>开通电子账户</li>
         <li>电子账户支付</li>
         <li>完成存入</li>
       </ul>
     </div>

    </div>
    <!--常见问题-->
    <div class="question">
       <div class="main">
        <div class="tit"><i></i>常见问题</div>
         <table>
           <tbody>
           <tr>Q：存入众邦宝有风险吗？</tr>
           <tr>存入众邦宝就是在众邦银行存入一笔定期存款。同时，众邦银行作为一家金融机构，具有完善的风险管理体系及信息安全保障体系。</tr>
           </tbody>
           <tbody>
           <tr>Q：存入众邦宝有风险吗？</tr>
           <tr>存入众邦宝就是在众邦银行存入一笔定期存款。同时，众邦银行作为一家金融机构，具有完善的风险管理体系及信息安全保障体系。</tr>
           </tbody>
           <tbody>
           <tr>Q：存入众邦宝有风险吗？</tr>
           <tr>存入众邦宝就是在众邦银行存入一笔定期存款。同时，众邦银行作为一家金融机构，具有完善的风险管理体系及信息安全保障体系。</tr>
           </tbody>

         </table>
       </div>
    </div>
    <!--联系客服-->
    <div class="productCall">
      <div class="main">
        <a class="call" href="tel:4007-101-010">
          <div class="pic">
          </div>
          <div class="contact">联系客服</div>
          <div class="phoneNumber">
            拨打4007-101-010
          </div>
        </a>
        <div class="store">立即存入</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bankProductDet"
    }
</script>

<style lang="less" scoped>
.bankProductDet{
li{ padding:0;margin:0;list-style:none;line-height: 1 !important;};
  .hd {
  background: url("../../../static/images/bg02.png") no-repeat;
  height: 3.8rem;
  ul{
    padding-top: 1.03rem;
    li{
      line-height: 1 !important;
    }
    li:nth-of-type(1){
      font-size: 0.8rem;
      color: #fff;
      i{
        font-style: normal;
        font-size: 0.6rem;
      }
    }
    li:nth-of-type(2){
      font-size: 0.28rem;
      color: #ffffff;
      margin-top: 0.27rem;
    }
    li:nth-of-type(3){
      margin-top: 0.18rem;
      font-size: 0.24rem;
      color: #f9b5b5;
    }
  }
}
  .productDes{
    height: 1.4rem;
    background-color: #f04646;
    ul{
      float: left;
      margin-top: 0.35rem;
      width: 30%;
      li{
        margin-bottom: 0.16rem;
      }
      li:nth-of-type(1){
        font-size: .24rem;
        color: #f9b5b5;
      }
      li:nth-of-type(2){
        font-size: .28rem;
        color: #ffffff;
      }
      ul:nth-of-type(1){

      }
      ul:nth-of-type(2){

      }
      ul:nth-of-type(3){

      }
    }
  }
  .addInterests{
    background: url("../../../static/images/addInterests.png") no-repeat  ;
    height: 2.7rem;
    /*width: 7.4rem;*/
    background-size:7.4rem 2.7rem ;
    margin: auto;
    position: relative;

    ul{
      float: left;
      position: absolute;
      li{
        text-align: left;

      }
    }
    ul:nth-of-type(1){
      left: 0.8rem;
      top:0.6rem;
      li:nth-of-type(1){
        color: #333333;
        font-size: .34rem;
        margin-left: 0.43rem;
        margin-bottom: 0.18rem;
      }
      li:nth-of-type(2){
        color: #999999;
        font-size: 0.26rem;
        width: 4.3rem;
      }
    }
    ul:nth-of-type(2){
      right: 0.52rem;
      top:1.17rem;
      li:nth-of-type(1){
        color: #ff4b00;
        font-size: 0.36rem;
        margin-bottom: .13rem;
      }
      li:nth-of-type(2){
        color: #ff4b00;
        font-size: .24rem;
      }
    }
  }
  .productPresentation{
    background: #fff;
    padding-bottom: .4rem;
    table{
      thead{
        height: 1.2rem;
        div{
          font-size: .34rem;
          color: #333333;
          font-weight: 600;
          line-height: 1.2rem;
          i{
            width: 0.14rem;
            height: 0.14rem;
            background-color: #f03d3d;
            display: inline-block;
            position: relative;
            top: -0.05rem;
            left: -.20rem;
          }
        }
      }
      margin-left:.3rem;
      margin-right: .3rem;
      border-collapse:collapse;
      tr{
        box-shadow: inset 0rem -0.01rem 0rem 0rem
        #e8e8e8;
        td{
          font-size: 0.28rem;
          border: 1px solid  #e8e8e8 ;
          box-shadow: inset 0rem -0.01rem 0rem 0rem
          #e8e8e8;
          padding: 0.26rem;
        }
        td:nth-of-type(1){
          width: 2rem;
        }
        td:nth-of-type(2){
          width: 4.9rem;
        }
      }
    }


  }
  .depositProcess{
    margin-top: .2rem;
    background: #FFF;
   .main{
     margin-left:.3rem;
     margin-right: .3rem;
     .tit{
       width: 2rem;
       font-size: .34rem;
       color: #333333;
       font-weight: 600;
       line-height: 1.2rem;
       i{
         width: 0.14rem;
         height: 0.14rem;
         background-color: #f03d3d;
         display: inline-block;
         position: relative;
         top: -0.05rem;
         left: -.20rem;
       }
     }
     ul{
       overflow: hidden;

       li{
         float: left;
       }
     }
     ul:nth-of-type(1){
       margin-left: 1rem;
       li{
         color: #fff;
         font-size: 0.24rem;
       }
       li:nth-of-type(even){
         background: #ffe6e6;
         height: 0.04rem;
         margin-top: .4rem;
         width: 24%;
       }
       li:nth-of-type(odd){
         background: url("../../../static/images/productRound.png") no-repeat center;
         background-size: .82rem .82rem;
         height: .82rem;
         width: .63rem;
         line-height: 0.82rem !important;
       }
     }
     ul:nth-of-type(2){
      padding-bottom: .8rem;
       li{
         color: #333333;
         font-size: 0.26rem;
         width: 33.33%;

       }
     }

   }
  }
  .question{
    margin-top: .2rem;
    background: #FFF;
    .main {
      margin-left: .3rem;
      margin-right: .3rem;
      .tit {
        width: 2rem;
        font-size: .34rem;
        color: #333333;
        font-weight: 600;
        line-height: 1.2rem;
        i {
          width: 0.14rem;
          height: 0.14rem;
          background-color: #f03d3d;
          display: inline-block;
          position: relative;
          top: -0.05rem;
          left: -.20rem;
        }
      }
      table{
        tr{
          text-align: left;
          padding-left: .3rem;
          display: block;
          border: solid 1px #e8e8e8;


        }
        tr:nth-of-type(1){
          background-color: #fafbfd;

          height: 1rem;
          line-height: 1rem;
          color: #333333;
          font-size: 0.32rem;
        }
        tr:nth-of-type(2){
          color: #666666;
          font-size: .28rem;
          margin-bottom: .2rem;
        }
      }
    }
  }
  .productCall{
    height: 2.4rem;
    background-color: #fefefe;
    margin-top: .2rem;

    .main{
      .call{
        padding-bottom: .5rem;
        text-decoration: none;
        color:inherit;
        display: block;
        .pic{
          background: url("../../../static/images/productCall.png") no-repeat center;
          height: 0.6rem;
          background-size: .6rem .6rem;
          position: relative;
          top: .4rem;

        }
        .contact{
          color: #333333;
          font-size: 0.32rem;
          margin-top: .6rem;
        }
        .phoneNumber{
          color: #f03d3d;
          font-size: 0.28rem;
        }
      }
      .store{
        width: 7.5rem;
        height: 1rem;
        background-color: #f03d3d;
        font-size: 0.34rem;
        color: #ffffff;
        line-height: 1rem;
      }
    }
  }
}

</style>
