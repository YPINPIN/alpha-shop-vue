<template>
  <div class="container">
    <!-- stepper -->
    <PurchaseStepper :stepper="stepper" :currentStep="currentStep" />
    <!-- form-panel -->
    <section class="form-panel">
      <form id="form">
        <!-- address, delivery, payment -->
        <router-view />
      </form>
    </section>
    <!-- cart -->
    <PurchaseCart />
    <!-- btn-control -->
    <PurchaseBtnControl
      :currentStep="currentStep"
      @after-button-click="afterButtonClick"
    />
  </div>
</template>

<script>
import PurchaseStepper from '../components/PurchaseStepper.vue'
import PurchaseCart from '../components/PurchaseCart.vue'
import PurchaseBtnControl from '../components/PurchaseBtnControl.vue'

export default {
  name: 'Purchase',
  components: {
    PurchaseStepper,
    PurchaseCart,
    PurchaseBtnControl,
  },
  data() {
    return {
      stepper: {
        // 步驟名稱
        steps: [
          { title: '寄送地址', path: { name: 'purchase-address' } },
          { title: '運送方式', path: { name: 'purchase-delivery' } },
          { title: '付款資訊', path: { name: 'purchase-payment' } },
        ],
      },
      // 步驟紀錄
      currentStep: 0,
    }
  },
  methods: {
    afterButtonClick(target) {
      console.log('afterButtonClick')
      const steps = this.stepper.steps
      if (target.matches('#btn-next') && this.currentStep !== 2) {
        this.$router.push(steps[this.currentStep + 1].path)
      } else if (target.matches('#btn-prev')) {
        this.$router.push(steps[this.currentStep - 1].path)
      }
    },
  },
  watch: {
    $route(to) {
      const currentStep = this.stepper.steps.findIndex(
        (step) => step.path.name === to.name
      )
      this.currentStep = currentStep != -1 ? currentStep : 0
    },
  },
}
</script>
