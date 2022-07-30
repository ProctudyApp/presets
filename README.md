# Proctudy Presets

Proctudy用のプリセットを管理するレポジトリです。

## Contributing

新しいプリセット、もしくは既存のプリセットの改善について提案がある場合は、Issueを作成してください。

また、Pull Requestを送る場合は、以下の手順を参考にしてください。

### 新しいプリセットの提案方法

1. 初めにこのレポジトリをフォークします。
2. `presets`フォルダ内に新しい`.json`ファイルを作成してください。<br>このファイル名がIDとして使用されます。
3. 既存のプリセットを参考に、JSONファイルの中身を編集してください。
4.  `npm install`で依存関係をインストールし、`npm run validate`を実行することでJSONファイルの形式が正しいかどうか検証できます。
5.  `index.json`の`presetIds`に新しく作成したプリセットのIDを追加します。
6.  Pull Requestを送信してください。
