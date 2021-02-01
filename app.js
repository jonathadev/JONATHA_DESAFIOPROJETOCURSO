const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const moment = require('moment')
const Pagamento = require("./models/Pagamento")


app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/bootstrap", express.static("/node_modules/bootstrap/dist"))

app.use(express.static('public'))


//Rotas
app.get('/pagamento', function(req, res){
    Pagamento.findAll({order: [['id', 'DESC']]}).then(function(pagamentos){
        res.render('pagamento', {pagamentos: pagamentos});
    })
    
});

app.get('/', function(req, res){
    res.render('cad-pagamento');
});

app.post('/add-pagamento', function(req, res){
    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor,
        empresa: req.body.empresa,
        questao: req.body.questao,
        w3review: req.body.w3review
    }).then(function(){
        res.redirect('/pagamento')
        //res.send("Foi concluído com sucesso o registro.!")
    }).catch(function(erro){
        res.send("Erro: Não foi cadastrado com sucesso!" + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>") 
})

app.get('/del-pagamento/:id', function(req, res){
    Pagamento.destroy({
        where: {'id': req.params.id}
    }).then(function(){
        res.redirect('/pagamento');
        /*res.send("Apagado com sucesso!");*/
    }).catch(function(erro){
        res.send("Não apagado com sucesso!");
    })
});

//app.listen(8080);
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });