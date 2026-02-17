const request = require('supertest');
const app = require('./index');

describe('User API', () => {
  it('GET /users should return an array of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body[0].name).toBe('John Doe');
  });

  it('POST /users should create a user', async () => {
    const res = await request(app).post('/users').send({ name: 'Jane Doe' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.name).toBe('Jane Doe');
  });
});
