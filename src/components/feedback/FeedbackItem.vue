<template>
  <div class="feedback-item-container">
    <div class="feedback-item">
      <span v-if="feedback.content">{{ feedback.content }}</span>
      <span class="small feedbacks__pending" v-else> Waiting feedback from assigned employee... </span>
      <div class="feedbacks__assignee small">
        - {{ feedback.assignedUser.name }}, <span class="feedbacks__time">{{ getDateTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['feedback'],
  computed: {
    getDateTime() {
      return new Date(this.feedback.createdAt).toUTCString();
    }
  }
}
</script>

<style lang="scss">
.feedback-item {
  margin: 0 1rem 1.5rem 0;
  margin-left: 0;
  border-left: 2px solid $primary;
  padding-left: 15px;
  flex: 0 0 100%;
}
</style>