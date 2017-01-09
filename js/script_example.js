$(function(){
  $('.to-sec2').click(function(){
    $('html,body').animate({scrollTop:$('.section2').offset().top}, 800);
  }); //代表一個完整的執行區塊
  $('.to-sec3').click(function(){
    $('html,body').animate({scrollTop:$('.section3').offset().top}, 800);
  }); //代表一個完整的執行區塊
});
