const bcrypt = require('bcrypt')

const userModel = require('../Model/User')

// add user
async function addUser (req, res) {
  try {
    const user = await userModel.addUser(req, res)
    res.send(user)
  } catch (error) {
    res.send(error)
  }
}

module.exports = { addUser }
