export default function rulesCommand({ client, channel, message }) {
  const command = message.trim().split(' ')[0].toLowerCase();

  if (command === '!rules') {
    const rulesMessage = `**Channel Rules:**
1. Be respectful to everyone.
2. Keep chat friendly and no spam.
3. Follow moderators' instructions.`;
    client.say(channel, rulesMessage);
  }
}
