const {getAllStates,addNewState,updateState,deleteState,getStateById}=require("../controllers/States-ctl")

const statesRouter = require("express").Router();

statesRouter.get("/", getAllStates)
statesRouter.get("/byId:id",getStateById)
statesRouter.post("/addState",addNewState)
statesRouter.put('/updateState:id',updateState)
statesRouter.delete('/deleteState:id',deleteState)

module.exports={statesRouter};

