// server.js
const express = require('express');
const multer = require('multer');
const countPdfPages = require('./countPdfPages');

const app = express();
const upload = multer();

app.post('/count-pages', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        const numPages = await countPdfPages(req.file.buffer);
        res.json({ pages: numPages });
    } catch (error) {
        res.status(500).json({ error: 'Error processing PDF' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
