<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <a class="navbar-brand" href="#">PerformanceReview</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
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
  created() {
    console.log(this.$route.name);
  }
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
}
</style>
