<template>
  <div class="container">
    <div class="employee-page-container">
      <h1>Employees</h1> <hr />
      <div class="employee-page__loading">
        <div class="spinner-border" role="status" v-if="!state.hasEmployees" />
      </div>
      <div class="employee-page">
        <div class="employee-page__item" v-for="employee in employees" :key="employee._id">
          <EmployeeItem :employee="employee" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadAllUsers } from '../api/user.js';
import EmployeeItem from '../components/EmployeeItem.vue';

export default {
  components: {
    EmployeeItem,
  },
  data() {
    return {
      employees: [],
      state: {
        hasEmployees: false,
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