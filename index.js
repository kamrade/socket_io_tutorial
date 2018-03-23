const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3200;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Tech namespace
const tech = io.of('/tech');

tech.on('connection', (socket) => {

  console.log('::user connected');

  socket.on('message', (msg) => {
    tech.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('::user disconnected');
    tech.emit('message', 'user disconnected');
  });

});
