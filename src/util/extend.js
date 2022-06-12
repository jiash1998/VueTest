var myExtends = {
    data() {
        return {
            str: "extends"
        }
    },
    mounted: function () {
        console.log("extends");
    },
    methods: {
        hello: function () {
            console.log('hello from  extends!')
        }
    }
}

export default myExtends;