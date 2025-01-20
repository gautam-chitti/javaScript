// Start writing JavaScript here!
const canvasButton = document.querySelector("button");
const body = document.body;
const modelButton = document.getElementById("model-button");

canvasButton.addEventListener("click", () => {
  console.log("pushing the screen");
  body.classList.toggle("offsite-is-open");
});
