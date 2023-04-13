const Sequelise= require('sequelize')
require('dotenv').config()

const sequelize= new Sequelise(
    process.env.db_name,
    process.env.db_User,
    process.env.db_password,
    {
        host:process.env.db_host,
        dialect:'mysql'
    }
)

module.exports= sequelize
