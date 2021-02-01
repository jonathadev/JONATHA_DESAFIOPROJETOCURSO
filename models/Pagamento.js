const db = require('./db')

const Pagamento = db.sequelize.define('pagamentos', {
    nome: {
        type: db.Sequelize.STRING
    },
   // valor: {
     //   type: db.Sequelize.DOUBLE
    //},
    email: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.INTEGER
    },
    
    w3review: {
        type: db.Sequelize.STRING
    },
})

//Criar a tabela
//Pagamento.sync({force: true})

module.exports = Pagamento