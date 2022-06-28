<template>
  <div>
    <el-button type="primary" @click="debounceFun">防抖</el-button>
  </div>
</template>
<script>
import { debounce } from "../../util/debounce.js";

export default {
  name: "debounceDemo",
  methods: {
    fun() {
      console.log("1");
    },
    debounceFun: debounce(
      (vm) => {
        console.log("1");
      },
      2000,
      true
    ),
  },
};
</script>
<style lang="">
</style>