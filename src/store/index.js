import Vue from 'vue';
import Vuex from 'vuex';
import UserStore from './userStore'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        UserStore
    },
    state:{
        loading:false
    },
    mutations:{
        
    },
    actions:{
        
    }
})
export default store;