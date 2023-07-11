'use strict';
require("dotenv").config()
const port =process.env.PORT || 3001
const http=`http://localhost:${port}`
const io = require("socket.io-client")
const socket = io.connect(http)


// require('../pilot/pilot')
// require('../system/system')


socket.on('newFlight' , (payload) =>{
    console.log(`Manager : new flight with ID : ${payload.Details.flightID} has been scheduled.`); 
    // console.log(`Flight : ` , payload); 
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`);

})
