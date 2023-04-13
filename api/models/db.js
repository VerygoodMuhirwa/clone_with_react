const Sequelize= require("sequelize")
const sequelise= require('../config/dbConnectonPool')

const data= sequelise.define("User",
{
    ID:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    Firstname:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    Lastname:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    Password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    isAdmin:{
type:Sequelize.BOOLEAN,
defaultValue:true,
    }
   

})

data.sync({alter:true})
.then(()=>console.log("Connected to database"))
.catch((err)=>console.log(err))


module.exports= data
