// 必要な物を召喚
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

// jsonをロード
var config = require('./config.json');

// TOKEN確認
if (config.DISCORD_BOT_TOKEN == undefined) {
    console.error("TOKENが設定されていません。");
    process.exit(0);
}

// ログイン完了通知
client.on("ready", () => {
    console.log(`ログイン完了: ${client.user.tag}`);
    client.user.setActivity(config.DISCORD_BOT_STATUS_MESSAGE, { type: ActivityType.Watching });
});

// 着火
client.on('voiceStateUpdate', (oldState, newState) => {
    const old_chid = oldState.channelId;
    const new_chid = newState.channelId;
    const ignoredChannels = config.IGNORED_CHANNELS_ID;

    if (ignoredChannels.includes(new_chid)) {
        console.log(`入室通知対象外のVCチャンネル[ ${new_chid} ]`);
        return;
    }

    if (ignoredChannels.includes(old_chid)) {
        console.log(`退出通知対象外のVCチャンネル[ ${old_chid} ]`);
        return;
    }

    if (old_chid !== new_chid) {
        if (newState.channel !== null) {
            client.channels.cache.get(config.SEND_LOG_CHANNEL_ID).send(`${newState.member.user.tag}が<#${new_chid}>に入室しました。\n\nようこそ! :laughing:`);
        }

        if (oldState.channel !== null) {
            client.channels.cache.get(config.SEND_LOG_CHANNEL_ID).send(`${oldState.member.user.tag}が<#${old_chid}>を退出しました。\n\n乙～～ :wave:`);
        }
    }
});

// ログイン
client.login(config.DISCORD_BOT_TOKEN);