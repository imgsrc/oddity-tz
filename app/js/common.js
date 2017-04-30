$(function () {

  if ($( window ).width() > 1024) {
    $('.player').vimeo_player({
      videoURL: 'https://vimeo.com/152674329',
      containment: 'header',
      showControls: false,
      autoPlay: true,
      mute: true,
      startAt: 0,
      opasity: 1
    });
    $('header').height($(window).height());
  } else {
    $('.main-head').addClass('mobile');
    $('.player').remove();
  }

  /*
   * Hide description on hover for project item
   * **************************************
   */
  var projectItem = $('.aside-list__item');
  projectItem.each(function () {
    $(this).on('mouseover', function () {
      $(this).children().addClass('active');
    });
    $(this).on('mouseout', function () {
      $(this).children().removeClass('active');
    });
  });

  /*
   * translate of aside when hovering the mouse
   * **************************************
   */
  var left = $('.header__area_left'),
      right = $('.header__area_right'),
      iconLeft = $('.head__icons__arrow_left'),
      iconRight = $('.head__icons__arrow_right'),
      asideLeft = $('.aside-list_left'),
      asideRight = $('.aside-list_right'),
      header = $('.main-head');
  left.on('mouseover', function () {
    iconLeft.addClass('active');
    asideLeft.addClass('active');
    header.addClass('active_left');
  });
  asideLeft.on('mouseout', function () {
    asideLeft.removeClass('active');
    iconLeft.removeClass('active');
    header.removeClass('active_left');
  });
  right.on('mouseover', function () {
    iconRight.addClass('active');
    asideRight.addClass('active');
    header.addClass('active_right');
  });
  asideRight.on('mouseout', function () {
    $(this).removeClass('active');
    iconRight.removeClass('active');
    header.removeClass('active_right');
  });
  /*
   Smooth scroll
   *********************
   */
  $("#scroll").on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $("#red").offset().top
    }, 600);
  });

});
