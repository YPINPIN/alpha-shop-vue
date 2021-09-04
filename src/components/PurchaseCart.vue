<template>
  <section class="cart">
    <div class="cart-panel">
      <div class="cart-panel__title">購物籃</div>
      <div class="cart-panel__product-list">
        <div
          v-for="product in cartProducts"
          :key="product.productId"
          class="cart-panel__product-list__product d-flex justify-content-between align-items-center"
        >
          <div class="cart-panel__product-list__product__left-content">
            <img
              :src="assetImg(product.photo)"
              alt="product-photo"
              class="cart-panel__product-list__product__left-content__photo"
            />
          </div>
          <div class="cart-panel__product-list__product__right-content">
            <div
              class="cart-panel__product-list__product__right-content__info-wrapper"
            >
              <div
                class="cart-panel__product-list__product__right-content__info-wrapper__title"
              >
                {{ product.title }}
              </div>
              <div
                class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper"
              >
                <button
                  class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper__btn-minus"
                  id="btn-minus"
                  data-index="0"
                  @click.stop.prevent="
                    handleCountClick(product.productId, false)
                  "
                >
                  -
                </button>
                <span
                  class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper__count product-count"
                  >{{ product.num }}</span
                >
                <button
                  class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper__btn-add"
                  id="btn-add"
                  data-index="0"
                  @click.stop.prevent="
                    handleCountClick(product.productId, true)
                  "
                >
                  +
                </button>
              </div>
            </div>
            <div
              class="cart-panel__product-list__product__right-content__price"
            >
              ${{ product.price }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart-panel__delivery d-flex justify-content-between align-items-center"
      >
        <p class="cart-panel__delivery__title">運費</p>
        <p class="cart-panel__delivery__value">{{ deliveryPrice }}</p>
      </div>
      <div
        class="cart-panel__total d-flex justify-content-between align-items-center"
      >
        <p class="cart-panel__total__title">小計</p>
        <p class="cart-panel__total__value">${{ total }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { assetImgMethod } from './../utils/mixins'
export default {
  mixins: [assetImgMethod],
  props: {
    cartProducts: {
      type: Array,
      required: true,
    },
    deliveryPrice: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  methods: {
    handleCountClick(productId, bIsAdd) {
      this.$emit('after-count-click', productId, bIsAdd)
    },
  },
}
</script>
