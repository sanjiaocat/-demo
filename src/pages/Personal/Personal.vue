<template>

   <div id="personal">
       <!--头部标题-->
        <div class="personalHeader">
            <div class="personalHeader1 iconfont icon-yemian" @click="goToShouye"></div>
            <div class="personalHeader2"></div>
            <div class="personalHeader3 iconfont icon-search"></div>
            <div class="personalHeader4 iconfont icon-shop-cart-white"></div>
        </div>

       <!--选择登录方式界面-->
       <div class="personalWrap" v-if="!isShowPhone && !isShowEmail">
           <!--背景图-->
           <div class="personalImgWrap">
               <div class="personalImg">
                   <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
               </div>
           </div>
           <!--注册和登录-->
           <div class="personalCenter">
               <div class="personalPhone" @click="showLoginPhone">
                   <span>手机号码登录</span>
               </div>
               <div class="personalEmail personalPhone" @click="showLoginEmail">

                   <span>邮箱号码登录</span>
               </div>
               <div class="zhuce">手机号快速注册 > </div>
           </div>
       </div>


       <!--手机号或者邮箱登录-->
       <div class="phoneLoginWrap" v-if="isShowPhone || isShowEmail">
           <div class="phoneLoginImg">
               <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
           </div>

           <!--手机号登录界面-->
           <div class="phoneLoginInput" v-if="isShowPhone">
               <input type="text" placeholder="请输入手机号">
               <input type="text" placeholder="请输入验证码">
               <div class="phoneLoginGet">获取验证码</div>
               <div class="phoneLoginText">
                   <span>遇到问题？</span>
                   <span>使用密码验证登录</span>
               </div>

               <div class="phoneLogin">登录</div>

           </div>



           <!--邮箱登录界面-->

           <div class="phoneLoginInput" v-if="isShowEmail">
               <input type="text" placeholder="请输入邮箱账号">
               <input type="text" placeholder="请输入密码">

               <div class="phoneLoginText">
                   <span>注册账户</span>
                   <span>忘记密码</span>
               </div>

               <div class="phoneLogin">登录</div>

           </div>



           <!--其他登陆界面-->
           <div class="personalAnywei">
               <div class="phoneLoginAny" @click="anywayLogin">其他方式登录</div>
               <div class="zhuceLogin" v-if="isShowPhone">注册账号 > </div>
           </div>
       </div>


   </div>

</template>

<script type="text/ecmascript-6">
  export default{
      data(){
          return{
              isShowPhone:false,         //定义手机登录状态
              isShowEmail:false          //定义手机登录状态
          }
      },

      methods:{
          //定义点击手机登录方法
          showLoginPhone(){
              this.isShowPhone = true

              this.isShowEmail = false
          },
          //定义点击邮箱登录方法
          showLoginEmail(){
              this.isShowPhone = false

              this.isShowEmail = true
          },
          //定义点击更换的登录方式。
          anywayLogin(){
              this.isShowPhone = false

              this.isShowEmail = false
          },
          //定义点击跳转主页方法
          goToShouye(){
              this.$router.push('/home');
          }
      }
  }
</script>

<style lang="stylus">
    #personal
        width 100%
        height 100%
        /*头部*/
        .personalHeader
            width 750px
            height 88px
            background white
            display flex
            box-sizing border-box
            padding 0 16px 0 24px
            align-items center
            .personalHeader1
                width 64px
                height 64px
                font-size 48px


            .personalHeader2
                width 172px
                height 54px
                margin 0 auto
                background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
                background-size 100% 100%
            .personalHeader3
                width 64px
                height 64px
                font-size 64px

            .personalHeader4
                width 64px
                height 64px
                font-size 64px
                margin-left 10px

                /*选择登录方式界面*/
        .personalWrap
            width 100%
            /*背景图*/
            .personalImgWrap
                width 750px
                height 410px
                box-sizing border-box
                padding 160px 0
                .personalImg
                    width 268px
                    height 90px
                    margin 0 auto
                    img
                        width 268px
                        height 90px
            /*登录方式区域*/
            .personalCenter
                width 750px
                height 292px
                text-align center
                .personalPhone
                    width 670px
                    height 94px
                    background #b4282d
                    text-align center
                    position relative
                    /*padding-bottom 30px*/
                    line-height 94px
                    margin 0 auto
                    span
                        font-size 28px
                        color white
                .personalEmail
                    background white
                    margin-top 20px
                    margin-bottom 20px
                    border 1px solid red
                    span
                        color red
                .zhuce
                    color #333
                    font-size 28px




        /*手机号登录*/
        .phoneLoginWrap
            width 750px
            height 1000px
            .phoneLoginImg
                width 750px
                height 64px
                text-align center
                margin 56px 0 0
                img
                    width 200px
                    height 64px



            .phoneLoginInput
                position relative
                width 750px
                height 500px
                margin-top 112px
                padding 0 40px
                box-sizing border-box
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
                .phoneLoginText
                    font-size 28px
                    color #7f7f7f
                    margin-top 10px
                span:last-child
                    float right
                    color #666

                .phoneLogin
                    width 670px
                    height 90px
                    background #b4282d
                    font-size 28px
                    text-align center
                    line-height 90px
                    color white
                    border-radius 10px
                    margin-top 40px



            .personalAnywei
                width 750px
                height 164px
                box-sizing border-box
                padding 0 40px
                .phoneLoginAny
                    width 670px
                    height 90px
                    background white
                    font-size 28px
                    text-align center
                    line-height 90px
                    color red
                    border-radius 10px
                    border 2px solid red

                .zhuceLogin
                    text-align center
                    color #333
                    font-size 26px
                    margin-top 30px




        /*邮件登录*/







</style>