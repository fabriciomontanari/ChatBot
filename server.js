const PORT = process.env.PORT || 3002;
const express = require('express');
const mongoose = require('mongoose');
const messageRouter = require('./controllers/messageController');

const app = express();
const http = require('http').Server(app); 
const io = require('socket.io')(http);

mongoose.connect('mongodb+srv://jaimejm341:z1wQ0zJMdhqKlCzw@casoestudio.ab5ob1r.mongodb.net/?retryWrites=true&w=majority&appName=CasoEstudio').then(() => {
    console.log('Conexión exitosa a MongoDB');
}).catch((err) => {
    console.error('Error al conectar a MongoDB:', err.message);
});

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/messages', messageRouter);

io.on('connection', (socket) => {
    console.log('Usuario conectado');
});

http.listen(PORT, () => { 
    console.log(`Servidor levantado en el puerto ${PORT}`); 
});
