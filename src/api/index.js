/**
 * Created by 54950 on 2019/7/21.
 */

import ajax from './ajax';


const BASE = '/api';       //解决跨域问题
//获取首页数据
export const reqHomeData = ()=> ajax.get('/homeData');

//获取分类数据。
export const reqcategoryList = ()=> ajax.get('/categoryList');

//关键字搜索请求

export const reqSearchArr = (value)=> ajax({
    methods:'GET',
    url:BASE+'/xhr/search/searchAutoComplete.json',
    params:{
        keywordPrefix:value
    }
})

//获取热门搜索接口
export const reqHotSearch = ()=>ajax(BASE+'/xhr/search/init.json');

//识物发现的数据初始化
export const reqfindTj = ()=>ajax.get('/findTj')

//识物上啦加载接口
export const reqFindMore = (page,size)=> ajax({
    methods:'GET',
    url:BASE+'/topic/v1/find/recAuto.json',
    params:{
        page,
        size
    }
})



