<template>
  <div class="feedbacks-container" v-if="feedbacks">
    <div class="feedbacks">
      <div class="feedbacks__item" v-for="feedback in feedbacks" :key="feedback._id">
        <span v-if="feedback.content">{{ feedback.content }}</span>
        <span class="small feedbacks__pending" v-else> Waiting feedback from assigned employee... </span>
        <div class="feedbacks__assignee small">
          <!-- TODO: Populate feedback user name (either via API or Mongoose populate) -->
          - {{ feedback.assignedUser.name }}, <span class="feedbacks__time">{{ getDateTime(feedback) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['feedbacks'],
  data() {
    return {
      assignedUser: {},
    };
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
  justify-content: space-between;
}

.feedbacks__item {
  margin: 0 1rem 1.5rem 0;
  margin-left: 0;
  border-left: 2px solid $primary;
  padding-left: 15px;
  flex: 0 0 100%;
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