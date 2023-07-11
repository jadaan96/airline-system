'use strict'
require('dotenv').config();
const port = process.env.PORT || 3001
// const {flight} =require('./fire-events')

const io = require('socket.io')(port)
const airLine = io.of('/airline')


// console.log({flight});


io.on("connection", socket => {
  console.log("the system is live in id", socket.id);
  socket.on('light', (flight) => {

  // setInterval(() => {
    flight.event = 'new-flight'
    flight.time = new Date(),

    io.emit('newFlight', flight)

    flight.event = 'new-flight'
    flight.time = new Date(),
      console.log(`Flight : `, flight);

    setTimeout(() => {
      io.emit('took-off', flight)

      flight.event = 'took-off'
    flight.time = new Date(),
      console.log(`Flight : `, flight);
      airLine.emit("airline",flight)
    }, 4000)

    setTimeout(() => {
  
      io.emit('Arrived', flight)
      flight.event = 'Arrived'
    flight.time = new Date(),
      console.log(`Flight : `, flight);

    }, 7000)
  // }, 10000)
})

})


// console.log(flight,"asdasdasdasd");

airLine.on('connection', (socket) => {
  console.log('Connected to the air line space,', socket.id);


});






