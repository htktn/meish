# Meish

## 最初にやること

```sh
$ make build
$ make setup # 各種セットアップ
$ make up　# 起動

# 他のコマンドは meish/Makefile に書いてある。
```

ここまでやった時点で上手く行っていれば、[http://localhost:3000/](http://localhost:3000/)でRailsの初期画面が、[http://localhost:8080/](http://localhost:8080/)でReactの初期画面が見れるはず。。

## backend

[http://localhost:3000/](http://localhost:3000/)

```sh
$ make migrate/up # => rails db:migrate
$ make console # => rails c

$ make back/shell # コンテナに入る

# その他コマンド
# e.g.
$ docker-compose run back bundle exec rails g model Hoge
```

## frontend

[http://localhost:8080/](http://localhost:8080/)

```sh
$ make front/shell # コンテナに入る

# その他コマンド
# e.g.
$ docker-compose run front npm install
```

## db

```sh
$ make mysql # mysqlのコンソールに入る
# mysql>
```
