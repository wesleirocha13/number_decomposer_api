const request = require('supertest');
const app = require('../../app');

describe('Get the decomposition of the number', ()=>{
    it('Must receive a status code 404 when the route is invalid', async ()=>{
        const response = await request(app).get('/test');
        expect(response.status).toBe(404);
    })

    it('Must receive a status code 200 when the route decompose is invalid', async ()=>{
        const response = await request(app).get('/decompose/10');
        expect(response.status).toBe(200);
    })

})