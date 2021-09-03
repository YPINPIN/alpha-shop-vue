<template>
  <div class="container">
    <!-- stepper -->
    <PurchaseStepper :stepper="stepper" />
    <!-- form-panel -->
    <section class="form-panel">
      <form id="form">
        <!-- address -->
        <!-- delivery -->
        <!-- payment -->
        <router-view />
      </form>
    </section>
    <!-- cart -->
    <!-- btn-control -->
  </div>
</template>

<script>
import PurchaseStepper from '../components/PurchaseStepper.vue'

export default {
  name: 'Purchase',
  components: {
    PurchaseStepper,
  },
  data() {
    return {
      stepper: {
        // 步驟名稱
        steps: ['寄送地址', '運送方式', '付款資訊'],
        // 步驟紀錄
        currentStep: 0,
      },
    }
  },
}
</script>
