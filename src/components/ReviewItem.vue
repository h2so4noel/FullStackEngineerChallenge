<template>
  <div class="review-item-container">
    <div class="review-item" v-if="review && state.hasReviewee">
      <div class="task-name text-secondary">Reviewed by: {{ reviewee.name }} - {{ getDateTime }}</div>
      <h4>{{ review.taskName }}</h4>
      {{ review.content }}
    </div>
    <hr />
    <Feedbacks :feedbacks="feedbacks" v-if="feedbacks" />
    <div class="button-menu">
      <button class="btn btn-sm btn-primary">
        Add Feedback
      </button>
    </div>
  </div>
</template>

<script>
import Feedbacks from './Feedbacks.vue';
import { loadUserFromId } from '../api/user.js';

export default {
  components: {
    Feedbacks,
  },
  props: {
    review: {},
  },
  data() {
    return {
      feedbacks: [],
      reviewee: {},
      state: {
        hasReviewee: false,
      },
    };
  },
  computed: {
    getDateTime() {
      return new Date(this.review.createdAt).toUTCString();
    }
  },
  created() {
    this.feedbacks = this.review.feedbacks;
    this.loadUserFromId(this.review.revieweeUserId);
  },
  methods: {
    loadUserFromId(id) {
      loadUserFromId(id).then((res) => {
        this.state.hasReviewee = true;
        this.reviewee = res.data;
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