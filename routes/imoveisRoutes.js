const express = require('express');
const router = express.Router();
const imoveisController = require('../controllers/imoveisController');

router.get('/getImoveis', (req,res) => {
    imoveisController.getImoveis(req,res);
});

router.post('/insertCasa',(req,res) => {
    imoveisController.insertCasa(req,res);
});

router.post('/insertApartamento',(req,res)=> {
    imoveisController.insertApartamento(req,res);
});

module.exports = router;