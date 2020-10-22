$(document).ready(function(){

  // declare global variables here.
  let fontSize = 10;
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

    $("#box").addClass('rotate');

  })

 

  // Mouse wheel event: Trigger an effect when the user scrolls

  let shouldAddText = true;
  $(document).on('wheel', function(){
    
    //console.log("scrolling happened!");

    let coolBox = `<div class="cool-box"></div>`;

    let amountScrolled = $(document).scrollTop()

    console.log("scroll: " + amountScrolled);

    if(amountScrolled > 1000 && shouldAddText == true) {
      $('body').css('background', 'pink');
      let p = `<p class="some-text">"""""some text"""""</p>`;

      $('body').append(p)
      $('.some-text').css('top', `${amountScrolled + 400}px`);
      shouldAddText = false;
    }
    
    $('body').append(coolBox);
  })



  setInterval(function(){
    let coolBox = `<div class="cool-box"></div>`;
    $('body').append(coolBox);

    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);

    $('.cool-box:last-child').css('background', `rgb(${randomR}, ${randomG}, ${randomB})`)
    

  }, 100)

  setTimeout(function(){
    
    //alert('it has been 3 seconds');

  }, 3000)


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
