<template>
  <div class="form-panel__part">
    <div class="form-panel__part__form-title">運送方式</div>
    <div class="form-panel__part__content delivery-content">
      <div
        v-for="delivery in deliveries"
        :key="delivery.id"
        class="form-panel__part__content__form-row delivery-wrapper"
      >
        <input
          type="radio"
          name="deliveryType"
          :id="delivery.type"
          :class="['input-delivery', delivery.type]"
          :data-price="delivery.price"
          :value="delivery.type"
          v-model="formData.deliveryType"
          required
        />
        <label>
          <p class="input-delivery__title">{{ delivery.title }}</p>
          <p class="input-delivery__time">{{ delivery.info }}</p>
        </label>
        <label class="input-delivery__price">{{ delivery.price }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { initFormData } from './../utils/mixins'
export default {
  name: 'PurchaseDelivery',
  mixins: [initFormData],
  props: {
    deliveries: {
      type: Array,
      required: true,
    },
  },
}
</script>
