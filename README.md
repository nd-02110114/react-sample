# React App

Herokuにdeployしました

[Github Manage Page](https://fast-anchorage-30086.herokuapp.com/)

### Personal Access Tokenの準備

srcファイルと同じ階層にlocal.config.jsを配置して、
local.config.jsのACCESS_TOKENに自分の取得したTOKENを入れて以下のコマンドをたたけば準備完了

```
$ cp local.config.template.js local.config.js
```

#### 補足

右側のページには、インクリメントサーチで検索したレポジトリのリストが
左側のページには、ユーザー名を元にした自分のwatchしているリポジトリのリストが表示されています。
また。各リポジトリ名をクリックするとそれぞれ各リポジトリのページに遷移するように実装してあります。
工夫した点は、Material UIを使用し、見やすいUIを意識しました。

まだ、watch,unwatchの処理が終わっていないですが確認よろしくお願いいたします。また以下のページを参考にAPIを叩いてunwatch,watchの切り替えをすることまではわかりましたが、それ以降がまだ時間がなくて進んでいません。

https://developer.github.com/v3/activity/watching/#set-a-repository-subscription
