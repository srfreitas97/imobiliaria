const mongoose = require('mongoose');
const Casa = require('../models/CasaModel');
const Apartamento = require('../models/ApartamentoModel');

module.exports.insertCasa = async (req,res) => {
    try{

        mongoose.connect('mongodb+srv://admin:admin@cluster0-nshzt.mongodb.net/imobiliaria?retryWrites=true&w=majority',{ useNewUrlParser: true });
        const casa = new Casa({
            bairro : req.body.bairro,
            valorAluguel : req.body.valorAluguel,
            numeroQuartos : req.body.numQuartos,
            numSuites : req.body.numSuites,
            numSalasEstar : req.body.numSalasEstar,
            numVagasGaragem : req.body.numVagasGaragem,
            area : req.body.area,
            armarioEmbutido : req.body.armarioEmbutido,
            descricao : req.body.descricao,
        })
        casa.save();
        res.status(200).json(casa);
    }
    catch(err){
        res.status(400);
    }
}

module.exports.insertApartamento = async (req,res) => {

    mongoose.connect('mongodb+srv://admin:admin@cluster0-nshzt.mongodb.net/imobiliaria?retryWrites=true&w=majority',{ useNewUrlParser: true });

    try {
        const apartamento = new Apartamento({
            bairro : req.body.bairro,
            valorAluguel : req.body.aluguel,
            numeroQuartos : req.body.numQuartos,
            numSuites : req.body.numSuites,
            numSalasEstar : req.body.numSalasEstar,
            numSalasJantar : req.body.numSalasJantar,
            numVagasGaragem : req.body.numVagasGaragem,
            area : req.body.area,
            armarioEmbutido : req.body.armarioEmbutido,
            descricao : req.body.descricao,
            andar : req.body.andar,
            valorCondominio : req.body.valorCondominio,
            portaria24h : req.body.portaria24h
        });
        apartamento.save();
        res.status(200).json(apartamento);
    } catch (error) {
        res.status(400);
    }

}

module.exports.getBairros = async (req,res) => {
    try{

        mongoose.connect('mongodb+srv://admin:admin@cluster0-nshzt.mongodb.net/imobiliaria?retryWrites=true&w=majority');
        casas = await Casa.find().select('bairro');
        apartamentos = await Apartamento.find().select('bairro');
        let bairros = [];
        casas.forEach(element => {
            bairros.push(element.bairro);
        });
        apartamentos.forEach(element => {
            bairros.push(element.bairro);
        });
        res.status(200).json(bairros);       
    }
    catch(err){
        res.status(400);
    }
}