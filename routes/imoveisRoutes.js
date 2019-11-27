const express = require('express');
const router = express.Router();
const imoveisController = require('../controllers/imoveisController');

router.get('/getBairros', (req,res) => {
    imoveisController.getBairros(req,res);
});

router.post('/insertCasa',(req,res) => {
    imoveisController.insertCasa(req,res);
});

router.post('/insertApartamento',(req,res)=> {
    imoveisController.insertApartamento(req,res);
});

module.exports = router;