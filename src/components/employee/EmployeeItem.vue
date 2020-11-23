<template>
  <div class="employee-item-container">
    <div class="employee-item row">
      <EmployeeModal 
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
      <NewReviewModal
        v-if="state.showAddReviewModal" 
        :employee="employee"
        :onClose="onClickAddReview" 
        :onSubmit="onSubmitAddReview" 
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
        <button class="employee-item__button btn btn-sm btn-primary" @click="onClickAddReview">
          Add Review
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
import EmployeeModal from './EmployeeModal.vue';
import RemoveEmployeeModal from './RemoveEmployeeModal.vue';
import NewReviewModal from '../review/NewReviewModal.vue';

import { editUser, deleteUser } from '../../api/user';
import { createReview } from '../../api/review';

export default {
  components: {
    EmployeeModal,
    RemoveEmployeeModal,
    NewReviewModal,
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
        showAddReviewModal: false,
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
    onClickAddReview() {
      this.state.showAddReviewModal = !this.state.showAddReviewModal;
    },
    async onSubmitEdit(employee) {
      await editUser(employee).then((res) => {
        console.log(res);
        this.state.showEditModal = !this.state.showEditModal;
      }).catch((err) => {
        console.log(err);
      });
    },
    async onSubmitRemove() {
      await deleteUser(this.employee._id).then(() => {
        this.$router.go();
      }).catch((err) => {
        console.log(err);
      });
    },
    async onSubmitAddReview(review) {
      await createReview(review).then((res) => {
        this.employee.reviews.push(res.data);
        this.state.showAddReviewModal = false;
      }).catch((err) => {
        console.log(err);
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