<template>
  <div class="account-list">
    <!--<Header></Header>-->
    <div class="content">
      <div class="filtrate vux-1px-b">
        <div class="fil-time" @click="fiterTime()">
          <span class="time-txt" :class="{'color-f' : showFTime}">时间筛选</span>
          <img :class="{'img-top' : showFTime}" src="../../../static/images/ic_right.png" alt="">
        </div>
        <div class="fil-type vux-1px-l" @click="filterType()">
          <span class="type-txt" :class="{'color-f' : showFType}">类型筛选</span>
          <img :class="{'img-top' : showFType}" src="../../../static/images/ic_right.png" alt="">
        </div>
      </div>
      <div class="list-f">
        <div class="list-1">
          <div class="head-time">2018</div>
          <div class="details-list">
            <div class="list-item vux-1px-t">
              <div class="item-left">回款</div>
              <div class="item-center">

                <div class="type">
                  <div class="txt">众邦银行<span class="line"></span>众邦宝180天期</div>
                </div>
                <div class="time">2018-2-4</div>
              </div>
              <div class="item-right">
                <div class="money">
                  <span class="add"></span>
                  <span class="num">100</span>
                </div>
                <div class="state">交易成功</div>
              </div>
            </div>
            <div class="list-item vux-1px-t">
              <div class="item-left">回款</div>
              <div class="item-center">

                <div class="type">
                  <div class="txt">众邦银行<span class="line"></span>众邦宝180天期</div>
                </div>
                <div class="time">2018-2-4</div>
              </div>
              <div class="item-right">
                <div class="money">
                  <span class="add"></span>
                  <span class="num">100</span>
                </div>
                <div class="state">交易成功</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="showFTime" class="filter-time">
        <div class="top">
          <div class="all">全部</div>
          <div class="week">最近一周</div>
          <div class="month">最近一月</div>
        </div>
        <div class="time vux-1px-t"></div>
        <div class="bg"></div>
      </div>
      <div v-show="showFType" class="filter-type">
        <div class="top">
          <div class="all">全部</div>
          <div class="Deposit">入款</div>
          <div class="Dispensing">出款</div>
        </div>
        <div class="bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../header'

  export default {
    name: "account-list",
    data() {
      return {
        showFTime: false, // 显示时间过滤
        showFType: false, // 显示类型过滤
      }
    },
    componments: {
      Header
    },
    methods: {
      fiterTime() {
        this.showFTime = !this.showFTime
        this.showFType = false
      },
      filterType() {
        this.showFType = !this.showFType
        this.showFTime = false
      }
    }
  }
</script>

<style lang="less" scoped>
  .account-list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    font-size: 0.28rem;
  }

  .color-6 {
    color: #666666;
    border-color: #666666;
  }

  .color-2 {
    color: #2c9bfc;
    border-color: #2c9bfc;
  }

  .color-f {
    color: #ff4b00;
    border-color: #ff4b00;
  }

  .filtrate {
    display: flex;
    color: #999999;
    font-size: 0.28rem;
    height: 0.9rem;
    text-align: center;
    line-height: 0.9rem;
    background-color: #fff;
    border-color: #e8e8e8;
    .fil-time {
      flex: 1;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      img {
        width: 0.3rem;
        margin-left: 0.18rem;
        transform: rotate(90deg);
        &.img-top {
          transform: rotate(-90deg);
        }
      }
    }
    .fil-type {
      display: flex;
      flex: 1;
      border-color: #e8e8e8;
      align-items: center;
      justify-content: center;
      img {
        width: 0.3rem;
        margin-left: 0.18rem;
        transform: rotate(90deg);
        &.img-top {
          transform: rotate(-90deg);
        }
      }
    }
  }

  .list-1 {
    margin-top: 0.21rem;
    background-color: #fff;
    .head-time {
      width: 100%;
      height: 0.9rem;
      line-height: 0.9rem;
      text-align: left;
      text-indent: 0.3rem;
      color: #666666;
      font-size: 0.28rem;
    }
    .details-list {
      .list-item {
        border-color: #e8e8e8;
        display: flex;
        align-items: center;
        height: 1.6rem;
        .item-left {
          width: 0.76rem;
          height: 0.76rem;
          line-height: 0.76rem;
          text-align: center;
          border-radius: 50%;
          border: 2px solid #666666;
          margin-left: 0.3rem;
          margin-right: 0.2rem;
          font-size: 0.28rem;
          color: #999999;
        }
        .item-center {
          display: flex;
          flex-direction: column;
          flex: 2;
          .type {
            display: flex;
            font-size: 0.32rem;
            color: #333333;
            .line {
              border-left: 0.02rem solid #999999;
              margin: 0 0.2rem;
            }
          }
          .time {
            text-align: left;
            font-size: 0.24rem;
            color: #999999;
          }
        }
        .item-right {
          margin-left: auto;
          margin-right: 0.3rem;
        }
      }
    }
  }

  .filter-time {
    position: fixed;
    z-index: 99;
    top: 1.78rem;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .top {
      height: 3rem;
      background-color: #ffffff;
      div {
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 0.28rem;
        color: #333333;
      }
    }
    .time {
      height: 1.2rem;
      border-color: #e8e8e8;
      background: #ffffff;
    }
    .bg {
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .filter-type {
    position: fixed;
    z-index: 99;
    top: 1.78rem;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .top {
      height: 3rem;
      background-color: #ffffff;
      div {
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        font-size: 0.28rem;
        color: #333333;
      }
    }
    .bg {
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.5);
    }
  }
</style>
