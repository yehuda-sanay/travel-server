const States= require("../models/contrys")

const getAllStates=(req,res)=>{
    res.send({massage:'all states', States})
}
const addNewState=(req,res)=>{
    States.push(req.body)
    res.send({massage:'add a new state'})
}
const updateState=(req,res)=>{
    const stateIndex = findStateIndex(req)
    if (stateIndex > -1) {
        States[stateIndex] = req.body.state
        return res.send({massage:'state updat'})
    }
        res.send({massage:'state not found'})       
}
const deleteState=(req,res)=>{
    const stateIndex = findStateIndex(req);
    if(stateIndex > -1) {
        States.splice(stateIndex,1)
    }
    res.send({massage:'state delete'})
}
const getStateById=(req,res)=>{
    const stateIndex = findStateIndex(req);
    if(stateIndex > -1){
    const wontedState= States[stateIndex];
    return res.send({massage:'state found',wontedState})}
    res.send({massage:'state not found'})
}
function findStateIndex(req){
    const stateItem = States.find(state => state.id == req.params.id);
    const startState = States.indexOf(stateItem);
    return startState;
}
module.exports={getAllStates,addNewState,updateState,deleteState,getStateById}