$(document).ready(function(){
	// Initialize Firebase
    var config = {
    apiKey: "AIzaSyAUkGTrJDJaRKC4AIy9-7Gds4D2UpWnoZI",
    authDomain: "stray-member.firebaseapp.com",
    databaseURL: "https://stray-member.firebaseio.com",
    storageBucket: "stray-member.appspot.com",
    messagingSenderId: "351649287997"
    };
    firebase.initializeApp(config);

    const $SignOut = $('#SignOut');

    // SignOut
    $SignOut.click(function(){
    firebase.auth().signOut();
    console.log('LogOut');
    window.location.href='index.html';
  });

    // Listening Login User
  firebase.auth().onAuthStateChanged(function(user){
    var use =firebase.auth().currentUser;
    if(user) {
      console.log(user);
      console.log('loginnnnnnnnnn');
      $('.navbar-right').html('<li><a href="member_post.html">我想刊登</a></li><li><a id="SignOut" href="index.html">登出</a></li>');      
      $('.member-status a').click(function(){
      	    window.alert("您以登入會員唷");
      	    window.location="index.html";
      	});
      $('#SignOut').click(function(){
    		window.alert("確定要登出嗎?");
    		firebase.auth().signOut();
            console.log('LogOut');
            window.location.href='index.html';
    	});
      $('#post').click(function(){
         window.location="member_post.html";
         });

    } else if(!user){
      console.log("not logged in");
      $('#post').click(function(){
         window.alert("請先登入或註冊!");
         window.location="member_login.html";

      });

      $('#member-status-signup').click(function(){
         window.location="member_signup.html";
      });
      $('#member-status-login').click(function(){
         window.location="member_login.html";
      });


    }
  });

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
        window.location.href='rules_test.html';
	});
	$('.step-2').click(function(){
        window.location.href='adopt.html';
	});
	$('.step-3').click(function(){
        window.location.href='example.html';
	});
//------------scroll-down----------------------
	$('.glyphicon-chevron-down').click(function(){
		// window.scrollTop(0,800);
		$('body').animate({
			scrollTop: 625
		}, 1000);
	});
// -------------adopt_dog---------------------
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
