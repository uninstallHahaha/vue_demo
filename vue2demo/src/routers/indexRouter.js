import VueRouter  from 'vue-router'
import Vue from 'vue'

//import page components 
import home from '../components/home'
import about from '../components/about'
import user from '../components/user'
//home module's pages
import news from '../components/home/news'
import msgs from '../components/home/msgs'

//all plugins of vue should be used before they are used.
Vue.use(VueRouter)

//create routers
const routes = [
    //set router rules, 
    //eg, when the uri contain 'home', home component would appear in the element 'router-view'
    {
        //when user in the init page, the path is '', then redirect to the /home by default
        //that is the meaning of set the default appear component(page).
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        //children router
        children:[
            {
                path:'',
                redirect: '/home/news'
            },
            {
                path:'news',
                component: news
            },
            {
                path:'msgs',
                component: msgs
            },
        ]
    },
    {
        path: '/about',
        component: about
    },
    {
        //the restful api
        path: '/user/:username',
        component: user
    },
    {
        //you should always use lazy load to enhance speed of request
        path: '/lazyPage',
        component: () => import('../components/lazyPage')
    },
    {
        path: '/getQuery',
        component: () => import('../components/getQuery')
    },
    {
        path: '/testWatch',
        component: () => import('../components/testWatch')
    }
]

//create a router instance
const vueRouter = new VueRouter({
    routes,
    //the default mode is hash, that is mean the url whoul contain '#'
    //set mode is history, it would use html5's history function , the url whould not contain '#'
    mode: 'history'
})

//set router's aop
//before
vueRouter.beforeEach((to, from, next)=>{
    //it will be execute before ench router change
    console.log('accur router change : ' + from + ' to ' + to)
    //don't forget invoke next()
    next()
})
//after
vueRouter.afterEach((to, from)=>{
    console.log('after route...');
})

//export the vue-router instance
export default vueRouter
