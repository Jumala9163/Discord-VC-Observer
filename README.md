# Discord-VC-Observer-Bot

## About

このBOTはDiscordのVCの入退室を監視して指定のチャンネルに通知するBOTです
</br>
また、指定したVCの入退室検知を無効にすることもできます
</br>
使用方法についてはこの下を読んでください

## Requirement

・node.js `(^16.9.0)`
</br>
・discord.js `(14.11.0)`
</br>
</br>

## How to use

</br>

まずはこのリポジトリを任意の場所にクローンしてください

```bash
git clone https://github.com/Kome-Lab/Discord-VC-Observer-Bot.git
```

</br>

クローンしたらクローンした先のフォルダーに入っている`config.json.example`をコピーして`config.json`に名前を変更してください
</br>
変更後テキストエディタで`config.json`の中身を設定してください

</br>

`config.json`の中身について

```json
"DISCORD_BOT_TOKEN": "ここにBOTのトークン",
"DISCORD_BOT_STATUS_MESSAGE": "ここにBotのステータスメッセージ",
"IGNORED_CHANNELS_ID": ["ここに無視するチャンネルのID", "複数追加はこのようにしてください"],
"SEND_LOG_CHANNEL_ID": "ここに入退室通知をするチャンネルのid"
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

©2022 [Jumala9163](https://github.com/Jumala9163) & [Kome-Lab](https://github.com/Kome-Lab)

[Released under the MIT license](
https://github.com/Jumala9163/Discord-VC-Observer-Bot/blob/main/LICENSE.md)
