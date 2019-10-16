<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [API一覧](#api%E4%B8%80%E8%A6%A7)
  - [GET /cards](#get-cards)
  - [GET /themes](#get-themes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# APIの仕様書

## テンプレート

### GET /hoge

[説明]

**request**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>

```json
{
  "hoge": 1
}
```

</details>

**response**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>

```json
{
  "hoge": 1
}
```
</details>

## API一覧

### GET /cards

交換した名刺の一覧を取得する。

**response**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>

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

### GET /themes

テーマ一覧を取得する。

**response**

Content-Type: application/json

<details><summary>body（クリックして展開）</summary>

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
