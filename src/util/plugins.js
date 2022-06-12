export default {
    install(Vue, options) {
        Vue.prototype.$pluginDemo = "plugins";
        Vue.mixin({
            data() {
                return {
                    pluginNum: 123
                }
            },
        })
    }
}