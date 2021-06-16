export default 
//这边放对全局数据的异步操作
{
    //action 第一个参数是当前的 vuex(store) 对象, 因此可以直接commit 调用 mutations 中的方法
    //第二个参数是自定义传递过来的参数
    //这里使用 settimeout 模拟一个异步操作
    action_increment(context, param){
        setTimeout(() => {
            console.log('action get the param : '+ param);
            context.commit('incre', param)
        }, 100);
    }
}