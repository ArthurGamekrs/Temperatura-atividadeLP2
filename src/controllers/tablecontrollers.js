const Table = require('../models/table.js');

const index = (req, res) => {
  const tables = Table.readAll(); //Gera arquivo json a partir da função readAll do arquivo Table.js

  res.render('tables/index.njk', { tables }); //O json tables será compilado/ renderizado no arquivo de visualização index.njk da pasta views/tables/ 
};

const readAll = (req, res) => {
  const tables = Table.readAll();

  res.json(tables);
};

module.exports = { index, readAll }