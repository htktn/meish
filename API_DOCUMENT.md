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

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## API一覧

### GET /cards

交換した名刺の一覧を取得する。

**response**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>
<br>  

```json
{
  "cards": [
    {
      "id": 1,
      "email": "hoge@example.com",
      "phone_number": 00000000000,
      "role": "ホゲホゲ大学大学院一年",
      "address": "ホゲホゲホゲ",
      "url": "https://github.com/tsmrkk/meish/edit/master/API_DOCUMENT.md",
      "user_id": 12
    }
  ]
}
```
</details>

### GET /cards/:id

名刺の詳細を表示する。

**request**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>
<br>
 
```json
{
  "user_id": 12
}
```
</details>

**response**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>
<br>  

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
</details>

### POST /cards

カードを作成する。

**request**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>
<br>
 
```json
{
  "email": "hoge@example.com",
  "phone_number": 00000000000,
  "role": "ホゲホゲ大学大学院一年",
  "address": "ホゲホゲホゲ",
  "url": "https://github.com/tsmrkk/meish/edit/master/API_DOCUMENT.md",
  "user_id": 12
}
```

</details>

**response**

Content-Type: application/json

成功した時：status 200 OK

失敗した時：status 400 BAD REQUEST

### PUT /cards

カードの情報を更新する。

**request**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>
<br>
 
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

</details>

**response**

Content-Type: application/json

成功した時：status 200 OK

失敗した時：status 404 NOT FOUND	

### DELETE /cards

カードを削除する。

**request**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>
<br>
 
```json
{
  "id": 1,
  "user_id": 1
}
```

</details>

**response**

Content-Type: application/json

成功した時：status 200 OK

失敗した時：status 404 NOT FOUND	

### GET /themes

テーマ一覧を取得する。

**response**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>
<br>  

```json
{
  "themes": [
    {
      "id": 1
    }
  ]
}
```
</details>

## テンプレート

### GET /hoge

[説明]

**request**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>
<br>
 
```json
{
  "hoge": 1
}
```

</details>

**response**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>
<br>  

```json
{
  "hoge": 1
}
```
</details>
