const request = require('supertest');
const createApp = require('../src/app');

describe('test for hello endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  beforeAll(async () => {
    await server.close();
  });

  describe('test for GET', () => {
    test('should return Hello World!', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
