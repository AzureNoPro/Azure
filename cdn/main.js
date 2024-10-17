/* global $ */
/* global MobileDetect */
/* global stickyFooter */
'use strict';

$(function() {
  var ua = navigator.userAgent;
  var md = new MobileDetect(ua);
  var isMobile = md.mobile();
  var isAndroid = md.os() === 'AndroidOS';

  $('#fullpage').fullpage({
    'verticalCentered': false,
    'css3': true,
    'sectionsColor': ['#2f2f2f', '#00c3a9', '#222b40', '#eead4f', '#000000'],
    'navigation': true,
    'navigationPosition': 'right'
  });

  $('#writerfullpage').fullpage({
    'verticalCentered': false,
    'css3': true,
    'sectionsColor': ['#2f2f2f', '#FFB7C4', '#152A3B', '#6AC1B7', '#ff008a', '#005F6B', '#000000'],
    'navigation': true,
    'navigationPosition': 'right'
  });

  $('#nav-main').okayNav({
    'toggle_icon_class': 'okayNav__menu-toggle',
    'toggle_icon_content': '<span><i class="fa fa-circle" aria-hidden="true"></i></span><span><i class="fa fa-circle" aria-hidden="true"></i></span><span><i class="fa fa-circle" aria-hidden="true"></i></span>',
    'swipe_enabled': false
  });

  if (isMobile) {
    $('#bgvid').remove();
    $('#video-button').remove();

    if (isAndroid) {
      $('.download-apple').remove();
      $('.nav-download-apple').remove();
    } else {
      $('.download-android').remove();
      $('.nav-download-android').remove();
    }
  }

  $('.tab-link').click(function(){
    var tabId = $(this).attr('data-tab');

    $('.tab-link').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $('#' + tabId).addClass('current');
  });

  $('.accordions [data-accordion]').accordion();

  $(window).scroll(function(){
    if ($(document).scrollTop() > 70) {
      $('.gnb').css('background-color', '#2f2f2f');
    } else {
      $('.gnb').css('background-color', 'transparent');
    }
  });

  stickyFooter.init();
});
      
