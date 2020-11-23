<template>
  <div class="new-review-modal-container">
    <Modal :onClose="onClose">
      <div slot="header">New Review</div>
      <div>
        <div class="form-group">
          <label>Employee: </label>
          <select class="form-control" v-model="review.revieweeUser" v-if="state.hasUsers">
            <option v-for="user in users" v-bind:value="user" :key="user._id">{{ user.name }}</option>
          </select>
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
import { loadAllUsers } from '../../api/user'

export default {
  props: {
    onClose: {
      type: Function,
    },
    onSubmit: {
      type: Function,
    },
    employee: {
      type: Object,
      default: () => {return {}},
    },
  },
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
      state: {
        hasUsers: false,
      },
    };
  },
  async created() {
    await this.loadAllUsers();
    this.review.revieweeUser = this.employee;
  },
  methods: {
    async loadAllUsers() {
      await loadAllUsers().then((res) => {
        this.users = res.data;
        this.state.hasUsers = true;
        this.review.revieweeUser = this.users[0];
      }).catch((err) => {
        console.log(err);
      });
    },
    onAddReview() {
      this.onSubmit(this.review);
    },
  }
}
</script>

<style lang="scss">

</style>