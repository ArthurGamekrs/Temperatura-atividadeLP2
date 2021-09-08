let key = 1;
const tables = [];

function create(tableValues){
  const table = { id: key++, ...tableValues } //O valor informado em seed é adicionado ao json table com o incremento key

  tables.push(table) //Adiciona o json table no array tables que contém todos os dados apresentados quando inicializados 

  return table;
}

function readAll(){
  return tables;
}

module.exports = { create, readAll };