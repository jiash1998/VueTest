<template>
  <div>
    <h1>EventListener</h1>
    <el-button type="primary" @click="clickMeth($event)">传入$event</el-button>
    <div class="stop1" @key.right="stop1">
      外层
      <div class="stop2" @keyup.tab="stop2">
        中层<el-button type="primary" @click="stop3">内层</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "eventListener",
  mounted() {},
  methods: {
    clickMeth(e) {
      console.log(e);
    },
    stop1() {
      console.log("外层");
    },
    stop2() {
      console.log("中层");
    },
    stop3() {
      console.log("内层");
    },
  },
};
</script>

<style>
.stop1 {
  background-color: yellow;
}

.stop2 {
  background-color: blue;
}
</style>