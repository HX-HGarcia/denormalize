const { users, orders } = require("../data");
var chai = require("chai");
var normalize = require("../index");

chai.use(require("chai-spies"));

// traigo mi expect
var expect = chai.expect;

var normal = chai.spy(normalize);

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

describe("normalize", () => {
  it("should return an array of users with an attribute orders", () => {
    expect(normalize(users, orders)[4]).to.have.property("orders");
    expect(normalize(users, orders)[4].orders[0])
      .to.have.property("id")
      .to.equals("2566f");
  });
});
