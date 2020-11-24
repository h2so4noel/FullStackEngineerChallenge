<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <router-link to="/" class="navbar-brand">PerformanceReview</router-link>
      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto" v-if="includeAdminNav">
          <li class="nav-item" :class="{ 'active': isReviewsPage }">
            <router-link class="nav-link" to="/reviews">Reviews</router-link>
          </li>
          <li class="nav-item" :class="{ 'active': isEmployeesPage }">
            <router-link class="nav-link" to="/employees">Employees</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isReviewsPage() {
      return this.$route.name === 'ReviewPage';
    },
    isEmployeesPage() {
      return this.$route.name === 'EmployeePage';
    },
    includeAdminNav() {
      return this.isReviewsPage || this.isEmployeesPage;
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// margin top for all containers
.container {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
</style>
