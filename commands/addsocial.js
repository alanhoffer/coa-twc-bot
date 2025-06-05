export default async function addSocialCommand({ client, channel, tags, message, userService }) {
    const args = message.trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === '!addsocial') {
        if (args.length < 3) {
            client.say(channel, `@${tags.username}, correct usage: !addsocial <nickname> <socialType> <socialId>`);
            return;
        }

        const [nickname, socialType, socialId] = args;

        try {
            await userService.addSocialToNickname(nickname, socialType, socialId);
            client.say(channel, `@${tags.username}, social media ${socialType} successfully added for nickname ${nickname}.`);
        } catch (error) {
            client.say(channel, `@${tags.username}, error: ${error.message}`);
        }
    }
}
