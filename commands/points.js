export default async function pointsCommand({ client, channel, tags, message, userService }) {
    const command = message.trim().split(' ')[0].toLowerCase();

    if (command === '!points') {
        const username = tags.username;
        let nickname;
        try {
            nickname = await userService.getNicknameBySocialId('twitch', username);
        } catch (error) {
            console.error('Error obteniendo nickname:', error);
            client.say(channel, `@${username}, Por favor regístrate !web.`);
            return;
        }

        if (!nickname) {
            client.say(channel,
                `@${username} Por favor regístrate !web.`
            );
            return;
        }

        try {
            const points = await userService.getPoints(nickname);
            client.say(channel,
                `Hola, @${username}! Tienes ${points} Points.`
            );
        } catch (error) {
            console.error('Error obteniendo Points:', error);
            client.say(channel, `@${username} Ocurrió un error al obtener tus Points.`);
        }
    }

}

