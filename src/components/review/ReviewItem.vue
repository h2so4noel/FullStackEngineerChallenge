<template>
  <div>
    <EditReviewModal
      v-if="state.showEditReviewModal" 
      :reviewData="review"
      :onClose="onClickEditReview" 
      :onSubmit="onSubmitEditReview" 
    />
    <AssignFeedbackModal
      v-if="state.showAssignFeedbackModal"
      :reviewData="review"
      :onClose="onClickNewFeedback"
      :onSubmit="onSubmitNewFeedback"
    />
    <div class="review-item-container">
      <div class="review-item" v-if="review">
        <div class="task-name">
          <router-link 
            :to="`/${review.revieweeUser._id}`" 
            class="text-secondary">
            {{ review.revieweeUser.name }} </router-link>- {{ getDateTime }}</div>
        <h4>{{ review.taskName }}</h4>
        {{ review.content }}
      </div>
      <button 
        class="btn btn-sm btn-link mt-3" 
        @click="onClickViewRevieweeAndFeedbacks" 
        v-if="!this.state.showDataAndFeedbacks">
        Show Data
      </button>
      <FeedbackList :feedbacks="review.feedbacks" v-if="state.showDataAndFeedbacks" />
      <hr />
      <div class="button-menu" v-if="!isRequireFeedbackList">
        <button class="btn btn-sm btn-link text-primary mr-2" @click="onClickEditReview">
          Edit Review
        </button>
        <button class="btn btn-sm btn-primary" @click="onClickNewFeedback">
          Assign New Feedback
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EditReviewModal from './EditReviewModal.vue';
import AssignFeedbackModal from '../feedback/AssignFeedbackModal.vue';
import FeedbackList from '../feedback/FeedbackList.vue';

import { editReview } from '../../api/review';
import { createFeedback, loadFeedbacksFromReviewId } from '../../api/feedback';
import { loadUserFromId } from '../../api/user';

export default {
  components: {
    FeedbackList,
    EditReviewModal,
    AssignFeedbackModal,
  },
  props: {
    reviewData: {
      type: Object,
      default: () => {},
    },
    isRequireFeedbackList: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      review: null,
      revieweeUserId: '',
      state: {
        showEditReviewModal: false,
        showAssignFeedbackModal: false,
        showDataAndFeedbacks: false,
      },
    };
  },
  computed: {
    getDateTime() {
      return new Date(this.review.createdAt).toUTCString();
    },
  },
  async created() {
    // TODO: Find new way to implement how to get reviewee name instead of calling user API. Maybe populate?
    this.revieweeUserId = this.reviewData.revieweeUser;
    this.loadUserFromIdAndFillReviewData();
    this.review = this.reviewData;
  },
  methods: {
    onClickEditReview() {
      this.state.showEditReviewModal = !this.state.showEditReviewModal;
    },
    onClickNewFeedback() {
      this.state.showAssignFeedbackModal = !this.state.showAssignFeedbackModal;
    },
    onSubmitEditReview(review) {
      editReview(review).then((res) => {
        this.review = res.data;
      }).catch((err) => {
        console.log(err);
      })
    },
    onSubmitNewFeedback(feedback) {
      console.log(feedback)
      createFeedback(feedback).then((res) => {
        this.state.showAssignFeedbackModal = false;
        this.review.feedbacks.push(res.data);
      }).catch((err) => {
        console.log(err);
      })
    },
    onClickViewRevieweeAndFeedbacks() {
      loadFeedbacksFromReviewId(this.reviewData._id).then((res) => {
        this.review.feedbacks = res.data;
        this.state.showDataAndFeedbacks = true;
      }).catch((err) => {
        console.log(err);
      });
    },
    loadUserFromIdAndFillReviewData() {
      loadUserFromId(this.revieweeUserId).then((res) => {
        this.review = this.reviewData;
        this.$set(this.review, 'revieweeUser', res.data);
      })
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