const mongoose = require('mongoose');

const STRING_CONNACTION= process.env.CONNACTION_STRING;
mongoose.conmect(STRING_CONNACTION,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    .then(()=>{console.log("connection succeed...");})
    .catch((err) => {console.error("connection felid",err.nassage);})

module.exports = mongoose.connection;