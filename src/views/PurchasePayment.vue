<template>
  <div class="form-panel__part">
    <div class="form-panel__part__form-title">付款資訊</div>
    <div class="form-panel__part__content">
      <div class="form-panel__part__content__form-row card-name-wrapper">
        <div class="form-panel__part__content__form-row__input card-name">
          <label>持卡人姓名</label>
          <input
            type="text"
            name="cardName"
            v-model="formData.cardName"
            id="card-name"
            placeholder="John Doe"
            required
          />
        </div>
      </div>
      <div class="form-panel__part__content__form-row card-number-wrapper">
        <div class="form-panel__part__content__form-row__input card-number">
          <label>卡號</label>
          <input
            type="text"
            pattern="\d*"
            maxlength="16"
            name="cardNumber"
            v-model="formData.cardNumber"
            id="card-number"
            placeholder="1111222233334444"
            required
          />
        </div>
      </div>
      <div class="form-panel__part__content__form-row card-code-wrapper">
        <div
          class="
                    form-panel__part__content__form-row__input
                    card-expiration
                  "
        >
          <label>有效期限</label>
          <input
            type="text"
            name="cardExpiration"
            v-model="formData.cardExpiration"
            id="card-expiration"
            placeholder="MM/YY"
            required
          />
        </div>
        <div class="form-panel__part__content__form-row__input card-code">
          <label>CVC / CCV </label>
          <input
            type="text"
            pattern="\d*"
            maxlength="3"
            name="cardCode"
            v-model="formData.cardCode"
            id="card-code"
            placeholder="123"
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initFormData } from './../utils/mixins'
export default {
  name: 'PurchasePayment',
  mixins: [initFormData],
}
</script>
