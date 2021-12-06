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
// magnific popup
$(document).ready(function() {
   $('.play-icon').magnificPopup(
     {type:'iframe'}
     );
     $('.view-photo').magnificPopup(
      {type:'iframe'}
      );
 });
 // progressbar js start
 $(document).ready(function () {
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
          jQuery('.progress-wrap').addClass('active-progress');
      } else {
          jQuery('.progress-wrap').removeClass('active-progress');
      }
  });
  jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
  })
});
// progressbar js end
// with short level
$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate).on('update.countdown', function(event) {
    var format = '%D days %H hr : %M mn : %S sec';
    $(this).html(event.strftime(format));
  }).on('finish.countdown', function(event) {
    var expireData = $(this).data('title');
    $(this).html(expireData).parent().addClass('disabled');
  });
});
// with Level
$('[data-clock]').each(function() {
  var $this = $(this), finalDate = $(this).data('clock');
  $this.countdown(finalDate)
  .on('update.countdown', function(event) {
    var format = ''+'<div><span>%D</span><p>days</p></div>'+'<div><span>%H</span><p>hours</p></div>'+'<div><span>%M</span><p>minutes</p></div>'+'<div><span>%S</span><p>seconds</p></div>';
    $(this).html(event.strftime(format));
  })
  .on('finish.countdown', function(event) {
    var expireData = $(this).data('title');
    $(this).html(expireData).addClass('disabled');
  });
});


// spy-scroll js start
var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
dataSpyList.forEach(function (dataSpyEl) {
  bootstrap.ScrollSpy.getInstance(dataSpyEl)
    .refresh()
})
// spy-scroll js end