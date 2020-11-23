<template>
  <div class="new-employee-modal-container">
    <Modal :onClose="onClose">
      <div slot="header">New Employee</div>
      <div>
        <div class="form-group">
          <label>Name</label>
          <input v-model="employee.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Employee's Name">
        </div>
      </div>
      <div slot="footer">
        <button class="btn btn-primary" @click="onAddEmployee">
          Create
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue';

export default {
  props: ['onClose', 'onSubmit'],
  components: {
    Modal,
  },
  data() {
    return {
      employee: {
        name: '',
      },
    };
  },
  methods: {
    onAddEmployee() {
      this.onSubmit(this.employee);
    },
  }
}
</script>

<style lang="scss">

</style>