export default async function pointsCommand({ client, channel, tags, message, userService }) {
    const command = message.trim().split(' ')[0].toLowerCase();

    if (command === '!points') {
        const username = tags.username;
        console.log(`Received !points command from ${username} in channel ${channel}`);
        let nickname;
        try {
            nickname = await userService.getNicknameBySocialId('twitch', username);
        } catch (error) {
            console.error('Error getting nickname:', error);
            client.say(channel, `@${username}, please register at !web.`);
            return;
        }

        if (!nickname) {
            client.say(channel,
                `@${username} please register at !web.`
            );
            return;
        }

        try {
            const points = await userService.getPoints(nickname);
            client.say(channel,
                `Hello, @${username}! You have ${points} Points.`
            );
        } catch (error) {
            console.error('Error getting points:', error);
            client.say(channel, `@${username} An error occurred while retrieving your points.`);
        }
    }

}
