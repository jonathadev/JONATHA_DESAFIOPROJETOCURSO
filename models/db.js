const Sequelize = require("sequelize")

//const sequelize = new Sequelize('celke', 'root', '7z^DbF_r!6Wv[`d+',{
    const sequelize = new Sequelize('heroku_391875727dff55b', 'be45e39a4c81f6', '55fadb18',{
    host: 'us-cdbr-east-03.cleardb.com',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}