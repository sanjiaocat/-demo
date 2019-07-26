/**
 * Created by 54950 on 2019/7/21.
 */


/**
 * Created by 54950 on 2019/7/21.
 */
import {reqHomeData,reqcategoryList,reqfindTj,reqFindMore} from '../api';

export default {

    async getHomeNavList ({commit}){
    // 获取导航列表的数据
    const result = await reqHomeData();
    if (result.code===0){
        const kingKongList = result.data.kingKongModule.kingKongList
        const personalShop = result.data.personalShop
        //使用commit方法调用mutations里面的方法间接修改  导航列表的数据
        commit('setHomeNavList',{kingKongList,personalShop});
    }


    },
    //发请求获取第二页导航数据并更改间接状态数据
    async getCategoryList({commit}){

        const result = await reqcategoryList();
        if(result.code===0){

            const categoryList = result.data
            commit('setCategoryList',categoryList)
            console.log(categoryList)
        }
    },

    //获取和调用保存 发现页 的数据
    async getFindTj({commit}){
        const result = await reqfindTj()
        if(result.data.code === '200'){
            const findTjList = result.data.data;
            commit('setFindTj',findTjList)
        }
    },
    //发现页上啦获取更多数据
    async getFindMore({commit},{page,size}){

        const result = await reqFindMore(page,size);

        if (result.code==='200'){
            const findMoreList = result.data.result;

            commit('setFindMoreList',findMoreList);
        }

    }

}