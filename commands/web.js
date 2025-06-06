export default function webCommand({ client, channel, message }) {
    const command = message.trim().split(' ')[0].toLowerCase();

    if (command === '!web') {
        const webMessage = `**Our website:**\n <https://www.clashofadventurers.com/>`;
        client.say(channel, webMessage);
    }
}
