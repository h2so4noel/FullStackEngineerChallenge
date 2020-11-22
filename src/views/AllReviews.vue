<template>
  <div class="container">
    <div class="h1">
      All Reviews
      <div v-if="hasReviews">
        <div v-for="review in reviews" :key="review.id">
          {{ review.taskName }}
          {{ review.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadAllReviews } from '../api/review';
export default {
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