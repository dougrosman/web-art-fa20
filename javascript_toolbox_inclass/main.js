$(document).ready(function(){

  // declare global variables here.
  
  $('#box').on("click", function(){
    console.log("i was clicked!, but in jquery!");
    printHello()
    addNumbers(10, 20);
    console.log(10 + 30);
    $('body').css('font-family', 'Arial');

    $(this).css('font-size', fontSize);
    //fontSize = fontSize + 10;
    //fontSize++;
    fontSize+=10;
  })

  function printHello() {
    console.log("hello");
  }

  function addNumbers(num1, num2) {
    console.log(num1 + num2);
  }

  









  // call the function
  addTheNumbers(5, 10);

  // define the addTheNumbers function
  // accepts two numbers as arguments and adds them together
  function addTheNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
  }

  


})








// let myCoolBox = document.getElementById("box");

// myCoolBox.addEventListener("click", function(){

//   console.log("i was clicked!");

// })
