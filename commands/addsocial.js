export default async function addSocialCommand({ client, channel, tags, message, userService }) {
    const args = message.trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === '!addsocial') {
        const nickname = await userService.getNicknameBySocialId('twitch', username);
        if (!nickname) {
            client.say(channel, `@${username} Please register at !web.`);
            return;
        }
        if (args.length < 3) {
            client.say(channel, `@${tags.username}, correct usage: !addsocial <discord;youtube> <socialId>`);
            return;
        }

        const [socialType, socialId] = args;

        try {
            await userService.addSocialToNickname(nickname, socialType, socialId);
            client.say(channel, `@${tags.username}, social linked.`);
        } catch (error) {
            client.say(channel, `@${tags.username}, error: ${error.message}`);
        }
    }
}
