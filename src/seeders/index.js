const Table = require('../models/table.js'); //Carregamento do arquivo de modelo

function up(){
  Table.create({
    date:'06/09/2021',
    time:'16:40',
    value:'30°C',
  });

  Table.create({
    date:'08/09/2021', 
    time:'16:12',
    value:'-273,15°C'
  });
}

module.exports = { up };
