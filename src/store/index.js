import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//action 拿第一手，再转交给 mutations
const actions = {
    add(context, value) {
        // console.log(context, value);
        context.commit("ADD", value);

    },
    jian(context, value) {
        // console.log(context, value);
        context.commit("JIAN", value);

    },
}

//mutations 拿第二手，进行最终操作
const mutations = {
    ADD(context, value) {
        console.log("enter mutation");

        context.numX += value;
        context.numX2 += value;
        context.numX3 += value;

    },
    JIAN(context, value) {
        console.log("enter mutation", value);

        context.numX -= value;
        context.numX2 -= value;
        context.numX3 -= value;

    }
}

const state = {
    numX: 100,
    numX2: 200,
    numX3: 300
}

const getters = {}

export default new Vuex.Store({
    // ...
    actions,
    mutations,
    state,
    getters
})