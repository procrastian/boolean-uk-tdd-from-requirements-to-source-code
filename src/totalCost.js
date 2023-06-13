const item1 = {
  price: 1,
  quantity: 1,
};
const item2 = {
  price: 2,
  quantity: 2,
};
const basket = [item1, item2];

const totalCost = (basket) => {
  if (basket.length === 0) {
    return 0;
  } else {
    return (
      basket[0].price * basket[0].quantity +
      basket[n].price * basket[n].quantity
    );
  }
};

console.log(totalCost(basket));

export default totalCost;
