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
       <div class="personalWrap" v-if="!isShowPhone && !isShowEmail && !isShowRegistered">
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
               <div class="zhuce" @click="showRegistered">手机号快速注册 > </div>
           </div>
       </div>


       <!--手机号或者邮箱登录-->
       <div class="phoneLoginWrap" v-if="isShowPhone || isShowEmail">
           <div class="phoneLoginImg">
               <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
           </div>

           <!--手机号登录界面-->
           <div class="phoneLoginInput" v-if="isShowPhone">
               <input type="text" placeholder="请输入手机号" @blur="loseBlur11" v-model="value" @focus="getBlur22">
               <input type="text" placeholder="请输入验证码">
               <div class="yanzhengText" v-if="isShowYanzhengPhone">手机号格式不正确</div>
               <button class="phoneLoginGet" v-bind:disabled="dis" @click="getYanzheng">{{dis?`${time}已发送验证码`:'获取验证码'}}</button>
               <div class="phoneLoginText">
                   <span>遇到问题？</span>
                   <span>使用密码验证登录</span>
               </div>

               <div class="phoneLogin">登录</div>

           </div>



           <!--邮箱登录界面-->

           <div class="phoneLoginInput" v-if="isShowEmail">
               <input type="text" placeholder="请输入邮箱账号" @blur="loseEmailBlur" v-model="emailValue" @focus="getBlur22">
               <input type="text" placeholder="请输入密码">
               <div class="yanzhengText" v-if="isShowYanzhengPhone">邮箱格式不正确</div>
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


       <!--手机号快速注册-->
       <Registered v-if="isShowRegistered"/>

   </div>

</template>

<script type="text/ecmascript-6">
    import Registered from './Registered.vue';
  export default{
      name:'Personal',
      //注册注册子组件
      components:{Registered},
      data(){
          return{
              isShowPhone:false,         //定义手机登录状态
              isShowEmail:false,          //定义手机登录状态
              isShowRegistered:false,            //定义手机注册界面的状态
              regPhone:/^1[3456789][0-9]{9}$/,      //手机验证得正则表达式
              value:'',                            //手机号得初始值
              regEmail:/^([a-zA-Z]|[0-9])([\w|\-])+@([a-zA-Z0-9]){2,5}\.([a-zA-Z]{2,4})$/,  //邮箱正则
              emailValue:'',                        //邮箱得初始值
              isShowYanzhengPhone:false,            //验证手机提示得状态

              dis:false,                            //验证按钮是否可用
              time:10                               //发送验证码得时间

          }
      },

      methods:{
          //定义点击手机登录方法
          showLoginPhone(){
              this.isShowPhone = true

             // this.isShowEmail = false

             // this.isShowRegistered = false;
          },
          //定义点击邮箱登录方法
          showLoginEmail(){
              //打开邮箱界面
              this.isShowEmail = true
              //关闭手机登录页面
             // this.isShowPhone = false


              //关闭注册页面
             // this.isShowRegistered = false;
          },
          //定义点击更换的登录方式。
          anywayLogin(){
              //关闭所有其他页面
              this.isShowPhone = false
              this.isShowEmail = false
              this.isShowEmail = false
          },
          //定义点击跳转主页方法
          goToShouye(){
              this.$router.push('/home');
          },
          //定义点击跳转手机号注册界面
          showRegistered(){
              this.isShowRegistered = true;
//              this.isShowPhone = false
//
//              this.isShowEmail = false
          },
          //手机失去焦点时触发得事件
          loseBlur11(){

                  this.isShowYanzhengPhone = !this.regPhone.test(this.value);


          },
          //邮箱失去焦点时触发得事件。
          loseEmailBlur(){
              this.isShowYanzhengPhone = !this.regPhone.test(this.value);
          },
          //当输入框获得焦点得事件
          getBlur22(){
              this.isShowYanzhengPhone = false;
          },
          //点击获取验证码
          getYanzheng(){
              this.dis = true;
              this.timerId = setInterval(()=>{
                  this.time--;
                  if(this.time===0){
                      this.dis = false;
                      this.time= 10;
                      clearInterval(this.timerId)
                  }

              },1000);
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
                .yanzhengText
                    font-size 24px
                    color #b4282d

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