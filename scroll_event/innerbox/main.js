$(document).ready(function(){

  let counter = 0;
  let boxId = `box${counter}`;

  let w = 5 + Math.random()*10;;
  let h = 5 + Math.random()*10;;
  

  $(document).on('wheel', function() {
    // console.log('Scrolled to ' + $(this).scrollTop());
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    boxId = `box${counter}`;
    
    console.log(randomColor);
    $('.wrapper').append(`<div class='box' id=${boxId}></div>`);
    
    $(`#${boxId}`).css({
      'width': w,
      'height': h,
      'background': randomColor,
    });
    
    w=5 + Math.random()*10;
    h=5 + Math.random()*10;
    counter++;
  })




})