export default async function rankingCommands({ client, channel, tags, message, userService }) {
    const command = message.trim().split(' ')[0].toLowerCase();

    if (command === '!ranking') {
        try {
            const topUsers = await userService.getTopUsers();
            if (topUsers.length === 0) {
                client.say(channel, '❌ No users with Points were found.');
                return;
            }

            // Prepara el ranking en texto para Twitch
            let rankingMsg = '🏆 Top 3 most level users:\n';
            topUsers.slice(0, 3).forEach((user, idx) => {
                rankingMsg += `${idx + 1}. ${user.nickname}\n`;
            });

            client.say(channel, rankingMsg.trim());
            // Si quieres enviar imagen, tendrás que subirla a un servidor y pasar el link

        } catch (err) {
            console.error(err);
            client.say(channel, '❌ An error occurred while generating the ranking.');
        }
    }
}