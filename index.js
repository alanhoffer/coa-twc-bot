import tmi from 'tmi.js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { queryWithReconnect } from './config/conection.js';
import User from './entities/User.js';
import logQuestion from './helpers/faqLogger.js';

dotenv.config();


const userService = new User(queryWithReconnect);

const client = new tmi.Client({
  identity: {
    username: process.env.TWITCH_USERNAME,
    password: process.env.TWITCH_OAUTH
  },
  channels: [process.env.TWITCH_CHANNEL]
});

const commands = {};
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const commandName = file.replace('.js', '');
  const { default: commandFunction } = await import(`./commands/${file}`);
  commands[`!${commandName}`] = commandFunction;
}

client.connect()
  .then(() => console.log('✅ Bot conectado'))
  .catch(err => console.error('❌ Error al conectar:', err));

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  logQuestion(message);

  const command = message.trim().split(' ')[0].toLowerCase();
  const runCommand = commands[command];

  if (runCommand) {
    runCommand({ client, channel, tags, message, userService });
  }
});