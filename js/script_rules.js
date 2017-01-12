$(document).ready(function(){
    $('.note img').slideDown(600);
    setTimeout(function(){
    	$('.note img').slideToggle(500);},2000)
    setTimeout(function(){
    	$('.note-sm ').css('display','block');
        $('.note-sm ').animate({left: '-800px'});
        $('.check').fadeToggle(500);
        $('.fail').fadeToggle(500);},4000)
    

    
});
