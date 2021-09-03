<template>
  <section class="btn-control">
    <div
      class="btn-control__panel d-flex justify-content-between align-items-center"
    >
      <button
        :class="['btn-control__btn-prev', { disabled: currentStep === 0 }]"
        id="btn-prev"
        @click.stop.prevent="handleButtonClick"
      >
        上一步
      </button>
      <button
        :class="['btn-control__btn-next', { active: true }]"
        id="btn-next"
        @click.stop.prevent="handleButtonClick"
      >
        下一步
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleButtonClick(event) {
      const target = event.target
      this.$emit('after-button-click', target)
    },
  },
}
</script>
