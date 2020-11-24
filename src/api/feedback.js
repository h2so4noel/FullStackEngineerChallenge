import axios from 'axios';

function createFeedback(data) {
  return axios.post('/feedbacks', data);
}

function loadFeedbacksFromReviewId(reviewId) {
  return axios.get(`/feedbacks?reviewId=${reviewId}`);
}

export {
  createFeedback,
  loadFeedbacksFromReviewId,
}