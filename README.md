# BackEnd

Esse Projeto é a parte do back-end de um desafio de fullstack

## Sobre Aplicação
Essa API prove a comunicação do [front-end](https://github.com/robsonmvieira/bten-front-end-challenge)
Ela permite as Operações CRUD de um usuário bem como Autenticação atráves de token


## Tecnologias Usadas
- NodeJs
- JWT
- Bcrypt
- Express
- Eslint
- Jest
- Docker
- PostgreSQL
- Cors
- Babel

## clonar O Projeto

```
  git clone https://github.com/robsonmvieira/bten-api-challenge.git

```


## Development server
- entre no repositório instale as dependencias
  ```
    yarn
  ```
- Você precisa ter docker instalado na sua máquina para rodar o projeto leia mais [aqui](https://www.docker.com/)
- crie um arquivo .env na raiz do seu diretório(Há um exemplo em .env.example)
- Substitua os valores com o seus dados
- rode o docker componse :
  ```
    docker-compose up
  ```
- inicialize o server de desenvolvimento:
  ```
    yarn run dev
  ```

## Usando a Aplicação
 - Você pode testar usando um cliente Http como Insominia ou Postman
 - Ou clonando o [front-end](https://github.com/robsonmvieira/bten-front-end-challenge) da aplicação
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Testes Unitários

Para rodar os testes unitários use:
```
yarn run test
```
Ou:
```
yarn run test:verbose
```
## Build

 para Buildar para produção use:

 ```
  yarn run build
 ```
## Author
Desenvolvido por Robson Maia - robsonmvieira@gmail.com

