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

    var dbUser = firebase.database().ref().child('user');
    var storageRef = firebase.storage().ref();
    var user = firebase.auth().currentUser;
    
    const $signupemail = $('#signup-email');
    const $signuppassword = $('#signup-password');
    const $loginemail = $('#login-email');
    const $loginpassword = $('#login-password');
    const $file = $('#file');
    const $btnLogIn = $('#btnLogIn');
    const $btnSignUp = $('#btnSignUp');
    const $UserName = $('#UserName');
    const $SignOut = $('#SignOut');

    // Log In
    $btnLogIn.click(function(e){
    const email = $loginemail.val();
    const pass = $loginpassword.val();
    const auth = firebase.auth();
    // log In
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(function(e){
      console.log(e.message);
    });
    promise.then(function(){
       console.log('LogIn User');
       
       //$('.test-email').html('<h1>login success</h1>');
       console.log("aaaaaaaaaaa");
    });
  });

    // SignUp
    $btnSignUp.click(function(e){
    const email = $signupemail.val();
    const pass = $signuppassword.val();
    const auth = firebase.auth();
    // signUp
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(function(e){
      console.log(e.message);
      // $signInfo.html(e.message);

    });
    promise.then(function(user){
      console.log("SignUp user is "+user.email);
      const dbUserid = dbUser.child(user.uid);
      dbUserid.push({email:user.email});
       console.log("ggggg");
       
    });
  });

    // SignOut
    $SignOut.click(function(){
    firebase.auth().signOut();
    console.log('LogOut');
    window.location.href='member.html';
  });


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

    //-------------member-post-content-checkbox---------
    var x = 1;
    var y = 1; 
    //---- 1=no-select ----- 0=select ----
    $('.post-content-checkbox-1').click(function(){
        if (x == 1) {
          $(this).parent('.post').css('background-color','#dfdbce');
          x = x-1;
          }
         
        else if (x == 0) {
          $(this).parent('.post').css('background-color','unset');
          x = x+1;
        }
    });
    $('.post-content-checkbox-2').click(function(){
        if (y == 1) {
          $(this).parent('.post').css('background-color','#dfdbce');
          y = y-1;
          }
         
        else if (y == 0) {
          $(this).parent('.post').css('background-color','unset');
          y = y+1;
        }
    }); 


    $('.delete-btn').click(function(){
        if (x==0 && y==0) {
            $('.post-1').css('display','none');
            $('.post-2').css('display','none');
        }
        else if (x==1 && y==0) {
            $('.post-2').css('display','none');
        }
        else if (x==0 && y==1) {
            $('.post-1').css('display','none');
        }
    });
});