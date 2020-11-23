import axios from 'axios';

function loadAllUsers() {
  return axios.get('/users');
}

function loadUserFromId(userId) {
  return axios.get(`/users/${userId}`);
}

export {
  loadAllUsers,
  loadUserFromId
}