<template>
  <div>
    <h1>过滤器</h1>
    <p>{{ list | changeNum1 }}</p>
    <p>{{ list | changeNum1 | changeNum2 }}</p>
  </div>
</template>

<script>
export default {
  name: "filterDemo",
  data() {
    return {
      list: [1, 2, 3],
    };
  },
  filters: {
    changeNum1(val) {
      console.log(val);
      return val.join("-");
    },
    changeNum2(val) {
      console.log(val);
      return val + "-4";
    },
  },
};
</script>

<style>
</style>