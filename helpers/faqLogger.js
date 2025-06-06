// faqLogger.js
import fs from 'fs'
const path = './data/faqs.txt';

export default function logQuestion(message) {
  if (!message.trim().endsWith('?')) {
    console.log(`No es pregunta: "${message}"`);
    return;
  }

  console.log(`Pregunta detectada: "${message}"`);

  fs.readFile(path, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error('❌ Error leyendo archivo de preguntas:', err);
      return;
    }

    const existing = data ? data.split('\n') : [];
    if (existing.includes(message)) {
      console.log(`Pregunta ya registrada: "${message}"`);
      return;
    }

    fs.appendFile(path, message + '\n', err => {
      if (err) {
        console.error('❌ Error guardando pregunta:', err);
      } else {
        console.log(`Pregunta guardada: "${message}"`);
      }
    });
  });
}