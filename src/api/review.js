import axios from 'axios';

function loadAllReviews() {
  return axios.get('/reviews');
}

export {
  loadAllReviews,
}