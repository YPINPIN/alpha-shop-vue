<template>
  <div class="form-panel__part">
    <div class="form-panel__part__form-title">寄送地址</div>
    <div class="form-panel__part__content">
      <div class="form-panel__part__content__form-row name-wrapper">
        <div class="form-panel__part__content__form-row__input salutation">
          <label>稱謂</label>
          <div class="select-wrapper">
            <select
              name="salutation"
              v-model="formData.salutation"
              id="salutation"
              required
            >
              <option value="" disabled selected>請選擇稱謂</option>
              <option
                v-for="salutation in address.salutations"
                :key="salutation.id"
                :value="salutation.value"
                >{{ salutation.title }}</option
              >
            </select>
          </div>
        </div>
        <div class="form-panel__part__content__form-row__input name">
          <label>姓名</label>
          <input
            type="text"
            name="name"
            v-model="formData.name"
            id="name"
            placeholder="請輸入姓名"
            required
          />
        </div>
      </div>
      <div class="form-panel__part__content__form-row contact-wrapper">
        <div class="form-panel__part__content__form-row__input phone">
          <label>電話</label>
          <input
            type="tel"
            name="phone"
            v-model="formData.phone"
            id="phone"
            placeholder="請輸入行動電話"
            required
          />
        </div>
        <div class="form-panel__part__content__form-row__input mail">
          <label>Email</label>
          <input
            type="email"
            name="mail"
            v-model="formData.mail"
            id="mail"
            placeholder="請輸入電子郵件"
            required
          />
        </div>
      </div>
      <div class="form-panel__part__content__form-row address-wrapper">
        <div class="form-panel__part__content__form-row__input city">
          <label>縣市</label>
          <div class="select-wrapper">
            <select name="city" v-model="formData.city" id="city" required>
              <option value="" disabled selected>請選擇縣市</option>
              <option
                v-for="city in address.cities"
                :key="city.countycode01"
                :value="city.countyname"
                >{{ city.countyname }}</option
              >
            </select>
          </div>
        </div>
        <div class="form-panel__part__content__form-row__input address">
          <label>地址</label>
          <input
            type="text"
            name="address"
            v-model="formData.address"
            id="address"
            placeholder="請輸入地址"
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
  name: 'PurchaseAddress',
  mixins: [initFormData],
  props: {
    address: {
      type: Object,
      required: true,
    },
  },
}
</script>
