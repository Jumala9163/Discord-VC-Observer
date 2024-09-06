// 必要な物を召喚
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
require('date-util');

// jsonをロード
var config = require('./config.json');

// 時刻取得
function getnow() {
  var dt = new Date();
  var formatted = dt.toFormat("YYYY-MM-DD-HH24-MI-SS");
  return formatted;
}

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
    const old_uid = oldState.member.user.id;
    const new_chid = newState.channelId;
    const new_uid = newState.member.user.id;

    const ignoredChannels = config.IGNORED_CHANNELS_ID;
    const ignoredUsers = config.IGNORED_USER_IDS;
    
    const joinMessage = config.CHANNEL_JOIN_MESSAGE;
    const leaveMessage = config.CHANNEL_LEAVE_MESSAGE;
    
    const notify_ch = config.SEND_LOG_CHANNEL_ID;
    
    if (newState.channel !== null && oldState.channel === null) {
      if (ignoredUsers.includes(new_uid)) {
        console.log(`[${getnow()}] 入室通知対象外のユーザー[ ${new_uid} ]`);
        return;
      }
      else if (ignoredChannels.includes(new_chid)) {
        console.log(`[${getnow()}] 入室通知対象外のVCチャンネル[ ${new_chid} ]`);
        return;
      }
      else {
        client.channels.cache.get(notify_ch).send(`${newState.member.user.tag}が<#${new_chid}>に入室しました。\n\n ${joinMessage}`);
        return;
      }
    }

    if (newState.channel !== null && oldState.channel !== null) {
      if (ignoredUsers.includes(new_uid)) {
          console.log(`[${getnow()}] 移動通知対象外のユーザー[ ${new_uid} ]`);
          return;
      }
      else if (ignoredChannels.includes(new_chid)) {
          console.log(`[${getnow()}] 移動通知対象外のVCチャンネル[ ${new_chid} ]`);
          return;
      }
      else {
          client.channels.cache.get(notify_ch).send(`${newState.member.user.tag}が別のチャンネルから\n<#${new_chid}>に入室しました。\n\n ${joinMessage}`);
          return;
      }
    }

    if (oldState.channel !== null && newState.channel === null) {
      if (ignoredUsers.includes(old_uid)) {
          console.log(`[${getnow()}] 退出通知対象外のユーザー[ ${old_uid} ]`);
          return;
      }
      else if (ignoredChannels.includes(old_chid)) {
          console.log(`[${getnow()}] 退出通知対象外のVCチャンネル[ ${old_chid} ]`);
          return;
      }
      else{
          client.channels.cache.get(notify_ch).send(`${oldState.member.user.tag}が<#${old_chid}>を退出しました。\n\n ${leaveMessage}`);
          return;
      }
    }
  });

// ログイン
client.login(config.DISCORD_BOT_TOKEN);