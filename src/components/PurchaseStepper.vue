<template>
  <section class="stepper">
    <div class="stepper__title">結帳</div>
    <div class="stepper__panel">
      <div
        v-for="(step, index) in stepper.steps"
        :key="index"
        :class="[
          'stepper__step',
          { active: currentStep >= index },
          { checked: currentStep > index },
        ]"
      >
        <div class="stepper__step__circle"></div>
        <span class="stepper__step__label">{{ step.title }}</span>
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
    currentStep: {
      type: Number,
      required: true,
    },
  },
}
</script>
