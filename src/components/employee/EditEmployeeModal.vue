<template>
  <div class="edit-employee-modal-container">
    <Modal :onClose="onClose">
      <div slot="header">Edit Employee</div>
      <div>
        <div class="form-group">
          <label>Name</label>
          <input v-model="employee.name" class="form-control" placeholder="Enter Employee's Name">
        </div>
      </div>
      <div slot="footer">
        <button class="btn btn-primary" @click="onClickSubmit">
          Save
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
      this.onSubmit(this.employee);
    },
  }
}
</script>

<style lang="scss">

</style>