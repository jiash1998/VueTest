<template>
  <div>
    <p>$emit组件通信</p>
    <button @click="toFather">绑定emit</button>
  </div>
</template>
<script>
export default {
  name: "comEmit",
  // props: ["toSonProps"],
  props: {
    toSonProps: { type: Array },
  },
  data() {
    return {
      emitList: [1, 2, 3],
    };
  },
  methods: {
    toFather() {
      console.log("toFather");

      this.$emit("getSonEmit", this.emitList);
    },
  },
};
</script>
<style lang="">
</style>