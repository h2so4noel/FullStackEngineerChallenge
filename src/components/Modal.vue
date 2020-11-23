<template>
  <div class="modal-wrapper-background">
    <div class="modal-container">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="header"></slot>
          </h5>
          <button type="button" class="close" @click="onClose">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onClose: {
      type: Function,
      default: () => { console.log('please provide onClose function to modal') },
    }
  },
}
</script>

<style lang="scss">
.modal-wrapper-background {
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.modal-container {
  z-index: 1;
  height: 400px;
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal {
  z-index: 2;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  background-color: white;
}
</style>