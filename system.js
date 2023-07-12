

const eventsPool = require('./events');




eventsPool.on('newFlight', (payload) => {

  payload.event = 'new-flight'
    payload.time = new Date(),
  
      console.log(`Flight : ` , payload); 
     
})
eventsPool.on("took-off",(payload) =>{

  payload.event = 'took_off'
  payload.time = new Date(),

  console.log('Flight : ' , payload);
})

eventsPool.on("Arrived",(payload) =>{
payload.event = 'Arrived'
payload.time = new Date(),

console.log('Flight : ' , payload);
// console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`);

})
// eventsPool.emit('controls', flight)



require('./manager')
require('./pilot')
