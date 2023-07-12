// 'use strict';

// const eventsPool = require('./events');


const eventsPool = require('./events');

// eventsPool.on("pilot" ,(payload) =>{
//      setTimeout(() =>{
//           console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`);
//           eventsPool.emit('took-off' , payload)
//      } , 4000)
//      setTimeout(() =>{
//           console.log(`Pilot: flight with ID ${payload.Details.flightID} Arrived`);
//           eventsPool.emit('Arrived' , payload)
//           console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`);
//      },7000)
// })

eventsPool.on('newFlight' , (payload) =>{
     setTimeout(()=>{
          console.log(`Pilot: flight with ID ${payload.Details.flightID} took-off`);
          eventsPool.emit('took-off', payload)

     },4000)
     setTimeout(() => {
         
          console.log(`Pilot: flight with ID ${payload.Details.flightID} Arrived`);
          eventsPool.emit('Arrived', payload)

}, 7000);
})