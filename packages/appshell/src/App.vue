<template>
  <div>
    <h1>Vue App Shell</h1>
    <div ref="mining"></div>
  </div>
</template>


<script>
export default {
  mounted() {
    import("app1/Mining").then((module) => {
      const Mining = module.default;

      new Mining({
        target: this.$refs.mining,
      });
    });
  },
};
</script>
