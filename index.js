const express = require("express");

const mongoose = require("mongoose");

require("./models/livro");
const Livro = mongoose.model("livro");

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

    Livro.find({}).then((livro) => {
        return res.json(livro);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum livro encontrado"
        })
    })

});


app.get("/livro/:id", (req, res) => {

    Livro.findOne({ _id: req.params.id }).then((livro) => {
        return res.json(livro);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Esse id não corresponde a nenhum livro do banco"
        })
    })

});


app.post("/livro", (req, res) => {
    const livro = Livro.create(req.body, (err) => {
        if (err) {
            return res.status(400).json({
                error: true,
                message: "Erro: Livro não foi cadastrado com sucesso"
            })
        }

        return res.status(200).json({
            error: false,
            message: "Sucesso: " + req.body.titulo + " cadastrado com sucesso"
        })

    });
});

app.put("/livro/:id", (req, res) => {
    const livro = Livro.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) {
            return res.status(400).json({
                error: true,
                message: "Erro: Não foi editado"
            })
        }

        return res.json({
            error: false,
            message: "Editado com sucesso"
        })
    })
})


app.listen(8083, () => {
    console.log("Rodando na 8083");
});