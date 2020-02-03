# comanda-server

# Categoria

## GET all categories

```localhost:3000/api/categorias```

## POST category

```localhost:3000/api/categoria```

```Headers
Content-Type	application/json
Bodyraw (application/json)
{
	"name":"Massas",
	"PointId": 1
}
```

## GET category by id

```localhost:3000/api/categoria/:id```

## DELETE category by id

```localhost:3000/api/categoria/:id```

# Ponto

## GET all points

```localhost:3000/api/pontos```

## POST point

```localhost:3000/api/ponto```

```Headers
Content-Type	application/json
Bodyraw (application/json)
{
	"name":"Teste"
	
}
```

## GET point by id

```localhost:3000/api/ponto/:id```

## DELETE point by id

```localhost:3000/api/ponto/:id```

# Comanda

## GET all tabs

```localhost:3000/api/comandas```

## POST tab

```localhost:3000/api/comanda```

```Headers
Content-Type	application/json
Bodyraw (application/json)
{
	"TableId":1
	
}
```

## GET point by id

```localhost:3000/api/comanda/:id```

## DELETE point by id

```localhost:3000/api/comanda/:id```

# Pedido

## GET all orders

```localhost:3000/api/pedidos```

## POST order

```localhost:3000/api/pedido```

```Headers
Content-Type	application/json
Bodyraw (application/json)
{
	"TabId":1,
	"SizeId":1
	
}
```

## GET order by id

```localhost:3000/api/pedido/:id```

## DELETE order by id

```localhost:3000/api/pedido/:id```

# Tamanho

## GET all sizes

```localhost:3000/api/tamanhos```

## POST size

```localhost:3000/api/tamanho```

```Headers
Content-Type	application/json
Bodyraw (application/json)
{
	"name":"Médio",
	"ProductId":3,
	"price":45.00,
	"default":true
	
}
```

## GET size by id

```localhost:3000/api/tamanho/:id```

## DELETE size by id

```localhost:3000/api/tamanho/:id```

# Mesa

## GET all tables

```localhost:3000/api/mesas```

## POST table

```localhost:3000/api/mesa```

```Headers
Content-Type	application/json
Bodyraw (application/json)
{
	"name":"02",
	"status":"livre",
	"isActive":true
	
}
```

## GET table by id

```localhost:3000/api/mesa/:id```

## DELETE table by id

```localhost:3000/api/mesa/:id```

# Produto

## POST product

```localhost:3000/api/produto```

```Headers
Content-Type	application/json
Bodyraw (application/json)
{
	"name":"Macarronada Bolonhesa",
	"CategoryId": 4,
	"inStock": "true"
	
}
```

## GET all products

```localhost:3000/api/produtos```

## DELETE product by id

```localhost:3000/api/produto/:id```

## GET product by id

```localhost:3000/api/produto/:id```
