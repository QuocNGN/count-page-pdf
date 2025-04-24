// countPdfPages.js
const pdfParse = require('pdf-parse');

async function countPdfPages(fileBuffer) {
    try {
        const data = await pdfParse(fileBuffer);
        return data.numpages;
    } catch (error) {
        console.error('Lỗi khi đọc file PDF:', error);
        return 0;
    }
}

module.exports = countPdfPages;
