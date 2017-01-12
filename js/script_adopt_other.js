$(document).ready(function(){
  $('.dog').mouseover(function(){
    $('.dog-text').fadeIn();
  });
  $('.dog').mouseleave(function(){
      $('.dog-text').fadeOut();
  });
  $('.dog').click(function(){
    window.location.href='adopt_dog.html';
  });

  // -------------adopt_cat---------------------
  $('.cat').mouseover(function(){
    $('.cat-text').fadeIn();
  });
  $('.cat').mouseleave(function(){
      $('.cat-text').fadeOut();
  });
  $('.cat').click(function(){
    window.location.href='adopt_cat.html';
  });
})
