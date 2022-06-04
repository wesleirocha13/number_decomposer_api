const { getFactors, getPrimeNumbers, validateNumber } = require('../services/decomposeService')

//Obtem os fatores e os fatores primos de um número
exports.get = async (req, res) => {
    try {
        const number = Number(req.params.number);
        validateNumber(number);
        const factors = getFactors(number);
        const primeFactors = getPrimeNumbers(factors);

        res.status(200).send({
            number,
            factors,
            primeFactors
        });
    } catch (err) {
        res.status(400).send({
            message: (err && err.message) || "Falha ao processar sua requisição"
        });
    }
}