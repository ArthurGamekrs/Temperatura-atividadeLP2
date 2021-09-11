const express = require('express'); //Carrega o módulo express
const nunjucks = require('nunjucks'); //Carrega o módulo nunjucks (permite o processamento Server Side)
const routes = require('./src/routes'); //Carrega a pasta routes/index.js 
const seed = require('./src/seeders'); //Carrega a pasta seed/index.js que contém os modelos iniciais dos dados 

const app = express(); //A variável app recebe o módulo express

app.use(express.static('public')); //Os arquivos da pasta public são acessados por rotas estáticas
app.use(routes); //A aplicação utiliza todas as configurações do arquivo routes/index.js

app.set('view engine', 'njk'); //Início - configuração nunjucks

nunjucks.configure('src/views',{ //Carrega a pasta views que contém os arquivos nunjucks
  express: app,
  autoescape: true,
  noCache: true,
});

seed.up(); //Chama a função up da pasta de reunião de dados (seed)

app.listen(5500, () =>{
  console.log('Server running: http://localhost:5500/tables/index')
});
