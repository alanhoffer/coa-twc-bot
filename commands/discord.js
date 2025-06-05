export default function web({ client, channel }) {
    const command = message.trim().split(' ')[0].toLowerCase();

    if (command === '!web') {
        const socialsMessage = `**Unete a nuestro discord:**
 <https://www.clashofadventurers.com/>`;
        client.say(channel, socialsMessage);
    }
}