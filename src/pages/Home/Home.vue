<template>

   <div id="home" @touchmove="aaaaaaa">
       <!--头部结构-->
       <div class="homeHeader">
           <!--首页搜索最上边-->
           <div class="homeSearch">
               <div class="title"></div>
               <div class="search" @click="goToSearch">
                   <i class="searchi"></i>
                   <span>搜索商品, 共21816款好物</span>
               </div>
               <div class="header-login">登录</div>
           </div>
           <!--横向导航-->
           <div class="headerNav">
               <!--首页头部横向导航-->
               <div class="header-left" v-show="isShow">
                   <ul class="headernavList">
                       <li class="headernavItem" :class="{active:navlistIndex===index}" v-for="(nav,index) in navLists"  @click="activeChange(index)"><span>{{nav}}</span></li>

                   </ul>
               </div>

               <!--点击出现的全部频道-->
               <div class="clickNav" v-show="!isShow">全部频道</div>

               <!--首页头部点击旋转箭头-->

               <div class="iconfont icon-up" @click="isShowmasetList" :class="{activeMast:isShow}"></div>


               <!--全部列表的所有项-->
               <div class="mastList" v-if="!isShow">
                   <ul class="mastList-s">
                       <li class="listItem" :class="{active:navlistIndex===0}"> 推荐</li>
                       <li class="listItem" :class="{active:navlistIndex===1}"> 居家生活</li>
                       <li class="listItem" :class="{active:navlistIndex===2}"> 服饰鞋包</li>
                       <li class="listItem" :class="{active:navlistIndex===3}"> 美食酒水</li>
                       <li class="listItem" :class="{active:navlistIndex===4}"> 个护清洁</li>
                       <li class="listItem" :class="{active:navlistIndex===5}"> 母婴亲子</li>
                       <li class="listItem" :class="{active:navlistIndex===6}"> 运动旅行</li>
                       <li class="listItem" :class="{active:navlistIndex===7}"> 数码家电</li>
                       <li class="listItem" :class="{active:navlistIndex===8}"> 全球特色</li>
                   </ul>
               </div>
               <div class="mast" v-if="!isShow">
               </div>
           </div>
       </div>
       <!--轮播图-->
       <div class="swiper-container" id="swiper1">

           <div class="swiper-wrapper">
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/3d087e9e13b33629355a9163e9d13ae7.jpg?imageView&quality=75&thumbnail=750x0">
               </div>
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0">
               </div>
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/5a8fdfaa42b384309a0e7425305fabed.jpg?imageView&quality=75&thumbnail=750x0">
               </div>
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0">
               </div>
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/3cf97a99f8017e3bb0d22fdff2c283b0.jpg?imageView&quality=75&thumbnail=750x0">
               </div>
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0">
               </div>
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/3a5a525079308bab4e34282188cc5ef3.jpg?imageView&quality=75&thumbnail=750x0">
               </div>
               <div class="swiper-slide">
                   <img src="https://yanxuan.nosdn.127.net/3d087e9e13b33629355a9163e9d13ae7.jpg?imageView&quality=75&thumbnail=750x0">
               </div>


           </div>
           <!-- 如果需要分页器 -->
           <div class="swiper-pagination"></div>

       </div>
       <!--轮播图下边 小块区域-->
       <div class="homegrow">
           <div class="homegrowItem">
               <i class="gImag1"></i>
               <span class="gText">网易自营品牌</span>
           </div>
           <div class="homegrowItem">
               <i class="gImag2"></i>
               <span class="gText">30天无忧退货</span>
           </div>
           <div class="homegrowItem">
               <i class="gImag3"></i>
               <span class="gText">48小时快速退款</span>
           </div>

       </div>
       <!--轮播图下边的详细列表-->
       <div class="homeContent">
           <ul class="homeContentList">
               <li class="homeContentItem"  v-for="(item,index) in kingKongList" :key="index">
                   <img :src="item.picUrl">
                   <span>{{item.text}}</span>
               </li>


           </ul>
       </div>
       <!--新人好礼 开始moudel-->
       <div class="homemoudelTitle">
           <span>— </span>
           <span>新人专享礼</span>
           <span> —</span>
       </div>
       <!--新人好礼content-->
       <div class="moudelContent">
           <div class="moudelContent-left">
               <span class="moudelContentText">新人专享礼包</span>
               <div class="moudelContent-leftImg">
                   <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png">
               </div>
           </div>
           <div class="moudelContent-right">
               <div class="moudelContent-right-top">
                   <span class="fuli">福利社</span>
                   <span class="tejia">今日特价</span>
                   <img src="https://yanxuan.nosdn.127.net/4659a85e22c3fba4f8433f5cd07de195.png?imageView&thumbnail=200x200&quality=75">
               </div>
               <div class="moudelContent-right-top">
                   <span class="fuli">新人拼团</span>
                   <span class="tejia">一元包邮</span>
                   <img src="https://yanxuan.nosdn.127.net/890f61b6af6644ba4fb706c878da21ea.png?imageView&thumbnail=200x200&quality=75">
               </div>
           </div>
       </div>
       <!--品牌制造商直供  header-->
       <div class="brand-header">
           <span class="brand-header-left">品牌制造商直供</span>
           <div class="brand-header-right">
               <span >更多</span>
               <i class="iconfont icon-iconfontyoujiantou-copy-copy-copy-copy"></i>
           </div>
       </div>
       <!--品牌制造商直供  content-->
       <ul class="brand-content">
           <li class="brand-contentItem">
               <h4>海外制造商</h4>
               <div>9.9元起</div>
           </li>
           <li class="brand-contentItem item2">
               <h4>海外制造商</h4>
               <div>9.9元起</div>
           </li>
           <li class="brand-contentItem item3">
               <h4>海外制造商</h4>
               <div>9.9元起</div>
           </li>
           <li class="brand-contentItem item4">
               <h4>海外制造商</h4>
               <div>9.9元起</div>
           </li>
       </ul>
       <!--私人定制-->
       <div class="swiper-container" id="swiper2">
           <div class="swiper-wrapper">
               <div class="swiper-slide" v-for="(items,index) in personalShoplist" :key="index">
                   <div class="seiperWrapimg" v-for="(item,index) in items" :key="index">
                       <img :src="item.listPicUrl">
                   </div>
               </div>

           </div>
           <!-- 如果需要分页器 -->
           <div class="swiper-pagination"></div>
       </div>


       <div id="aaaaa">
           <div class="banben">
               <div class="banben1">下载App</div>
               <div class="banben2">电脑版</div>
           </div>
           <div class="banben-shengming">
               <div>网易公司版权所有 © 1997-</div>
               <div>食品经营许可证：JY13301080111719</div>
           </div>

       </div>
       <!--点击回到最上方三角-->

        <a href="#home" class="goTo">
            <div class="clickTop">
            </div>
        </a>

   </div>

</template>

<script type="text/ecmascript-6">
    import {mapState} from 'vuex';
    import BScroll from '@better-scroll/core'


  export default{
      data(){
          return{
              isShow:true,        //定义遮罩层是否显示    true为不显示
              navLists:[          //横向导航数据
                  '推荐',
                  '居家生活',
                  '服饰鞋包',
                  '美食酒水',
                  '个护清洁',
                  '母婴亲子',
                  '运动旅行',
                  '数码家电',
                  '全球特色'
              ],
              navlistIndex:0,         //点击时当前横向导航选项的index索引
              flag:true
          }
      },
      methods:{
          //定义点击切换蒙板的事件
          isShowmasetList(){
              this.isShow = !this.isShow;
          },
          //定义切换横向导航高亮的事件
          activeChange(index){
              this.navlistIndex = index;
              console.log(index)
          },
          //跳转search页面
          goToSearch(){
              this.$router.push('/search');
          },


          aaaaaaa(event){
              if(!this.flag){
                  return
              }
              this.flag = false;
              this.qwer = setTimeout(()=>{
                  console.log(event.targetTouches[0].clientX)
                  this.flag = true;
              },500)

          }

      },
    mounted(){
        //加载头部导航横向滚动
        let wraper = document.querySelector('.header-left')
        new BScroll(wraper,{
            scrollX: true,
            click:true              //better库会禁止原生的事件，更改设置可以点击
        })



        //获取加载导航数据
        this.$store.dispatch('getHomeNavList').then(()=>{
            this.$nextTick(()=>{
                //加载轮播图初始化
                var mySwiper = new Swiper ('#swiper1', {
                    loop: true, // 循环模式选项
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'custom',
                        //设置另类的分页器的样式
//                renderCustom: function(swiper, current, total) {
//                     return current + ' of ' + total;
//                }
                        // bulletClass : 'my-swiper-pagination-custom',
//                设置样式为 长条的样式。
                        renderCustom: function (swiper, current, total) {
                            var customPaginationHtml = "";
                            for(var i = 0; i < total; i++) {
                                //判断哪个分页器此刻应该被激活
                                if(i == (current - 1)) {
                                    customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                                } else {
                                    customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                                }
                            }
                            return customPaginationHtml;
                        }
                    }
                })
                //        加载私人定制轮播图
                var mySwiper2 = new Swiper('#swiper2',{
                    loop: true, // 循环模式选项
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })
            })
        })
    },
    computed:{
        ...mapState(['kingKongList','personalShop']),
        //二维数组列表
        personalShoplist(){
            const {personalShop} = this;
            let bigArr = [];
            let smallAll = [];
            personalShop.forEach(item=>{
                //如果小数组为空 就把他添加进大数组中。
                if (smallAll.length===0){
                    bigArr.push(smallAll);
                }
                //往大数组中得小数组添加数据
                smallAll.push(item)
                //如果小数组得值长度为3，就从新创建一个小数组， 上面会把他添加进大数组中
                if (smallAll.length===3){
                    smallAll = [];
                }


            })
            //console.log(bigArr)
            return bigArr;

        }
    }
  }
</script>

<style lang="stylus">
    #home
        width 100%
        height 100%
        padding-top 170px
        position relative
        //头部样式
        .homeHeader
            width 750px
            height 170px
            box-sizing border-box
            position fixed
            left 0px
            top 0
            z-index 10
            background white
            .homeSearch
                wdith 750px
                height 88px
                padding-left 30px
                display flex
                align-items center

                .title
                    width 138px
                    height 40px
                    /*font-size 30px*/
                    box-sizing border-box

                    background-size  138px 40px
                    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
                    margin 10px 20px 0 0
                .search
                    width 442px
                    height 56px
                    background-color #ededed
                    border-radius .1rem
                    display flex
                    align-items center
                    .searchi
                        width 28px
                        height 28px
                        margin 0 10px 0 30px
                        display inline-block
                        vertical-align middle
                        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
                        background-size 100% 100%

                    span
                        width 317.3px
                        height 41px
                        color #666
                        font-size 28px
                        white-space nowrap
                        display inline-block

                .header-login
                    width 74px
                    height 40px
                    line-height 34px
                    margin 6px 0 0 30px
                    font-size 24px
                    color #b4282d
                    font-weight normal
                    vertical-align baseline
                    border 2px solid #b4282d
                    border-radius 4px
                    box-sizing border-box
                    padding-left 15px
                    white-space nowrap

    /*横向导航*/
            .headerNav
                width 750px
                height 60px

                display flex
                flex-wrap wrap
    /*首页头部横向导航*/
                .header-left
                    width 650px
                    height 60px

                    overflow hidden
                    margin-right 20px
                    .headernavList
                        width 1460px
                        height 60px
                        display flex
                        box-sizing border-box
                        padding-left 30px
                        .headernavItem
                            width 144px
                            height 60px
                            font-size 28px
                            color #333
                            padding 8px 16px
                            box-sizing border-box

                            &.active
                                border-bottom 1px solid red
                                color red
                            &:first-child
                                width 88px

                /*<!--点击出现的  全部频道 -->*/
                .clickNav
                    width 650px
                    height 60px
                    margin-right 20px
                    line-height 60px
                    box-sizing border-box
                    padding-left 40px
                    /*点击出现所有的频道列表*/
                .mastList
                    width 750px
                    height 312px
                    background white
                    z-index 5
                    .mastList-s
                        width 750px
                        height 312px
                        padding-top 24px
                        display flex
                        flex-wrap wrap
                        .listItem
                            width 156px
                            height 56px
                            margin 0px 0px 40px 24px
                            background #FAFAFA
                            border 1px solid #CCC
                            line-height 56px
                            text-align center
                            font-size 24px
                            &.active
                                  border-bottom 1px solid red
                                  color red

                .iconfont
                    width 60px
                    height 60px
                    text-align center
                    line-height 60px
                    transition .5s
                    &.activeMast
                        transform rotate(-180deg)
                .mast
                    width 100%
                    height 1000px
                    background black
                    opacity 0.7




//       轮播图样式
        #swiper1
            width 750px
            height 370px
            background #f9f9f9
            .swiper-wrapper
                width 750px
                height 370px
                .swiper-slide
                    img
                        width 750px
                        height 370px

            /*包裹自定义分页器的div的位置等CSS样式*/
            .swiper-pagination-bullet
                bottom 10px
                left 0
                width 100%

    /*自定义分页器的样式，这个你自己想要什么样子自己写*/
                .swiper-pagination-customs
                    width 30px
                    height 4px
                    display inline-block
                    background #000
                    opacity .5
                    margin 0 5px

                /*!*自定义分页器激活时的样式表现*!*/
                .swiper-pagination-customs-active
                    opacity 1
                    background-color #F78E00



        /*轮播图下边的小块*/
        .homegrow
            width 750px
            height 72px
            padding 0 30px
            display flex
            box-sizing border-box
            align-items center
            .homegrowItem
                width 228px
                height 36px
                line-height 36px
                //vertical-align middle
                .gImag1
                    width 32px
                    height 32px
                    display inline-block
                    background-image url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png')
                    background-size 100% 100%
                    vertical-align middle
    
                .gImag2
                    width 32px
                    height 32px
                    display inline-block
                    background-image url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png')
                    background-size 100% 100%


                .gImag3
                    width 32px
                    height 32px
                    display inline-block
                    background-image url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png)
                    background-size 100% 100%
                    vertical-align middle
                .gText
                    font-size 24px
                    margin-left 10px
                    color #333



    /*轮播图下边的整个列表选项*/
        .homeContent
            width 750px
            height 341px

            .homeContentList
                width 750px
                height 341px

                display flex
                flex-wrap wrap
                .homeContentItem
                    width 110px
                    height 156px
                    margin 10px 20px 9px
                    text-align center
                    img
                        width 110px
                        height 110px
                    span
                        width 110px
                        height 36px
                        color #333


    /*新人好礼 开始moudeltitle*/
        .homemoudelTitle
            width 750px
            height 90px
            background #fff
            padding 0 30px
            text-align center
            line-height 90px
            span
                font-size 32px
                color #333

    /*新人好礼content*/
        .moudelContent
            width 750px
            height 438px
            display flex
            padding-left 30px
            .moudelContent-left
                width 343px
                height 474px
                background #f9e9cf
                .moudelContentText
                    display block
                    color #333
                    font-size 32px
                    padding  30px 0 0 30px
                .moudelContent-leftImg
                    width 258px
                    height 257px
                    margin 20px auto
                    img
                        width 258px
                        height 257px
                        margin-top 20px



            .moudelContent-right
                width 343px
                height 434px

                margin-left 2px
                .moudelContent-right-top
                    width 343px
                    height 215px
                    padding 20px 0 0 30px
                    background #f9e9cf
                    position relative
                    margin-bottom 2px
                    .fuli
                        color #333
                        font-size 32px
                        display block
                    .tejia
                        color #7f7f7f
                        font-size 24px
                        display block
                    img
                        width 200px
                        height 200px
                        position absolute
                        right 0px
                        bottom 0px

    /*品牌制造商直供  header             */
        .brand-header
            height 100px
            width 750px
            background blue
            margin-top 34px
            padding 0 30px
            box-sizing border-box
            line-height 100px
            .brand-header-left
                font-size 32px
            .brand-header-right
                font-size 28px
                float right


        /*品牌制造商直供  content             */
        .brand-content
            width 750px
            height 554px
            padding 0 26px 26px 30px
            box-sizing border-box
            display flex
            flex-wrap wrap
            .brand-contentItem
                width 343px
                height 260px
                background #eee
                margin 0 4px 4px 0
                background-image url(https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
                background-size 100% 100%
                text-align center
                h4
                    color #333
                    font-size 28px
                    margin 20px 0 10px 0
                div
                    color #7f7f7f
                &.item2
                    background-image url(https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1)
                &.item3
                    background-image url(https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1)
                &.item4
                    background-image url(https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1)




        #aaaaa
            height 244px
            width 750px
            background gray
            padding 54px 20px 28px
            box-sizing border-box
            margin-bottom 90px
            .banben
                height 62px
                width 710px
                margin-bottom 36px
                display flex
                text-align center
                justify-content center
                div
                    height 62px
                    width 171px
                    line-height 62px
                    color white
                    border 2px solid white
                    margin-right 50px
            .banben-shengming
                height 64px
                width 710px
                text-align center


        .goTo
            position fixed
            right  20px
            bottom 96px
            z-index 9

            .clickTop
                width 82px
                height 82px


                background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png')
                background-size 100% 100%


        /*私人定制*/
        #swiper2
            width 750px
            height 570px
            background #f9f9f9
            .swiper-wrapper
                .swiper-slide
                    width 100%
                    height 100%
                    display flex
                    justify-content space-around
                    .seiperWrapimg
                        width 200px
                        height 550px
                        img
                            width 100%
                            height 100%


</style>

