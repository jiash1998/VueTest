var myMixin = {
    data() {
        return {
            str: "mix"
        }
    },
    mounted: function () {
        console.log("mixins");
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!')
        }
    }
}

export default myMixin;