const AirLines= require('../models/airLines');

const getAllAirLines=(req,res)=>{
    res.send({massage:'all good',AirLines})
}
const addNewAirLines=(req,res)=>{
    AirLines.push(req.body.AirLine)
    res.send({massage:'add a new air line'})
}
const updateAirLineById=(req,res)=>{
    airLineIndex=findAirLineById(req,AirLines)
    if(airLineIndex > -1){
        AirLines[airLineIndex]=req.body.airLine
        res.send({massage:'update air line'})
    }
    res.send({massage:'air line not found'})
}
const deleteAirLineById=(req,res)=>{
    airLineIndex=findAirLineById(req,AirLines)
    if(airLineIndex > -1){
        AirLines.splice(airLineIndex,1)
        res.send({massage:'air line deleted'})
    }
    res.send({massage:'air line not found'})
}
const getAirLineById=(req,res)=>{
    airLineIndex=findAirLineById(req,AirLines)
    if(airLineIndex > -1){
        res.send({massage:'air line found',airLine:AirLines[airLineIndex]})
    }
}
const getAirLinesByContry=(req,res)=>{
    airLinesNewArray=findAirLinesByContry(req,AirLines)
    if(airLinesNewArray.length>0){
        res.send({massage:'air line by contry found',airLinesNewArray})
    }
    res.send({massage:'air line not found'})
}
const getAirLineByName=(req,res)=>{
    airLineIndex=findAirLineByName(req,AirLines)
    res.send({massage:'air line found',the_Air_line:AirLines[airLineIndex]})
}

function findAirLineById(req,arr){
    wanntedItem=arr.find(item=>item.id== req.params.id);
    itemIndex=arr.indexOf(wanntedItem);
    return itemIndex;
}
function findAirLinesByContry(req,arr){
    const airLinesNewArray=[];
    arr.forEach(item => {
        if(item.OriginCountry==req.params.OriginCountry){
            airLinesNewArray.push(item)
        }
    });
    return airLinesNewArray;
}
function findAirLineByName(req,arr){
    wanntedItem=arr.find(item=>item.companyName==req.params.companyName);
    itemIndex=arr.indexOf(wanntedItem)
    return itemIndex;
}
module.exports={getAllAirLines,addNewAirLines,updateAirLineById,deleteAirLineById,getAirLineById,getAirLinesByContry,getAirLineByName}