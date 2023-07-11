'use strict';
require("dotenv").config()
const port =process.env.PORT || 3001
const http=`http://localhost:${port}`
const io = require("socket.io-client")
const socket = io.connect(http)




socket.on("took-off" ,(payload) =>{
     payload.event = 'took_off'
     payload.time = new Date(),
     console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`);

     // console.log('Flight : ' , payload);
})

socket.on('Arrived' , (payload) =>{
     payload.event = 'Arrived'
     payload.time = new Date(),
     console.log(`Pilot: flight with ID ${payload.Details.flightID} Arrived`);

     // console.log('Flight : ' , payload);
     // console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`);


})
