const mongoose = require('mongoose');

mongoose.connect('mongodb//localhost:27017/imobiliaria',(err) => {
    throw new Error(err.message);
});

module.exports = mongoose;  