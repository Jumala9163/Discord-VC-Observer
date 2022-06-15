//必要な物を召喚
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES] });

//.envを使えるようにする
require('dotenv').config();

//TOKEN確認
if (process.env.DISCORD_BOT_TOKEN == undefined) {
    console.error("TOKENが設定されていません。");
    process.exit(0);
}

//ログイン完了通知
client.on("ready", () => {
    console.log(`ログイン完了: ${client.user.tag}`);
    client.user.setActivity(process.env.DISCORD_BOT_STATUS_MESSAGE, { type: 'WATCHING' })
});

//着火
client.on('voiceStateUpdate', (oldState, newState) => {
    const old_chid = oldState.channelId;
    const new_chid = newState.channelId;
        if (new_chid == process.env.IGNORE_CH_1 || new_chid == process.env.IGNORE_CH_2 || new_chid == process.env.IGNORE_CH_3 || new_chid == process.env.IGNORE_CH_4 || new_chid == process.env.IGNORE_CH_5) {

            return console.log(`入室通知対象外のVCチャンネル[ ${newState.channelId} ]`);

        } else {
            if (newState.channel !== null) {

                return client.channels.cache.get(process.env.SEND_LOG_CH).send(`${newState.member.user.tag}が<#${newState.channelId}>に入室しました。\n\nようこそ! :laughing:`);

            }
        }
        if (old_chid == process.env.IGNORE_CH_1 || old_chid == process.env.IGNORE_CH_2 || old_chid == process.env.IGNORE_CH_3 || old_chid == process.env.IGNORE_CH_4 || old_chid == process.env.IGNORE_CH_5) {

            return console.log(`退出通知対象外のVCチャンネル[ ${oldState.channelId} ]`);

        } else {
            if (oldState.channel !== null) {

                return client.channels.cache.get(process.env.SEND_LOG_CH).send(`${oldState.member.user.tag}が<#${oldState.channelId}>を退出しました。\n\n乙～～ :wave:`);

            }
        }
});

//ログイン
client.login(process.env.DISCORD_BOT_TOKEN);