<template>

   <div id="general">
       <!--识物的头部-->
       <div class="generalHeader">
           <div class="shouye iconfont icon-yemian"></div>
           <div class="faxian">发现</div>
           <div class="zhenxuan">甄选家</div>
           <div class="iconfont icon-search"></div>
           <div class="iconfont icon-shop-cart-white "></div>
       </div>
       <!--头部下面的导航-->
       <div class="generalNav">
           <ul class="generalList">
               <li class="generalnavItem"><span>推荐</span></li>
               <li class="generalnavItem"><span>居家生活</span></li>
               <li class="generalnavItem"><span>服饰鞋包</span></li>
               <li class="generalnavItem"><span>美食酒水</span></li>
               <li class="generalnavItem"><span>个护清洁</span></li>
               <li class="generalnavItem"><span>运动旅行</span></li>
               <li class="generalnavItem"><span>数码家电</span></li>
               <li class="generalnavItem"><span>母婴亲子</span></li>
               <li class="generalnavItem"><span>全球特色</span></li>
           </ul>
       </div>
       <!--横向导航下主题内容-->
       <div class="generalContent">
           <!--图片-->
            <div class="generalImg">
                <img src="https://yanxuan.nosdn.127.net/bdb121b22f382f1d2a116ace09bcfaf4.jpg?imageView&quality=65&thumbnail=690y376">
            </div>
           <!--选妹-->
           <div class="xuanmeiWrap">
               <div class="xuanmei">
                   <img class="xuanmeiImg" src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56">
                   <span class="xuanmeiTxt">选妹</span>
               </div>
               <div class="xuanmeiTitle">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</div>
               <div class="xuanmeiImgBig">
                   <img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376">
               </div>
           </div>
           <!--网易文盲-->
           <div class="wenman">
               <div class="wenmanWrap">
                   <img src="https://yanxuan.nosdn.127.net/1ecf5d57d84b7ae03905404131dc2c10.jpg?imageView&quality=65&thumbnail=56y56">
                   <span class="wenmanTitle">网易文漫：小蕙</span>
                   <div class="wenmanTxt">大牌最爱的玻尿酸原液，1瓶等于20片面膜</div>
                   <div class="wenmanTxt2">赋活原液系列限时7.1折</div>
                   <div class="wenmantxt3">@42304人看过</div>
               </div>
               <div class="wenmanImg">
                   <img src="https://yanxuan.nosdn.127.net/119ea021198fbc19e7d0cb76c718e324.jpg?imageView&quality=65&thumbnail=272y272">
               </div>


           </div>





           <!--下面的都是选妹和网易温蔓的复制体只需改图片和文字即可-->
           <div class="xuanmeiWrap">
               <div class="xuanmei">
                   <img class="xuanmeiImg" src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56">
                   <span class="xuanmeiTxt">选妹</span>
               </div>
               <div class="xuanmeiTitle">常年断货的严选爆品终于上架了，回头客都在抢！</div>
               <div class="xuanmeiImgBig">
                   <img src="https://yanxuan.nosdn.127.net/6f5e7bb94350b7eed05134a9b1d83200.jpg?imageView&quality=65&thumbnail=690y376">
               </div>
           </div>
           <div class="wenman">
               <div class="wenmanWrap">
                   <img src="https://yanxuan.nosdn.127.net/1ecf5d57d84b7ae03905404131dc2c10.jpg?imageView&quality=65&thumbnail=56y56">
                   <span class="wenmanTitle">网易文漫：小蕙</span>
                   <div class="wenmanTxt">大牌最爱的玻尿酸原液，1瓶等于20片面膜</div>
                   <div class="wenmanTxt2">赋活原液系列限时7.1折</div>
                   <div class="wenmantxt3">@42304人看过</div>
               </div>
               <div class="wenmanImg">
                   <img src="https://yanxuan.nosdn.127.net/119ea021198fbc19e7d0cb76c718e324.jpg?imageView&quality=65&thumbnail=272y272">
               </div>


           </div>






       </div>
   </div>

</template>

<script type="text/ecmascript-6">
    import Bscroll from 'better-scroll'
  export default{
      mounted(){
          let wraper = document.querySelector('.generalNav')
          new Bscroll(wraper,{
              scrollX:true
          })

      }

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
                color #b4282d
                font-size 40px
                margin-left 170px
            .zhenxuan
                color #7f7f7f
                font-size 28px
                margin-left 20px
                margin-right 110px


    /*头部下方 横向导航*/
        .generalNav
            position fixed
            left 0
            top 102px
            width 750px
            height 92px
            background white
            box-sizing border-box
            padding 10px 10px
            z-index 99
            .generalList
                display flex
                width 1350px
                height 92px
                line-height 70px


               .generalnavItem

                    width 120px
                    margin 0 10px
                    font-size 28px
                    white-space nowrap
                    padding 0 8px
                    color #7f7f7f


        /*横向导航下边的内容*/
        .generalContent
            padding-top 180px
            width 100%
            height 100%
            /*图片*/
            .generalImg
                width 750px
                height 448px
                box-sizing border-box
                padding 36px 30px
                margin 10px 0
                img
                    width 100%
                    height 100%


    /*选妹*/
            .xuanmeiWrap
                width 750px
                height 676px
                box-sizing border-box
                padding 36px 30px
                margin 10px 0
                .xuanmeiImg
                    width 54px
                    height 54px
                    vertical-align middle
                    border-radius 50%
                .xuanmeiTxt
                    color #333
                    font-size 28px
                    margin-left 10px
                .xuanmeiTitle
                    font-size 36px
                    color #333
                    margin 8px 0 16px
                .xuanmeiImgBig
                    width 690px
                    height 376px
                    margin 10px 0
                    img
                        width 100%
                        height 100%

    /*网易文漫系列*/
            .wenman
                width 750px
                height 336px

                padding 32px 30px
                display flex
                .wenmanWrap
                    width 400px
                    height 272px
                    img
                        width 54px
                        height 54px
                        border-radius 50%
                    .wenmanTitle
                        font-size 28px
                        color #333
                    .wenmanTxt
                        width 400px
                        height 120px
                        color #333
                        padding 32px 0 0
                        box-sizing border-box
                        font-size 36px
                    .wenmanTxt2
                        width 400px
                        height 48px
                        color #7f7f7f
                        font-size 28px
                        padding 8px 0 0
                        margin-top 10px
                    .wenmantxt3
                        color #7f7f7f
                        margin-top 10px
                .wenmanImg
                    width 272px
                    height 272px
                    img
                        width 272px
                        height 272px




</style>