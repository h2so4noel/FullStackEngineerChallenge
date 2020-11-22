<template>
  <div class="container">
    <div class="all-reviews-container">
      <h1>Reviews</h1> <hr />
      <div class="all-reviews" v-if="hasReviews">
        <div class="all-reviews__review-item" v-for="review in reviews" :key="review.id">
          <ReviewItem :reviewData="review" />
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
    };
  },
  computed: {
    hasReviews() {
      return this.reviews.length !== 0;
    },
  },
  created() {
    this.loadAllReviews();
  },
  methods: {
    loadAllReviews() {
      loadAllReviews().then((res) => {
        this.reviews = res.data;
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