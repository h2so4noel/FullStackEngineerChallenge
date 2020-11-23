import axios from 'axios';

function loadAllReviews() {
  return axios.get('/reviews');
}

function createReview(data) {
  return axios.post(`/reviews`, data);
}

function editReview(data) {
  return axios.put(`/reviews/${data._id}`, data)
}

export {
  loadAllReviews,
  createReview,
  editReview,
}