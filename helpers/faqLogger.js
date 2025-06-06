import fs from 'fs/promises'; // para usar await
const path = './data/faqs.json';

export default async function logQuestion(message, username) {
  if (!message.trim().endsWith('?')) {
    console.log(`No es pregunta: "${message}"`);
    return;
  }

  console.log(`Pregunta detectada: "${message}" de ${username}`);

  let faqs = {};
  try {
    const data = await fs.readFile(path, 'utf8');
    faqs = JSON.parse(data);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('❌ Error leyendo archivo de preguntas:', err);
      return;
    }
    // archivo no existe, empezamos con objeto vacío
  }

  if (!faqs[message]) {
    faqs[message] = {
      count: 1,
      firstAsked: new Date().toISOString(),
      users: [username]
    };
  } else {
    faqs[message].count++;
    if (!faqs[message].users.includes(username)) {
      faqs[message].users.push(username);
    }
  }

  try {
    await fs.writeFile(path, JSON.stringify(faqs, null, 2));
    console.log(`Pregunta actualizada: "${message}"`);
  } catch (err) {
    console.error('❌ Error guardando archivo de preguntas:', err);
  }
}
