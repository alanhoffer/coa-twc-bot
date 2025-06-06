// faqLogger.js
const fs = require('fs');
const path = './faqs.txt';

function logQuestion(message) {
  if (!message.trim().endsWith('?')) return;

  fs.readFile(path, 'utf8', (err, data) => {
    const existing = data ? data.split('\n') : [];
    if (!existing.includes(message)) {
      fs.appendFile(path, message + '\n', err => {
        if (err) console.error('❌ Error guardando pregunta:', err);
      });
    }
  });
}

module.exports = { logQuestion };
