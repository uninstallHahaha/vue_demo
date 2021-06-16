export default 
//子模块mod1
{
    //如果要用模块中的state, 使用 $store.state.模块名.属性名
    state:{name:'mod1_name'},
    //如果要调用模块中的mutations, 直接 $store.commit('方法名', 参数)
    mutations:{
        modifyName(state){
            state.name='new_mod1_name'       
        }
    },
    //如果要调用模块中的actions, 直接 $store.dispatch('方法名', 参数)
    actions:{
        mod1_modify_name_action(context){
            setTimeout(() => {
                context.commit('modifyName')
            }, 1000);
        }
    },
    //如果要调用模块中的getters, 直接 $store.getters.属性名
    getters:{
        getFullName(state){
            return state.name + 'full'
        }
    }
}