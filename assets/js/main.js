$(function () {
  $("#btn-menu-mobile").click(() => {
    if ($("#menu-mobile").css("display") == "none") {
      $("#menu-mobile").show();
    } else {
      $("#menu-mobile").hide();
    }
  });
});
