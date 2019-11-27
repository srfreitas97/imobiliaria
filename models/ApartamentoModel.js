const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ApartamentoSchema = new Schema({
    bairro : String,
    valorAluguel : String,
    numeroQuartos : Number,
    numSuites : Number,
    numSalasEstar : Number,
    numSalasJantar : Number,
    numVagasGaragem : Number,
    area : Number,
    armarioEmbutido : Boolean,
    descricao : String,
    andar : Number,
    valorCondominio : Number,
    portaria24h : Boolean
});

module.exports = mongoose.model('Apartamento',ApartamentoSchema);