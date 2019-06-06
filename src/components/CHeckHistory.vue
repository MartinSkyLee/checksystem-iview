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
      childId: "2-2",
      childName: "进退统计",
      parentName: "统计分析"
    }
  },
  mounted() {
    this.$emit(
      "listenToParentEvent",
      this.childName,
      this.parentName,
      this.childId
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
