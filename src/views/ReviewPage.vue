<template>
  <div class="container">
    <div class="all-reviews-container">
      <h1>Reviews</h1> <hr />
      <div class="all-reviews" v-if="state.hasReviews">
        <div class="all-reviews__review-item" v-for="review in reviews" :key="review.id">
          <ReviewItem :review="review" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadAllReviews } from '../api/review';
import ReviewItem from '../components/ReviewItem.vue';

export default {
  components: {
    ReviewItem,
  },
  data() {
    return {
      reviews: [],
      state: {
        hasReviews: false,
      },
    };
  },
  created() {
    this.loadAllReviews();
  },
  methods: {
    loadAllReviews() {
      loadAllReviews().then((res) => {
        this.reviews = res.data;
        this.state.hasReviews = true;
      });
    },
  },
}
</script>

<style lang="scss">
.all-reviews {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.all-reviews__review-item {
  flex: 0 0 100%;
}
</style>