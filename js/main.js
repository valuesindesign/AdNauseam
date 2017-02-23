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

  var sel = $("#install" + bowser.name);
  if (!sel.length) sel = $("#installChrome");
  sel.removeClass('passive');

  if (bowser.name === 'Opera')
    $("#installChrome").css('right', '0px');

  var bannedDate = new Date("Jan 1, 2017 00:00:00").getTime();

  // Update the count every 1 second
   setInterval(function count() {

      var now = new Date().getTime();
      var distance = now - bannedDate;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      $(".countdown .days").text(days);
      $(".countdown .hours").text(hours);
      $(".countdown .mins").text(minutes);
      $(".countdown .secs").text(seconds);

      return count;

  }(), 1000);

});
