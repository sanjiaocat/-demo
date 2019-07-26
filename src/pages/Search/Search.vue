<template>

   <div id="search">
       <div class="searchHeader">
           <div class="searchInput">
               <div class="searchIcon"></div>
               <input type="text" placeholder="夏季清凉，小鼠必备" @input="sraechChange" v-model="value">
           </div>
           <span class="searchBack" @click="$router.back()">取消</span>
       </div>

        <!--热门搜索显示-->
       <div class="searchHot" v-show="!value">
           <div class="title">热门搜索</div>
           <nav>
               <a :href="nav.schemeUrl" v-for="(nav,index) in hotArr" :key="index">{{nav.keyword}}</a>
           </nav>
       </div>

       <!--搜索的列表显示-->
       <div class="searchList" v-show="value" v-for="(item,index) in searValue" :key="index">
           <div class="searchItem">{{item}}</div>
       </div>

   </div>

</template>

<script type="text/ecmascript-6">
    import {reqSearchArr,reqHotSearch} from '../../api/index';
  export default{
      data(){
          return{
              hotArr:[],             //热门搜索的列表
              searValue:[],           //返回的关键字的内容
              value:'',          //输入框输入的内容
              timer:null          //定义定时器对象

          }
      },
      methods:{
          //input的value改变时触发的事件
          async sraechChange(){
              //获取input内时时输入的值并发送请求获取数据
              const {value} = this;
              let result = ''
              let detly = 300;

               let nowtime = Date.now();
                //继续一次函数节流
              clearTimeout(this.timer)

               if(!this.first){            //如果第一次执行这个函数，那么就给组件实例添加一个属性
                  this.first = nowtime          //并把当前时间赋值给它
               }

               if (nowtime- this.first>detly){          //当前时间减去上次触发时间是否大于设置得间隔时间
                   result = await reqSearchArr(value);     //大于就执行一次函数
                   this.first = nowtime
                   console.log(value)                  //把当前时间赋值给上次触发时间
               }else {
                   this.timer = setTimeout(async ()=>{      //否则就创建一个定时器
                       result = await reqSearchArr(value);
                       console.log(value)
                   },detly)
               }
              //判断数据是否返回成功
             // console.log(result)
              if(result.code==='200'){
                  this.searValue = result.data;
              }
          }
      },
      async mounted(){
          //获取热门信息得数据
          const result = await reqHotSearch();
          if (result.code==='200'){
              this.hotArr= result.data.hotKeywordVOList
          }
      }
  }
</script>

<style lang="stylus">

    #search
        width 100%
        height 100%
        .searchHeader
            width 750px
            height 88px

            box-sizing border-box
            padding 0 30px
            display flex
            align-items center
            .searchInput
                width 604px
                height 56px
                display flex
                background #f4f4f4
                box-sizing border-box
                padding 0 20px
                align-items center
                .searchIcon
                    width 28px
                    height 28px
                    background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
                    background-size 100% 100%
                input
                    width 520px
                    height 39px
                    padding-left 20px
                    outline none
            span
                font-size 28px
                color #333
                margin-left 30px


        .searchHot
            width 750px
            height 404px
            margin 0 0 20px
            padding 0 30px 30px
            .title
                width 690px
                height 90px
                font-size 28px
                color #999
                line-height 90px
            nav
                width 720px
                height 316px
                margin 0 -30px -32px 0
                a
                    display inline-block
                    color #333
                    font-size 24px
                    margin 0 32px 32px 0
                    padding 0 15px
                    text-decoration none
                    border 2px solid red
                    border-radius 8px



    /*搜索的显示*/
        .searchList
            width 100%

            box-sizing border-box
            padding 0 0 0 30px
            .searchItem
                width 720px
                height 104px
                color #333
                font-size 28px
                line-height 104px
                /*border-bottom 1px solid #d9d9d9*/
                &::after
                    content ''
                    background #d9d9d9
                    width 100%
                    height 2px
                    transform-origin 50% 100% 0




</style>