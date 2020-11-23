<template>
  <div class="new-feedback-modal-container">
    <Modal :onClose="onClose">
      <div slot="header">New Feedback</div>
      <div>
        <div class="form-group">
          <label>Review Name: </label>
          <input v-model="review.name" class="form-control" readonly>
        </div>
        <div class="form-group">
          <label>Assign to Employee: </label>
          <input v-model="review.taskName" class="form-control" placeholder="eg. Refactoring">
        </div>
      </div>
      <div slot="footer">
        <button class="btn btn-primary" @click="onAddReview">
          Create
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue';

export default {
  props: ['onClose', 'onSubmit', 'reviewData'],
  components: {
    Modal,
  },
  data() {
    return {
      review: {},
      feedback: {
        reviewId: '',
        assignedUser: '',
        pending: true, // pending allows employee to see feedback they need to respond
        content: req.body.content,
      },
    };
  },
  created() {
    this.review = this.reviewData;
  },
  methods: {
    onAddReview() {
      this.onSubmit(this.review);
    },
  }
}
</script>

<style lang="scss">

</style>