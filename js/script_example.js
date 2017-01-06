$(function(){
  $('.glyphicon-chevron-down').click(function(){
    $('html,body').animate({scrollTop:$('.section2').offset().top}, 800);
  }); //代表一個完整的執行區塊
});
