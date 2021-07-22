# apiBookList
Lista de Livros

O projeto consiste em uma rest api Node.js que recebe requisições e as cadastra em um banco de dados MongoDB.

è uma aplicação simples feita para estudo e teste.

A aplicação aceita as operações GET, POST, PUT e DELETE e o middleware CORS está configurado para permitir apenas a url http://localhost:8083/

O código da aplicação é bem simples e intuitivo e foi desenvolvido através de um curso de Node.js que fiz.

As operações podem ser feitas através do Insomnia ou aplicações similares.

A estrutura do banco de dados é apresentada abaixo através de uma simulação de cadastro:

{
	"url":"https://anapioficeandfire.com/api/books/1",
  "titulo": "A Guerra dos Tronos",
  "isbn":"978-0553103540",
	"autores": [
		"George R. R. Martin"
	],
	"numPaginas": 694,
	"paisOrigem": "EUA",
	"lancamento": "1996-08-01T00:00:00",
	"sinopse": "Em A guerra dos tronos, o primeiro livro da aclamada série As crônicas de gelo e fogo..."
}

Aproveitem, testem e não (se) levem muito a sério.
