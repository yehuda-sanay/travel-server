const express= require('express');
const cors= require('cors');
const statesRouter=require("./routes/State-route")

const app=express();
const port= 8080;

app.use(express.json({ extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors())

app.use("./states",statesRouter)

app.get('/',(reg, res)=>{
    res.send({massage: "success"})
})
app.listen(port, () => {
    console.log(`server listen on port: ${port}`);
})