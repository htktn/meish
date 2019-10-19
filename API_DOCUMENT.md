# APIの仕様書

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [API一覧](#api%E4%B8%80%E8%A6%A7)
  - [GET /cards](#get-cards)
  - [GET /cards/:id](#get-cardsid)
  - [POST /cards](#post-cards)
  - [PUT /cards](#put-cards)
  - [DELETE /cards](#delete-cards)
  - [GET /themes](#get-themes)
- [テンプレート](#%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88)
  - [GET /hoge](#get-hoge)
- [APIのmock](#api%E3%81%AEmock)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## API一覧

### GET /cards

交換した名刺の一覧を取得する。

**response**

Content-Type: application/json

body  

```json
{
  "cards": [
    {
      "id": 1,
      "name": "hoge太郎",
      "informations"
      "user_id": 12
    }
  ]
}
```

### GET /cards/:id

名刺の詳細を表示する。

**request**

Content-Type: application/json

body
 
```json
{
  "user_id": 12
}
```

**response**

Content-Type: application/json

body  

```json
{
  "id": 1,
  "email": "hoge@example.com",
  "phone_number": 00000000000,
  "role": "ホゲホゲ大学大学院一年",
  "address": "ホゲホゲホゲ",
  "url": "https://github.com/tsmrkk/meish/edit/master/API_DOCUMENT.md",
  "user_id": 12
}
```

### POST /cards

カードを作成する。

**request**

Content-Type: application/json

body
 
```json
{
  "informations": [
    {
      "content": "08047338027",
      "type_id":"phone_number"
    }, 
    {
      "content": "koki827tt@gmail.com",
      "type_id": "email"
    },
    {
      "content": "川口",
      "type_id": "address"
    }
  ],
  "role": "ホゲホゲ大学大学院一年",
  "name": "津村光輝",
  "kana": "つむらこうき",
  "theme_id": 1,
  "user_id": 12,
  "access_token": "fdsafjklsafjsaklj"
}
```

**response**

Content-Type: application/json

成功した時：status 200 OK

失敗した時：status 400 BAD REQUEST

### PUT /cards

カードの情報を更新する。

**request**

Content-Type: application/json

body
 
```json
{
  "id": 1,
  "email": "hoge@example.com",
  "phone_number": 00000000000,
  "role": "ホゲホゲ大学大学院一年",
  "address": "ホゲホゲホゲ",
  "url": "https://github.com/tsmrkk/meish/edit/master/API_DOCUMENT.md",
  "user_id": 12
}
```

**response**

Content-Type: application/json

成功した時：status 200 OK

失敗した時：status 404 NOT FOUND	

### DELETE /cards

カードを削除する。

**request**

Content-Type: application/json

body
 
```json
{
  "id": 1,
  "user_id": 1
}
```

**response**

Content-Type: application/json

成功した時：status 200 OK

失敗した時：status 404 NOT FOUND	

### GET /themes

テーマ一覧を取得する。

**response**

Content-Type: application/json

body  

```json
{
  "themes": [
    {
      "id": 1
    }
  ]
}
```

## テンプレート

### GET /hoge

[説明]

**request**

Content-Type: application/json

body
 
```json
{
  "hoge": 1
}
```

**response**

Content-Type: application/json

body  

```json
{
  "hoge": 1
}
```

## APIのmock

```sh
$ make back/mock # mockサーバー起動　常時必要なわけではなさそうなので、必要な時だけ起動してください
```

下記のURLでmockの一覧が見られます。

http://localhost:3003/ 

mockを追加したい時は、[こちらのリンク](https://qiita.com/Lurium/items/313f8f770a710b5ed188)を参考にしてback/mock.jsonに必要なjsonを追加してください。
