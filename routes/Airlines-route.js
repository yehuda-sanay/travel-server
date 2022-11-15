const airlinesRouter = require("express").Router();
const {getAllAirLines,addNewAirLines,updateAirLineById,deleteAirLineById,getAirLineById,getAirLinesByContry,getAirLineByName} = require('../controllers/Airlines-ctl')

airlinesRouter.get('/',getAllAirLines)
airlinesRouter.post('/addNewAirLines',addNewAirLines)
airlinesRouter.put('/updateAirLineById/:id',updateAirLineById)
airlinesRouter.delete('/deleteAirLineById/:id',deleteAirLineById)
airlinesRouter.get('/getAirLineById/:id',getAirLineById)
airlinesRouter.get('/getAirLinesByContry/:OriginCountry',getAirLinesByContry)
airlinesRouter.get('/getAirLineByName/:companyName',getAirLineByName)

module.exports={airlinesRouter}