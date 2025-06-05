export default function supportCommand({ client, channel, message }) {
  const command = message.trim().split(' ')[0].toLowerCase();

  if (command === '!support') {
    const supportMessage = `**Need help? Here’s how to contact us:**
- **Discord**: !discord.
- **Web**: !web.`;
    client.say(channel, supportMessage);
  }
}
