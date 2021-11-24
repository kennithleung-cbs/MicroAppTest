<template>
  <div>
    <modal-trigger />
    <div>
      <giphy-client page="0"/>
    </div>
  </div>
</template>

<script>
import ModalTrigger from "./ModalTrigger.vue"
import GiphyClient from "./GiphyClient.vue"

export default {
  components: {
    ModalTrigger,
    GiphyClient
  },
};
</script>
