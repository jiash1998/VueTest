<template>
  <div>
    <h1>条件渲染</h1>
    <el-button type="info" @click="changeNum">改变渲染条件</el-button>
    <template v-if="num === 1"><p>1</p> </template>
    <template v-else-if="num === 2"><p>2</p> </template>
    <template v-else-if="num === 3"><p>3</p> </template>
    <template v-else><p>4</p></template>
  </div>
</template>

<script>
export default {
  name: "condListRender",
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    changeNum() {
      this.num = Math.ceil(Math.random() * 4);
      console.log(this.num);
    },
  },
};
</script>

<style>
</style>