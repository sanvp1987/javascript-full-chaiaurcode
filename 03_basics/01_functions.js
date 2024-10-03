const sayNames = () => {
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("D");
  console.log("E");
  console.log("E");
  console.log("P");
};

//sayNames()

const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

const result = addTwoNumbers(5, 6);

// console.log(result)

const loginUserMessage = (username) => {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
};

// console.log(loginUserMessage("Sandeep"))

//Rest Operators == Multiple values in Single arguments as ...num

const calculateCartPrice = (...num) => {
  return num;
};

// console.log(calculateCartPrice(200, 300, 400, 500));

const calculateCartPricediff = (val1, val2, ...num) => {
  return num;
};
// console.log(calculateCartPricediff(200, 300, 400, 500));

const user = {
  username: "Sandeep",
  price: "Free",
};

const handleObject = (anyobject) => {
  console.log(
    `Username is ${anyobject.username} and Price is ${anyobject.price}`
  );
};

// handleObject(user);
handleObject({
  username: "Sandeep",
  price: "123",
});

const myNewArray = [200,300,500,400,600]

const returnSecondValue = (getArray)=>{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))