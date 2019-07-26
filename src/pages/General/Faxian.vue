<template>

   <div id="faxian">
       <!--头部下面的导航-->
       <div class="generalNav">
           <ul class="generalList">
               <li class="generalnavItem" v-for="(nav,index) in navLists" :key="index"
                   @click="navChange(index) " :class="{active:navlistIndex===index}"
               ><span>{{nav}}</span></li>

           </ul>
       </div>


       <!--横向导航下主题内容-->
       <div class="generalContent">
            <div>
                <!--图片-->
                <div class="generalImg">
                    <img src="https://yanxuan.nosdn.127.net/bdb121b22f382f1d2a116ace09bcfaf4.jpg?imageView&quality=65&thumbnail=690y376">
                </div>
                <div class="generalContentListWrap" v-for="(items,index) in findMoreLists" :key="index">
                    <div class="generalContentList" v-for="(item,index) in items.topics" :key="index">
                        <!--选妹-->
                        <div class="xuanmeiWrap" v-if="item.style===0">
                            <div class="xuanmei">
                                <img class="xuanmeiImg" :src="item.avatar">
                                <span class="xuanmeiTxt">{{item.nickname}}</span>
                            </div>
                            <div class="xuanmeiTitle">{{item.title}}</div>
                            <div class="xuanmeiImgBig">
                                <img :src="item.picUrl">
                            </div>
                        </div>
                        <!--网易文盲-->
                        <div class="wenman" v-if="item.style===2">
                            <div class="wenmanWrap">
                                <img :src="item.avatar">
                                <span class="wenmanTitle">{{item.nickname}}</span>
                                <div class="wenmanTxt">{{item.title}}</div>
                                <div class="wenmanTxt2">{{item.subTitle}}</div>
                                <div class="wenmantxt3">@{{item.readCount}}>>></div>
                            </div>
                            <div class="wenmanImg">
                                <img :src="item.picUrl">
                            </div>
                        </div>
                        <!--没有标题时的标签显示-->
                        <div class="noTitle" v-if="!item.nickname">
                            <div class="noTitleTxt">{{item.title}}</div>
                            <img :src="item.picUrl">
                        </div>
                    </div>
                </div>
            </div>







       </div>
   </div>

</template>

<script type="text/ecmascript-6">


    import BScroll from 'better-scroll';

    import {mapState} from 'vuex';
    export default{
        data(){
            return {
                navLists: [          //横向导航数据
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
                navlistIndex: 0,         //点击时当前横向导航选项的index索引
                //findMoreListss:[]      //发现页初始数据
                page:0,                   // 初始显示得页数
                flag:true               // 函数节流得开关
            }
        },
        mounted(){
            //BScroll.use(Pullup)

            let wraper = document.querySelector('.generalNav')
            new BScroll(wraper, {
                scrollX: true,
                click: true
            })
//
            //获取初始化列表

            this.$store.dispatch('getFindTj').then((res)=>{
//                this.findMoreListss = this.findTjList
                this.$nextTick(()=>{
                    this.scroll = new BScroll('.generalContent', {
                        scrollY: true,
                        pullUpLoad: true,
                        pullDownRefresh:true
                    })
                    //上啦刷新
                    this.scroll.on('pullingDown',()=>{
                        console.log(1)
                        this.scroll.finishPullDown()
                    })
                    //下拉加载功能
                    this.scroll.on('pullingUp',()=>{

                       if(this.flag){
                         this.flag = false;

                            setTimeout(()=>{

                                this.page++;
                                this.$store.dispatch('getFindMore',{page:this.page,size:5}).then(()=>{

                                    this.scroll.finishPullUp()       //告诉better已经下拉加载完毕，可以执行下次加载
                                    this.scroll.refresh();

                                    this.flag = true;
                                })

                            },300)

                        }




                    })


                })



            })


        },
        methods: {
            //定义点击切换横向导航栏的标识。
            navChange(index){
                //将当前点击的索引保存，与所有的所以进行匹配，然后激活相当的类名。
                this.navlistIndex = index;
            },

            //滑动到底部时触发得事件

    },
        computed:{
            ...mapState(['findTjList','findMoreList']),
            findMoreLists(){
                if(this.findMoreList.length>0){
                    this.findMoreList.forEach(item=>{
                        this.findTjList.push(item)
                    })

                }

                //当请求新得数据时，将数据添加进老数据中   concat
                return this.findTjList

            }
        }
    }
</script>

<style lang="stylus">
    /*头部下方 横向导航*/
    #faxian
        width 100%
        height 100%
        .generalNav
            position fixed
            left 0
            top 100px
            width 750px
            height 92px
            background white
            box-sizing border-box
            padding 0px 10px
            z-index 99
            border-bottom 1px solid #999
            .generalList
                display flex
                width 1350px
                height 92px
                line-height 70px
            .generalnavItem
                width 120px
                margin 8px 10px
                font-size 28px
                white-space nowrap
                padding 0 8px
                color #7f7f7f
                box-sizing border-box

                text-align center
                &.active
                    border-bottom 1px solid red
            /*图片*/
        .generalImg

            width 750px
            height 448px
            box-sizing border-box
            padding 36px 30px
            margin 10px 0
            margin-top 180px
            img
                width 100%
                height 100%
        /*横向导航下边的内容*/
        .generalContent

            width 100%
            height 1200px
            .generalContentList
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
                /*没有标题显示的内容*/
                .noTitle
                    width 750px
                    height 600px
                    margin 10px 0px
                    padding 18px 15px
                    box-sizing border-box
                    .noTitleTxt
                        font-size 36px
                        color #333
                        margin -8px 0 16px
                    img
                        width 690px
                        height 376px

</style>