$(function(){
//滑動按鈕
  $('.to-sec2').click(function(){
    $('html,body').animate({scrollTop:$('.section2').offset().top}, 800);
  });
  $('.to-sec3').click(function(){
    $('html,body').animate({scrollTop:$('.section3').offset().top}, 800);
  });

//滑動顯示
  $section1_height = $('.section1').height();
  $section2_height = $('.section2').height();
  $section3_height = $('.section3').height();
  $window = $(window);
  console.log($section1_height);
  console.log($section2_height);

$last1= $section2_height + $section1_height - $(window).height()-80;
$last2= $section3_height + $section2_height + $section1_height - $(window).height()-50;

//當網頁初始畫面置頂時
  if ($window.scrollTop() >= $last1){
    $('.sec2-pic').animate({right:'0',opacity:'1'},900,'easeInOutQuad');
    $('.about').delay(500).animate({ fontSize:'15px', lineHeight: '55px',opacity:'1' },1000,'easeInOutQuad');
    $('.sec2-connect').delay(300).animate({top:'63%',opacity:'1'},1200,'easeInOutQuad');
    $('.page-botton2').fadeIn(2500);
  }

  if ($window.scrollTop() >= $last2){
    $('.sec3-text').animate({paddingTop:'3em',opacity:'1'},900,'easeInOutQuad');
    $('.sec3-button').fadeIn(1500);
  }

//當視窗卷軸捲動時
  $window.scroll(function(){
    console.log($last1);
    if ($window.scrollTop() >= $last1 ) {
      $('.sec2-pic').animate({right:'0',opacity:'1'},900,'easeInOutQuad');
      $('.about').delay(500).animate({ fontSize:'15px', lineHeight: '55px',opacity:'1' },1000,'easeInOutQuad');
      $('.sec2-connect').delay(300).animate({top:'63%',opacity:'1'},1200,'easeInOutQuad');
      $('.page-botton2').fadeIn(2500);
    }

    $window.scroll(function(){
      console.log($last2);
      if ($window.scrollTop() >= $last2 ) {
        $('.sec3-text').animate({paddingTop:'3em',opacity:'1'},900,'easeInOutQuad');
        $('.sec3-button').fadeIn(1500);
      }
    // if ($window.scrollTop() >= $last2) {
    // }
    });
  });
});

// youtubeAPI設定

function onYouTubeIframeAPIReady() {
 var player;
 player = new YT.Player('sec1bgvd', {
   videoId: '3yfzFW4WVK0', // YouTube Video ID
   width: 560,               // Player width (in px)
   height: 316,              // Player height (in px)
   playerVars: {
     autoplay: 1,        // Auto-play the video on load
     controls: 0,        // Show pause/play buttons in player
     showinfo: 0,        // Hide the video title
     modestbranding: 1,  // Hide the Youtube Logo
     loop: 1,            // Run the video in a loop
     playlist: '3yfzFW4WVK0',
     rel: 0,
     fs: 0,              // Hide the full screen button
     cc_load_policy: 0, // Hide closed captions
     iv_load_policy: 3,  // Hide the Video Annotations
     autohide: 0         // Hide video controls when playing
   },
   events: {
     onReady: function(e) {
       e.target.mute();
     }
   }

 });
}
