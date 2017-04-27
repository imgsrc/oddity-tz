$(function () {
  /*
   * Vimeo as background
   * **************************************
   */
  $('.player').vimeo_player({
    videoURL: 'https://vimeo.com/152674329',
    containment: 'header',
    showControls: false,
    autoPlay: true,
    mute: true,
    startAt: 0,
    opasity: 1
  });

  /*
   * Replace SVG images with inline SVG
  * **************************************
   */
  $('img.img-svg').each(function () {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

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
      right = $('header__area_right'),
      iconLeft = $('#icons-side_left'),
      iconRight = $('#icons-side_right'),
      asideLeft = $('.project-list_left'),
      asideRight = $('.project-list_right'),
      header = $('.main-head');
  left.on('mouseover', function () {
    iconLeft.addClass('active');
    asideLeft.addClass('active');
    header.addClass('active_left');
  });
  left.on('mouseout', function () {
    iconLeft.removeClass('active');
    asideLeft.removeClass('active');
    header.removeClass('active_left');
  });
  right.on('mouseover', function () {
    iconRight.addClass('active');
    asideRight.addClass('active');
    header.addClass('active_right');
  });
  right.on('mouseout', function () {
    iconRight.removeClass('active');
    asideRight.removeClass('active');
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
