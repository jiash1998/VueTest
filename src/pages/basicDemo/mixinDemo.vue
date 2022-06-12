<template >
  <div>
    <h5>混入</h5>
  </div>
</template>
<script>
import myMixins from "../../util/mix.js";
import myExtends from "../../util/extend.js";

export default {
  name: "mixinDemo",
  mixins: [myMixins],
  extends: myExtends,
  data() {
    return {
      // str: "demo",
    };
  },
  created() {},
  mounted() {
    console.log("Demo");
    this.hello();
    console.log("num", this.str);
  },
  methods: {
    // hello() {
    //   console.log("hello myself!");
    // },
  },
};
</script>
<style lang="">
</style>