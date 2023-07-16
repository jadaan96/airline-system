'use strict';
require("dotenv").config()
const port =process.env.PORT || 3000
const http=`http://localhost:${port}`
const io = require("socket.io-client")
let host = `http://localhost:${port}/airline`
const socket = io.connect(http)
let socket2 = io.connect(host)



socket.on('newFlight', payload =>{
     setTimeout(()=>{
          console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`);
          socket.emit('took-off', payload)
          socket2.emit('took-off',payload)

     },4000)
     setTimeout(() => {
         
          console.log(`Pilot: flight with ID ${payload.Details.flightID} Arrived`);
          socket.emit('Arrived', payload)

}, 7000);

})


