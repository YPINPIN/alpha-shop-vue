<template>
  <div class="form-panel__part">
    <div class="form-panel__part__form-title">運送方式</div>
    <div class="form-panel__part__content delivery-content">
      <div class="form-panel__part__content__form-row delivery-wrapper">
        <input
          type="radio"
          name="delivery"
          id="delivery-standard"
          class="input-delivery delivery-standard"
          data-price="免費"
          data-value="0"
        />
        <label>
          <p class="input-delivery__title">標準運送</p>
          <p class="input-delivery__time">約 3~7 個工作天</p>
        </label>
        <label class="input-delivery__price">免費</label>
      </div>
      <div class="form-panel__part__content__form-row delivery-wrapper">
        <input
          type="radio"
          name="delivery"
          id="delivery-dhl"
          class="input-delivery delivery-dhl"
          data-price="$500"
          data-value="500"
        />
        <label>
          <p class="input-delivery__title">DHL 貨運</p>
          <p class="input-delivery__time">48 小時內送達</p>
        </label>
        <label class="input-delivery__price">$500</label>
      </div>
    </div>
  </div>
</template>
