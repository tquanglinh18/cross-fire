$(function () {
  $("#btn-menu-mobile").click(() => {
    $("#header-mobile").toggleClass("header-mobile-active");
  });
});

function tabOpen(idSection, idHeaderSelected, idContentSelected) {
  var tabContent, tabHeader;
  var idHeaderSelectedQuerry = "#" + idHeaderSelected;
  var idContentSelectedQuerry = "#" + idContentSelected;

  var idAllHeaderInSection = "#" + idSection + " .tabs__header--items";
  var idAllContentsInSection = "#" + idSection + " .tabs__contents--items";
  tabContent = $(idAllContentsInSection);

  tabContent.each((index, value) => {
    $(value).hide().removeClass("tabs__contents--active");
  });

  tabHeader = $(idAllHeaderInSection);
  tabHeader.each((index, value) => {
    $(value).removeClass("tabs__header--active");
  });

  $(idHeaderSelectedQuerry).addClass("tabs__header--active");
  $(idContentSelectedQuerry).show().addClass("tabs__contents--active");
}

function tabSubOpen(idSection, idHeaderSelected, idContentSelected) {
  var tabContent, tabHeader;
  var idHeaderSelectedQuerry = "#" + idHeaderSelected;
  var idContentSelectedQuerry = "#" + idContentSelected;

  var idAllHeaderInSection = "#" + idSection + " .tabs__subHeader--items";
  var idAllContentsInSection = "#" + idSection + " .tabs__subContents--items";
  tabContent = $(idAllContentsInSection);

  tabContent.each((index, value) => {
    $(value).hide().removeClass("tabs__subContents--active");
  });

  tabHeader = $(idAllHeaderInSection);
  tabHeader.each((index, value) => {
    $(value).removeClass("tabs__subHeader--active");
  });

  $(idHeaderSelectedQuerry).addClass("tabs__subHeader--active");
  $(idContentSelectedQuerry).show().addClass("tabs__subContents--active");
}
