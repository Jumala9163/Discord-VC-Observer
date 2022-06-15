# Discord-VC-Observer-Bot

## Requirement
・node.js `(16.15.1)`
<br>
・discord.js `(13.8.0)`
<br>
・dotenv `(16.0.1)`
<br>
<br>


## How to use

<br>

まずはこのリポジトリを任意のローカルの場所にクローンしてください
``` 
git clone https://github.com/Jumala9163/Discord-VC-Observer-Bot.git
```
<br>

クローンしたらクローンした先のフォルダーに入っている`.env.sample`をコピーして`.env`に名前を変更してください
<br>
変更後テキストエディタで`.env`の中身を設定してください

<br>

`.env`の中身について
```
DISCORD_BOT_TOKEN = "ここにBOTのトークン"
DISCORD_BOT_STATUS_MESSAGE = "設定したいステータスメッセージ"
SEND_LOG_CH = "入退室の通知を出したいチャンネルのID"
IGNORE_CH_1～5 = "反応させたくないVCチャンネルのID"    　
```

<br>

次にパッケージのインストールをしてください
```
npm install
```
<br>

完了したら実行すれば動き出すはずです
```
npm start
```

<br><br>

##### ©2022 [Jumala9163](https://github.com/Jumala9163) & [Kome-Lab](https://github.com/Kome-Lab)
[Released under the MIT license](
https://github.com/Jumala9163/Discord-VC-Observer-Bot/blob/main/LICENSE.md)