const bcrypt = require('bcrypt')
const { urlencoded } = require('express')
const { groupBy, keyBy,getById } = require('lodash')

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

//get user
async function getUser(req,res){
  try{
    const users = await userModel.getUser(req,res);
    // const arr = [
    //   {dpid:1,rtid:1,retialer_id:997222},
    //   {dpid:1,rtid:20,retialer_id:2818951},
    //   {dpid:1,rtid:2,retialer_id:2819015},
    //   {dpid:2,rtid:12,retialer_id:2819015},
    //   {dpid:2,rtid:21,retialer_id:2819015},
    //   {dpid:2,rtid:32,retialer_id:2819015},
    // ];
    // const gorupByDpId = groupBy(arr,"dpid");
    // for (const key in gorupByDpId) {
      //  let dpWiseData = keyBy(gorupByDpId[key],'rtid');
    //    gorupByDpId[key] = dpWiseData;
    // }
    
    res.send(users);
  }
  catch(error){
    res.send(error);
  }
}

//update user
async function updateUser(req,res){
  try{
    const user = await userModel.updateUser(req,res);
    res.send(user);
  }
  catch(error){

  }
}

module.exports = { addUser,getUser,updateUser }
