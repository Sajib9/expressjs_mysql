const { knex } = require('../knex-file')
const bcrypt = require('bcrypt')

const addUser = async (req, res) => {
  // return new Promise(async (resolve, reject) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const { name, email } = req.body

    const userInsert = await knex('users').insert({
      name,
      email,
      password: hashedPassword,
      image_path: req.files[0].filename,
    })
    // resolve(userInsert);

    // return userInsert
    return {
      message: 'Insert successful',
      status: 201,
      data: userInsert,
    }
  } catch (error) {
    // res.send(error.message);
    // reject(false, error.message);
    return error
  }
}

const getUser = async (req, res) => {
  try {
    const users = await knex('users').select('*')

    return {
      data: users,
      status: 200,
    }
  } catch (error) {
    return error
  }
}

const updateUser = async (req, res) => {
  try {
    // console.log(req.query.id); query params
    // console.log(req.params.id); (:id)
    const id = req.query.id
 
    const user = await knex('users').where('id', id).update('name', 'sajib');

    return {
      data: user,
      status: 200,
      message: 'Update Successfull',
    }
  } catch (err) {
    return err
  }
}

module.exports = { addUser, getUser, updateUser }
