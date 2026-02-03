📝 Plataforma de Perguntas e Respostas
Uma aplicação web completa desenvolvida para facilitar a troca de conhecimento, onde usuários podem publicar dúvidas e responder a outros membros da comunidade.

## Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias:

Backend: Node.js

Frontend: EJS (Embedded JavaScript templating)

Banco de Dados: MySQL Workbench 8.0 CE

ORM: Sequelize 

Estilização: CSS3 / Bootstrap

## Funcionalidades
[x] Página Inicial: Listagem de todas as perguntas realizadas.

[x] Sistema de Perguntas: Formulário para envio de novas dúvidas.

[x] Sistema de Respostas: Possibilidade de responder a perguntas específicas.

[x] Persistência de Dados: Armazenamento seguro de informações no MySQL.


## Configuração e Instalação
1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:

Node.js (LTS recomendado)

MySQL Workbench 8.0 CE

2. Clonando o Repositório
```bash
git clone https://github.com/seu-usuario/ask-and-discuss.git
cd ask-and-discuss
```
3. Configurando o Banco de Dados
Abra o MySQL Workbench e crie o banco de dados:

SQL
```bash
CREATE DATABASE ask_discuss;
```
4. Instalando Dependências
No terminal, execute:

```bash
npm install
```
5. Executando a Aplicação
```bash
npm start
# Ou, se estiver usando o nodemon:
nodemon index.js
Acesse http://localhost:8080 no seu navegador.
```
## Estrutura do Banco de Dados
O projeto utiliza duas tabelas principais:

Pergunta: Armazena o título e a descrição.

Resposta: Armazena o corpo do texto e a relação com o ID da pergunta original.

----------
Este projeto foi desenvolvido como parte dos meus estudos sobre o ecossistema Node.js, focado em entender como funciona a comunicação entre o front-end dinâmico (EJS)
e um banco de dados relacional (MySQL).
