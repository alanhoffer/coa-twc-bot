import { getPointsBar } from "../helpers/getPointsBar.js";

export default async function rankCommands({ client, channel, tags, message, userService }) {
    const command = message.trim().split(' ')[0].toLowerCase();

    if (command === '!rank') {
        const username = tags.username;

        try {
            // Get nickname from your service using "twitch" as platform
            const nickname = await userService.getNicknameBySocialId('twitch', username);
            if (!nickname) {
                client.say(channel, `@${username} Please register at !web.`);
                return;
            }

            const userStats = await userService.getUserStatsByNickname(nickname);
            if (!userStats) {
                client.say(channel, `@${username} Please register at !web.`);
                return;
            }

            console.log(userStats);
            // Show stats as text (you can format as you like)
            client.say(channel, `@${username} ---- 🏅 Rank: #${userStats.rank} 🧪  Adventurer Level: ${userStats.level} - PTS: ${userStats.pointsCurrent}/${userStats.pointsToNextLevel}`);

        } catch (error) {
            console.error(error);
            client.say(channel, `@${username} An error occurred while retrieving your stats.`);
        }
    }
}
