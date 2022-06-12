<template>
  <div>
    <h1>内置指令</h1>
    <p>{{ name }}</p>
    <p v-text="name">123</p>
    <h1>自定义指令</h1>
    <!-- <input type="text" v-focus /> -->
    <p v-test:name="name"></p>
    <el-button type="primary" @click="changeName">改变name</el-button>
  </div>
</template>
<script>
export default {
  name: "directiveDemo",
  data() {
    return {
      name: "directives",
    };
  },
  methods: {
    changeName() {
      this.name = "name";
    },
  },
  directives: {
    test: {
      // 指令的定义
      bind: function (el, binding) {
        console.log("bind", el, binding.value);
      },
      inserted(el, binding) {
        console.log("inserted", el, binding.value);
      },
      update(el, binding) {
        console.log("update", el, binding.value);
      },
    },
  },
};
</script>
<style lang="">
</style>