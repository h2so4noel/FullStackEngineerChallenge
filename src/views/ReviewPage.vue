<template>
  <div class="container">
    <NewReviewModal
      v-if="state.showAddReviewModal" 
      :onClose="onClickAddReview" 
      :onSubmit="onSubmitAddReview" 
    />
    <div class="all-reviews-container">
      <h1>Reviews</h1> <hr />
      <div class="menu">
        <button class="btn btn-primary" @click="onClickAddReview" v-if="!state.isLoading">
          Add Review
        </button>
      </div>
      <div class="all-reviews__loading">
        <div class="spinner-border" role="status" v-if="!state.hasReviews" />
      </div>
      <div class="all-reviews" v-if="state.hasReviews">
        <div class="all-reviews__review-item" v-for="review in limitedReviews" :key="review._id">
          <ReviewItem :reviewData="review" />
        </div>
        <button class="load-more btn btn-link" @click="onLoadMore">
          Load more...
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
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
        showAddReviewModal: false,
      },
      limitReviews: 20,
    };
  },
  async created() {
    await this.loadAllReviews();
  },
  computed: {
    limitedReviews() {
      return _.slice(this.reviews, 0, this.limitReviews);
    },
  },
  methods: {
    loadAllReviews() {
      loadAllReviews().then((res) => {
        this.reviews = res.data;
        this.state.hasReviews = true;
      }).catch((err) => {
        console.log(err);
      });
    },
    onClickAddReview() {
      this.state.showAddReviewModal = !this.state.showAddReviewModal;
    },
    onSubmitAddReview(review) {
      createReview(review).then((res) => {
        this.reviews.push(res.data);
        this.state.showAddReviewModal = false;
      }).catch((err) => {
        console.log(err);
      });
    },
    onLoadMore() {
      this.limitReviews += 10;
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

.load-more {
  margin: 2rem 0;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>