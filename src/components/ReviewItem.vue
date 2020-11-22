<template>
  <div class="review-item-container">
    <div class="review-item" v-if="reviewData">
      <div class="task-name text-secondary">{{ reviewData.createdAt }}</div>
      <h4>{{ reviewData.taskName }}</h4>
      {{ reviewData.content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviewData: Object,
  },
  data() {
    return {
      review: {},
    };
  },
  created() {
    this.review = this.props.reviewData;
  }
}
</script>

<style lang="scss">
.review-item-container {
  border: 1px solid $primary;
  padding: .5rem;
}
.task-name {
  font-size: 75%;
}
</style>