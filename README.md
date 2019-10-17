# Meish
## 目次

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [最初にやること](#%E6%9C%80%E5%88%9D%E3%81%AB%E3%82%84%E3%82%8B%E3%81%93%E3%81%A8)
- [コマンドまとめ](#%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E3%81%BE%E3%81%A8%E3%82%81)
  - [backend](#backend)
  - [frontend](#frontend)
  - [db](#db)
  - [ログを見たい時](#%E3%83%AD%E3%82%B0%E3%82%92%E8%A6%8B%E3%81%9F%E3%81%84%E6%99%82)
- [本番環境への移行](#%E6%9C%AC%E7%95%AA%E7%92%B0%E5%A2%83%E3%81%B8%E3%81%AE%E7%A7%BB%E8%A1%8C)
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

APIのdocumentはここ

https://github.com/tsmrkk/meish/blob/master/API_DOCUMENT.md#get-themes

## 最初にやること

```sh
$ make build
$ make setup # 各種セットアップ（最初の一回だけで良いように実装したはず）
$ make up　# 起動

$ make down # remove container

# 他のコマンドは meish/Makefile に書いてある。
```

ここまでやった時点で上手く行っていれば、[http://localhost:3000/](http://localhost:3000/)でRailsの初期画面が、[http://localhost:8080/](http://localhost:8080/)でReactの初期画面が見れるはず。。

## コマンドまとめ
### backend

[http://localhost:3000/](http://localhost:3000/)

コードを変更したらその都度make upしよう。

```sh
$ make migrate/up # => rails db:migrate
$ make console # => rails c
$ make back/install # => bundle install

$ make back/shell # コンテナに入る

# その他コマンド
# e.g.
$ docker-compose run back bundle exec rails g model Hoge
```

### frontend

[http://localhost:8080/](http://localhost:8080/)

frontendはmake upし直さなくても変更が反映されるはず。

```sh
$ make front/shell # コンテナに入る

# その他コマンド
# e.g.
$ docker-compose run front npm install
```

### db

```sh
$ make mysql # mysqlのコンソールに入る
# mysql>
```

### ログを見たい時

```sh
$ docker-compose logs -ft back # backのログ
$ docker-compose logs -ft front # frontのログ
$ docker-compose logs -ft db # dbのログ
```

## 本番環境への移行

```sh
$ export RAILS_ENV=production
$ docker-compose run back bundle exec rails db:create RAILS_ENV=production
$ docker-compose run back bundle exec rails db:migrate RAILS_ENV=production
```

- nginxのコンテナ立てる
- 共有ネットワーク作成
- ドメインで振り分け
