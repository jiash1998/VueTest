<template>
  <div>
    <h1>nextTick</h1>
    <p ref="p1">{{a}}</p>
    <input type="text" ref="input" v-if="showInput" />
    <button @click="handleClick">show</button>
  </div>
</template>
<script>
export default {
  name: "nextTickDemo",
  data() {
    return {
      a: 1,
      b: 2,
      showInput: false,
    };
  },
  methods: {
    handleClick() {
      this.showInput = true;
      // this.$nextTick(function () {
      //   this.$refs.input.focus();
      // });
    },
  },
  created() {
    console.log("created");
    this.$nextTick(function () {
      console.log("created: nexttick1", this.$refs.p1.textContent);
    });

    setTimeout(() => {
      console.log("createde-set");
    }, 0);
  },
  mounted() {
    // console.log("mounted 改变this.a的值");
    // this.a = 2;
    // console.log("mounted 直接获取p1内容", this.$refs.p1.textContent);
    // this.$nextTick().then(() => {
    //   console.log("mounted：nexttick2-1", this.$refs.p1.textContent);
    // });

    // this.a = 10;
    // this.$nextTick().then(() => {
    //   console.log("mounted：nexttick2-2", this.$refs.p1.textContent);
    // });

    // setTimeout(() => {
    //   console.log("mounted-set");
    // }, 0);

    // this.a = 100;
    // this.$nextTick().then(() => {
    //   console.log("mounted：nexttick2-3", this.$refs.p1.textContent);
    // });
  },
  beforeUpdate() {
    console.log("beforeUpdate");
    console.log("beforeUpdate，直接获取p内容", this.$refs.p1.textContent);
    setTimeout(() => {
      console.log("beforeUpdate-set");
    }, 0);
  },
  updated() {
    console.log("updated");
    console.log("updated，直接获取p1内容", this.$refs.p1.textContent);
    // console.log("updated，直接获取p2内容", this.$refs.p2.textContent);
    // console.log(this.b);
    this.$refs.input.focus();
    setTimeout(() => {
      console.log("updated-set");
    }, 0);
  },
};
</script>
<style lang="">
</style>