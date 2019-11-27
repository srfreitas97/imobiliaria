const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CasaSchema = new Schema({
    bairro : String,
    valorAluguel : Number,
    numeroQuartos : Number,
    numSuites : Number,
    numSalasEstar : Number,
    numVagasGaragem : Number,
    area : Number,
    armarioEmbutido : Boolean,
    descricao : String
});

module.exports = mongoose.model('Casa',CasaSchema);