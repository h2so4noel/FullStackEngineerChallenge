<template>
  <div class="feedbacks-container" v-if="feedbacks">
    <div class="feedbacks" v-if="!emptyFeedbacks">
      <FeedbackItem v-for="feedback in filteredFeedbacks" :key="feedback._id" :feedback="feedback" />
    </div>
    <div v-if="emptyFeedbacks">
      <small class="font-italic">Feedback list is empty...</small>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import FeedbackItem from './FeedbackItem.vue';

export default {
  components: {
    FeedbackItem,
  },
  props: {
    feedbacks: {
      type: Array,
      default: () => [],
    },
    isPendingList: {
      type: Boolean,
      default: () => false,
    },
  },
  created() {
    console.log(this.feedbacks);
  },
  computed: {
    filteredFeedbacks() {
      return this.isPendingList ? _.filter(this.feedbacks, { pending: true }) : this.feedbacks;
    },
    emptyFeedbacks() {
      return this.feedbacks.length === 0;
    },
  },
  methods: {
    getDateTime(feedback) {
      return new Date(feedback.createdAt).toUTCString();
    },
  },
}
</script>

<style lang="scss">
.feedbacks {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
}

.feedbacks__time {
  color: $dark;
}

.feedbacks__assignee {
  color: $secondary;
  font-style: italic;
}

.feedbacks__pending {
  color: $light;
  font-style: italic;
}
</style>