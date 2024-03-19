const Message = require('../model/message');

class MessageRepository {
    async saveMessage(messageData) {
        const message = new Message(messageData);
        await message.save();
        return message;
    }

    async getAllMessages() {
        return await Message.find();
    }

    async getMessageStatistics() {
        return await Message.aggregate([
            { $group: { _id: '$name', count: { $sum: 1 } } }
        ]);
    }
    
    async getAllMessages() {
        return await Message.find().sort({ timestamp: -1 }); // -1 para orden descendente
    }
}



module.exports = new MessageRepository();
