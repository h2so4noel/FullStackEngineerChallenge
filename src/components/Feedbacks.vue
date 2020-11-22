<template>
  <div class="feedbacks-container" v-if="feedbacks">
    <div class="feedbacks">
      <div class="feedbacks__item" v-for="feedback in feedbacks" :key="feedback._id">
        {{ feedback.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feedbacks: {},
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
  margin: 1rem;
  margin-left: 0;
  border-left: 2px solid $primary;
  padding-left: 15px;
  flex: 0 0 100%;
}
</style>