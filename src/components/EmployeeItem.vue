<template>
  <div class="employee-item-container">
    <div class="employee-item row">
      <div class="col-md-3 text-secondary">
        <h5>{{ employee.name }}</h5>
        <div class="small">
          <div>Joined: {{ employee.createdAt }}</div>
        </div>
      </div>
      <div class="col-md-3">
        <h5 class="text-dark">{{ employee.reviews.length }}</h5>
        <div class="small">
          Reviews
        </div>
      </div>
      <div class="col-md-3">
        <h5 class="text-success">{{ employee.assignedFeedbacks.length }}</h5>
        <div class="small">
          Feedbacks Assigned
        </div>
      </div>
      <div class="col-md-3">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    employee: {},
  },
}
</script>

<style lang="scss">
.employee-item {
  border: 1px solid #c7c3c1;
  background-color: $white;
  border-radius: .5rem;
  padding: 1rem;
  margin-top: 1rem;
}
</style>