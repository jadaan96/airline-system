'use strict';
const faker = require('faker');

const eventsPool = require('./events');
// require('./pilot')
// require('./system')



// eventsPool.on('newFlight', (payload) => {
// })
// eventsPool.on('thankyou' , (payload) =>{
//     console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`);
// })

setInterval(() => {
    let flight = {
        event: 'new-flight',
        time: new Date(),
        Details: {
            airLine: 'Royal Jordanian Airlines',
            flightID: faker.datatype.uuid(),
            pilot: faker.name.firstName(),
            destination: faker.address.city(),
        },
    };
    flight.event = 'new-flight'
    flight.time = new Date(),

    console.log(`Manager : new flight with ID : ${flight.Details.flightID} has been scheduled.`);

     
    eventsPool.emit('newFlight', flight)

}, 10000)
eventsPool.on('Arrived', (flight) => {

    console.log(`Manager: we’re greatly thankful for the amazing flight, ${flight.Details.pilot}`);
    console.log('---------------------------------------------------------------------------------------');

})