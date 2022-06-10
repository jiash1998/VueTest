<template>
  <div>
    <h1>watchDemo</h1>
    <el-button type="primary" @click="modify">改变 obj 一层属性</el-button>
    <el-button type="primary">改变 obj 二层属性</el-button>
    <p>{{ obj }}</p>
  </div>
</template>

<script>
export default {
  name: "watchDemo",
  data() {
    return {
      obj: { a: 1, b: { c: 2 }, d: 3 },
    };
  },
  watch: {
    obj: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      deep: true,
    },
  },
  methods: {
    modify() {
      this.obj["a"] = 10;
      //   this.$set(this.obj, "a", 10);
    },
  },
};
</script>

<style>
</style>