const EventEmitter = require('events');

const chat = new EventEmitter();

chat.on('message', (username, message) => {
  console.log(`${username}: ${message}`);
});

function sendMessage(username, message, emitter) {
  emitter.emit('message', username, message);
}

sendMessage('Anna', 'Привет всем!', chat);
sendMessage('Mikhail', 'Привет, Анна!', chat);
sendMessage('Olga', 'Как дела?', chat);