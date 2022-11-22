//external imports
const dotenv = require("dotenv");
const knexConnect = require("knex");
dotenv.config();
const knex = knexConnect({
    client:'mysql',
    connection:{
        host : process.env.HOST,
        user : process.env.user,
        password : process.env.PASSWORD,
        database : process.env.DATABASE
    }
});

module.exports = {knex};