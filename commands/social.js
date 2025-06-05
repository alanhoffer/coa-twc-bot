export default function socials({ client, channel }) {
  const socialsMessage = `**Follow us on our social media:**
**Twitch:** <https://www.twitch.tv/bija>
**YouTube:** <https://www.youtube.com/@bijagaming>
**Twitter:** <https://twitter.com/BijaGaming>
**Discord:** <https://discord.gg/bija>
**TikTok:** <https://www.tiktok.com/@bijagaming>
**Instagram:** <https://www.instagram.com/bijagaming/>
**Facebook:** <https://www.facebook.com/bijagaming>`;
  client.say(channel, socialsMessage);
}
