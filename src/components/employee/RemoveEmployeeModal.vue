<template>
  <div class="edit-employee-modal-container">
    <Modal :onClose="onClose">
      <div slot="header">Remove {{ employee.name }}</div>
      <div>
        Are you sure you want to remove this employee?
      </div>
      <div slot="footer">
        <button class="btn btn-link text-primary" @click="onClose">
          Cancel
        </button>
        <button class="btn btn-primary" @click="onClickSubmit">
          Remove
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue';

export default {
  props: ['onClose', 'onSubmit', 'employeeData'],
  components: {
    Modal,
  },
  data() {
    return {
      employee: {},
    };
  },
  created() {
    this.employee = this.employeeData;
  },
  methods: {
    onClickSubmit() {
      this.onSubmit();
    },
  }
}
</script>

<style lang="scss">

</style>