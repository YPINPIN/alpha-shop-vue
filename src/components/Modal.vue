<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal-content" @click.stop="">
        <!-- header -->
        <div class="modal-header">
          <span class="modal-title"> {{ title }} </span>
          <span class="button-close" @click="$emit('close')">×</span>
        </div>
        <!-- body -->
        <div class="modal-body">
          <slot name="body">Default body</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
//animations
.modal-enter,
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}
.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease;
  right: 0;
  z-index: 1200;
  background-color: rgba(00, 00, 00, 0.48);
}
.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 80%;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.2s ease;
  border-radius: 8px;
  z-index: 1201;
  overflow: auto;
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
a.another-modal {
  color: #000;
  border-bottom: 1px solid #000;
}
@media screen and (min-width: 768px) {
  .modal-content {
    min-width: 500px;
  }
}
</style>
