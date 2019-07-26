<template>
   <div id="registeredWrap">
        <div class="RegisteredTitle">{{isShowRegistered?"手机号注册":'邮箱注册'}}</div>
       <!--手机号注册registeredWrap-->
       <div class="registeredContent" v-if="isShowRegistered">
           <input type="text" placeholder="请输入手机号">
           <input type="text" placeholder="请输入验证码">
           <input type="text" placeholder="请输入密码">
           <div class="phoneLoginGet">获取验证码</div>


           <div class="registeredbutton">注册</div>
           
           <div class="registeredText">
               <input type="checkbox" name="a">
               <span>我同意
               <a href="//reg.163.com/agreement_mobile.shtml" target="_blank">《服务条款》</a>和
               <a href="//reg.163.com/agreement_mobile_ysbh.shtml" target="_blank">《网易隐私政策》</a>
               </span>
           </div>

           <div class="registeredEmail" @click="showEmailRegistered">邮箱注册 >>> </div>

       </div>

       <!--邮箱注册-->
       <div class="registeredEmail" v-else>
           <input type="text" placeholder="6-18为字母数字组合">

           <!--点击选择邮箱后缀-->
           <div class="pull" @click="showMast">
               {{emailText}}
               <i class="btn iconfont icon-up"></i>
           </div>
           <div class="mast" v-if="isShowMast">
               <div class="mastContent">
                   <div @click="numberInput1">@163.com</div>
                   <div @click="numberInput2">@126.com</div>
                   <div @click="numberInput3">@yeah.net</div>
               </div>

           </div>




           <input type="text" placeholder="6-16位字母数字字符组合密码">
           <div class="clickyanzhneg">点此进行验证</div>
           <div class="textNext">下一步</div>
           <div class="registeredEmailText">
               <input type="checkbox" name="a">
               <span>我同意
               <a href="//reg.163.com/agreement_mobile.shtml" target="_blank">《服务条款》</a>和
               <a href="//reg.163.com/agreement_mobile_ysbh.shtml" target="_blank">《网易隐私政策》</a>
               </span>
           </div>
           <div class="registeredPhone" @click="showPhoneRegistered">手机号注册>>> </div>
       </div>

   </div>

</template>

<script type="text/ecmascript-6">
  export default{
    data(){
        return{
            isShowRegistered:true,     //定义注册方式的切换   true为手机   false为邮箱
            isShowMast:false,     //定义遮罩层状态
            emailText:'@163.com'  //定义邮箱后缀数据
        }
    },
     methods:{
        //定义点击开启遮罩层的事件
         showMast(){
             this.isShowMast = true;
         },
         //定义点击切换邮箱后缀的方法
         numberInput2(){
             this.emailText = '@126.com';
             this.isShowMast = false;
         }
      , numberInput3(){
             this.emailText = '@yeah.net';
             this.isShowMast = false;
         },
         numberInput1(){
             this.emailText = '@163.com';
             this.isShowMast = false;
         },
         //定义切换邮箱注册的方式的方法
         showEmailRegistered(){
             this.isShowRegistered = false;
         },
         //定义切换手机注册的方式的方法
         showPhoneRegistered(){
             this.isShowRegistered = true;
         }
     }
  }
</script>

<style lang="stylus">

    #registeredWrap
        width 750px
        height 840px
        position relative
        .RegisteredTitle
            width 750px
            height 90px
            font-size 36px
            color #333
            text-align center
            box-sizing border-box
            padding 40px 0 0
            /*手机注册*/
        .registeredContent
            width 750px
            height 610px
            position relative
            box-sizing border-box
            padding 0 40px
            margin-top 120px
            input
                width 670px
                height 90px
                outline none
                margin 26px 0
                font-size 30px
            .phoneLoginGet
                position absolute
                left 520px
                top 192px
                width 150px
                color #333
                font-size 28px
                border 2px solid #7f7f7f
                text-align center
                border-radius 8px

            .registeredbutton
                width 670px
                height 90px
                background #b4282d
                font-size 28px
                text-align center
                line-height 90px
                color white
                border-radius 10px
                margin-top 40px
            .registeredText
                width 670px
                margin-top 10px
                input
                    width 28px
                    height 28px
                    vertical-align middle
                    margin-right 10px
                a
                    text-decoration none
            .registeredEmail
                width 670px
                text-align center
                margin-top 30px
                color #333
                font-size 28px


        /*邮箱注册*/
        .registeredEmail
            width 750px
            height 672px

            box-sizing border-box
            padding 0 40px
            margin-top 120px
            input
                width 670px
                height 90px
                outline none
                margin 26px 0
                font-size 30px
                border-radius 10px
                &:first-child
                    width 384px
            .pull
                width 232px
                height 92px
                background white
                border 2px solid #d0d0d0
                border-radius 8px
                float right
                margin-top 20px
                line-height 92px
                text-align center
            .mast
                width 100%
                height 150%
                position absolute
                left 0px
                top 0px
                background black
                opacity 0.7
                z-index 9
                .mastContent
                    width 600px
                    height 326px
                    background white
                    opacity 1
                    position absolute
                    left 50%
                    top 50%
                    transform translate(-50%,-50%)
                    border-radius 20px
                    z-index 111
                    overflow hidden
                    div
                        width 100%
                        height 100px
                        border-bottom 1px solid red
                        font-size 30px
                        background white
                        opacity 1
                        color #333
                        box-sizing border-box
                        padding 0 40px
                        font-weight bold
                        line-height 100px
                        &:last-child
                            border none




            .clickyanzhneg
                width 640px
                height 82px
                text-align center
                font-size 28px
                color #45494c
            .textNext
                width 644px
                height 80px
                background #b7272d
                color white
                text-align center
                line-height 80px
            .registeredEmailText
                width 670px
                margin-top 10px
                input
                    width 28px
                    height 28px
                    vertical-align middle
                    margin-right 10px
                a
                    text-decoration none
            .registeredPhone
                width 670px
                text-align center
                margin-top 30px
                color #333
                font-size 28px

</style>