export default function rewards({ client, channel, message }) {
  const command = message.trim().split(' ')[0].toLowerCase();

  if (command === '!rewards') {
    const rewardsMessage = `**Rewards:**
1. Social media points.
2. Share with friends.
3. Join special events.`;
    client.say(channel, rewardsMessage);
  }
}