$(function(){
	$('.social-icon img').mouseenter(function(){
		$(this).css("background-color","#a6836f");
		$(this).css("border-radius","30px");
		});
	$('.social-icon img').mouseleave(function(){
		$(this).css("background-color","unset");
		});
	$('.btn').click(function(){
        window.location.href='adopt.html';
	});
	$('.step-1').click(function(){
        window.location.href='#';
	});
	$('.step-2').click(function(){
        window.location.href='adopt.html';
	});
	$('.step-3').click(function(){
        window.location.href='example.html';
	});
//------------scroll-down----------------------
	$('.glyphicon-chevron-down').click(function(){
		// window.scrollTo(0,800);
		$('body').animate({
			scrollTop: 625
		}, 600);
	});
// -------------adopt_dog---------------------
    $('.dog').mouseover(function(){
		$(this).html('<a href="adopt_dog.html"><img src="img/dog_hover.jpg"></a>');
	});
	$('.dog').mouseleave(function(){
    	$(this).html('<img src="img/dog.jpg">');
	});
	// $('.dog-hover-img').click(function(){
	// 	window.location.href='adopt_dog.html';
	// });
// -------------adopt_cat---------------------
	$('.cat').mouseover(function(){
		$(this).html('<a href="adopt_cat.html"><img src="img/cat_hover.jpg"></a>');
	});
	$('.cat').mouseleave(function(){
    	$(this).html('<img src="img/cat.jpg">');
	});
	// $('.cat-hover-img').click(function(){
	// 	window.location.href='adopt_cat.html';
	// });
//--------------adopt_dog_list---------------
    $('.pulse').mouseenter(function(){
        $(this).addClass("animated");
    });
    $('.pulse').mouseleave(function(){
        $(this).removeClass("animated");
    });
//--------------adopt_info_else-------
    $('.else-list-marquee img').click(function(){
    	window.location.href='adopt_dog_info.html';
    });
});