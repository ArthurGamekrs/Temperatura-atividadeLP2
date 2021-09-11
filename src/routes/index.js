const express = require('express');
const router = express.Router(); //A constante router recebe o método Router() do módulo express
const tablesController = require('../controllers/tablecontrollers.js');

router.get('/', (req,res) => res.redirect('/tables/index')); //Redireciona a requisição / para o arquivo index
router.get('/tables/index', tablesController.index);
router.get('/tables', tablesController.readAll); //A requisição ocorre pelo método get com caminho '/tables', e a resposta retorna conteúdo json da função readAll

module.exports = router;
