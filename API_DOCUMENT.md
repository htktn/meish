<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [API一覧](#api%E4%B8%80%E8%A6%A7)
  - [GET /cards](#get-cards)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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
