# 名刺

```sh
$ make build
$ make setup # 各種セットアップ
$ make up　# 起動
```

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

# fontend

```sh
$ make front/shell # コンテナに入る
```

# db

```sh
$ make mysql # mysqlのコンソールに入る
# mysql>
```
