# Meish

## 最初にやること

```sh
$ make build
$ make setup # 各種セットアップ
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
