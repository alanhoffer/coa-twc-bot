export default function web({ client, channel, message }) {
    const command = message.trim().split(' ')[0].toLowerCase();

    if (command === '!discord') {
        const socialsMessage = `**Join our Discord:**\n <https://www.clashofadventurers.com/>`;
        client.say(channel, socialsMessage);
    }
}