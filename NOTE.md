# Get All Pokemon

#### `get` `https://pokeapi.co/api/ve/pokemon/?{limit}&{offset}`

#### `Params Explain`

| Type Name |              Explane               |
| :-------: | :--------------------------------: |
|   limit   |        決定獲取多少資料數量        |
|  offset   | 決定要將資料位移多少順序後取得資料 |

#### `return`

```json
{
  "name": "bulbasaur",
  "url": "https://pokeapi.co/api/v2/pokemon/{id}/"
}
```

#### `Types Explain`

| Type Name |              Explain               |
| :-------: | :--------------------------------: |
|   name    |        show pokemon's name         |
|    url    | get more detail about this pokemon |

# Get Pokemon Detail Informations

#### `get` `https://pokeapi.co/api/v2/pokemon/?{name}|{id}`

#### `Params Explain`

| Type Name |    Explain     |
| :-------: | :------------: |
|   name    | pokemon's name |
|    id     |  pokemon's id  |

#### `return`

```json
{
  "abilities": {
    "name": "abilities name",
    "url": "abilities url"
  },
  "move":[...args],
  "species": {
    "name":"pokemon's name",
    "url": "url"
  },
  "sprites": {
    "other": {
        "offcial-artwork": {
            "front_default": "url string"
          }
      }
  }
}
```

#### `Types Explain`

| Type Name |            Explain             |
| :-------: | :----------------------------: |
| abilities |        顯示寶可夢的特性        |
|   move    |     顯示寶可夢可以學的招式     |
| scpecies  | url 中有許多國家的語言可以選擇 |
|  sprites  |       存放寶可夢各種圖片       |
