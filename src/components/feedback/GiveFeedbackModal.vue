<template>
  <div class="give-feedback-modal-container">
    <Modal :onClose="onClose">
      <div slot="header">Give Feedback</div>
      <div>
        <div class="form-group">
          <label>Review Taskname: </label>
          <input v-model="feedback.review.taskName" class="form-control" readonly>
        </div>
        <div class="form-group">
          <label>Feedback: </label>
          <textarea 
            v-model="feedback.content" 
            class="form-control" 
            rows="2" 
            placeholder="Your feedback here..." 
          />
        </div>
      </div>
      <div slot="footer">
        <button class="btn btn-primary" @click="onGiveBeefback" v-if="isValidForm">
          Send
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue';

export default {
  props: ['onClose', 'onSubmit', 'feedbackData'],
  components: {
    Modal,
  },
  data() {
    return {
      feedback: {},
    };
  },
  computed: {
    isValidForm() {
      return this.feedback.content !== '';
    },
  },
  created() {
    this.feedback = this.feedbackData;
    console.log(this.feedback);
  },
  methods: {
    onGiveBeefback() {
      this.onSubmit(this.feedback);
    },
  }
}
</script>

<style lang="scss">

</style>