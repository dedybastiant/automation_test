const api = require('../page-objects/create_post');

describe('POST /posts', () => {
  test('Checking Data Type From Create Post Response', async () => {
    const testData = {
      userId: 12,
      title: "recommendation",
      body: "motorcycle"
    };
    const response = await api.createPost(testData);
    expect(response.body.id).not.toBeNull();
    expect(response.body.userId).toBe(testData.userId);
    expect(response.body.title).toBe(testData.title);
    expect(response.body.body).toBe(testData.body);
  });
});
