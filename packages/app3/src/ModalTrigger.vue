<template>
  <div>
    <button class="button outline primary" @click="openModal">Modal Trigger in Vue - App3</button>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      const modalTriggerEvent = new CustomEvent("modal-trigger", {
        detail: {
          active: true,
        },
      });

      document.dispatchEvent(modalTriggerEvent);
    },
  },
};
</script>