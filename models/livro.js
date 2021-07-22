const mongoose = require("mongoose");

const Livro = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    autores: {
        type: Array,
        required: true
    },
    numPaginas: {
        type: Number,
        required: true
    },
    paisOrigem: {
        type: String,
        required: true
    },
    lancamento: {
        type: Date,
        required: true
    },
    sinopse: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

mongoose.model("livro", Livro);