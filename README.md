

# Denormalize

##### English below

### Introducción
#### A veces nos encontramos en una situación donde debemos combinar (mergear) 2 listas de datos (arrays) de manera condicional, en 1 sola. Y ya que no siempre estaremos seguros de su longitud, necesitamos que sea una solución Recursiva

#

### Consigna

#### Crea una funcion "denormalize" que dados dos arreglos y una foreign key " [users] , [orders] , 'userId' ", debe mergear el arreglo de ordenes dentro del de usuarios, de tal manera que cada usuario tenga una propiedad "ordenes" donde encontraremos un arreglo con los objetos de cada una.
#### Nota: Los objetos de cada "orden" NO pueden mantener la propiedad userId que tenían.

#

### Ejemplo
#### Input:
```javascript
const users = [{id: 1, name: "Franco", age: 27}, {id: 2, name: "Lucia", age: 22}]
const orders = [{amount: 4000, userId: 1, date: 01/08/2022}]
denormalize(users, orders, "userId")
```


#### Output:
```javascript
[{id: 1, name: "Franco", age: 27, orders: [{amount: 4000, date: 01/08/2022}]}, {id: 2, name: "Lucia", age: 22}]
```
#
#


### Introduction
#### Sometimes we find ourselves in a situation where we need to merge 2 conditional arrays into 1. And since we will not always be sure of their length, we need it to be a Recursive solution

#

### Command

#### Create a function "denormalize" that given two arrays and a foreign key " [users] , [orders] , 'userId' ", must merge the orders array into the users array, so that each user has a property "orders" where we will find an array with the objects of each one.
#### Note: The objects of each "order" can NOT keep the userId property they had.
