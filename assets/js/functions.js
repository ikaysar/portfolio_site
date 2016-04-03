// $( document ).ready(function() {
//         console.log( "ready!" );
//
//
//
//
//
//
//
//
//
//
//
//     });


$(window).scroll(function(){
  youtubeVidScroll();
});

function youtubeVidScroll() {
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -'+ wScroll +'px');

}
