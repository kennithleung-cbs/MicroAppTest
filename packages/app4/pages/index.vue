<template>
  <div>
    <modal-trigger></modal-trigger>
    <giphy-client></giphy-client>
  </div>
</template>

<script>
import GiphyClient from "../../app3/src/GiphyClient.vue";
import ModalTrigger from "../../app3/src/ModalTrigger.vue";

export default {
  components: { GiphyClient, ModalTrigger },
  name: "IndexPage",
};
</script>
