import axios from 'axios';

function createFeedback(data) {
  return axios.post('/feedbacks', data);
}

export {
  createFeedback,
}