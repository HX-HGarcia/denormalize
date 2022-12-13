var { users, orders } = require("./data");
const aux = users,
  aux2 = orders;
var chai = require("chai");
var denormalize = require("../index");

var expect = chai.expect;

const ref = {
  id: "ca8c72985282",
  name: "Sebastian",
  address: "AM 5",
  premium: true,
  orders: [
    {
      id: "2566f",
      amount: 2,
      products: ["af1"],
      date: "11/28/2022",
    },
    {
      id: "266de",
      amount: 45,
      products: ["lp2", "af1"],
      date: "10/20/2022",
    },
    {
      id: "698cf",
      amount: 14,
      products: ["li0"],
      date: "10/20/2022",
    },
  ],
};

// clean object before each test
beforeEach(() => {
  users.forEach((u) => delete u.orders);
  orders = aux2;
});

describe("denormalize", () => {
  it("should return an array of users with an attribute orders", () => {
    expect(denormalize(users, orders)[4]).to.have.property("orders");
    expect(denormalize(users, orders)[4].orders[0])
      .to.have.property("id")
      .to.equals(ref.orders[0].id);
    expect(denormalize(users, orders)[4].orders[0]).to.have.property(
      "products"
    );
  });
  it("the orders cannot have the property 'userId'", () => {
    expect(denormalize(users, orders)[4].orders[0]).to.not.have.property(
      "userId"
    );
  });
  it("users must have all their orders", () => {
    expect(denormalize(users, orders)[4].orders.length).to.equals(3);

    expect(denormalize(users, orders)[4].orders[0])
      .to.have.property("id")
      .to.equals(ref.orders[0].id);
    expect(denormalize(users, orders)[4].orders[0])
      .to.have.property("amount")
      .to.equals(ref.orders[0].amount);
  });
});
