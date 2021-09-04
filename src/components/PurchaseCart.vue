<template>
  <section class="cart">
    <div class="cart-panel">
      <div class="cart-panel__title">購物籃</div>
      <div class="cart-panel__product-list">
        <!-- 之後可替換程式資料 -->
        <div
          class="cart-panel__product-list__product d-flex justify-content-between align-items-center"
        >
          <div class="cart-panel__product-list__product__left-content">
            <img
              :src="assetImg('cart/Photo1@2x.png')"
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
                破壞補丁修身牛仔褲
              </div>
              <div
                class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper"
              >
                <button
                  class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper__btn-minus"
                  id="btn-minus"
                  data-index="0"
                >
                  -
                </button>
                <span
                  class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper__count product-count"
                  >1</span
                >
                <button
                  class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper__btn-add"
                  id="btn-add"
                  data-index="0"
                >
                  +
                </button>
              </div>
            </div>
            <div
              class="cart-panel__product-list__product__right-content__price"
            >
              $3,999
            </div>
          </div>
        </div>
        <div
          class="cart-panel__product-list__product d-flex justify-content-between align-items-center"
        >
          <div class="cart-panel__product-list__product__left-content">
            <img
              :src="assetImg('cart/Photo2@2x.png')"
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
                刷色直筒牛仔褲
              </div>
              <div
                class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper"
              >
                <button
                  class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper__btn-minus"
                  id="btn-minus"
                  data-index="1"
                >
                  -
                </button>
                <span
                  class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper__count product-count"
                  >1</span
                >
                <button
                  class="cart-panel__product-list__product__right-content__info-wrapper__count-wrapper__btn-add"
                  id="btn-add"
                  data-index="1"
                >
                  +
                </button>
              </div>
            </div>
            <div
              class="cart-panel__product-list__product__right-content__price"
            >
              $1,299
            </div>
          </div>
        </div>
      </div>
      <div
        class="cart-panel__delivery d-flex justify-content-between align-items-center"
      >
        <p class="cart-panel__delivery__title">運費</p>
        <p class="cart-panel__delivery__value">免費</p>
      </div>
      <div
        class="cart-panel__total d-flex justify-content-between align-items-center"
      >
        <p class="cart-panel__total__title">小計</p>
        <p class="cart-panel__total__value">$5298</p>
      </div>
    </div>
  </section>
</template>

<script>
import { assetImgMethod } from './../utils/mixins'
export default {
  mixins: [assetImgMethod],
}
</script>
