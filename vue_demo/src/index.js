import Vue from 'vue'

//In `index.js`, only import the root component -- App.
import App from './vue/App.vue'

//`index.js` only content the root component-App, and `index.js` will not be modify on your develop.
//what you should do in develop is only to create and edit independent components.
//When use `el` and `template` in the same time,
//the `template value` will replace the element which is setted by `el`
const app = new Vue({
    el:'#app',
    template: `<App/>`,
    components:{App}
})