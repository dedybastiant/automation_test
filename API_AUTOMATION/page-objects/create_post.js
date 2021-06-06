const supertest = require('supertest');
const base_url = 'https://jsonplaceholder.typicode.com';
const api = supertest(base_url);
const createPostPath = '/posts';

function createPost(body) {
  return api.post(createPostPath)
    .set('Content-Type', 'application/json')
    .send(body);
}

module.exports = {
  createPost,
};