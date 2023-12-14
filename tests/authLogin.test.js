/* 
Робила за цим посиланням, але не знаю в чому причина, що не вихадить 
https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/ 

{
"password": "123456",
"email": "nadiia@ukr.net"
}

відповідь повина мати статус-код 200
у відповіді повинен повертатися токен
у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String

*/
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app');

require('dotenv').config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DB_HOST);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe('POST /api/users/login', () => {
  it('should login a user', async () => {
    const res = await request(app).post('/api/users/login').send({
      password: '123456',
      email: 'nadiia@ukr.net',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.user).toBe({
      email: 'nadiia@ukr.net',
      subscription: 'starter',
    });
  });
});
