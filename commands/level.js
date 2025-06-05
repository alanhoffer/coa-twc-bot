import { getPointsBar } from "../helpers/getPointsBar.js";

export default async function levelCommands({ client, channel, tags, message, userService }) {
    const command = message.trim().split(' ')[0].toLowerCase();

    if (command === '!rank') {
        const username = tags.username;

        try {
            // Obtenemos nickname desde tu servicio usando "twitch" como plataforma
            const nickname = await userService.getNicknameBySocialId('twitch', username);
            if (!nickname) {
                client.say(channel, `@${username} Registrate en la !web.`);
                return;
            }

            const userStats = await userService.getUserStatsByNickname(nickname);
            if (!userStats) {
                client.say(channel, `@${username} Registrate en la !web.`);
                return;
            }

            console.log(userStats)
            // Mostrar stats como texto (puedes formatearlo a gusto)
            const pointsBar = getPointsBar(userStats.pointsCurrent, userStats.pointsToNextLevel);
            client.say(channel, ` @${username} ----- 🏅 Rank: #${userStats.rank}   Nivel: ${userStats.level} - 🧪 PTS: ${userStats.pointsCurrent}/${userStats.pointsToNextLevel} ${pointsBar}`);


        } catch (error) {
            console.error(error);
            client.say(channel, `@${username} Ocurrió un error al obtener tus stats.`);
        }
    }
}
