export default function rewards({ client, channel }) {
  const rewardsMessage = `**Available Rewards:**
- **Daily Rewards**: You can claim daily rewards every 24 hours.
- **Weekly Rewards**: Every week you can claim special rewards.
- **Quests**: Complete quests to earn additional rewards.
- **Special Events**: Participate in events to win unique rewards.

**Don’t forget to claim your rewards regularly!**`;
  client.say(channel, rewardsMessage);
}
