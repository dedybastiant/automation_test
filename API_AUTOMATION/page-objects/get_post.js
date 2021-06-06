const supertest = require('supertest');
const base_url = "https://jsonplaceholder.typicode.com";
const api = supertest(base_url);
const getPostPath = '/posts';

function getPosts() {
  return api.get(getPostPath)
    .set('Content-Type', 'application/json');
}

module.exports = {
  getPosts,
};