<template>
  <div>
    <h1>computedDemo</h1>
    <el-button type="primary" @click="changeNum">改变num1的值</el-button>
    <p>comNum1：{{ comNum1 }}</p>
    <p>comNum2：{{ comNum2 }}</p>
  </div>
</template>

<script>
export default {
  name: "computedDemo",
  data() {
    return {
      num1: 123,
      num2: 1,
    };
  },
  computed: {
    comNum1() {
      return this.num1 * 100;
    },
    comNum2: {
      get() {
        return (this.num2 += 1);
      },
      set(val) {
        console.log(val);
        this.num2 += val;
      },
    },
  },
  methods: {
    changeNum() {
      // this.num1 = 321;
      this.comNum2 = 1;
    },
  },
};
</script>

<style>
</style>