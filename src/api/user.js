import axios from 'axios';

function loadAllUsers() {
  return axios.get('/users');
}

function loadUserFromId(userId) {
  return axios.get(`/users/${userId}`);
}

function createUser(data) {
  return axios.post(`/users/`, data);
}

function editUser(data) {
  return axios.put(`/users/${data._id}`, data);
}

function deleteUser(userId) {
  return axios.delete(`/users/${userId}`);
}

export {
  loadAllUsers,
  loadUserFromId,
  createUser,
  editUser,
  deleteUser,
}