<template>
  <div class="review-item-container">
    <div class="review-item" v-if="reviewData">
      <div class="task-name text-secondary">{{ reviewData.createdAt }}</div>
      <h4>{{ reviewData.taskName }}</h4>
      {{ reviewData.content }}
    </div>
    <div class="button-menu">
      <button class="btn btn-sm btn-primary">
        Add Feedback    
      </button>
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
  border: 1px solid #c7c3c1;
  background-color: $white;
  filter: drop-shadow(5px 5px 3px $light);
  border-radius: .5rem;
  padding: 1.5rem;
  margin-top: 1rem;
}
.task-name {
  font-size: 75%;
}
.button-menu {
  margin-top: 1rem;
  text-align: right;
}
</style>