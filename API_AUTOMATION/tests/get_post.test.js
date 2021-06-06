const api = require('../page-objects/get_post');

describe('GET /posts', () => {
  test('Checking Data Type From Get Post Response', async () => {
    const response = await api.getPosts();
    response.body.map(resp => {
      expect(typeof resp.userId).toBe('number');
      expect(typeof resp.id).toBe('number');
      expect(typeof resp.title).toBe('string');
      expect(typeof resp.body).toBe('string');
    });
  });
});
