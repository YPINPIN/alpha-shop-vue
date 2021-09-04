<template>
  <div class="container">
    <!-- stepper -->
    <PurchaseStepper :stepper="stepper" :currentStep="currentStep" />
    <!-- form-panel -->
    <section class="form-panel">
      <form id="form" @submit.stop.prevent="submitForm">
        <!-- address, delivery, payment -->
        <router-view
          name="address"
          :address="address"
          :initial-form-data="formData"
        />
        <router-view
          name="delivery"
          :deliveries="deliveries"
          :initial-form-data="formData"
        />
        <router-view name="payment" :initial-form-data="formData" />
        <button ref="formSubmit" type="submit" class="d-none"></button>
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
      address: {
        // 稱謂
        salutations: [
          { id: 1, value: 'Mr.', title: '先生' },
          { id: 2, value: 'Ms.', title: '女士' },
          { id: 3, value: 'other', title: '不透漏' },
        ],
        // 縣市
        cities: [
          {
            countycode: 'A',
            countyname: '臺北市',
            countycode01: '63000',
          },
          {
            countycode: 'B',
            countyname: '臺中市',
            countycode01: '66000',
          },
          {
            countycode: 'C',
            countyname: '基隆市',
            countycode01: '10017',
          },
          {
            countycode: 'D',
            countyname: '臺南市',
            countycode01: '67000',
          },
          {
            countycode: 'E',
            countyname: '高雄市',
            countycode01: '64000',
          },
          {
            countycode: 'F',
            countyname: '新北市',
            countycode01: '65000',
          },
          {
            countycode: 'G',
            countyname: '宜蘭縣',
            countycode01: '10002',
          },
          {
            countycode: 'H',
            countyname: '桃園市',
            countycode01: '68000',
          },
          {
            countycode: 'I',
            countyname: '嘉義市',
            countycode01: '10020',
          },
          {
            countycode: 'J',
            countyname: '新竹縣',
            countycode01: '10004',
          },
          {
            countycode: 'K',
            countyname: '苗栗縣',
            countycode01: '10005',
          },
          {
            countycode: 'M',
            countyname: '南投縣',
            countycode01: '10008',
          },
          {
            countycode: 'N',
            countyname: '彰化縣',
            countycode01: '10007',
          },
          {
            countycode: 'O',
            countyname: '新竹市',
            countycode01: '10018',
          },
          {
            countycode: 'P',
            countyname: '雲林縣',
            countycode01: '10009',
          },
          {
            countycode: 'Q',
            countyname: '嘉義縣',
            countycode01: '10010',
          },
          {
            countycode: 'T',
            countyname: '屏東縣',
            countycode01: '10013',
          },
          {
            countycode: 'U',
            countyname: '花蓮縣',
            countycode01: '10015',
          },
          {
            countycode: 'V',
            countyname: '臺東縣',
            countycode01: '10014',
          },
          {
            countycode: 'W',
            countyname: '金門縣',
            countycode01: '09020',
          },
          {
            countycode: 'X',
            countyname: '澎湖縣',
            countycode01: '10016',
          },
          {
            countycode: 'Z',
            countyname: '連江縣',
            countycode01: '09007',
          },
        ],
      },
      // 運送方式
      deliveries: [
        {
          id: 1,
          type: 'delivery-standard',
          title: '標準運送',
          info: '約 3~7 個工作天',
          price: '免費',
          value: 0,
        },
        {
          id: 2,
          type: 'delivery-dhl',
          title: 'DHL 貨運',
          info: '48 小時內送達',
          price: '$500',
          value: 500,
        },
      ],
      // 表單資料
      formData: {
        salutation: '',
        name: '',
        phone: '',
        mail: '',
        city: '',
        address: '',
        deliveryType: '',
        cardName: '',
        cardNumber: '',
        cardExpiration: '',
        cardCode: '',
      },
    }
  },
  methods: {
    afterButtonClick(target) {
      const steps = this.stepper.steps
      if (target.matches('#btn-next')) {
        // 表單送出
        this.$refs.formSubmit.click()
      } else if (target.matches('#btn-prev')) {
        this.$router.push(steps[this.currentStep - 1].path)
      }
    },
    submitForm(e) {
      const form = e.target
      const data = new FormData(form)
      // 紀錄表單資料
      for (let [key, value] of data.entries()) {
        console.log(key + ': ' + value)
        this.formData[key] = value
      }

      const steps = this.stepper.steps
      if (this.currentStep < steps.length - 1) {
        // 切換路由
        this.$router.push(steps[this.currentStep + 1].path)
      } else {
        // 顯示購物車結果
        for (let key of Object.keys(this.formData)) {
          console.log(key + ': ' + this.formData[key])
        }
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
