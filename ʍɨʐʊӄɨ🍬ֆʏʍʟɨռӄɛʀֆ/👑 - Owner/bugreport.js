// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
name: `bugreport`,
𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}bugreport <feature> <Describe Error>`,
async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
try {
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
console.log(
`🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
if (Needs.length === 0) {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄʀǟӄɨռʐ,
chat,
𝓜𝖎𝖟𝖚ӄ𝖎,
ꜱᴇɴᴅᴇʀɪᴅ,
ꜱᴇɴᴅᴇʀeceived,
𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
try {
const jsoncool = JSON.parse(
fs.readFileSync(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`)
);
await jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender + 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
await fs.writeFileSync(
`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
JSON.stringify(jsoncool)
);
await setTimeout(async (error) => {
if (error) console.log(error);
await jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender + 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
await fs.writeFileSync(
`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
JSON.stringify(jsoncool)
);
}, 6000);
} catch (ℓαвєяяσя) {
console.log(ℓαвєяяσя);
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
let content = fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`);
const media = await ӄʀǟӄɨռʐ.prepareMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
content,
MessageType.video,
{
mimetype: `video/gif`,
}
);
await ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
{
contentText: `👋🏽𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢, ${Timers} @${ꜱᴇɴᴅᴇʀeceived},
*Thank you for reporting the bug to the Developers!*
_If Found the report was just for fun then you will be banned by the bot!_


┌────◆➤ 𝐒𝐮𝐩𝐩𝐨𝐫𝐭
*🔥 ɢʀᴏᴜᴘ:* ${_𝔏𝔞𝔟_.HASH}`,
footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
],
headerType: 5,
videoMessage: media.message.videoMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: {
mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
},
}
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
let members = [];
for (var i = 0; i < 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers.length; i++) {
members[i] = 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[i].jid;
}
await ӄʀǟӄɨռʐ
.sendMessage(
`120363039360979234@g.us`,
fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Bug.mp4`),
MessageType.video,
{
mentionedJid: members,
mimetype: `video/gif`,
caption: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_

⚡𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
🐞𝐑𝐞𝐩𝐨𝐫𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${Needs.join(` `)}`,
}
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
await ӄʀǟӄɨռʐ
.sendMessage(
`918250889325@s.whatsapp.net`,
fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Bug.mp4`),
MessageType.video,
{
mimetype: `video/gif`,
caption: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_

⚡𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
🐞𝐑𝐞𝐩𝐨𝐫𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${Needs.join(` `)}`,
}
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
await ӄʀǟӄɨռʐ
.sendMessage(
`918436686758@s.whatsapp.net`,
fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Bug.mp4`),
MessageType.video,
{
mimetype: `video/gif`,
caption: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_

⚡𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
🐞𝐑𝐞𝐩𝐨𝐫𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${Needs.join(` `)}`,
}
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
await ӄʀǟӄɨռʐ
.sendMessage(
`989035024059@s.whatsapp.net`,
fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Bug.mp4`),
MessageType.video,
{
mimetype: `video/gif`,
caption: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_

⚡𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
🐞𝐑𝐞𝐩𝐨𝐫𝐭𝐞𝐝 𝐁𝐲: *${ꜱᴇɴᴅᴇʀɪᴅ}*

🐙=============🐙
${Needs.join(` `)}`,
}
)
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
console.log(ℓαвєяяσя);
}
},
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
