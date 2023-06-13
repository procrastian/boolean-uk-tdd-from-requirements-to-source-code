const item1 = {
  name: "One",
  price: 1,
  quantity: 1,
};

const basket = [item1];

const createReceipt = (basket) => {
  return `name: ${basket[0].name}\nprice: ${basket[0].price}\nquantity: ${basket[0].quantity}`;
};

console.log(createReceipt(basket));

export default createReceipt;
