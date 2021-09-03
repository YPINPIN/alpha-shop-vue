<template>
  <div class="form-panel__part">
    <div class="form-panel__part__form-title">付款資訊</div>
    <div class="form-panel__part__content">
      <div class="form-panel__part__content__form-row card-name-wrapper">
        <div class="form-panel__part__content__form-row__input card-name">
          <label>持卡人姓名</label>
          <input
            type="text"
            name="card-name"
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
            name="card-number"
            id="card-number"
            placeholder="1111 2222 3333 4444"
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
            name="card-expiration"
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
            name="card-code"
            id="card-code"
            placeholder="123"
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>
