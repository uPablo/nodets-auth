# nodets-auth

Projeto em Node e Typescript com login usando JWT.

### Descrição
Criação de uma api auth utilizando o príncipio REST.

### Rotas

`[GET] /list` - Para listagem de todos e-mails cadastrados

`[POST] /register` - Para criação de um usuário simples com e-mail e senha

`[POST] /login` - Para logar o usuário e retornar um token JWT

### Screenshot da aplicação no Postman e seus respectivos retornos
`[GET]`
![nodets-auth-list](https://raw.githubusercontent.com/uPablo/nodets-auth/main/assets/nodets-auth-list.png)

`[POST]`
![nodets-auth-register](https://raw.githubusercontent.com/uPablo/nodets-auth/main/assets/nodets-auth-register.png)

`[POST]`
![nodets-auth-login](https://raw.githubusercontent.com/uPablo/nodets-auth/main/assets/nodets-auth-login.png)

### Renomear o arquivo `.env.example` para `.env` e configurar porta e banco de dados
```
PORT=4000

PG_DB=note_todo_simples
PG_USER=postgres
PG_PASSWORD=
PG_PORT=5432

# if use basic AUTH user:password base64 encoded
AUTH_MODE=basic

# if use jwt AUTH
AUTH_MODE=jwt
JWT_SECRET_KEY=
```

### Importar o arquivo 
`sources/API para Auth.postman_collection.json` no `Postman`

### Importar o banco de dados 
`sources/auths.sql` no banco de dados `postgres`

### Instalação
`npm install`

### Para rodar o projeto
`npm run start-dev`