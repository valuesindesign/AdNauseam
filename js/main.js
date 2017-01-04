$(document).ready(function () {

  var original;

  $("#logo.subpage").mouseover(function () {
    original = $(this).attr('src');
    $(this).attr('src', 'img/adn_animated_croped.png');
  });

  $("#logo.subpage").mouseout(function () {
    $(this).attr('src', original);
  });

  // show the correct default install link (see #295)
  $("#install a").addClass('passive');

  var sel = $("#install" + browser.name);
  if (!sel.length) sel = $("#installChrome");
  sel.removeClass('passive');

  if (bowser.name === 'Opera')
    $("#installChrome").css('right', '0px');
});
