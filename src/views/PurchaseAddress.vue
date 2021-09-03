<template>
  <div class="form-panel__part">
    <div class="form-panel__part__form-title">寄送地址</div>
    <div class="form-panel__part__content">
      <div class="form-panel__part__content__form-row name-wrapper">
        <div class="form-panel__part__content__form-row__input appellation">
          <label>稱謂</label>
          <div class="select-wrapper">
            <select name="appellation" id="appellation" required>
              <option value="Mr." selected>先生</option>
              <option value="Ms.">女士</option>
              <option value="other">不透漏</option>
            </select>
          </div>
        </div>
        <div class="form-panel__part__content__form-row__input name">
          <label>姓名</label>
          <input
            type="text"
            name="name"
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
            <select name="city" id="city" required>
              <option value="" disabled selected>請選擇縣市</option>
              <option value="city">縣市</option>
            </select>
          </div>
        </div>
        <div class="form-panel__part__content__form-row__input address">
          <label>地址</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="請輸入地址"
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>
