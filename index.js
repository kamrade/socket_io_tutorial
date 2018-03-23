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

io.on('connection', (socket) => {
  console.log('user connected');
  socket.emit('message', { mannty: 'Whos own this world?' });
  socket.on('another event', (data) => {
    console.log(data);
  });
});
