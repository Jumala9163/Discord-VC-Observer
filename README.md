# Discord-VC-Observer-Bot

## About

このBOTはDiscordのVCの入退室を監視して指定のチャンネルに通知するBOTです
</br>
指定したVCへの入退室通知や指定したユーザーのVCへの入退室通知を無効にすることもできます
</br>
使用方法についてはこの下を読んでください

## Requirement

・node.js `(^20.x.x)`
</br>
・discord.js `(14.16.1)`
</br>
・date-utils `(^1.2.21)`
</br>
</br>

## How to use

</br>

まずはこのリポジトリを任意の場所にクローンしてください

```bash
git clone https://github.com/Kome-Lab/Discord-VC-Observer-Bot
```

</br>

クローンしたらクローンした先のフォルダーに入っている`config.json.example`をコピーして`config.json`に名前を変更してください
</br>
変更後テキストエディタで`config.json`の中身を設定してください

</br>

`config.json`の中身について

```json
"DISCORD_BOT_TOKEN": "BOTトークン",
"DISCORD_BOT_STATUS_MESSAGE": "Botステータスメッセージ",
"CHANNEL_JOIN_MESSAGE": "入室通知の時に送信する一言メッセージ(例:ようこそ！！)",
"CHANNEL_LEAVE_MESSAGE": "退室通知の時に送信する一言メッセージ(例:さようなら～)",
"IGNORED_CHANNELS_ID": ["無視するチャンネルのID", "複数追加はこのようにしてください"],
"IGNORED_USER_IDS": ["無視するユーザーのID","複数追加はこのようにしてください"],
"SEND_LOG_CHANNEL_ID": "入退室通知をするチャンネルのid"
```

</br>

次にパッケージのインストールをしてください

```bash
npm install
```

</br>

完了したら下記のコマンドを実行すれば動き出すはずです

```bash
npm start
```

</br></br>

©2022-2024 [Jumala9163](https://github.com/Jumala9163) & [Kome-Lab](https://github.com/Kome-Lab)

[Released under the MIT license](
https://github.com/Jumala9163/Discord-VC-Observer-Bot/blob/main/LICENSE.md)
