<template>
  <div id="app" title="Performance Review App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <a class="navbar-brand" href="#">PerformanceReview</a>
      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
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
    }
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
