<template>
  <div>
    <el-button type="primary" @click="debounceFun">防抖</el-button>
    <div class="box">
      <div class="vbody" v-for="item in list" :key="item">
        内容区域{{ item }}
      </div>
      <div class="reference" ref="reference"></div>
    </div>
  </div>
</template>
<script>
import { debounce } from "../../util/debounce.js";

export default {
  name: "debounceDemo",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  mounted() {
    console.log(this.$refs.reference);
  },
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
<style>
.reference {
  width: 100%;
  visibility: hidden;
}
.vbody {
  width: 100%;
  height: 200px;
  background-color: red;
  color: aliceblue;
  font-size: 40px;
  text-align: center;
  line-height: 200px;
  margin: 10px 0;
}
</style>