$("h1").css("color", "blue");

$(document).click(function (event) {
  $("h1").text(event.key);
})