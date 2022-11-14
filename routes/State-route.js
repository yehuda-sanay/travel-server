const {getAllStates}=require("../controllers/States-ctl")

const statesRouter = require("express").Router();

statesRouter.get("/", getAllStates)

module.exports={statesRouter};

