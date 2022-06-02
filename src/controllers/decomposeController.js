exports.get = async (req, res) => {
    try {
        const { number } = req.params;
        res.status(200).send(`Funcionou ${number}`);
    } catch (err) {
        res.status(400).send({
            message: (err && err.message) || "Falha ao processar sua requisição"
        });
    }
}