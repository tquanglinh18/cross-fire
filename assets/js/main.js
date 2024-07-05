$(function () {
  $("#btn-menu-mobile").click(() => {
    $("#header-mobile").toggleClass("header-mobile-active");
  });
  $("#banner-slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
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

function tabOpenHandle(idSection, idTabsActive) {
  var tabHeaderElm = $(
    "#".concat(idSection).concat(" .tabs__header--items:first-child")
  );
  console.log("🚀 ~ tabOpenHandle ~ tabHeaderElm:", tabHeaderElm);
  var tabContentsElm = $(
    "#".concat(idSection).concat(" .tabs__contents--items:first-child")
  );

  tabContentsElm.each((index, value) => {
    $(value).hide().removeClass("tabs__contents--active");
  });

  tabHeaderElm.each((index, value) => {
    $(value).removeClass("tabs__header--active");
  });

  $(
    "#".concat(idSection).concat(" #").concat(idTabsActive).concat("-header")
  ).addClass("tabs__header--active");
  $("#".concat(idSection).concat(" #").concat(idTabsActive).concat("-contents"))
    .show()
    .addClass("tabs__contents--active");
}

const initialActionClickTab = () => {};
