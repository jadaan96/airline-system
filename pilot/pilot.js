'use strict';
require("dotenv").config()
const port =process.env.PORT || 3000
const http=`http://localhost:${port}`
const io = require("socket.io-client")
const socket = io.connect(http)


socket.on('get-all',payload=>{
     console.log('Flight:',payload.id,payload.queue);
     // socket.emit('finished_flight', payload.id)

})
socket.emit('stord-flight')


socket.on('newFlight', payload =>{
     setTimeout(()=>{
          console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`);
          socket.emit('took-off', payload)
     },4000)
     setTimeout(() => {
         
          console.log(`Pilot: flight with ID ${payload.Details.flightID} Arrived`);
          socket.emit('Arrived', payload)
          socket.emit('finished_flight', payload.id)
          socket.once('fligt',flightid=>{
               console.log(`'Pilot:Sorry i didn't catch this flight ID `,flightid);
               // console.log(`Pilot: Sorry, I didn't catch this flight ID ${x.flightID}`);
          
          
          })

}, 7000);

})


