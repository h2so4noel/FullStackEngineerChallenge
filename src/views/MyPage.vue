<template>
  <div class="container">
    <div class="my-page-container" v-if="state.hasUser">
      <h1>{{ user.name }}</h1> <hr />
      <div class="my-page__feedbacks-container">
        <h5 class="mt-4">Reviews Requiring Feedback</h5>
        <div class="my-page__feedbacks mt-4">
          <FeedbackList :feedbacks="feedbacks" isPendingList />
        </div>
        <div v-for="feedback in feedbacks" :key="feedback._id">
          <ReviewItem :reviewData="feedback.review" :isRequireFeedbackList="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadUserFromId } from '../api/user';

import ReviewItem from '../components/review/ReviewItem.vue';
import FeedbackList from '../components/feedback/FeedbackList.vue';

export default {
  components: {
    ReviewItem,
    FeedbackList,
  },
  data() {
    return {
      user: {},
      state: {
        hasUser: false,
      },
    };
  },
  computed: {
    review() {
      return this.user.reviews;
    },
    feedbacks() {
      return this.user.assignedFeedbacks;
    }
  },
  async created() {
    await this.loadUserFromId();
  },
  methods: {
    loadUserFromId() {
      // Load from employee id in url
      loadUserFromId(this.$route.params.employeeId).then((res) => {
        this.user = res.data;
        this.state.hasUser = true;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
</script>