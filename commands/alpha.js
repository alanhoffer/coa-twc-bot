export default function alpha({ client, channel, message, username }) {
  const command = message.trim().split(' ')[0].toLowerCase();

  if (command === '!alpha') {
    client.say(channel, `@${username} 🎮 Alpha in December | Exclusive access | Give feedback and earn rewards 🚀`);
  }
}
