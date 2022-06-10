<template>
  <div>
    <!-- props -->
    <el-button type="primary">props父子通信</el-button>
    <comProps :toSonProps="propslist" />
    <!-- $emit -->
    <el-button type="primary">$emit子父通信</el-button>
    <comEmit @getSonEmit="demo" />
  </div>
</template>
<script>
import comProps from "../../components/comProps.vue";
import comEmit from "../../components/comEmit.vue";

export default {
  name: "comInfo",
  components: { comProps, comEmit },
  data() {
    return {
      propslist: [1, 2, 3],
    };
  },
  mounted() {},
  methods: {
    getEmitData() {},
    demo() {
      console.log("val");
    },
  },
};
</script>
<style lang="">
</style>