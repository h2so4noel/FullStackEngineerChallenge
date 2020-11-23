<template>
  <div class="container">
    <div class="employee-page-container">
      <EmployeeModal 
        v-if="state.showNewEmployeeModal" 
        :employeeData="{}"
        :onClose="onClickAddEmployee" 
        :onSubmit="onSubmitAddEmployee" 
      />
      <h1>Employees</h1> <hr />
      <div class="employee-page__loading">
        <div class="spinner-border" role="status" v-if="!state.hasEmployees" />
      </div>
      <div class="employee-page">
        <button class="btn btn-primary" @click="onClickAddEmployee" v-if="!state.isLoading">
          Add Employee
        </button>
        <div class="spinner-border" role="status" v-if="state.isLoading" />
        <div class="employee-page__item" v-for="employee in employees" :key="employee._id">
          <EmployeeItem :employeeData="employee" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadAllUsers, createUser } from '../api/user';
import EmployeeModal from '../components/employee/EmployeeModal.vue';
import EmployeeItem from '../components/employee/EmployeeItem.vue';

export default {
  components: {
    EmployeeModal,
    EmployeeItem,
  },
  data() {
    return {
      employees: [],
      state: {
        hasEmployees: false,
        showNewEmployeeModal: false,
        isLoading: false,
      },
    };
  },
  created() {
    this.loadAllUsers();
  },
  methods: {
    loadAllUsers() {
      loadAllUsers().then((res) => {
        this.employees = res.data;
        this.state.hasEmployees = true;
      }).catch((err) => {
        console.log(err);
      });
    },
    onClickAddEmployee() {
      this.state.showNewEmployeeModal = !this.state.showNewEmployeeModal;
    },
    async onSubmitAddEmployee(employeeData) {
      this.state.isLoading = true;
      await createUser(employeeData).then((res) => {
        this.employees.unshift(res.data)
        this.state.isLoading = false;
        this.state.showNewEmployeeModal = false;
      }).catch((err) => {
        console.log(err);
      });
    },
  },
}
</script>

<style lang="scss">
.employee-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.employee-page__loading {
  position: absolute;
  margin-top: 20%;
  left: 50%;
}
.employee-page__item {
  flex: 0 0 100%;
}
</style>