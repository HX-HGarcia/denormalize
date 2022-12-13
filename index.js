const { users, orders } = require("./data");

/*
The 'normalize' function will receive 2 parameters.

1. "people": Array of users
2. "purchases": Array of orders

The normalize recursive function must  merge the two arrays into one, in such a way that we obtain an array of users
with an attribute "orders", where all the orders belonging to that user will be found. 

The way we identify an order for a user is by its order attribute "userId" */

function normalize(people, purchases) {
  // code here:
  if (!purchases.length) return people;
  const [purchase, ...rest] = purchases;
  const { userId, ...restPurchase } = purchase;
  const user = people.find((user) => user.id === userId);
  if (!user.orders) user.orders = [];
  user.orders.push(restPurchase);
  return normalize(people, rest);
}

console.log(normalize(users, orders));

module.exports = normalize;
