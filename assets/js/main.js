$(function () {
  $("#btn-menu-mobile").click(() => {
    $("#header-mobile").toggleClass("header-mobile-active");
  });

  $(".match-box-parents").each((index, matchBox) => openMapDetail(index + 1));
});

function tabOpenHandle(idSection, idTabsActive) {
  var tabHeaderElm = $("#".concat(idSection).concat(" .tabs__header--items"));

  var tabContentsElm = $(
    "#".concat(idSection).concat(" .tabs__contents--items")
  );

  tabContentsElm.each((index, value) => {
    $(value).hide().removeClass("tabs__contents--active");
  });

  tabHeaderElm.each((index, value) => {
    $(value).removeClass("tabs__header--active");
  });

  var tabHeaderSel = "#"
    .concat(idSection)
    .concat(" #")
    .concat(idTabsActive)
    .concat("-header");

  var tabContentsSel = "#"
    .concat(idSection)
    .concat(" #")
    .concat(idTabsActive)
    .concat("-contents");

  $(tabHeaderSel).addClass("tabs__header--active");
  $(tabContentsSel).show().addClass("tabs__contents--active");
}

function openMapDetail(index) {
  var idMatchCardSel = "#match-card-".concat(index).concat(" > .match-card");
  var idMapDetailBoxSel = "#match-card-"
    .concat(index)
    .concat(" > #lst-map-detail");
  $(idMatchCardSel).click(() => {
    if ($(idMapDetailBoxSel).css("display") == "none") {
      $(idMapDetailBoxSel).show();
    } else {
      $(idMapDetailBoxSel).hide();
    }
  });
}

const initialActionClickTab = () => {};
