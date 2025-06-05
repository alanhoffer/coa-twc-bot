export default function alpha({ client, channel }) {
  const command = message.trim().split(' ')[0].toLowerCase();

  if (command === '!alpha') {
    client.say(channel, `@${username} 🎮 Alpha en diciembre | Acceso exclusivo | Da feedback y gana recompensas 🚀`);
  }
}
