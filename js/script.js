$(function(){
	$('.social-icon img').mouseenter(function(){
		$(this).css("background-color","#a6836f");
		$(this).css("border-radius","30px");
		});
	$('.social-icon img').mouseleave(function(){
		$(this).css("background-color","unset");
		});
	$('.btn').click(function(){
        window.location.href='facebook.com';
	});
});