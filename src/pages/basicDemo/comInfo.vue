<template>
  <div>
    <!-- props -->
    <el-button type="primary">props父子通信</el-button>
    <comProps :toSonProps="propslist" />
    <!-- $emit -->
    <el-button type="primary">$emit子父通信</el-button>
    <comEmit @getSonEmit="demo" />
    <!-- ref -->
    <el-button type="primary" @click="modifyData">ref/$refs子父通信</el-button>
    <comRefs ref="getSon" />
    <!-- $children /  $parent -->
    <el-button type="primary" @click="sendData"
      >$children/$parent父子通信</el-button
    >
    <comChildParent />
  </div>
</template>
<script>
import comProps from "../../components/comProps.vue";
import comEmit from "../../components/comEmit.vue";
import comRefs from "../../components/comRefs.vue";
import comChildParent from "../../components/comChildParent.vue";

export default {
  name: "comInfo",
  components: { comProps, comEmit, comRefs, comChildParent },
  data() {
    return {
      propslist: [1, 2, 3],
    };
  },
  mounted() {},
  methods: {
    //emit
    demo(val) {
      console.log(val);
    },
    //ref
    modifyData() {
      this.$refs.getSon.refsList.push(4);
    },
    //children/parent
    sendData() {
      console.log(this.$children[7].test);
    },
  },
};
</script>
<style lang="">
</style>