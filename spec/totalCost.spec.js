import totalCost from "../src/totalCost.js";

describe("totalCost", () => {
  //Happy Path
  it("should calculate the total costs of all basket items", () => {
    //GIVEN
    const item1 = { price: 1, quantity: 1 };
    const item2 = { price: 2, quantity: 2 };
    const basket = [item1, item2];

    //WHEN
    const res = totalCost(basket);

    //THEN
    expect(res).toEqual(
      item1.price * item1.quantity + item2.price * item2.quantity
    );
  });

  ///Uhappy Path
  it("return total cost of 0 if the basket is empty", () => {
    //GIVEN
    const basket = [];
    //WHEN
    const res = totalCost(basket);
    //THEN
    expect(res).toEqual(0);
  });
});
