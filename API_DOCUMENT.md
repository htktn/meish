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
