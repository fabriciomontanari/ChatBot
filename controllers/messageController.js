const express = require('express');
const router = express.Router();
const messageService = require('../service/messageService');

async function getAllMessages(req, res) {
    try {
        const messages = await messageService.getAllMessages();
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Define la función para enviar un mensaje
async function sendMessage(req, res) {
    try {
        const message = await messageService.sendMessage(req.body);
        res.status(201).json(message);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

router.get('/api/messages/statistics', async (req, res) => {
    try {
        const statistics = await messageService.getMessageStatistics();
        res.status(200).json(statistics);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', getAllMessages);
router.post('/', sendMessage);

module.exports = router;