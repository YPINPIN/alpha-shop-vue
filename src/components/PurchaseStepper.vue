<template>
  <section class="stepper">
    <div class="stepper__title">結帳</div>
    <div class="stepper__panel">
      <div
        v-for="(step, index) in stepper.steps"
        :key="index"
        :class="[
          'stepper__step',
          { active: stepper.currentStep >= index },
          { checked: stepper.currentStep > index },
        ]"
      >
        <div class="stepper__step__circle"></div>
        <span class="stepper__step__label">{{ step }}</span>
        <div class="stepper__step__line"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    stepper: {
      type: Object,
      required: true,
    },
  },
}
</script>
