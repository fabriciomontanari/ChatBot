const PORT = process.env.PORT || 44301;

const express = require('express');
const mongoose = require('mongoose');
const messageController = require('./controllers/messageController');

const app = express();
const http = require('http').Server(app); 
const io = require('socket.io')(http);


mongoose.connect('mongodb+srv://fabri:<fabricio23>@cluster0.4grzyf3.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexión exitosa a MongoDB');
})
.catch((err) => {
    console.error('Error al conectar a MongoDB:', err.message);
});

app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/messages', messageController.getAllMessages);
app.post('/api/messages', messageController.createMessage);

io.on('connection', (socket) => {
    console.log('Usuario conectado');
});

http.listen(PORT, () => { 
    console.log(`Servidor levantado en el puerto ${PORT}`); 
});
