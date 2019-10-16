# APIの仕様書

## テンプレート

### GET /hoge

[説明]

<details><summary>request body（クリックして展開）</summary>

```json
{
  "hoge": 1
}
```

</details>

<details><summary>response body（クリックして展開）</summary>

```json
{
  "hoge": 1
}
```
</details>

## API一覧

### GET /cards
交換した名刺の一覧を取得する。

<details><summary>response body（クリックして展開）</summary>

```json
{
  "cards": [
    {
      "email": "hoge@example.com",
    }
  ]
}
```
