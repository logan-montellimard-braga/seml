$(document).ready(function ($) {
  var links = $('.navbar').find('a');

  // Tooltips
  $('.tooltip-js').tooltip();

  // Preloader
  $('#loader').css({'visibility' : 'visible'});
  $('#preloader').css({'visibility' : 'visible'});
  $('body').css({'overflow' : 'hidden'});
  $(window).load(function() {
    $('#loader').fadeOut("swing");
    $('#preloader').delay(300).fadeOut('slow');
    $('body').delay(300).css({'overflow':'visible'});
  });

  $('.toggleColor').click(function () {
    $(this).children().toggleClass('grey');
    var block = $(this).next('blockquote');
    $(block).children().toggleClass();
  });

  // JS Warning
  $('.js-warning').css({'visibility' : 'hidden', 'display' :'none'});

  // Same height for elems
  function set_same_height_to(first, second, offset) {
    var firstHeight = first.height();
    second.height(firstHeight + offset);
  }
  function set_height_for_all() {
    set_same_height_to($('.longuerQuote'), $('.smallerQuote'), 0);
    set_same_height_to($('.overview-text1'), $('.overview-img1'), -40);
    set_same_height_to($('.overview-text2'), $('.overview-img2'), -40);
    set_same_height_to($('.talk-wrapper'), $('.talk-icon'), 0);
    set_same_height_to($('.suggestModel'), $('.suggestTarget'), 0);
  }
  set_height_for_all();
  $(window).resize(function() {
    set_height_for_all();
  });

  // Download toggle click
  $('.download-option').click(function() {
    $(this).children('.fa-chevron-down').toggleClass('hidden-all');
    $(this).children('.fa-chevron-up').toggleClass('hidden-all');
  });

  // Guide collapse all
  var closed = true;
  $('.collapseAll').click(function() {
    if (closed) {
      $('#guide').find('.collapse').not("#beforeStart, .minic").collapse('show');
      closed = false;
    }
    else {
      $('#guide').find('.collapse').not("#beforeStart, .minic").collapse('hide');
      closed = true;
    }
  });

  // Navbar smooth scroll
  links.click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top + 5}, 1200, 'easeInOutQuart');
  });
  $('.goto').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top + 5}, 1200, 'easeInOutQuart');
  });

  // Form validation : Subscribe
  var validator = $("#subscribe-form").validate({
    errorElement: "label",
    wrapper: "",
    errorPlacement: function(error, element) {
      error.insertBefore( element.parent().parent()).hide().fadeIn(600);
      error.wrap("<div class='formError'></div>");
      $("<div class='pull-right'></div>").insertBefore(error);
    },

    rules: {
      email : {
        email : true,
        maxlength : 255
      }
  }
  });
  var validator1 = $("#subscribe-form-mini").validate({
    errorElement: "label",
    wrapper: "",
    errorPlacement: function(error, element) {
      error.insertBefore( element.parent().parent()).hide().fadeIn(600);
      error.wrap("<div class='formError text-left pull-left'></div>");
      $("<div class='pull-left text-left'></div>").insertBefore(error);
    },

    rules: {
      email : {
        email : true,
        maxlength : 255
      }
    }
  });

  var validator2 = $("#contactForm").validate({
    errorElement: "label",
    wrapper: "td",
    errorPlacement: function(error, element) {
      error.insertBefore( element.parent().parent()).hide().fadeIn(600);
      error.wrap("<tr class='formError'></tr>");
      $("<td></td>").insertBefore(error);
    },

    rules: {
      message :{
        required : true,
        minlength : 25,
        maxlength : 1000
      },
      email : {
        email : true,
        maxlength : 255
      },
      name : {
        required : true,
        maxlength : 50,
        minlength : 2
      }},
  });
  $('#formReset').click(function() {
    validator2.resetForm();
  });
});
