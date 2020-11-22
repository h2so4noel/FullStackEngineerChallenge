<template>
  <div class="container">
    <div class="all-revieiws-container">
      <h1>Reviews</h1> <hr />
      <div class="row" v-if="hasReviews">
        <div class="col-md-4" v-for="review in reviews" :key="review.id">
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
</style>