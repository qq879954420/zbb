<template>
  <div class="keyboard-wrapper" :class="isShow">
    <header class="vux-1px">
        <img src="../../static/images/back.png" alt="" @click="hideKey">
        输入短信验证码
    </header>
    <div class="verificationCode">验证码已发送至{{number}}，没收到？
        <div class="sendMsg">{{sendTip}}</div>
        <div class="sendMask" v-if="sendMask" @click="cuntdown"></div>
        
    </div>
    <div class="code">
        <div class="codeItem vux-1px" v-for="item in codeList">{{item}}</div>
    </div>
    <div class="key">
        <div class="vux-1px keyItem" v-for="item in keyList" @click="enterCode(item.number)"><div class="number">{{item.number}}</div><div class="letter">{{item.letter}}</div></div>
        <div class="delete" @click="deleteCode">*</div>
    </div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            isShow:"show",//为show时输入框弹出，为hide时隐藏
            number: "131****2323",//手机号
            sendTip: "发送验证码",
            sendMask: true,
            second: 60,
            codeList:["","","","","",""],//验证码集合
            keyList:[        //键盘
                {number:1,letter:""},
                {number:2,letter:"ABC"},
                {number:3,letter:"DEF"},
                {number:4,letter:"GHI"},
                {number:5,letter:"JKL"},
                {number:6,letter:"MNO"},
                {number:7,letter:"PQRS"},
                {number:8,letter:"TUV"},
                {number:9,letter:"WXYZ"},
                {number:0,letter:""},
                ]
        }
    },
    methods: {
        // 键盘隐藏
        hideKey() {
            this.isShow = "hide"
        },
        // 输入验证码
        enterCode(number) {
            console.log(number)
            // 循环数组，将空项替换
            for(var i = 0; i < this.codeList.length; i++){
                if(this.codeList[i] == ""){
                    this.$set(this.codeList, i, number);
                    if(i == 5){
                        alert("正在提交")
                    }
                    return;
                }
            }
        },
        // 删除验证码
        deleteCode() {
            // 循环数组，将最后非空项变为空项
            for(var i = 5; i >=0; i--){
                if(this.codeList[i] != ""){
                    this.$set(this.codeList, i, "");
                    if(i == 0){
                        alert("删除完了")
                    }
                    return;
                }
            }
        },
        // 发送验证码倒计时
        cuntdown() {
            console.log(1111)
            this.sendMask = false;
                let clock = window.setInterval(() => {
                        this.second--
                        this.sendTip = this.second + 's后重发'
                        if(this.second === 0){
                            clearInterval(clock)
                            this.sendTip = "重新发送";
                            this.second = 60;
                            this.sendMask = true;
                        }  
                },1000)   
                
        }
    }
};
</script>

<style lang='less' scoped>
.keyboard-wrapper{
    position:fixed;
    bottom:0;
    height: 8rem;
    background-color: #F2F3F8;
    z-index: 999;
    transition: transform 0.4s;
    header{
        height: 1rem;
        width: 7.5rem;
        background-color: #ffffff;
        font-family: PingFangSC-Regular;
        font-size: 0.32rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1rem;
        letter-spacing: 0px;
        color: #333333;
        text-align: center;
        img{
            width: 0.72rem;
	        height: 0.85rem;
            padding: 0.3rem;
            position:absolute;
            top: 0.1rem;
            left: 0;
        }
    }
    .verificationCode{
        height: 1.25rem;
        padding-left: 0.3rem;
        text-align: left;
        font-size: 0.28rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.25rem;
        letter-spacing: 0px;
        color: #666666;
        background-color: #F2F3F8;
        position: relative;
        .sendMsg{
            width: 1.6rem;
            height: 0.6rem;
            background-color: #f03d3d;
            border-radius: 0.05rem;
            font-size: 0.28rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1rem;
            letter-spacing: 0rem;
            color: #ffffff;
            text-align: center;
            line-height: 0.6rem;
            float: right;
            margin: 0.31rem 0.3rem 0 0;
            position: relative;
        }
        .sendMask{
                position: absolute;
                width: 1.6rem;
                height: 0.6rem; 
                opacity: 0;
                top: 0.31rem;
                right: 0.3rem;
        }
       
    }
    .code{
        text-align: center;
        width: 7.4rem;
	    height: 1.03rem;
        .codeItem:first-of-type{
            margin-left: 0.3rem;
        }
        .codeItem{
            width: 0.96rem;
            height: 1.02rem;
            border-color:#e8e8e8;
            margin-right: 0.22rem;
            background-color: #fff;
            color:#333;
            font-size: 0.6rem;
            float: left;
            line-height: 1.02rem;
        }
        .vux-1px:before{
            border-radius: 0.14rem
        }
    }
    .key{
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
        margin-top: 0.3rem;
        position: relative;
        background-color: #cbcfd8;
        .keyItem{
            width: 33.3%;
            height: 1.1rem;
            border-color:#e8e8e8;
            background-color: #fff;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0rem;
            color: #141414;
            .number{
                height: 57%;
                font-size: 0.6rem;
            }
            .letter{
                margin-top: 3%;
                height: 40%;
                font-size: 0.24rem;
            }
        }
        .delete{
            width: 33%;
            height: 1.1rem;
            position:absolute;
            bottom:0;
            right: 0;
        }
    }
}
.show{
    transform: translateY(0)
}
.hide{
    transform: translateY(100%)
}

</style>
