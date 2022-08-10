---
title: 集約と並び替え
category: sql
comment: true
---

## COUNT

```sql
SELECT COUNT(*) AS “個数”
FROM Expense;
```

特定のカラムを指定すると、`NULL`の行はカウントされない.
`COUNT(*)`での指定では、`NULL`を含む行もカウントされる.

## SUM
```sql
SELECT SUM(value)
FROM Expense;
```

## AVG
```sql
SELECT AVG(value)
FROM Expense;
```

## MAX, MIN
```sql
SELECT MAX(value), MIN(value)
FROM Expense;
```

```sql
SELECT MAX(date), MIN(date)
FROM Expense;
```

## DISTINCT + 集約関数

```sql
SELECT COUNT((DISTINCT category)
FROM Expense;
```

## グループに切り分ける

```sql
-- categoryごとの行数を数える
SELECT category, COUNT(*)
FROM Expense
GROUP BY category;
```

*`GROUP BY`句は`FROM`の後ろに書くこと.*

```sql
-- WHERE句で絞り込む
SELECT category, COUNT(*)
FROM Expense
WHERE value IS NULL
GROUP BY category;
```

### 注意点
- SELECT文には定数、集約関数、GROUP BY句で指定した列名しか書けない
- GROUP BY句には列の別名は使えない
- GROUP BY句での出力順序はランダム
- WHERE句には集約関数は書かないこと.

## 集約結果への条件指定
```sql
-- 集約結果から指定の条件に合致するデータを抽出する
SELECT category, COUNT(*)
FROM Expense
WHERE value IS NULL
GROUP BY category
HAVING COUNT(*) = 1;
```

*集約キーに対する条件指定は、WHEREでもHAVINGのどちらでもできるが、処理速度を考慮すると、WHEREで指定した方がいい*

## 検索結果の並び替え

```sql
SELECT id, name, date
FROM Expense
ORDER BY date DESC;
```

`ORDER BY`句はSELECT文の最後に書くこと.
複数のソートキーの指定もできる.

```sql
-- SELECT に含まれていない列でもソートキーに指定できる
SELECT id, name, date
FROM Expense
ORDER BY category ASC;
```


```sql
-- 集約関数もソートキーに指定できる
SELECT category, COUNT(*)
FROM Expense
GROUP BY category
ORDER BY COUNT(*);
```


売値の合計が買値の合計の2/3以上の金額のcategoryを抜き出す.

```sql
SELECT category, SUM(value), SUM(sell)
FROM Expense
GROUP BY category
HAVING SUM(sell) > SUM(value)/1.5;
```











