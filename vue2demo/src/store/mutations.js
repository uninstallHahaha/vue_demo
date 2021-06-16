export default 
//这里存放修改全局数据的方法
{
    //这里面的方法默认自带state全局对象参数
    //第二个行参数是传递过来的参数
    incre(state, num){
        state.g_num+=num
    }
}
