$(document).ready(function(){
    $('.member-signup').mouseover(function(){
        $(this).css('box-shadow','0px 2px 5px rgba(20%,20%,40%,0.3)');
        $(this).children('.title').css('box-shadow','0px 2px 5px rgba(20%,20%,40%,0.3)');
    });
    $('.member-signup').mouseleave(function(){
        $(this).css('box-shadow','unset');
        $(this).children('.title').css('box-shadow','unset');
    });
    $('.member-login').mouseover(function(){
        $(this).css('box-shadow','0px 2px 5px rgba(20%,20%,40%,0.3)');
        $(this).children('.title').css('box-shadow','0px 2px 5px rgba(20%,20%,40%,0.3)');
    });
    $('.member-login').mouseleave(function(){
        $(this).css('box-shadow','unset');
        $(this).children('.title').css('box-shadow','unset');
    });
});