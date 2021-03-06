// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
Vue.use(Vuex);

Vue.config.productionTip = false;

//模块都是普通对象，在调用处还要import
const moduleA = {
    state: {
        stateAvar: 1
    }
};
const moduleB = {
    state: {
        stateBvar: 2
    }
};
//vuex的实例只有一个
const store = new Vuex.Store({
    //模块可以有很多个
    modules: {
        a: moduleA,
        b: moduleB
    },
    state: {
        count: 0
    },
    getters: {
        double: state => {
            return state.count * 2;
        }
    },
    mutations: {
        //1、mutation方式
        increment(state, payload){
            state.count += payload.amount;
        },
        decrement(state, payload){
            state.count -= payload.amount;
        },
        increment2(state, payload){
            state.count += 2;
        },
        decrement1(state){
            state.count -= 1;
        }
    },
    //参数解构
    actions: {
        //2、action同步方式
        incrementSync ({commit}) {
            commit('increment', {amount: 1})
        },
        //3、action异步方式
        incrementAsync ({commit}) {
            setTimeout(() => {
                commit('increment', {amount: 1})
            }, 1000)
        },
        decrementAsync ({commit}) {
            setTimeout(() => {
                commit('decrement', {amount: 1})
            }, 1000)
        },
        //action组合：异步回调-先执行的必须返回promise
        actionA2Add ({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment', {amount: 2})
                    resolve()
                }, 1000)
            })
        },
        async actionA ({commit}) {
            commit('increment2')
        },
        async actionB ({dispatch, commit}) {
            await dispatch('actionA'); // 等待 actionA 完成
            dispatch('decrementAsync')
        }
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: {App},
    template: '<App/>'
})
