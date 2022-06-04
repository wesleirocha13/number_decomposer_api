const request = require('supertest');
const app = require('../../app');

describe('Get the decomposition of the number', ()=>{
    it('Must receive a status code 200 when the route decompose is invalid', async ()=>{
        const response = await request(app).get('/decompose/10');
        expect(response.status).toBe(200);
    });

    it('Must receive a status code 200 and requisition body when passed a number', async ()=>{
        const response = await request(app).get('/decompose/45');
        const expectBody = {
            number: 45,
            factors: [1,3,5,9,15,45],
            primeFactors: [3,5]
        }
        expect(response.status).toBe(200);
        expect(JSON.stringify(response.body)).toBe(JSON.stringify(expectBody));
    });

    it('Must receive a status code 400 and error message when the number passed is "test"', async ()=>{
        const response = await request(app).get('/decompose/test'); 
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Informe um número natural não nulo');
    });

    it('Must receive a status code 400 and error message when the number passed is "-10"', async ()=>{
        const response = await request(app).get('/decompose/-10'); 
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Informe um número natural não nulo');
    });

    it('Must receive a status code 400 and error message when the number passed is "0"', async ()=>{
        const response = await request(app).get('/decompose/0'); 
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Informe um número natural não nulo');
    });

    it('Must receive a status code 404 when the route is invalid', async ()=>{
        const response = await request(app).get('/test');
        expect(response.status).toBe(404);
    })

})