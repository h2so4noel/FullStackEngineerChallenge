<template>
  <div class="container">
    <div class="my-page-container" v-if="state.hasUser">
      <h1>{{ user.name }}</h1> <hr />
      <div class="my-page__feedbacks-container">
        <h5 class="mt-4">Reviews Requiring Feedback</h5>
        <div class="my-page__feedbacks mt-4">
          <FeedbackList :feedbacks="feedbacks" isPendingList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loadUserFromId } from '../api/user';

import FeedbackList from '../components/feedback/FeedbackList.vue';

export default {
  components: {
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