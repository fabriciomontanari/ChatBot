const messageRepository = require('../repositories/messageRepository');

class MessageService {
    async sendMessage(messageData) {
        return await messageRepository.saveMessage(messageData);
    }

    async getAllMessages() {
        return await messageRepository.getAllMessages();
    }

    async getMessageStatistics() {
        return await messageRepository.getMessageStatistics();
    }
}

module.exports = new MessageService();
