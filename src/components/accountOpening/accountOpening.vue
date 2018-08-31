<template>
  <div class="account-wrapper">
    <div class="tip vux-1px">
      <img src="../../../static/images/ic_notice.png" alt="">
      <div>应银行需求，需先开通银行电子账户，通过电子账户与银行直接进行交易，资金安全有保障</div>
    </div>
    <div class="form-information vux-1px">
        <div class="info vux-1px-b">
          持卡人<input type="text" placeholder="请输入持卡人姓名">
        </div>
         <div class="info vux-1px-b">
          卡号<input type="text" placeholder="请输入银行卡卡号"><img class="chooseBank" src="../../../static/images/tip.png">
        </div>
         <div class="info vux-1px-b">
          手机号<input type="text" placeholder="请输入银行预留手机号码">
        </div>
         <div class="info vux-1px-b">
          身份证号<input type="text" placeholder="请输入身份证号">
        </div>
        <div class="info">
          身份证照片
            <div class="card1">
              <input type="file" name="files" accept="image/png, image/jpeg, image/jpg" @change="update(1,$event)">
              <div class="box">
                <img src="../../../static/images/card1.png" alt="">
              </div>
              <!--<div class="showImg" v-show="imgSrc1">
                <span><img :src="imgSrc1" alt="" :data-src="src1"></span>
                <span @click="imgSrc1 = '';src1 = '';file1 = 'file'"><img src="../assets/img/delete.png" alt=""></span>
              </div>-->
            </div>
            <div class="card2">
              <input type="file" name="files" accept="image/png, image/jpeg, image/jpg" @change="update(1,$event)">
              <div class="box">
                <img src="../../../static/images/card1.png" alt="">
              </div>
              <!--<div class="showImg" v-show="imgSrc1">
                <span><img :src="imgSrc1" alt="" :data-src="src1"></span>
                <span @click="imgSrc1 = '';src1 = '';file1 = 'file'"><img src="../assets/img/delete.png" alt=""></span>
              </div>-->
            </div>
        </div>
    </div>
    <div class="isAgree">
      <img :src="isActive" alt="" @click="agree">我已阅读同意<span class="contract">《众邦银行直销银行电子账户服务协议》</span>
    </div>
    <div class="toOpen" @click="showKey">开户</div>
    <div class="mask" v-show="isMask"></div>
    <Keybord ref="key" @hideKey="hideMask"></Keybord>
  </div>
</template>

<script>
import Keybord from "../keyboard"
export default {
  data() {
    return {
      isActive: "../../../static/images/bt_radio_1.png",
      isMask:false //遮罩显示
    }
  },
  components: {
    Keybord
  },
  methods: {
    // 同意协议
    agree() {
      if(this.isActive === "../../../static/images/bt_radio_1.png") {
        this.isActive = "../../../static/images/bt_radio_2.png"
      }else{
        this.isActive = "../../../static/images/bt_radio_1.png"
      }
    },
    // 输入验证码
    showKey() {
      this.$refs.key.cuntdown() //执行倒计时
      this.$refs.key.isShow = true; //打开键盘
      this.isMask = true;  //打开遮罩
    },
    // 隐藏遮罩
    hideMask(msg) {
      this.isMask = msg;
    }
  }
};
</script>

<style lang='less' scoped>
.account-wrapper{
  background-color: #F2F3F8;
  margin-bottom: 1rem;
  .tip{
    width: 7.5rem;
    height: 1rem;
    background-color: #ffffff;
    border-color: #e8e8e8;
    position: relative;
    img{
      width: 0.4rem;
      height: 0.36rem;
      position: absolute;
      left: 0.3rem;
      top:0.32rem
    }
    div{
      width: 5.99rem;
      font-family: PingFangSC-Regular;
      font-size: 0.24rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.3rem;
      letter-spacing: 0px;
      color: #666666;
      text-align: left;
      margin-left: 1rem;
      padding-top: 0.23rem;
    }
  }
  .form-information{
    margin-top: 0.22rem;
    background-color: #fff;
    border-color:#e8e8e8;
    .info{
      height: 1rem;
      border-color:#e8e8e8;
      line-height: 1rem;
      font-size: 0.28rem;
      color: #999999;
      padding-left: 0.3rem;
      text-align: left;
      position: relative;
      input{
        height: 0.8rem;
        border:none;
        font-size: 0.28rem;
        color: #999999;
        position: absolute;
        left: 2.2rem;
        top: 0.1rem;
        outline: none;
      }    
      input::input-placeholder{color:  #bdbdbd ;} /* 有些资料显示需要写，有些显示不需要，但是在编辑器webstorm中该属性不被识别 */
      ::-webkit-input-placeholder { /* WebKit browsers */ 
      color: #ccc; 
      } 
      .chooseBank{
        width: 0.34rem;
	      height: 0.34rem;
        position: absolute;
        right: 0.3rem;
        top: 0.33rem;
      }
    }
    .info:last-of-type{
      height: 4.55rem;
      .card1,.card2{
        position: absolute;;
        text-align: center;
        left: 2.21rem;
        top:0.21rem;
        input{
          outline: none;
          border: none;
          -webkit-tap-highlight-color: transparent;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 3rem;
          height: 2rem;
          opacity: 0;
          cursor: pointer;
        }
        .box{
          
          img{
            width: 3rem;
            height: 2rem;
            
          }
        }
      }
      .card2{
        top:2.33rem
      }
    }
  }
  .isAgree{
    height: 1.28rem;
    line-height: 1.28rem;
    font-size: 0.24rem;
    color:#666;
    img{
      width: 0.30rem;
      height: 0.30rem;
      display:inline-block;
      vertical-align: middle;
      margin-right: 14px;
      transform: translateY(-3px);
    }
    .active{
      background-color: #666666
    }
    .contract{
      color: #2c9bfc;
    }
  }
  .toOpen{
    width: 7.5rem;
    height: 1remx;
    background-color: #f03d3d;
    font-size: 0.32rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1rem;
    letter-spacing: 0px;
    color: #ffffff;
    position: fixed;
    bottom: 0;
  }
  .mask{
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    background: rgba(0,0,0,0.5);
  }
}
</style>
