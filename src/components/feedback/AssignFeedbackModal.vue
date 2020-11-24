<template>
  <div class="new-feedback-modal-container">
    <Modal :onClose="onClose">
      <div slot="header">New Feedback</div>
      <div>
        <div class="form-group">
          <label>Review Taskname: </label>
          <input v-model="review.taskName" class="form-control" readonly>
        </div>
        <div class="form-group">
          <label>Assign to Employee: </label>
          <select class="form-control" v-model="feedback.assignedUser" v-if="state.hasUsers">
            <option disabled value="">Please select one</option>
            <option v-for="user in users" v-bind:value="user._id" :key="user._id">{{ user.name }}</option>
          </select>
        </div>
      </div>
      <div slot="footer">
        <button class="btn btn-primary" @click="onCreateFeedback" v-if="isValidForm">
          Create
        </button>
        <!-- TODO: Cleanup this button state to be more dynamic -->
        <button class="btn btn-primary" @click="onCreateFeedback" v-if="!isValidForm" disabled>
          Create
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '../../components/Modal.vue';
import { loadAllUsers } from '../../api/user'

export default {
  props: ['onClose', 'onSubmit', 'reviewData'],
  components: {
    Modal,
  },
  data() {
    return {
      review: {},
      users: [],
      feedback: {
        review: '',
        assignedUser: '',
        pending: true, // pending allows employee to see feedback they need to respond
        content: '',
      },
      state: {
        hasUsers: false,
      },
    };
  },
  computed: {
    isValidForm() {
      return this.feedback.assignedUser !== '';
    },
  },
  created() {
    this.review = this.reviewData;
    this.feedback.review = this.review._id;
    this.loadAllUsers();
  },
  methods: {
    loadAllUsers() {
      loadAllUsers().then((res) => {
        this.users = res.data;
        this.state.hasUsers = true;
      }).catch((err) => {
        console.log(err);
      });
    },
    onCreateFeedback() {
      this.onSubmit(this.feedback);
    },
  }
}
</script>

<style lang="scss">

</style>