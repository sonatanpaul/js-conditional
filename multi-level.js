const muttonPrice = 1600;
if (muttonPrice >= 1150) {
  // get 10% discount
  const discountAmount = (muttonPrice * 10) / 100;
  const payableAmount = muttonPrice - discountAmount;
  console.log(payableAmount);
} else if (muttonPrice <= 1250) {
  // get 5% discount
  const discountAmount = (muttonPrice * 5) / 100;
  const payableAmount = muttonPrice - discountAmount;
  console.log(payableAmount);
} else {
  console.log(muttonPrice);
}
