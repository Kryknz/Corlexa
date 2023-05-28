//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../global.js");
exports.premium = async (whatsbot, voxchat, update, store) => {
  if (whatsbot.isSudo) {
    await whatsbot.sendMessage(voxchat.chat, {
      react: {
        text: "🔖",
        key: voxchat.key,
      },
    });
    return await require("../System/library")(whatsbot, voxchat, update, store);
  } else
    await whatsbot.premium.findOne(
      {
        Id: voxchat.sender,
      },
      async (error, userVium) => {
        if (error) return whatsbot.handlerror(whatsbot, voxchat, error);
        if (!userVium) {
          new whatsbot.premium({
            Id: voxchat.sender,
            Limits: 30,
            currTime: Date.now(),
            permTime: 86400000, //3600000
          })
            .save()
            .catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
          return await require("../System/library")(
            whatsbot,
            voxchat,
            update,
            store
          );
        }
        if (userVium.Limits < 1) {
          if (userVium.permTime - (Date.now() - userVium.currTime) > 0) {
            let clock = whatsbot.ms(
              userVium.permTime - (Date.now() - userVium.currTime)
            );
            return await whatsbot.imagebutton(
              whatsbot,
              voxchat,
              `*Dear* _${whatsbot.pushname || whatsbot.Tname}_
> You have used up all your free commands for the day.
*💵Limit:* ${userVium.Limits - 1}/30
*💵Renew:* ${clock.hours}h ${clock.minutes}m ${clock.seconds}s`,
              "./public/whatsbot.jpg"
            );
          }
        } else {
          await whatsbot.sendMessage(voxchat.chat, {
            react: {
              text: "🔖",
              key: voxchat.key,
            },
          });
          userVium.currTime = Date.now();
          userVium.Limits = userVium.Limits - 1;
          userVium.save().catch((error) => whatsbot.handlerror(whatsbot, voxchat, error));
          return await require("../System/library")(
            whatsbot,
            voxchat,
            update,
            store
          );
        }
      }
    );
};
