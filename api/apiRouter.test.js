const { server, handle } = require('../index');

const supertest = require('supertest');
const request = supertest(server);

describe('/api/health endpoint', () => {

  afterAll(async () => {

    handle.close();
  });

  it('should respond with { healthy: true }', async () => {
    const response = await request.get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.healthy).toBe(true);
  });
});
