<template>

   <div id="shopCar">
       <!--头部-->
       <div class="shopCarHeader">
           <span>购物车</span>
           <span>购券</span>
       </div>
       <!--/*头部下方小字*/-->
       <div class="shopCarText">
           <div>30天无忧退货</div>
           <div>48小时快速退款</div>
           <div>满88元免邮费</div>
       </div>
       <div class="shopCarLogin">

           <div class="shopCarImg"></div>
           <div class="shopCarTxt">去添加点什么吧</div>
           <button @click="$router.replace('/personal')">登录</button>
       </div>

   </div>

</template>

<script type="text/ecmascript-6">
  export default{

  }
</script>

<style lang="stylus">
    #shopCar
        width 100%
        height 100%
        position relative
        .shopCarHeader
            width 750px
            height 88px

            line-height 88px
            box-sizing border-box
            padding 0 30px
            span
                font-size 36px
                color #333
                &:last-child
                    float right
                    color red
                    font-size 30px


    /*头部下方小字*/
        .shopCarText
            width 750px
            height 70px
            box-sizing border-box
            padding 0 30px
            background #eee
            display flex
            line-height 70px
            justify-content space-around
            color #666
            /*登录背景图和按钮*/
        .shopCarLogin
            position absolute
            left 50%
            top 50%
            transform translate(-50%,-50%)

            text-align center
            .shopCarImg
                width 248px
                height 248px
                background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
                background-size 100% 100%
                background-repeat no-repeat
                margin 0 auto
            .shopCarTxt
                color #999
            button
                width 480px
                height 92px
                background #b4282d
                color white
                outline none
                border none
                border-radius 10px
                margin-top 30px






</style>
