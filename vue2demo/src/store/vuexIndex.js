import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'

import mod1 from './modules/mod1'

//1. 记得use组件
Vue.use(Vuex)

//2. 创建vuex实例
const store = new Vuex.Store({
    //这里存放全局数据
    state:{
        g_num: 20
    },
    mutations,
    getters,
    actions,
    //用来将一个vuex对象分为多个模块, 便于数据的管理
    //这里边每一个key,val都是一个独立的vuex实例
    modules:{
      mod1
    }
})

//3. 导出vuex实例
export default store