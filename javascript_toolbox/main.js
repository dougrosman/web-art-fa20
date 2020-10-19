// If you're using jQuery, your code should always start with this line: $(document).ready(function(){
$(document).ready(function(){
  
  /**************** EVENT LISTENERS ****************
    This section is for EVENT LISTENERS. EVENT LISTENERS listen for certain interactions by the user (e.g clicking, scrolling, mouse movement, key presses, etc.
    */

  // CLICK EVENTS
  $('#click-me__box').on('click', function(){

    // the toggle function toggles an element between display: block; and display: none;
    $('#click-me__text').toggle();
  })

  $('#click-me__text').on('click', function(){
    let randomR = Math.floor(Math.random()*256);
    let randomG = Math.floor(Math.random()*256);
    let randomB = Math.floor(Math.random()*256);
    let randomColor = `rgba(${randomR}, ${randomG}, ${randomB})`
    $('#click-me__box').css('background', randomColor);
  })

  // click the box to add or remove a CSS class. The class has a CSS animation in it, which is defined in our CSS
  let wasAnimatedClicked = false;
  $('#click-animate__box').on('click', function(){

    if(!wasAnimatedClicked) {
      $(this).addClass('rotate');
      wasAnimatedClicked = !wasAnimatedClicked
    } else {
      $(this).removeClass('rotate');
      wasAnimatedClicked = !wasAnimatedClicked
    }
    
  })

  

  // SCROLL EVENTS
  // Detects when someone has scrolled anywhere on the page
  let scrollCounter = 0;
  $(document).on('wheel', function() {
    $('#scroll-info__position').text(`${$(this).scrollTop()}`);
    $('#scroll-info__amount').text(`${scrollCounter}`);
    scrollCounter++;

  })

  
  /***************** TIMING EVENTS *****************
    This section is for events related to timing. For instance, if you want something to happen repeatedly, if you want to delay an effect, or if you want something to begin after a certain amount of time.
    */

  // setInterval(): repeat something every X milliseconds
  let counter = 1;
  setInterval(function(){
    $('#set-interval__box').text(counter);
    counter++;
  }, 250)

  // setTimeout(): do something after a certain amount of time
  setTimeout(function(){
    $('#set-timeout__box').text("It's been 5 seconds");
  }, 5000)



})

// Note, it's technically okay to write code outside of the closing braces above, but it will run at a different time.