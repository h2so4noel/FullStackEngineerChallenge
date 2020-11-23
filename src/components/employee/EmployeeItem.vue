<template>
  <div class="employee-item-container">
    <div class="employee-item row">
      <EditEmployeeModal 
        v-if="state.showEditModal" 
        :employeeData="employee"
        :onClose="onClickEdit" 
        :onSubmit="onSubmitEdit" 
      />
      <RemoveEmployeeModal 
        v-if="state.showRemoveModal" 
        :employeeData="employee"
        :onClose="onClickRemove" 
        :onSubmit="onSubmitRemove" 
      />
      <div class="col-md-3 text-secondary">
        <h5>{{ employee.name }}</h5>
        <div class="small">
          <div># {{ employee._id }}</div>
        </div>
      </div>
      <div class="col-md-2">
        <h5 class="text-dark">{{ employee.reviews.length }}</h5>
        <div class="small">
          Reviews
        </div>
      </div>
      <div class="col-md-2">
        <h5 class="text-success">{{ employee.assignedFeedbacks.length }}</h5>
        <div class="small">
          Feedbacks Assigned
        </div>
      </div>
      <div class="employee-item__menu col-md-5">
        <button class="employee-item__button btn btn-sm btn-secondary">
          Add Review
        </button>
        <button class="employee-item__button btn btn-sm btn-secondary">
          Assign Feedback
        </button>
        <button class="employee-item__button btn btn-sm btn-link text-primary" @click="onClickEdit">
          Edit
        </button>
        <button class="employee-item__button btn btn-sm btn-link text-danger" @click="onClickRemove">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EditEmployeeModal from './EditEmployeeModal.vue';
import RemoveEmployeeModal from './RemoveEmployeeModal.vue';

import { editUser, deleteUser } from '../../api/user.js';

export default {
  components: {
    EditEmployeeModal,
    RemoveEmployeeModal,
  },
  props: {
    employeeData: {},
  },
  data() {
    return {
      employee: {},
      state: {
        showEditModal: false,
        showRemoveModal: false,
      },
    };
  },
  created() {
    this.employee = this.employeeData;
  },
  methods: {
    onClickEdit() {
      this.state.showEditModal = !this.state.showEditModal;
    },
    onClickRemove() {
      this.state.showRemoveModal = !this.state.showRemoveModal;
    },
    onSubmitEdit(employee) {
      editUser(employee).then((res) => {
        this.employee = res.data;
        this.state.showEditModal = !this.state.showEditModal;
      });
    },
    onSubmitRemove() {
      deleteUser(this.employee._id).then(() => {
        this.$router.go();
      });
    },
  }
}
</script>

<style lang="scss">
.employee-item {
  border: 1px solid #c7c3c1;
  background-color: $white;
  border-radius: .5rem;
  padding: 1rem;
  margin-top: 1rem;
  // override bootstrap's row margin
  margin-left: 0;
  margin-right: 0;
}
.employee-item__menu {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
.employee-item__button {
  margin: 0 .25rem;
}
</style>