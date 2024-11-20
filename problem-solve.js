// 1. task one

let burgerPrice = 600;

if (burgerPrice > 500) {
  console.log("Free Coke");
} else {
  console.log("Coke Price = 30 Taka");
}

// 2. task two
let bmi = 25;

if (bmi < 18.5) {
  console.log("You are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are normal");
} else if (bmi >= 25 && bmi <= 29.5) {
  console.log("You are overweight");
} else {
  console.log("You are obese");
}

// 3. task three

let score = 120;

if (score >= 90) {
  console.log("Grade : A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade : C");
} else if (score >= 60) {
  console.log("Grade : D ");
} else {
  console.log("Grade:F ");
}

// 4. task fourth

let num1 = 26;
let num2 = 28;

if (num1 > num2) {
  console.log(num1 * 2);
} else {
  console.log(num1 + num2);
}

// ternary operator

const result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);

// 5. task five

let ticketPrice = 800;
let age = 25;
let isStudent = false;

if (age < 10) {
  console.log("Your Bus Services is free");
} else if (isStudent) {
  const discountAmount = (ticketPrice * 50) / 100;
  console.log(discountAmount);
} else if (age >= 24) {
  const discountAmount = (ticketPrice * 15) / 100;
  console.log(discountAmount);
  const afterDiscount = ticketPrice - discountAmount;
  console.log(afterDiscount);
} else {
  console.log("Ticket Price 800");
}
