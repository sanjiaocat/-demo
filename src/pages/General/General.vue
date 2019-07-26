<template>

   <div id="general">
       <!--识物的头部-->
       <div class="generalHeader">
           <div class="shouye iconfont icon-yemian"></div>
           <router-link class="faxian" to='/general/faxian'>发现</router-link>
           <router-link class="zhenxuan" to="/general/zhenxuanjia">甄选家</router-link>
           <div class="iconfont icon-search"></div>
           <div class="iconfont icon-shop-cart-white "></div>
       </div>

       <router-view></router-view>
   </div>

</template>

<script type="text/ecmascript-6">
    export default{

    }
</script>

<style lang="stylus" >
    #general
        width 100%
        height 100%

        /*识物发现 头部*/
        .generalHeader
            background white
            width 750px
            height 100px
            display flex
            box-sizing border-box
            position fixed
            left 0px
            top 0px
            padding 0 30px
            line-height 100px
            border-bottom 2px solid grey
            z-index 9
            .iconfont
                background-image url("data:image/png")
                color #333
                font-size 50px
                margin-top 20px
                &:last-child
                    margin-left 20px
            .faxian
                color #7f7f7f
                font-size 28px
                margin-left 170px
                text-decoration none
            .zhenxuan
                color #7f7f7f
                font-size 28px
                margin-left 20px
                margin-right 110px
                text-decoration none
            .router-link-active
                color #b4282d
                font-size 40px

</style>