const {knex} = require("../knex-file");
const bcrypt = require("bcrypt");

const addUser = async(req,res) =>{
    // return new Promise(async (resolve, reject) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const {name,email} = req.body;

            const userInsert = await knex('users').insert({
                name,
                email,
                password:hashedPassword
            });
            // resolve(userInsert);
            
            // return userInsert
            return {
                message: "Insert successful",
                status:201,
                data: userInsert
            }
        } catch (error) {
            // res.send(error.message);
            // reject(false, error.message);
            return {
                message: error.message,
                status:500,
                data: ''
            }
        }
    }
   

    // if(userInsert){
    //     console.log("User Added");
    //     return userInsert;
    // }else{
    //     console.log("User Not Added");
    //     return;
    // }

// }

module.exports = {addUser};