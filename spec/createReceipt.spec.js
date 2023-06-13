import createReceipt from "../src/createReceipt.js";

describe("createReceipt", () => {
  //Happy Path
  it("return a string of basket item properties"),
    () => {
      //GIVEN
      const basket = [
        (item1 = {
          name: "One",
          price: 1,
          quantity: 1,
        }),
      ];

      ///WHEN
      const res = createReceipt(basket);

      //THEN
      expect(res).toEqual(
        `name: ${basket[0].name}\nprice: ${basket[0].price}\nquantity: ${basket[0].quantity}`
      );
    };
});
