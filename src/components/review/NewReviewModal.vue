<template>
  <div class="new-review-modal-container">
    <Modal :onClose="onClose">
      <div slot="header">New Review</div>
      <div>
        <div class="form-group">
          <label>Employee: </label>
          <input v-model="employee.name" class="form-control" readonly>
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
  props: ['onClose', 'onSubmit', 'employee'],
  components: {
    Modal,
  },
  data() {
    return {
      review: {
        content: '',
        revieweeUserId: '',
        taskName: '',
      },
    };
  },
  created() {
    this.review.revieweeUserId = this.employee._id;
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