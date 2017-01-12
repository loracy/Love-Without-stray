$(document).ready(function(){
    $('.rules-berfore-initial img').slideDown(600);
    setTimeout(function(){
    	$('.rules-berfore-initial img').slideToggle(500);},2000)
    setTimeout(function(){
    	$('.note ').css('display','block');
        $('.note ').animate({left: '-650px'});
        $('.Q-1').fadeToggle(900);},4000)

    var Ncheck = 0;
    var Nfail = 0;
    var Ntotal;
    $('#check').mouseover(function(){
        $(this).children('.answer-icon-check').addClass('animate');
    });
    $('#fail').mouseover(function(){
        $(this).children('.answer-icon-check').addClass('animate');
    });

    // Q-1
    $('#check-1').click(function(){
        $(this).html('<img class="answer-icon-check" style="width: 40%;" src="img/icon-check-clicked.svg">');
        Ncheck ++;
        setTimeout(function(){
    	$('.Q-1').fadeOut(500);
        $('.Q-2').fadeIn(900);},1000)
    });
    $('#fail-1').click(function(){
        $(this).html('<img class="answer-icon-fail" style="width: 40%;" src="img/icon-fail-clicked.svg">');
        Nfail ++;
        setTimeout(function(){
    	$('.Q-1').fadeOut(500);
        $('.Q-2').fadeIn(900);},1000)
    });
    // Q-2
    $('#check-2').click(function(){
        $(this).html('<img class="answer-icon-check" style="width: 40%;" src="img/icon-check-clicked.svg">');
        Ncheck ++;
        setTimeout(function(){
    	$('.Q-2').fadeOut(500);
        $('.Q-3').fadeIn(900);},1000)
    });
    $('#fail-2').click(function(){
        $(this).html('<img class="answer-icon-fail" style="width: 40%;" src="img/icon-fail-clicked.svg">');
        Nfail ++;
        setTimeout(function(){
    	$('.Q-2').fadeOut(500);
        $('.Q-3').fadeIn(900);},1000)
    });
     // Q-3
    $('#check-3').click(function(){
        $(this).html('<img class="answer-icon-check" style="width: 40%;" src="img/icon-check-clicked.svg">');
        Ncheck ++;
        setTimeout(function(){
    	$('.Q-3').fadeOut(500);
        $('.Q-4').fadeIn(900);},1000)
    });
    $('#fail-3').click(function(){
        $(this).html('<img class="answer-icon-fail" style="width: 40%;" src="img/icon-fail-clicked.svg">');
        Nfail ++;
        setTimeout(function(){
    	$('.Q-3').fadeOut(500);
        $('.Q-4').fadeIn(900);},1000)
    });
     // Q-4
    $('#check-4').click(function(){
        $(this).html('<img class="answer-icon-check" style="width: 40%;" src="img/icon-check-clicked.svg">');
        Ncheck ++;
        setTimeout(function(){
    	$('.Q-4').fadeOut(500);
        $('.Q-5').fadeIn(900);},1000)
    });
    $('#fail-4').click(function(){
        $(this).html('<img class="answer-icon-fail" style="width: 40%;" src="img/icon-fail-clicked.svg">');
        Nfail ++;
        setTimeout(function(){
    	$('.Q-4').fadeOut(500);
        $('.Q-5').fadeIn(900);},1000)
    });
    // Q-5
    $('#check-5').click(function(){
        $(this).html('<img class="answer-icon-check" style="width: 40%;" src="img/icon-check-clicked.svg">');
        Ncheck ++;
        Ntotal = Ncheck*20;
        $('.question-result-score').html(Ntotal);
        setTimeout(function(){
    	$('.Q-5').fadeOut(500);
        $('.question-result').fadeIn(900);

        if (Ntotal == 100) { 
        	setTimeout(function(){
            $('.question-result').fadeOut(900);
        	$('.question-suggest').html('太棒了 !<br>你是滿分的主人<br>快去領養寵物吧 !<br> <button onclick="location.href=\'adopt.html\'" style="font-size:30px;" class="rules-btn" href="adopt.html">認養</button>');
        	$('.question-suggest').fadeIn(900);},3000)}
    
        if (Ntotal <= 80 && Ntotal >= 60) { 
        	setTimeout(function(){
            $('.question-result').fadeOut(900);
        	$('.question-suggest').html('還不錯耶<br>相信你會是很棒的主人<br>快去領養寵物吧 !<br> <button onclick="location.href=\'adopt.html\'" style="font-size:30px;" class="rules-btn" href="adopt.html">認養</button>');
        	$('.question-suggest').fadeIn(900);},3000)}

         if (Ntotal <= 40 && Ntotal >= 20) { 
        	setTimeout(function(){
            $('.question-result').fadeOut(900);
        	$('.question-suggest').html('嗯...<br>你可能還沒準備好<br>做好功課再來領養喔 !');
        	$('.question-suggest').fadeIn(900);},3000)}	
    
        },1000)	
        
    });
    $('#fail-5').click(function(){
        $(this).html('<img class="answer-icon-fail" style="width: 40%;" src="img/icon-fail-clicked.svg">');
        Nfail ++;
        Ntotal = Ncheck*20;
        $('.question-result-score').html(Ntotal);
        setTimeout(function(){
    	$('.Q-5').fadeOut(500);
        $('.question-result').fadeIn(900);
    
        if (Ntotal <= 80 && Ntotal >= 60) { 
        	setTimeout(function(){
            $('.question-result').fadeOut(900);
        	$('.question-suggest').html('還不錯耶<br>相信你會是很棒的主人<br>快去領養寵物吧 !<br> <button onclick="location.href=\'adopt.html\'"  style="font-size:30px;" class="rules-btn" href="adopt.html">認養</button>');
        	$('.question-suggest').fadeIn(900);},3000)}

         if (Ntotal <= 40 && Ntotal >= 20) { 
        	setTimeout(function(){
            $('.question-result').fadeOut(900);
        	$('.question-suggest').html('嗯...<br>你可能還沒準備好<br>做好功課再來領養喔 !');
        	$('.question-suggest').fadeIn(900);},3000)}	

        if (Ntotal == 0) { 
        	setTimeout(function(){
            $('.question-result').fadeOut(900);
        	$('.question-suggest').html('天啊 !<br>你可以不要來鬧嗎 ?<br>千萬不要領養寵物 !');
        	$('.question-suggest').fadeIn(900);},3000)}	

        },1000)
        
        
    });



    

});
