$(function () {
  $("#btn-copy-hashtag").on("click", () => {
    navigator.clipboard
      .writeText("#CFSSC2024 , #CrossFire , #DotKich")
      .then(() => alert("Copy Thành công"))
      .catch(() => alert("Copy Không thành công"));
  });
});
