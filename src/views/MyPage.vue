<template>
  <div class="container">
    <div class="my-page-container" v-if="state.hasUser">
      <GiveFeedbackModal 
        v-if="state.showGiveFeedbackModal"
        :onClose="onCloseGiveFeedbackModal"
        :onSubmit="onSubmitGiveFeedback"
        :feedbackData="givingFeedbackData"
      />
      <h1>{{ user.name }}</h1> <hr />
      <div class="my-page__loading">
        <div class="spinner-border" role="status" v-if="state.isLoading" />
      </div>
      <div class="my-page__feedbacks-container" v-if="!state.isLoading">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-secondary" :class="{ active: state.showPendingFeedbacks }">
            <input type="radio" :value="true" v-model="state.showPendingFeedbacks"> Require Feedback
          </label>
          <label class="btn btn-secondary" :class="{ active: !state.showPendingFeedbacks }">
            <input type="radio" :value="false" v-model="state.showPendingFeedbacks"> Feedback Given
          </label>
        </div>
        <b class="ml-2">Total Reviews:</b> {{ this.feedbacks.length }}
        <div v-for="feedback in feedbacks" :key="feedback._id">
          <div class="mt-4">
            <ReviewItem :reviewData="feedback.review" :feedback="feedback" :hideAdminButtons="true" />
            <div class="mt-3 ml-4">
              <FeedbackItem :feedback="feedback" />
            </div>
            <button class="btn btn-primary mt-3" v-if="state.showPendingFeedbacks" @click="onClickGiveFeedback(feedback)">
              Give Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

import ReviewItem from '../components/review/ReviewItem.vue';
import FeedbackItem from '../components/feedback/FeedbackItem.vue';
import GiveFeedbackModal from '../components/feedback/GiveFeedbackModal.vue';

import { loadUserFromId } from '../api/user';
import { editFeedback } from '../api/feedback';

export default {
  components: {
    ReviewItem,
    FeedbackItem,
    GiveFeedbackModal,
  },
  data() {
    return {
      user: {},
      state: {
        hasUser: false,
        showPendingFeedbacks: true,
        isLoading: false,
        showGiveFeedbackModal: false,
      },
      givingFeedbackData: {},
    };
  },
  computed: {
    review() {
      return this.user.reviews;
    },
    feedbacks() {
      return _.filter(this.user.assignedFeedbacks, { pending: this.state.showPendingFeedbacks });
    },
  },
  async created() {
    await this.loadUserFromId();
  },
  methods: {
    loadUserFromId() {
      // Load from employee id in url
      this.state.isLoading = true;
      loadUserFromId(this.$route.params.employeeId).then((res) => {
        this.user = res.data;
        this.state.hasUser = true;
        this.state.isLoading = false;
      }).catch((err) => {
        console.log(err);
      });
    },
    onClickGiveFeedback(feedback) {
      this.givingFeedbackData = feedback;
      this.state.showGiveFeedbackModal = true;
    },
    onCloseGiveFeedbackModal() {
      this.state.showGiveFeedbackModal = false;
    },
    onSubmitGiveFeedback(feedback) {
      this.onCloseGiveFeedbackModal();
      editFeedback(feedback).then((res) => {
        console.log(res);
        // TODO: Fix this to more elegant approach
        this.$router.go();
      }).catch((err) => {
        console.log(err);
      });
    },
  }
};
</script>

<style lang="scss">
.my-page__loading {
  position: absolute;
  margin-top: 20%;
  left: 50%;
}
</style>