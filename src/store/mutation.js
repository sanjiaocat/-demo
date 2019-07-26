/**
 * Created by 54950 on 2019/7/21.
 */
/**
 * Created by 54950 on 2019/7/21.
 */

export default {
    //直接修改state里面的数据导航列表的数据
    setHomeNavList(state,{kingKongList,personalShop}){

        state.kingKongList = kingKongList;
        state.personalShop = personalShop;
    },

    //直接修改第二页导航数据
    setCategoryList(state,categoryList){
        state.categoryList = categoryList
    }
    ,
    //更新识物发现也数据状态
    setFindTj(state,findTjList){
        state.findTjList=findTjList;
        // console.log(state.findTjList)
    },
    //发现页得数据更新
    setFindMoreList(state,findMoreList){
        state.findMoreList = findMoreList
    }
}