<template>
  <div class="container">
    <!-- stepper -->
    <PurchaseStepper :stepper="stepper" :currentStep="currentStep" />
    <!-- form-panel -->
    <section class="form-panel">
      <form id="form" @submit.stop.prevent="submitForm">
        <!-- address -->
        <router-view
          name="address"
          :address="address"
          :initial-form-data="formData"
        />
        <!-- delivery -->
        <router-view
          name="delivery"
          :deliveries="deliveries"
          :initial-form-data="formData"
          @after-delivery-select="afterDeliverySelect"
        />
        <!-- payment -->
        <router-view name="payment" :initial-form-data="formData" />
        <button ref="formSubmit" type="submit" class="d-none"></button>
      </form>
    </section>
    <!-- cart -->
    <PurchaseCart
      :cart-products="cartProducts"
      :delivery-price="deliveryPrice"
      :total="total"
      @after-count-click="afterCountClick"
    />
    <!-- btn-control -->
    <PurchaseBtnControl
      :currentStep="currentStep"
      @prev-button-click="prevButtonClick"
      @next-button-click="nextButtonClick"
    />
    <!-- modal -->
    <Modal title="結帳" v-show="modalShow" @close="modalShow = false">
      <template v-slot:body>
        <ul class="info">
          <li v-for="(key, index) in Object.keys(formData)" :key="index">
            {{ key }} : {{ formData[key] }}
          </li>
          <hr />
          <li>cartTotal : {{ cartTotal }}</li>
          <li>deliveryValue : {{ deliveryValue }}</li>
          <li>total : {{ total }}</li>
        </ul>
        <div class="button-group">
          <button class="btnDone" @click="modalShow = !modalShow">
            確認下單
          </button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import {
  dummyCartData,
  stepData,
  addressFormData,
  deliveries,
} from './../utils/purchaseData'
import PurchaseStepper from '../components/PurchaseStepper.vue'
import PurchaseCart from '../components/PurchaseCart.vue'
import PurchaseBtnControl from '../components/PurchaseBtnControl.vue'
import Modal from '../components/Modal.vue'

// localStorage
const storage = {
  setFormData(data) {
    localStorage.setItem('formData', JSON.stringify(data))
  },
  getFormData() {
    return (
      JSON.parse(localStorage.getItem('formData')) || {
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
      }
    )
  },
  setCurrentStep(step) {
    localStorage.setItem('currentStep', JSON.stringify(step))
  },
  getCurrentStep() {
    return JSON.parse(localStorage.getItem('currentStep')) || 0
  },
  setCompleteStep(step) {
    localStorage.setItem('completeStep', JSON.stringify(step))
  },
  getCompleteStep() {
    return JSON.parse(localStorage.getItem('completeStep')) || 0
  },
  setCartProducts(data) {
    localStorage.setItem('cartProducts', JSON.stringify(data))
  },
  getCartProducts() {
    return (
      JSON.parse(localStorage.getItem('cartProducts')) || [
        ...dummyCartData.products,
      ]
    )
  },
}

export default {
  name: 'Purchase',
  components: {
    PurchaseStepper,
    PurchaseCart,
    PurchaseBtnControl,
    Modal,
  },
  created() {
    this.fetchCartData()
    // 為了解決從http://localhost:8080/#/purchase/payment 直接輸入 http://localhost:8080/ 跳轉
    // 不會觸發checkRouteStep，導致currentStep錯誤，直接created呼叫一次
    if (this.$route.name === 'purchase-address') {
      this.checkRouteStep(this.$route, { name: 'purchase-address' })
    }
  },
  data() {
    return {
      stepper: stepData,
      // 地址表單選單資料
      address: addressFormData,
      // 運送方式
      deliveries: deliveries,
      // 當前步驟紀錄
      currentStep: storage.getCurrentStep(),
      // 已完成步驟紀錄
      completeStep: storage.getCompleteStep(),
      // 表單資料
      formData: storage.getFormData(),
      // 購物車商品資料
      cartProducts: [],
      // 結帳資訊顯示開關
      modalShow: false,
    }
  },
  computed: {
    // 運費價格文字
    deliveryPrice() {
      const delivery = this.getDelivery(this.formData.deliveryType)
      return delivery ? delivery.price : '免費'
    },
    // 運費
    deliveryValue() {
      const delivery = this.getDelivery(this.formData.deliveryType)
      return delivery ? delivery.value : 0
    },
    // 購物總費用
    cartTotal() {
      let cartSum = 0
      this.cartProducts.forEach((product) => {
        cartSum += product.price * product.num
      })
      return cartSum
    },
    // 總計
    total() {
      return this.cartTotal + this.deliveryValue
    },
  },
  methods: {
    // 取得購物車商品資料
    fetchCartData() {
      this.cartProducts = storage.getCartProducts()
    },
    // 取得運費資料
    getDelivery(type) {
      return this.deliveries.find((delivery) => delivery.type === type)
    },
    // 更新選擇的貨運方式
    afterDeliverySelect(type) {
      this.formData.deliveryType = type
    },
    // 購物車數量控制
    afterCountClick(productId, bIsAdd) {
      const product = this.cartProducts.find(
        (product) => product.productId === productId
      )
      if (bIsAdd) {
        product.num++
      } else if (product.num > 0) {
        product.num--
      }
    },
    // 步驟按鈕控制 - 上一步驟
    prevButtonClick() {
      if (this.currentStep > 0) {
        // 更新當前步驟
        this.currentStep--
        this.checkCurrentStep()
      }
    },
    // 步驟按鈕控制 - 下一步驟
    nextButtonClick() {
      // 表單送出
      this.$refs.formSubmit.click()
    },
    // 表單成功送出、紀錄更新
    submitForm(e) {
      const form = e.target
      const data = new FormData(form)
      // 紀錄表單資料
      for (let [key, value] of data.entries()) {
        this.formData[key] = value
      }

      // 更新當前步驟
      this.currentStep++
      if (this.currentStep > this.completeStep) {
        // 更新已完成步驟
        this.completeStep = this.currentStep
      }
      this.checkCurrentStep()
    },
    // 檢查步驟進度
    checkCurrentStep() {
      const steps = this.stepper.steps
      if (this.currentStep >= steps.length) {
        this.currentStep = steps.length - 1
        // 顯示購物車結果
        this.modalShow = !this.modalShow
      } else {
        // 切換路由
        this.$router.push(steps[this.currentStep].path)
      }
    },
    // 檢查路由步驟
    checkRouteStep(to, from) {
      // 取得路由對應步驟
      const routeStep = this.stepper.steps.findIndex(
        (step) => step.path.name === to.name
      )
      if (routeStep <= this.completeStep) {
        // 步驟已完成，更新目前步驟
        this.currentStep = routeStep != -1 ? routeStep : 0
      } else {
        // 步驟尚未完成，返回
        alert('資料尚未完成')
        this.$router.push(from)
      }
    },
  },
  watch: {
    $route(to, from) {
      this.checkRouteStep(to, from)
    },
    formData: {
      handler: function() {
        // 儲存表單資料
        storage.setFormData(this.formData)
      },
      deep: true,
    },
    currentStep() {
      // 儲存當前步驟
      storage.setCurrentStep(this.currentStep)
    },
    completeStep() {
      // 儲存已完成步驟
      storage.setCompleteStep(this.completeStep)
    },
    cartProducts: {
      handler: function() {
        // 儲存購物車商品資料
        storage.setCartProducts(this.cartProducts)
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
// Modal
.info {
  padding: 0 20px;
  margin-bottom: 20px;
}
.button-group {
  text-align: center;
}
.btnDone {
  text-align: center;
  width: 156px;
  height: 46px;
  border-radius: 8px;
  color: $white;
  background-color: $btn-control-next-color;
}
</style>
