const { getFactors, getPrimeNumbers, isPrime, validateNumber } = require('../../services/decomposeService')

describe('Validate if it is a non-null natural number', ()=>{
    it('Must return true for a valid number', ()=>{
        const number = '45';
        const result = validateNumber(number);
        expect(result).toBe(true);
    })

    it('Must return error for a invalid number "5e" ', () => {
        const number = '5e';
        const validate = () => {
            validateNumber(number);
        };
        expect(validate).toThrow('Informe um número natural não nulo');
    });

    it('Must return error for a invalid number "-10" ', () => {
        const number = -10;
        const validate = () => {
            validateNumber(number);
        };
        expect(validate).toThrow('Informe um número natural não nulo');
    });

    it('Must return error for a invalid number "0" ', () => {
        const number = 0;
        const validate = () => {
            validateNumber(number);
        };
        expect(validate).toThrow('Informe um número natural não nulo');
    });

});

describe('Checks if a number is prime', ()=>{
    it('Must return true for a prime number', ()=>{
        const number = 7;
        const result = isPrime(number);
        expect(result).toBe(true);
    });

    it('Must return false for a not prime number', ()=>{
        const number = 8;
        const result = isPrime(number);
        expect(result).toBe(false);
    })
});

describe('Get the prime numbers from an array of numbers', ()=>{
    it('Must return a array of prime numbers', ()=>{
        const numbers = [1,2,3,4,5,6,7,8,9,10];
        const expectedResult = [2,3,5,7];
        const result = getPrimeNumbers(numbers);
        expect(result).toEqual(expectedResult);
    });

    it('Must return a empty array', ()=>{
        const numbers = [4,6,8];
        const expectedResult = [];
        const result = getPrimeNumbers(numbers);
        expect(result).toEqual(expectedResult);
    });
});

describe('Get the prime numbers from an array of numbers', ()=>{
    it('Must return a array of prime numbers', ()=>{
        const numbers = [1,2,3,4,5,6,7,8,9,10];
        const expectedResult = [2,3,5,7];
        const result = getPrimeNumbers(numbers);
        expect(result).toEqual(expectedResult);
    });

    it('Must return a empty array', ()=>{
        const numbers = [4,6,8];
        const expectedResult = [];
        const result = getPrimeNumbers(numbers);
        expect(result).toEqual(expectedResult);
    });
});

describe('Get the factors of a number', ()=>{
    it('Must return an array with the number 45 factors', ()=>{
        const numbers = 45;
        const expectedResult = [1,3,5,9,15,45];
        const result = getFactors(numbers);
        expect(result).toEqual(expectedResult);
    });

    it('Must return an array with the number 1 factors', ()=>{
        const numbers = 1;
        const expectedResult = [1];
        const result = getFactors(numbers);
        expect(result).toEqual(expectedResult);
    });
});