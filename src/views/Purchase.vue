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
      @after-button-click="afterButtonClick"
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
import PurchaseStepper from '../components/PurchaseStepper.vue'
import PurchaseCart from '../components/PurchaseCart.vue'
import PurchaseBtnControl from '../components/PurchaseBtnControl.vue'
import Modal from '../components/Modal.vue'

// 購物車商品資料
const dummyCartData = {
  // 商品
  products: [
    {
      productId: 1,
      photo: 'cart/Photo1@2x.png',
      title: '破壞補丁修身牛仔褲',
      price: 3999,
      num: 1,
    },
    {
      productId: 2,
      photo: 'cart/Photo2@2x.png',
      title: '刷色直筒牛仔褲',
      price: 1299,
      num: 1,
    },
  ],
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
      // 地址表單選單資料
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
      this.cartProducts = [...dummyCartData.products]
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
    // 步驟按鈕控制
    afterButtonClick(target) {
      if (target.matches('#btn-next')) {
        // 表單送出
        this.$refs.formSubmit.click()
      } else if (target.matches('#btn-prev')) {
        // 上一步驟
        this.currentStep--
      }
    },
    // 表單成功送出、紀錄更新
    submitForm(e) {
      const form = e.target
      const data = new FormData(form)
      // 紀錄表單資料
      for (let [key, value] of data.entries()) {
        this.formData[key] = value
      }

      const steps = this.stepper.steps
      this.currentStep++
      if (this.currentStep >= steps.length) {
        this.currentStep = steps.length - 1
        // 顯示購物車結果
        this.modalShow = !this.modalShow
      }
    },
  },
  watch: {
    formData: {
      handler: function() {
        // TODO:儲存表單資料 localStorage
        // console.log('saveformData')
      },
      deep: true,
    },
    currentStep() {
      // console.log('currentStep change: ', this.currentStep)
      const steps = this.stepper.steps
      if (this.currentStep < steps.length) {
        // 切換路由
        this.$router.push(steps[this.currentStep].path)
      }
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
