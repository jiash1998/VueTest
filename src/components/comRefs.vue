<template>
  <div>
    <p>ref/$refs组件通信</p>
    {{ refsList }}
  </div>
</template>
<script>
export default {
  name: "comRefs",
  props: {
    toSonProps: { type: Array },
  },
  data() {
    return {
      refsList: [3, 3, 3],
    };
  },
  methods: {
    toFather() {
      console.log("toFather");
    },
  },
};
</script>
<style lang="">
</style>