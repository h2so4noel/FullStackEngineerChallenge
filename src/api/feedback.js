import axios from 'axios';

function createFeedback(data) {
  return axios.post('/feedbacks', data);
}

function loadFeedbacksFromReviewId(reviewId) {
  return axios.get(`/feedbacks?reviewId=${reviewId}`);
}

function editFeedback(data) {
  return axios.put(`/feedbacks/${data._id}`, data);
}

export {
  createFeedback,
  loadFeedbacksFromReviewId,
  editFeedback,
}