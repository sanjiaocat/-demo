<template>

   <div id="zhenxuan">
       <!--轮播图-->
       <div class="swiper-container">
           <div class="swiper-wrapper">
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/4c7dea0d162b3dd3fb87dfe34829bb90.jpg?imageView&quality=75&thumbnail=670x371">
               </div>
               <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/4c7dea0d162b3dd3fb87dfe34829bb90.jpg?imageView&quality=75&thumbnail=670x371"></div>
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/2dde0ddaa2b9033730d282793a0cc04c.jpg?imageView&quality=75&thumbnail=670x371">
               </div>
           </div>
       </div>
       <!--意见征集-->
       <div class="zhengji">
           <div class="zhengjiText">
               <span>建议征集</span> <br>
               <span>告诉我们，你的好物标准</span>
           </div>
           <div class="zhengjiImg">
               <img src="https://yanxuan.nosdn.127.net/fdcfa17b26d048eacb4ea087bb678345.jpg?imageView&quality=75&thumbnail=272x200">
               <div class="hope">你希望严选推出哪些方便菜肴呢？
                   <br>
                   <span>15条建议</span><span>315人看过</span>
               </div>

           </div>
       </div>

   </div>

</template>

<script type="text/ecmascript-6">

  export default{

    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay:true,//等同于以下设置
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
  }
</script>

<style lang="stylus">
    #zhenxuan
        width 100%
        height 100%
        padding-top 130px
        .swiper-container
            width 700px
            height 388px

        .zhengji
            width 750px
            height 740px
            box-sizing border-box
            padding 0 15px 20px
            .zhengjiText
                width 690px
                height 142px
                text-align center
                box-sizing border-box
                padding 34px 0
                span
                    color #333
                    font-size 32px
                    &:last-child
                        font-size 24px
                        color #7f7f7f
            .zhengjiImg
                width 690px
                height 248px

                flex-wrap wrap
                img
                    width 272px
                    height 200px

                .hope
                    height 100px
                    width 380px
                    white-space wrap
                    color red
                    font-size 32px
                    display inline-block
                    box-sizing border-box
                    padding-left 60px

                    span
                        color #7f7f7f
                        font-size 24px





</style>