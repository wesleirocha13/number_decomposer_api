# number_decomposer_api

> API feita em Node.js, que recebe como entrada um número natural não nulo e retorna todos os seus divisores e os seus divisores primos.

> O projeto foi executado usando o YARN 1.22.11 e Node.js 14.16.0.

## Scripts disponíveis

> Executar no diretório raiz do projeto:

### `yarn install`

Instala as dependências do projeto.
### `yarn dev`

Executa a API em modo de desenvolvimento.\
Abra [http://localhost:8080/decompose/45](http://localhost:8080/decompose/45) para visualizar a decomposição do número 45 pelo navegador. Caso queira fazer a decomposição de outro número, basta alterar o número contido na url.

### `yarn test`

Executa os testes em modo de monitoramento, que faz reexecutar sempre que acontece modificações.

> Usar a mesma versão do Node.js se encontrar problemas de execução, para isso basta utilizar a ferramenta nvm ([Node Version Manager](https://github.com/nvm-sh/nvm)).