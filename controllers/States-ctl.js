const {states}= require("../models/contrys")

const getAllStates=(req,res)=>{
    res.send({massage:'all states', states})
}


module.exports={getAllStates}