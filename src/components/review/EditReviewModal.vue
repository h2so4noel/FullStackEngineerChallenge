<template>
  <div class="edit-review-modal-container">
    <Modal :onClose="onClose">
      <div slot="header">Edit Review</div>
      <div>
        <div class="form-group">
          <label>Employee: </label>
          <input v-model="review.revieweeUser.name" class="form-control" readonly>
        </div>
        <div class="form-group">
          <label>Taskname</label>
          <input v-model="review.taskName" class="form-control" placeholder="eg. Refactoring">
        </div>
        <div class="form-group">
          <label>Review Content</label>
          <textarea 
            v-model="review.content" 
            class="form-control" 
            rows="2" 
            placeholder="Your review content here..." 
          />
        </div>
      </div>
      <div slot="footer">
        <button class="btn btn-primary" @click="onEditReview">
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
      review: {
        content: '',
        revieweeUser: {},
        taskName: '',
      },
    };
  },
  created() {
    this.review = this.reviewData
  },
  methods: {
    onEditReview() {
      this.onSubmit(this.review);
    },
  }
}
</script>

<style lang="scss">

</style>