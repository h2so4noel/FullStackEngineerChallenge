<template>
  <div>
    <EditReviewModal
      v-if="state.showEditReviewModal" 
      :reviewData="review"
      :onClose="onClickEditReview" 
      :onSubmit="onSubmitEditReview" 
    />
    <NewFeedbackModal
      v-if="state.showNewFeedbackModal"
      :reviewData="review"
      :onClose="onClickNewFeedback"
      :onSubmit="onSubmitNewFeedback"
    />
    <div class="review-item-container">
    <div class="review-item" v-if="review">
      <div class="task-name"><span class="text-secondary">{{ review.revieweeUser.name }}</span> - {{ getDateTime }}</div>
      <h4>{{ review.taskName }}</h4>
      {{ review.content }}
    </div>
    <hr />
    <Feedbacks :feedbacks="feedbacks" v-if="feedbacks" />
    <div class="button-menu">
      <button class="btn btn-sm btn-link text-primary mr-2" @click="onClickEditReview">
        Edit Review
      </button>
      <button class="btn btn-sm btn-primary">
        Assign Feedback
      </button>
    </div>
  </div>
  </div>
</template>

<script>
import EditReviewModal from './EditReviewModal.vue';
import Feedbacks from '../feedback/Feedbacks.vue';

import { editReview } from '../../api/review'

export default {
  components: {
    Feedbacks,
    EditReviewModal,
  },
  props: {
    reviewData: {},
  },
  data() {
    return {
      review: {},
      feedbacks: [],
      state: {
        showEditReviewModal: false,
      },
    };
  },
  computed: {
    getDateTime() {
      return new Date(this.review.createdAt).toUTCString();
    }
  },
  created() {
    this.review = this.reviewData;
  },
  methods: {
    onClickEditReview() {
      this.state.showEditReviewModal = !this.state.showEditReviewModal;
    },
    onClickNewFeedback() {
      this.state.showNewFeedbackModal = !this.state.showNewFeedbackModal;
    },
    async onSubmitEditReview(review) {
      await editReview(review).then((res) => {
        this.review = res.data;
      }).catch((err) => {
        console.log(err)
      })
    },
    async onSubmitNewFeedback(feedback) {
      console.log(feedback)
      // await newFeedback(review).then((res) => {
      // }).catch((err) => {
      //   console.log(err)
      // })
    },
  },
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