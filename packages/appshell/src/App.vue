<template>
  <div class="container">
    <h1>Vue App Shell</h1>

    <div ref="header" class="component"></div>

    <div ref="mining" class="component"></div>

    <div class="component">
      <modal-trigger />
    </div>

    <div ref="modal"></div>

    <div ref="footer" class="component"></div>
    
  </div>
</template>


<script>
import ReactDOM from "react-dom";
import React from "react";

const ModalTrigger = () => import("app3/ModalTrigger");

export default {
  components: {
    ModalTrigger,
  },
  mounted() {
    import("app2/Header").then((module) => {
      const Header = module.default;
      ReactDOM.render(React.createElement(Header), this.$refs.header);
    });

    import("app1/Mining").then((module) => {
      const Mining = module.default;

      new Mining({
        target: this.$refs.mining,
      });
    });

    import("app1/Modal").then((module) => {
      const Modal = module.default;

      new Modal({
        target: this.$refs.modal,
      });
    });

    import("app1/Footer").then((module) => {
      const Footer = module.default;

      new Footer({
        target: this.$refs.footer,
      });
    });
  },
};
</script>

<style scoped>
.container,
.component {
  padding: 2rem;
  border: 1px solid #000;
  box-sizing: border-box;
}
</style>