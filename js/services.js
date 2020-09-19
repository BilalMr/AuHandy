// ================= Select Services ==============//
const selectMenu = document.querySelector("#sub-menu");

selectMenu.addEventListener("change", () => {
  window.location = selectMenu.value;
});
