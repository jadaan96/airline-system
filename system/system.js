'use strict'
require('dotenv').config();
const port = process.env.PORT || 3000
// const {flight} =require('./fire-events')

const io = require('socket.io')(port)
const airLine = io.of('/airline')
const uuid=require('uuid').v4
const queue= {}

// console.log({flight});


io.on("connection", socket => {
  console.log("the system is live in id", socket.id);
  // socket.on('light', () => {

   

  socket.on('newFlight', (payload) => {
    io.emit('newFlight',(payload))
      payload.event = 'new-flight'
        payload.time = new Date();
        
          console.log(`Flight : ` , payload); 
          let id= uuid()
          queue[id]=payload
          io.emit('get-all', { id, queue: queue });
            })
    socket.on("took-off",(payload) =>{

        payload.event = 'took_off'
        payload.time = new Date(),
        console.log('Flight : ' , payload);
        airLine.emit("airline",payload)


      })

  
      socket.on("Arrived",(payload) =>{
        payload.event = 'Arrived'
        payload.time = new Date(),
        
        console.log('Flight : ' , payload);
       
        })
        socket.on('stord-flight',()=>{
          Object.keys(queue).forEach(id => {
            socket.emit('get-all', {
              id,
              queue: queue[id]
              
            })
      
          })
          // io.emit('get-all',{ id, queue: queue });

        })

          socket.on('finished_flight', ()=>{
            Object.keys(queue).forEach(id => {
              socket.emit('fligt',id)
              delete queue[id]
            })
            console.log(queue,'the final queue');
     
          })


})

// })



airLine.on('connection', (socket) => {
  console.log('Connected to the air line space,', socket.id);
  
});



