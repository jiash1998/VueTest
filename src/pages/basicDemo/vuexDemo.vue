<template>
  <div>
    <h1>VueX</h1>
    <el-button type="primary" @click="add(1)"
      >dispatch 提交到 actions</el-button
    >
    <p>{{ $store.state.numX1 }}</p>
    <p>{{ numX1 }}</p>
    <p>{{ $store.state.numX2 }}</p>
    <p>{{ $store.state.numX3 }}</p>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "vuexDemo",
  components: { mapState },
  computed: {
    ...mapState(["numX1", "numX2"]),
  },
  methods: {
    // dispatchDemo() {
    //   this.$store.dispatch("add", 1);
    //   this.$store.commit("ADD", 1);
    // },
    // ...mapActions({ dispatchDemo: "add" }),
    ...mapActions(["add"]),
  },
};
</script>
<style lang="">
</style>