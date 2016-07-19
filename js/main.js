$(document).ready(function () {

  var original;

	$("#logo.subpage").mouseover(function () {
    original = $(this).attr('src');
    $(this).attr('src', 'img/adn_animated_croped.png');
  });

  $("#logo.subpage").mouseout(function () {
    $(this).attr('src', original);
  });

	// show the correct default install link
	$("#install a").addClass('passive');
	$("#install" + bowser.name).removeClass('passive');

	// temp: pending #295
	if (bowser.name === 'Opera')
		$("#installChrome").css('right', '0px');
});
