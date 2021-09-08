<template>
  <section class="btn-control">
    <div
      class="btn-control__panel d-flex justify-content-between align-items-center"
    >
      <button
        :class="['btn-control__btn-prev', { disabled: currentStep === 0 }]"
        id="btn-prev"
        @click.stop.prevent="handlePrevButtonClick"
      >
        上一步
      </button>
      <button
        :class="['btn-control__btn-next', { active: true }]"
        id="btn-next"
        @click.stop.prevent="handleNextButtonClick"
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
    handlePrevButtonClick() {
      this.$emit('prev-button-click')
    },
    handleNextButtonClick() {
      this.$emit('next-button-click')
    },
  },
}
</script>
