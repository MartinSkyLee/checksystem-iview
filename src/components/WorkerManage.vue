<template>
  <div>
    <h1>{{childName}}</h1>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      childId: "1-1",
      childName: "人员管理",
      parentName: "人员信息",
    };
  },
  mounted() {
    this.$emit(
      "listenToParentEvent",
      this.childName,
      this.parentName,
      this.childId
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
