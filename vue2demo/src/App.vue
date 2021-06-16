<template>
  <div id="app">
    <div>
      <div>get global g_num: {{$store.state.g_num}} <button @click="addition">incre</button> </div>
      <div>get global getter: {{$store.getters.g_num_pow2}}</div>
      <div>这个按钮用来异步修改全局数据, 将会调用action <button @click="callAction">sync_modify</button> </div>
      <!--router-link define the path where to go, it just like <a> element-->
      <!--when click the router-link ele, the path whould become the value of 'to'-->
      <!--and then the countpart component(page) whould appear in the place where the tag router-view exsits-->
      <!--tag : set the ele show with which element-->
      <!--replace : set use history.pushState() or history.replace()-->
      <!-- when replace, the button 'back' and 'forward' in brower whould disable -->
      <router-link to="/home" tag="button">home</router-link>
      <router-link to="/about" tag="button">about</router-link>
      <router-link :to="'/user/'+username" tag="button">user</router-link>
      <router-link to="/lazyPage" tag="button">lazyPage</router-link>
      <!--convey query when go to the path-->
      <router-link :to="{
        path: '/getQuery',
        query: {name:'alice',age:22}
      }" tag="button">getQuery</router-link>
    <br>
      <router-link to="/testWatch" tag="button">testWatch</router-link>
      <button @click="goHome">btn_home</button>
      <button @click="goAbout">btn_about</button>
    </div>

    <!-- save status by keep-alive -->
    <keep-alive>
      <router-view class="mainView"></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      username : 'alice'
    }
  },
  methods:{
    goHome(){
      //use $router to route
      this.$router.push('/home')
    },
    goAbout(){
      //use $router to route
      this.$router.replace('/about')
    },
    //调用mutation中的方法修改全局变量
    //同时传递参数, 就把参数放到commit函数的第二个形参位置
    //如果要传递多个参数, 那么就传递对象
    addition(){
      this.$store.commit('incre', 10)
    },
    //调用action然后异步修改全局数据
    callAction(){
      this.$store.dispatch('action_increment', 15)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* set router link's style when it's actived  */
.router-link-active{
  color: red;
}
/*  */
.mainView{
  background: rgb(175, 175, 175);
}
</style>
