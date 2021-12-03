"use strict";
 // wow.js start
 new WOW().init();
 // wow.js end


// header js 
$(window).on("scroll", function(){
   if ($(this).scrollTop()) {
     $(".header-section").addClass("fixed");
   } else {
     $(".header-section").removeClass("fixed");
   }
 });

// // countdown 
// if ($('.countdown').length > 0) {
//   $(".countdown").jCounter({
//      date: '21 October 2020 12:00:00',
//      fallback: function () {
//         console.log("count finished!")
//      }
//   });
// }
// magnific popup
$(document).ready(function() {
   $('.play-icon').magnificPopup(
     {type:'iframe'}
     );
     $('.view-photo').magnificPopup(
      {type:'iframe'}
      );
 });
