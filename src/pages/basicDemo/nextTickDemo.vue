<template>
  <div>
    <h1>nextTick</h1>
    <p ref="p1">{{a}}</p>
  </div>
</template>
<script>
export default {
  name: "nextTickDemo",
  data() {
    return {
      a: 1,
    };
  },
  created() {
    console.log("created");
    this.$nextTick(function () {
      console.log("created: nexttick1", this.$refs.p1.textContent);
    });
  },
  mounted() {
    console.log("mounted 改变this.a的值");
    this.a = 2;
    console.log("mounted 直接获取p内容", this.$refs.p1.textContent);

    this.$nextTick().then(() => {
      console.log("mounted：nexttick2", this.$refs.p1.textContent);
    });
  },
  beforeUpdate() {
    console.log("beforeUpdate");
    console.log("beforeUpdate，直接获取p内容", this.$refs.p1.textContent);
  },
  updated() {
    console.log("updated");
    console.log("updated，直接获取p内容", this.$refs.p1.textContent);
  },
};
</script>
<style lang="">
</style>