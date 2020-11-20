$(document).ready(function(){
  ethereum.autoRefreshOnNetworkChange = false;


  $(window).on('click', function(){

    let alertBox = `<div class="alert">This is an alert!
      <button>Ok</button>
    </div>`

    let randomX = Math.floor(Math.random() * $(window).width() - 300);
    let randomY = Math.floor(Math.random() * $(window).height() - 200);

    console.log("randomX: " + randomX);
    console.log("randomY: " + randomY);

    $('body').append(alertBox);

    $('.alert:last-child').css(`transform`, `translate(${randomX}px, ${randomY}px`);


  })





})