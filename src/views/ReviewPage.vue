<template>
  <div class="container">
    <NewReviewModal
      v-if="state.showAddReview" 
      :onClose="onClickAddReview" 
      :onSubmit="onSubmitAddReview" 
    />
    <div class="all-reviews-container">
      <h1>Reviews</h1> <hr />
      <button class="btn btn-primary" @click="onClickAddReview" v-if="!state.isLoading">
          Add Review
        </button>
      <div class="all-reviews__loading">
        <div class="spinner-border" role="status" v-if="!state.hasReviews" />
      </div>
      <div class="all-reviews" v-if="state.hasReviews">
        <div class="all-reviews__review-item" v-for="review in reviews" :key="review.id">
          <ReviewItem :reviewData="review" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadAllReviews, createReview } from '../api/review';
import ReviewItem from '../components/review/ReviewItem.vue';
import NewReviewModal from '../components/review/NewReviewModal.vue';

export default {
  components: {
    ReviewItem,
    NewReviewModal,
  },
  data() {
    return {
      reviews: [],
      state: {
        hasReviews: false,
        showAddReview: false,
      },
    };
  },
  created() {
    this.loadAllReviews();
  },
  methods: {
    async loadAllReviews() {
      await loadAllReviews().then((res) => {
        this.reviews = res.data;
        this.state.hasReviews = true;
      }).catch((err) => {
        console.log(err);
      });
    },
    onClickAddReview() {
      this.state.showAddReview = !this.state.showAddReview;
    },
    async onSubmitAddReview(review) {
      await createReview(review).then((res) => {
        this.employee.reviews.push(res.data);
        this.state.showAddReviewModal = false;
      }).catch((err) => {
        console.log(err);
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
.all-reviews__loading {
  position: absolute;
  margin-top: 20%;
  left: 50%;
}
.all-reviews__review-item {
  flex: 0 0 100%;
}
</style>