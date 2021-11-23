<template>
  <div class="container">
    <h1>Vue App Shell</h1>
    <div ref="header" class="component"></div>
    <div ref="mining" class="component"></div>
    <div ref="footer" class="component"></div>
  </div>
</template>


<script>
import ReactDOM from "react-dom";
import React from "react";

export default {
  mounted() {
    import("app1/Mining").then((module) => {
      const Mining = module.default;

      new Mining({
        target: this.$refs.mining,
      });
    });

    import("app1/Footer").then((module) => {
      const Footer = module.default;

      new Footer({
        target: this.$refs.footer,
      });
    });

    import("app2/Header").then((module) => {
      const Header = module.default;
      ReactDOM.render(React.createElement(Header), this.$refs.header);
    });
  },
};
</script>

<style scoped>
.container, .component {
  padding: 2rem;
  border: 1px solid #000;
  box-sizing: border-box;
}
</style>