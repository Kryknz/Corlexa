const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
const anime = require("anime-actions");
module.exports = {
  name: `poke`,
  commandType: "Conversation🎙️",
  description: `	I know you like anime poke`,
  ᴜʟᴛʀᴏɴʍօʀɛ: `
	I know you like anime poke`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, args) {
    try {
      await υℓтяσηℓιєηт.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        {
          url: await anime.poke(),
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: `*☢️ᴜʟᴛʀᴏɴ ⧴ ᴜꜱᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴛʜᴇ ᴀᴅᴠᴀɴᴄᴇ ᴡᴀʏ!*

Genre: Anime-Conversation
NSFW: No`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
