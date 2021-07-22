const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão Bem-Sucedida");
}).catch((erro) => {
    console.log("Conexão Mal-Sucedida" + erro);
});

app.get("/", (req, res) => {
    return res.json({ titulo: "Livro 1" });
});


app.listen(8083, () => {
    console.log("Rodando na 8083");
});