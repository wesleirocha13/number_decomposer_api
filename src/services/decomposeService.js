
//Função que obtem os divisores de um número
const getFactors = (number)=>{

    if(number===1) return [number];

    const maxFactor = Math.sqrt(number);
    const isEven = (number % 2) === 0;
    const AmountToIncrement = isEven ? 1 : 2;
    const factors = [1, number];
    let currentFactor = isEven ? 2 : 3;

    for (currentFactor; currentFactor <= maxFactor; currentFactor += AmountToIncrement) {
      if (number % currentFactor === 0){
        factors.push(currentFactor);
        const pair = number / currentFactor;
        pair !== currentFactor && factors.push(pair);
      }
    }
    factors.sort(function(a, b) {
        return a - b;
    });
    return factors;
}

//Função que retorna os números primos contidos em um array
const getPrimeNumbers = (numbers)=>{
    return numbers.filter((number)=>{
        if(number === 1) return false;
        return isPrime(number);
    })    
}

//Verifica se um número é primo
const isPrime = (number)=>{
    const maxNumber = Math.sqrt(number);
    const isEven = (number % 2) === 0;
    let interactionNumber = isEven ? 2 : 3;
    const AmountToIncrement = isEven ? 1 : 2;

    for(interactionNumber; interactionNumber <= maxNumber; interactionNumber+=AmountToIncrement){
        if(number % interactionNumber === 0) return false;   
    } 
    return number > 1;
}

//Verifica se o número é um número natural não nulo
const validateNumber = (number)=>{
    const signNumber = Math.sign(number);
    if(signNumber <=0 || isNaN(signNumber)) throw Error('Informe um número natural não nulo');
    return true;
}

module.exports = { getFactors, getPrimeNumbers, isPrime, validateNumber };