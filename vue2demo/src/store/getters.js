export default 
//这里存放经过变换的全局数据, 相当于组件中的计算属性
//这里的函数都默认带两个参数: 
//  全局数据中的 state 属性 和 全局数据中的 getters属性, 
//  可以从state中取全局数据,可以从 getters 中取其他的 getter
{
    g_num_pow2(state, getters){
        return state.g_num*state.g_num
    }
}