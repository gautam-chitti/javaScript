// Start writing JavaScript here!
const modelButton = document.querySelector(".jsModalButton");
const closeButton = document.querySelector(".jsModalClose");
closeButton.addEventListener("click", (event) => {
  document.body.classList.remove("modal-is-open");
});

modelButton.addEventListener("click", () => {
  document.body.classList.add("modal-is-open");
  console.log("click");
});
